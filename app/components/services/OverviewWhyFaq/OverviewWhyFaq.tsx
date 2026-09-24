"use client";

import { useState } from "react";
import { BadgeCheck, ChevronDown, CircleHelp, Cpu, HeartHandshake } from "lucide-react";
import styles from "./styles.module.css";

const benefits = [
  {
    title: "Clinical Excellence",
    description: "Experienced ophthalmology care supported by trained clinical staff and advanced diagnostics.",
    icon: BadgeCheck,
  },
  {
    title: "Advanced Technology",
    description: "Modern diagnostic and surgical platforms support greater precision, comfort, and safety.",
    icon: Cpu,
  },
  {
    title: "Compassionate Care",
    description: "Clear communication and personalized support guide every patient through their care journey.",
    icon: HeartHandshake,
  },
];

const faqs = [
  {
    question: "How long does a comprehensive consultation take?",
    answer: "Consultation time varies depending on the examination and tests recommended.",
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer: "No referral is required. You can contact our team directly to schedule a consultation with the appropriate specialist.",
  },
  {
    question: "What happens during post-operative monitoring?",
    answer: "Your care team schedules follow-up visits to assess healing, review vision progress, and provide recovery guidance.",
  },
  {
    question: "How will I know which treatment is right for me?",
    answer: "Your ophthalmologist will review your eye health, vision goals, test results, and medical history before recommending suitable options.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your current glasses, previous eye reports, medication details, and identification to help us understand your care needs.",
  },
];

export function OverviewWhyFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className={styles.section} aria-labelledby="why-shanti-title">
      <div className={styles.shell}>
        <div className={styles.whyColumn}>
          <header className={styles.intro}>
            <h2 id="why-shanti-title">Why <span>Shanti Eye Tech?</span></h2>
            <p>
              We combine technical precision with clinical empathy, helping every patient feel informed, comfortable, and cared for throughout treatment.
            </p>
          </header>

          <div className={styles.benefits}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className={styles.benefit} key={benefit.title}>
                  <span className={styles.benefitIcon} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.faqPanel}>
          <h3>
            <CircleHelp size={24} strokeWidth={1.8} aria-hidden="true" />
            Care Journey FAQs
          </h3>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details
                open={openIndex === index}
                key={faq.question}
                onToggle={(e) => {
                  if (e.currentTarget.open) setOpenIndex(index);
                  else if (openIndex === index) setOpenIndex(-1);
                }}
              >
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
