"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  findIpAddress,
  registerContactLead,
  submitContactLeadToGoogleSheets,
} from "@/lib/formService";

// Validation Helper Functions
function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Form submission failed.";
}

function validateFullName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "Full name is required";
  if (trimmed.length < 2) return "Full name must be at least 2 characters";
  if (!/^[a-zA-Z\s'.-]+$/.test(trimmed)) return "Name should contain only letters";
  return "";
}

function validateMobileNumber(mobile: string): string {
  const cleanMobile = mobile.replace(/[\s\-\(\)]/g, "");
  if (!cleanMobile) return "Mobile number is required";
  const indianMobileRegex = /^(?:\+91)?([6-9]\d{9})$/;
  const generalPhoneRegex = /^\+?[0-9]{10,12}$/;
  if (!indianMobileRegex.test(cleanMobile) && !generalPhoneRegex.test(cleanMobile)) {
    return "Enter a valid 10-digit mobile number";
  }
  return "";
}

function validateTreatment(treatment: string): string {
  if (!treatment || treatment === "") return "Please select a treatment option";
  return "";
}

function validateEmail(email: string): string {
  const trimmed = email.trim();
  if (!trimmed) return "Email address is required";
  if (!/^\S+@\S+\.\S+$/.test(trimmed)) return "Enter a valid email address";
  return "";
}

function validateMessage(message: string): string {
  const trimmed = message.trim();
  if (!trimmed) return "Message is required";
  if (trimmed.length < 5) return "Message must be at least 5 characters";
  return "";
}


export function CountUp({ value, suffix = "", duration = 1400 }: { value: number; suffix?: string; duration?: number }) {
  const targetRef = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;
    let frameId = 0;
    let started = false;

    const animate = () => {
      if (started) return;
      started = true;
      const startTime = performance.now();
      const frame = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) frameId = requestAnimationFrame(frame);
      };
      frameId = requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate();
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [duration, value]);

  return <span ref={targetRef}>{display}{suffix}</span>;
}
export function AppointmentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      let err = "";
      if (field === "name") err = validateFullName(value);
      if (field === "email") err = validateEmail(value);
      if (field === "phone") err = validateMobileNumber(value);
      if (field === "service") err = validateTreatment(value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let err = "";
    if (field === "name") err = validateFullName(formData.name);
    if (field === "email") err = validateEmail(formData.email);
    if (field === "phone") err = validateMobileNumber(formData.phone);
    if (field === "service") err = validateTreatment(formData.service);
    setErrors((prev) => ({ ...prev, [field]: err }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameErr = validateFullName(formData.name);
    const emailErr = validateEmail(formData.email);
    const phoneErr = validateMobileNumber(formData.phone);
    const serviceErr = validateTreatment(formData.service);

    const fieldErrors = {
      name: nameErr,
      email: emailErr,
      phone: phoneErr,
      service: serviceErr,
    };

    setErrors(fieldErrors);
    setTouched({ name: true, email: true, phone: true, service: true });

    if (nameErr || emailErr || phoneErr || serviceErr) {
      return;
    }

    setLoading(true);

    try {
      const ip_address = await findIpAddress();
      const utm_source =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_source") || ""
          : "";

      const payload = {
        name: formData.name.trim(),
        mobile_number: formData.phone.trim(),
        service: formData.service,
        message: formData.notes.trim(),
        ip_address,
        utm_source,
      };

      await registerContactLead(payload);
      await submitContactLeadToGoogleSheets(payload, "Appointment");

      router.push("/thank-you");
    } catch (err: unknown) {
      console.error(err);
      router.push("/error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="appointment-form" onSubmit={submit} noValidate>
      <h3>Book Your Appointment</h3>
      <label>
        Full Name *
        <input
          name="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          className={touched.name && errors.name ? "input-error" : ""}
          placeholder="Enter your full name"
        />
        {touched.name && errors.name && <span className="field-error-text">{errors.name}</span>}
      </label>
      <label>
        Email Address *
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          className={touched.email && errors.email ? "input-error" : ""}
          placeholder="your.email@example.com"
        />
        {touched.email && errors.email && <span className="field-error-text">{errors.email}</span>}
      </label>
      <label>
        Phone Number *
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          onBlur={() => handleBlur("phone")}
          className={touched.phone && errors.phone ? "input-error" : ""}
          placeholder="+91 98765 43210"
        />
        {touched.phone && errors.phone && <span className="field-error-text">{errors.phone}</span>}
      </label>
      <label>
        Service Needed *
        <select
          name="service"
          value={formData.service}
          onChange={(e) => handleChange("service", e.target.value)}
          onBlur={() => handleBlur("service")}
          className={`${touched.service && errors.service ? "input-error" : ""} ${!formData.service ? "select-placeholder" : "select-selected"}`}
        >
          <option value="" disabled className="option-placeholder">Select a service</option>
          <option value="Cataract" className="option-item">Cataract</option>
          <option value="Lasik" className="option-item">Lasik</option>
          <option value="Pediatric" className="option-item">Pediatric</option>
          <option value="Glaucoma" className="option-item">Glaucoma</option>
          <option value="Retina" className="option-item">Retina</option>
        </select>
        {touched.service && errors.service && <span className="field-error-text">{errors.service}</span>}
      </label>
      <label>
        Additional Notes
        <textarea
          name="notes"
          value={formData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          placeholder="Any specific concerns or preferred time?"
        />
      </label>
      <button className="button button-primary button-wide" type="submit" disabled={loading}>
        {loading ? "Submitting..." : sent ? "Appointment Request Sent ✓" : <><span>Confirm Appointment</span><ArrowRight size={18} /></>}
      </button>
      {errors.form && <p className="field-error-text" style={{ marginTop: 8 }}>{errors.form}</p>}
      {sent && <p className="form-success">Thank you. Our care team will contact you shortly.</p>}
    </form>
  );
}

export function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    treatment: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      let err = "";
      if (field === "fullName") err = validateFullName(value);
      if (field === "mobile") err = validateMobileNumber(value);
      if (field === "treatment") err = validateTreatment(value);
      if (field === "message") err = validateMessage(value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let err = "";
    if (field === "fullName") err = validateFullName(formData.fullName);
    if (field === "mobile") err = validateMobileNumber(formData.mobile);
    if (field === "treatment") err = validateTreatment(formData.treatment);
    if (field === "message") err = validateMessage(formData.message);
    setErrors((prev) => ({ ...prev, [field]: err }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameErr = validateFullName(formData.fullName);
    const mobileErr = validateMobileNumber(formData.mobile);
    const treatmentErr = validateTreatment(formData.treatment);
    const messageErr = validateMessage(formData.message);

    const fieldErrors = {
      fullName: nameErr,
      mobile: mobileErr,
      treatment: treatmentErr,
      message: messageErr,
    };

    setErrors(fieldErrors);
    setTouched({ fullName: true, mobile: true, treatment: true, message: true });

    if (nameErr || mobileErr || treatmentErr || messageErr) {
      return;
    }

    setLoading(true);

    try {
      const ip_address = await findIpAddress();
      const utm_source =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_source") || ""
          : "";

      const payload = {
        name: formData.fullName.trim(),
        mobile_number: formData.mobile.trim(),
        service: formData.treatment,
        message: formData.message.trim(),
        ip_address,
        utm_source,
      };

      await registerContactLead(payload);
      await submitContactLeadToGoogleSheets(payload, "Contact");

      router.push("/thank-you");
    } catch (err: unknown) {
      console.error("Contact Form Submission Error:", err);
      router.push("/error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          <span className="label-text">
            Full Name <span className="required-star">*</span>
          </span>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            onBlur={() => handleBlur("fullName")}
            className={touched.fullName && errors.fullName ? "input-error" : ""}
            placeholder="Enter full name"
          />
          {touched.fullName && errors.fullName && <span className="field-error-text">{errors.fullName}</span>}
        </label>

        <label>
          <span className="label-text">
            Mobile Number <span className="required-star">*</span>
          </span>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            onBlur={() => handleBlur("mobile")}
            className={touched.mobile && errors.mobile ? "input-error" : ""}
            placeholder="Enter mobile number"
          />
          {touched.mobile && errors.mobile && <span className="field-error-text">{errors.mobile}</span>}
        </label>

        <label className="form-full-col">
          <span className="label-text">
            Selected Treatment <span className="required-star">*</span>
          </span>
          <select
            name="treatment"
            value={formData.treatment}
            onChange={(e) => handleChange("treatment", e.target.value)}
            onBlur={() => handleBlur("treatment")}
            className={`${touched.treatment && errors.treatment ? "input-error" : ""} ${!formData.treatment ? "select-placeholder" : "select-selected"}`}
          >
            <option value="" disabled className="option-placeholder">Select treatment option</option>
            <option value="Cataract" className="option-item">Cataract</option>
            <option value="Lasik" className="option-item">Lasik</option>
            <option value="Pediatric" className="option-item">Pediatric</option>
            <option value="Glaucoma" className="option-item">Glaucoma</option>
            <option value="Retina" className="option-item">Retina</option>
          </select>
          {touched.treatment && errors.treatment && <span className="field-error-text">{errors.treatment}</span>}
        </label>
      </div>

      <label>
        <span className="label-text">
          Message <span className="required-star">*</span>
        </span>
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={touched.message && errors.message ? "input-error" : ""}
          placeholder="Enter your message here..."
        />
        {touched.message && errors.message && <span className="field-error-text">{errors.message}</span>}
      </label>

      <button className="button button-primary contact-send-btn" type="submit" disabled={loading}>
        <img src="/assets/contact_send.png" alt="" aria-hidden="true" style={{ width: 16, height: 16 }} />
        {loading ? "Sending Message..." : sent ? "Message Sent ✓" : "Send Message"}
      </button>
      {errors.form && <p className="field-error-text" style={{ marginTop: 8 }}>{errors.form}</p>}
      {sent && <p className="form-success">Thank you. We’ll be in touch shortly.</p>}
    </form>
  );
}



export function FaqAccordion({ questions }: { questions: [string, string][] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {questions.map(([question, answer], index) => (
        <details
          open={activeIndex === index}
          key={question}
          onToggle={(event) => setActiveIndex(event.currentTarget.open ? index : -1)}
        >
          <summary>{question}<b>{activeIndex === index ? "-" : "+"}</b></summary>
          <p>{answer}</p>
        </details>
      ))}
    </>
  );
}
