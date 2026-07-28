"use client";

import { FormEvent, useState } from "react";

export function AppointmentForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="appointment-form" onSubmit={submit}>
      <h3>Book Your Appointment</h3>
      <label>
        Full Name *
        <input required name="name" placeholder="Enter your full name" />
      </label>
      <label>
        Email Address *
        <input required type="email" name="email" placeholder="your.email@example.com" />
      </label>
      <label>
        Phone Number *
        <input required type="tel" name="phone" placeholder="+91 98765 43210" />
      </label>
      <label>
        Service Needed *
        <select required name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Advanced Cataract Surgery</option>
          <option>LASIK Surgery</option>
          <option>Retina Care</option>
          <option>Glaucoma Management</option>
          <option>Pediatric Ophthalmology</option>
        </select>
      </label>
      <label>
        Additional Notes
        <textarea name="notes" placeholder="Any specific concerns or preferred time?" />
      </label>
      <button className="button button-primary button-wide" type="submit">
        {sent ? "Appointment Request Sent ✓" : "Confirm Appointment →"}
      </button>
      {sent && <p className="form-success">Thank you. Our care team will contact you shortly.</p>}
    </form>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>First Name *<input required placeholder="Enter first name" /></label>
        <label>Last Name *<input required placeholder="Enter last name" /></label>
        <label>Email *<input required type="email" placeholder="Enter email id" /></label>
        <label>Mobile Number *<input required type="tel" placeholder="Enter mobile number" /></label>
      </div>
      <label>Message *<textarea required placeholder="Enter your message here..." /></label>
      <button className="button button-primary" type="submit">
        {sent ? "Message Sent ✓" : "Send Message"}
      </button>
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
