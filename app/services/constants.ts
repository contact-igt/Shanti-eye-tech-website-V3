import type { ServicePageContent } from "./types";

const cataractComparison = {
  title: "Choose the",
  accent: "Vision You Want",
  body: "The lens you choose shapes the rest of your life. Want to put your glasses away for good? There's a lens for that. Happy using readers? That works too. Here's the honest, side-by-side comparison — no pressure, no up-sell.",
  features: [
    "Lens Design",
    "Distance vision",
    "Reading (near)",
    "Computer (intermediate)",
    "Corrects astigmatism",
    "Glasses needed after surgery",
    "Night vision / halos",
    "Insurance / cost",
    "Best for",
    "Typical starting cost (per eye)",
  ],
  columns: [
    { key: "monofocal", title: "Monofocal", subtitle: "Standard Lens", image: "/assets/monofocal.png", values: ["Excellent", "Needs glasses", "Limited", "No", "Usually needed", "Minimal risk", "Usually covered", "Budget conscious; happy to wear glasses", "₹25,000 - ₹42,000"] },
    { key: "toric", title: "Toric", subtitle: "For Astigmatism", image: "/assets/toric.png", values: ["Excellent", "Needs glasses", "Limited", "Yes", "Reduced need", "Minimal risk", "~ Partial coverage", "Patients with astigmatism", "₹42,000 - ₹55,000"] },
    { key: "enhanced-monofocal", title: "Enhanced Monofocal", image: "/assets/enhanced-monofocal.png", values: ["Excellent", "Needs glasses", "Clear", "In toric variants", "Reduced dependency", "Minimal risk", "Usually covered", "Who want less dependency on glasses", "₹50,000 - ₹70,000"] },
    { key: "trifocal", title: "Trifocal / Multifocal", subtitle: "Premium Lens", image: "/assets/trifocal2.png", popular: true, highlighted: true, values: ["Excellent", "Clear", "Clear", "~ Varies", "Rarely needed", "~ Brief adjustment", "Premium", "Spectacle-free living", "₹55,000 - ₹1,15,000"] },
  ],
  noteTitle: "A note from the Eye Surgeon:",
  noteText: 'The "best" lens is the one that matches your eyes, your prescription, and how you live your life. We do a detailed evaluation before recommending anything — and we will always explain why.',
  cta: "Get a Personalised Lens Recommendation",
};

const classicComparison = {
  title: "Choose the Vision Correction Option",
  accent: "That Fits Your Eyes",
  body: "There is no single best procedure for everyone. The right option depends on your eye power, corneal thickness, dry eye status, lifestyle, and long-term safety. Shanthi EyeTech helps you understand your options clearly before you decide.",
  features: ["Procedure View", "Best For", "How It Works", "Recovery", "Glasses Dependency", "Dry Eye Consideration", "Suitable for Everyone?", "Doctor Advice Needed?"],
  columns: [
    { key: "lasik", title: "LASIK", subtitle: "Most Popular", image: "/assets/lasik1.png", values: ["Common spectacle removal cases", "Laser reshapes cornea after creating a flap", "Usually quick", "Reduced significantly", "Needs evaluation", "No", "Yes"] },
    { key: "smile", title: "SMILE", subtitle: "Flapless Laser", image: "/assets/smile1.png", values: ["Suitable candidates wanting flapless laser option", "Laser removes a small lenticule through tiny incision", "Usually quick", "Reduced significantly", "Often considered in selected cases", "No", "Yes"] },
    { key: "prk", title: "PRK", subtitle: "Surface Laser", image: "/assets/prk1.png", values: ["Thin cornea / selected cases", "Surface laser treatment without flap", "Slower than LASIK/SMILE", "Reduced significantly", "Depends on eye condition", "No", "Yes"] },
    { key: "icl", title: "ICL", subtitle: "Implantable Lens", image: "/assets/icl1.png", highlighted: true, values: ["High power or unsuitable cornea cases", "Implantable lens placed inside eye", "Usually quick", "Reduced significantly", "Depends on eye condition", "No", "Yes"] },
  ],
  noteTitle: "A note from the Eye Surgeon:",
  noteText: "The best procedure is not the most popular one. The best procedure is the one that is safest for your eyes, your cornea, your power, and your lifestyle. That is why we do a detailed evaluation before recommending anything.",
  cta: "Get My Personalised Vision Correction Recommendation",
};

const classicContent: ServicePageContent = {
  kind: "classic",
  navService: "lasik",
  hero: {
    eyebrow: "BLADE-FREE LASIK",
    title: "Freedom From Glasses",
    accent: "Starts Here",
    text: "Experience the clarity of life without glasses or contact lenses. Our advanced blade-free LASIK technology delivers precise, predictable results with quick recovery.",
    image: "/assets/lasik-hero.webp",
    metrics: [
      { value: "25K+", label: "LASIK Procedures" },
      { value: "98%", label: "Success Rate" },
      { value: "24hrs", label: "Quick Recovery" },
    ],
  },
  whyChoose: {
    eyebrow: "WHY CHOOSE US",
    title: "Why Patients Choose",
    accent: "Shanthi EyeTech for LASIK",
    body: "Combining advanced technology with personalized care for optimal vision correction results",
    items: [
      { icon: "award", title: "Award-Winning Excellence", text: "Recognized nationally for refractive surgery outcomes" },
      { icon: "zap", title: "Blade-Free Technology", text: "Advanced femtosecond laser for precision and safety" },
      { icon: "users", title: "Experienced Specialists", text: "Over 25 years of LASIK surgical expertise" },
      { icon: "heart", title: "Personalized Treatment", text: "Custom wavefront-guided procedures for your eyes" },
      { icon: "clock", title: "Quick Recovery", text: "Most patients resume normal activities within 24 hours" },
      { icon: "shield", title: "Comprehensive Care", text: "Lifetime post-operative support and monitoring" },
      { icon: "eye", title: "All-Laser LASIK", text: "No blades involved in any part of the procedure" },
      { icon: "star", title: "Trusted by Thousands", text: "25,000+ successful LASIK procedures performed" },
    ],
  },
  intro: {
    eyebrow: "THE PROCEDURE",
    title: "What is",
    accent: "LASIK?",
    backgroundImage: "/assets/lasikbg.png",
    paragraphs: [
      "LASIK (Laser-Assisted In Situ Keratomileusis) is the most advanced and popular laser vision correction procedure available today. It permanently reshapes the cornea to correct refractive errors and reduce dependence on glasses or contact lenses.",
      "Using state-of-the-art femtosecond laser technology, the procedure creates a thin corneal flap, then precisely reshapes the underlying corneal tissue with an excimer laser to correct your vision. The entire process takes just 15-20 minutes for both eyes.",
    ],
    callout: {
      title: "Quick & Comfortable",
      text: "The procedure is virtually painless with numbing eye drops, and most patients experience improved vision within 24 hours.",
    },
    lasikImages: {
      patient: "/assets/whatlasik1.png",
      room: "/assets/whatlasik2.png",
      eye: "/assets/whatlasik3.png",
    },
  },
  eligibility: {
    eyebrow: "ELIGIBILITY",
    title: "Is LASIK",
    accent: "Right for You?",
    body: "You may be a good candidate for LASIK if you meet the following criteria:",
    backgroundImage: "/assets/lasikrightbg.png",
    checks: ["At least 18 years of age", "Have stable vision prescription", "Have healthy eyes free from disease", "Tired of wearing glasses or contact lenses", "Have myopia (nearsightedness)", "Have hyperopia (farsightedness)", "Have astigmatism"],
    note: "A comprehensive eye examination by our specialists is required to determine your final suitability for LASIK surgery.",
    image: "/assets/eligibility.webp",
  },
  treatmentOptions: {
    eyebrow: "TREATABLE CONDITIONS",
    title: "Conditions LASIK",
    accent: "Can Correct",
    body: "Our advanced LASIK technology effectively treats the most common refractive errors",
    options: [
      { image: "/assets/slit-lamp.webp", title: "Myopia", tag: "NEARSIGHTEDNESS", text: "Difficulty seeing distant objects clearly. LASIK flattens the cornea to correct focus." },
      { image: "/assets/procedure-room.webp", title: "Hyperopia", tag: "FARSIGHTEDNESS", text: "Difficulty seeing nearby objects. LASIK steepens the cornea for better near vision." },
      { image: "/assets/phoropter-patient.webp", title: "Astigmatism", tag: "BLURRED VISION", text: "Irregular cornea shape causing blurred vision. LASIK smooths the cornea for clear focus." },
    ],
  },
  comparison: classicComparison,
  benefits: {
    eyebrow: "ADVANTAGES",
    title: "Benefits of",
    accent: "LASIK Surgery",
    items: [
      { image: "/assets/slit-lamp.webp", title: "Quick Recovery Time", description: "Most patients return to normal activities within 24 hours with minimal discomfort." },
      { image: "/assets/eligibility.webp", title: "Long-Lasting Results", description: "LASIK provides permanent vision correction that can last a lifetime." },
      { image: "/assets/exam-chair.webp", title: "Improved Quality of Life", description: "Freedom from glasses and contacts opens up new lifestyle possibilities." },
      { image: "/assets/lasikbenefit4.png", title: "Cost-Effective Solution", description: "Save money long-term by eliminating glasses, contacts, and solutions." },
      { image: "/assets/lasikbenefit5.png", title: "Enhanced Sports Performance", description: "Participate in activities without worrying about glasses or contacts." },
    ],
  },
  testimonials: {
    eyebrow: "PATIENT STORIES",
    title: "You're Not Alone,",
    accent: "Hear From Others Like You",
    body: "Real stories from real patients who transformed their vision with LASIK",
    items: [
      { quote: "Best decision I ever made! I can finally wake up and see clearly without reaching for glasses. The procedure was quick and painless, and Dr. Kumar made me feel completely comfortable throughout.", name: "Priya Sharma", meta: "LASIK Surgery - 29 years" },
      { quote: "I was nervous about the surgery, but the team at Shanthi EyeTech was amazing. Within 24 hours, my vision was crystal clear. No more contacts, no more hassle!", name: "Raj Patel", meta: "Blade-Free LASIK - 34 years" },
      { quote: "As someone who wore glasses for 20 years, I cannot express how life-changing LASIK has been. The precision and care I received here exceeded all expectations.", name: "Anita Desai", meta: "Custom LASIK - 31 years" },
      { quote: "The laser procedure took less than 10 minutes with zero pain. Waking up with clear 20/20 vision feels like magic every single day!", name: "Amitabh Verma", meta: "Contoura LASIK - 33 years" },
      { quote: "Fantastic experience! The doctors were extremely reassuring and answered all my questions. I was back to work in two days.", name: "Kavita Rao", meta: "Femto LASIK - 27 years" },
      { quote: "No more fogged glasses while cooking or working out. LASIK at Shanthi EyeTech completely elevated my lifestyle and confidence.", name: "Deepak Joshi", meta: "Blade-Free LASIK - 36 years" },
    ],
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    title: "LASIK",
    accent: "FAQs",
    cardTitle: "Have More Questions?",
    cardText: "Our LASIK specialists are here to answer all your questions and help you determine if LASIK is right for you.",
    items: [
      { question: "Is LASIK surgery painful?", answer: "No, LASIK is virtually painless. We use numbing eye drops during the procedure, so you only feel slight pressure. Most patients report minimal discomfort that resolves within hours." },
      { question: "How long does LASIK surgery take?", answer: "The laser procedure itself takes only 10 to 15 minutes for both eyes. Plan to be at our center for about 1.5 to 2 hours total on surgery day." },
      { question: "When will I be able to see clearly after LASIK?", answer: "Most patients notice significantly improved vision within 24 hours. Full visual stabilization typically occurs over a few weeks." },
      { question: "Are the results of LASIK permanent?", answer: "Yes, LASIK permanently reshapes the cornea to correct your current prescription." },
      { question: "What is the recovery time after LASIK?", answer: "Most patients return to work and normal daily activities within 24 to 48 hours after the procedure." },
    ],
  },
  appointment: {
    eyebrow: "TAKE THE FIRST STEP",
    title: "Start Your",
    accent: "Vision Journey",
    text: "Transform your life with LASIK surgery. Our expert team is ready to guide you through every step of your journey to clear, glasses-free vision.",
    image: "/assets/slit-lamp.webp",
    serviceLabel: "LASIK",
    badgeTitle: "20/20",
    badgeSubtitle: "Clear Vision Awaits",
    checkTitle: "Free Pre-Operative Assessment",
    checkSubtitle: "Comprehensive evaluation to determine your LASIK candidacy",
  },
};

const cataractContent: ServicePageContent = {
  kind: "cataract",
  navService: "cataract",
  hero: {
    eyebrow: "ADVANCED CATARACT CARE",
    title: "Restore Clear Vision.",
    accent: "Rediscover Everyday Life.",
    text: "Modern cataract surgery safely restores your vision, helping you regain independence and enjoy life's precious moments with clarity and confidence.",
    image: "/assets/cataract-hero.webp",
    metrics: [
      { value: "15K+", label: "Cataract Surgeries" },
      { value: "98%", label: "Success Rate" },
      { value: "Same Day", label: "Procedure" },
    ],
  },
  whyChoose: {
    eyebrow: "WHY CHOOSE US",
    title: "Why Patients Choose",
    accent: "Shanthi EyeTech for Cataract Care",
    body: "Trusted expertise and compassionate care for safe, effective cataract treatment",
    items: [
      { icon: "award", title: "Expert Surgeons", text: "25+ years of specialized cataract surgery experience" },
      { icon: "zap", title: "Advanced Technology", text: "State-of-the-art equipment for precision and safety" },
      { icon: "users", title: "Personalized Care", text: "Customized treatment plans for your unique needs" },
      { icon: "heart", title: "Compassionate Team", text: "Dedicated support throughout your journey" },
      { icon: "clock", title: "Quick Recovery", text: "Most patients resume activities within days" },
      { icon: "shield", title: "Comprehensive Support", text: "Lifetime post-operative care and monitoring" },
      { icon: "eye", title: "Premium IOL Options", text: "Multiple lens choices for optimal vision correction" },
      { icon: "star", title: "Proven Results", text: "15,000+ successful cataract procedures" },
    ],
  },
  intro: {
    eyebrow: "UNDERSTANDING CATARACTS",
    title: "What is a",
    accent: "Cataract?",
    backgroundImage: "/assets/whatisbg.png",
    paragraphs: [
      "A cataract is a clouding of the eye's natural lens, which lies behind the iris and pupil. This lens works like a camera lens, focusing light onto the retina to produce clear images.",
      "As we age, proteins in the lens can clump together, causing the lens to become cloudy. This cloudiness prevents light from passing through clearly, resulting in blurred or dim vision, difficulty with glare, and reduced color perception.",
    ],
    image: "/assets/whatiscataract.png",
    callout: {
      title: "Good News",
      text: "Cataracts are treatable. Modern cataract surgery is one of the safest and most successful procedures, restoring clear vision and improving quality of life for millions of patients worldwide.",
    },
  },
  eligibility: {
    eyebrow: "ELIGIBILITY",
    title: "When Should You",
    accent: "Consider Surgery?",
    body: "Cataract surgery may be recommended if you experience any of the following:",
    backgroundImage: "/assets/considersurgerybg.png",
    checks: ["Vision interferes with daily activities", "Glasses no longer improve your vision", "Difficulty reading or driving safely", "Glare or halos around lights at night", "Cataracts are affecting your independence", "Your specialist recommends treatment"],
    note: "Only your eye care specialist can determine if cataract surgery is right for you. Schedule a comprehensive evaluation to discuss your options.",
    image: "/assets/cataract-chair.webp",
  },
  treatmentOptions: {
    eyebrow: "LENS OPTIONS",
    title: "Our Advanced",
    accent: "Cataract Care",
    body: "Types of Intraocular Lenses (IOLs) - Choose the best option for your lifestyle",
    options: [
      { image: "/assets/cataractbenefit1.png", title: "Standard Monofocal", tag: "SINGLE FOCUS LENS", text: "Provides clear vision at one distance (usually far). Reading glasses may still be needed for close work.", bullets: ["Clear distance vision", "Covered by insurance", "Proven reliability"] },
      { image: "/assets/cataractbenefit2.png", title: "Premium Multifocal", tag: "MULTIPLE FOCUS LENS", text: "Enables clear vision at multiple distances - near, intermediate, and far - reducing dependence on glasses.", bullets: ["Multiple focal points", "Reduced glasses dependency", "Enhanced lifestyle"] },
      { image: "/assets/cataractbenefit3.png", title: "Toric Lens", tag: "ASTIGMATISM CORRECTION", text: "Specially designed to correct astigmatism while providing clear distance vision in one procedure.", bullets: ["Corrects astigmatism", "Sharper clarity", "Single procedure"] },
    ],
  },
  comparison: cataractComparison,
  benefits: {
    eyebrow: "ADVANTAGES",
    title: "Benefits of Modern",
    accent: "Cataract Surgery",
    items: [
      { image: "/assets/cataractbenefit2.png", title: "Improved color perception" },
      { image: "/assets/cataractbenefit1.png", title: "Clearer, brighter vision" },
      { image: "/assets/cataractbenefit3.png", title: "Better quality of life" },
    ],
  },
  testimonials: {
    eyebrow: "PATIENT STORIES",
    title: "You're Not Alone,",
    accent: "Hear From Others Like You",
    body: "Real experiences from patients who restored their vision with cataract surgery",
    items: [
      { quote: "After years of struggling with cloudy vision, I can finally see my grandchildren clearly. The surgery was painless and recovery was quick. Dr. Kumar and the team made me feel comfortable every step of the way.", name: "Ramesh Kumar", meta: "Cataract Surgery - 68 years" },
      { quote: "I was nervous about surgery, but the results exceeded my expectations. Colors are vibrant again, and I can read without strain. I wish I had done this sooner!", name: "Lakshmi Devi", meta: "Premium IOL Surgery - 72 years" },
      { quote: "Both my eyes were treated with such precision and care. The difference is life-changing. I can drive confidently again and enjoy my hobbies. Highly recommended!", name: "Suresh Patel", meta: "Bilateral Cataract Surgery - 65 years" },
      { quote: "The advanced lens option restored my distance and reading vision seamlessly. I haven't worn glasses in months. Truly outstanding care by Shanthi EyeTech!", name: "Sunita Agarwal", meta: "Multifocal IOL Surgery - 61 years" },
      { quote: "From pre-op consultation to post-op checkups, the staff were incredibly kind and professional. The procedure was smooth and completely pain-free.", name: "Vikram Malhotra", meta: "Laser Cataract Surgery - 70 years" },
      { quote: "I had cataracts in both eyes and was hesitant to undergo surgery. Dr. Solanki & team made the entire experience easy and comforting. My vision is 20/20 now!", name: "Meena Sharma", meta: "Cataract Surgery - 66 years" },
    ],
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    title: "Cataract",
    accent: "FAQs",
    cardTitle: "Have Questions About Cataracts?",
    cardText: "Our cataract specialists are here to answer your questions and guide you through your treatment options.",
    items: [
      { question: "How do I know if I have cataracts?", answer: "Common signs include cloudy or blurry vision, difficulty seeing at night, sensitivity to light, seeing halos around lights, fading colors, and frequent changes in glasses prescription. A comprehensive eye examination can confirm cataracts." },
      { question: "Is cataract surgery safe?", answer: "Cataract surgery is one of the safest and most frequently performed surgical procedures in the world, with success rates over 98%." },
      { question: "How long does cataract surgery take?", answer: "The procedure itself typically takes only 15 to 20 minutes per eye. You will spend about 2 hours at the center total for prep and recovery." },
      { question: "Will I need glasses after cataract surgery?", answer: "It depends on the type of intraocular lens (IOL) you choose. Premium multifocal or trifocal lenses can reduce or eliminate your need for glasses." },
      { question: "What is the recovery time?", answer: "Most patients experience clearer vision within 24 to 48 hours and resume normal daily activities within a few days." },
    ],
  },
  appointment: {
    eyebrow: "TAKE THE FIRST STEP",
    title: "Start Your",
    accent: "Vision Journey",
    text: "Restore your clear vision and rediscover life's precious moments. Our experienced team is ready to guide you through safe, effective cataract treatment.",
    image: "/assets/cataract-chair.webp",
    serviceLabel: "treatment",
  },
};

const retinaContent: ServicePageContent = {
  kind: "retina",
  navService: "retina",
  hero: {
    eyebrow: "EARLY DETECTION & PREVENTION",
    title: "Preserve Your Vision.",
    accent: "Cherish Every Moment.",
    text: "Your retina is essential for the vision you rely on every day. Early detection and expert care can help protect it from serious, vision-threatening conditions.",
    image: "/assets/banner_retina_v1.png",
    metrics: [
      { value: "25+ yrs", label: "Retina Expertise" },
      { value: "98%", label: "Success Rate" },
      { value: "Essential", label: "Early Detection" },
    ],
  },
  whyChoose: {
    eyebrow: "WHY CHOOSE US",
    title: "Why Patients Choose",
    accent: "Shanthi EyeTech",
    body: "Specialized expertise in early detection and long-term retinal management",
    items: [
      { icon: "01", title: "Doctor-led eye care", text: "Every consultation handled by an experienced ophthalmologist" },
      { icon: "02", title: "Advanced technology", text: "Modern diagnostic and surgical equipment" },
      { icon: "03", title: "Patient-friendly environment", text: "A calm, peaceful, reassuring space" },
      { icon: "04", title: "Personalised Attention", text: "Treatment plans tailored to your needs" },
      { icon: "05", title: "Affordable solutions", text: "Quality care at accessible prices" },
      { icon: "06", title: "Central Indore location", text: "Easily reachable from across the city" },
      { icon: "07", title: "Trained paramedical staff", text: "Qualified team supporting you" },
      { icon: "08", title: "Comprehensive services", text: "All major eye care under one roof" },
    ],
  },
  intro: {
    eyebrow: "ESSENTIAL KNOWLEDGE",
    title: "What is",
    accent: "Retina?",
    backgroundImage: "/assets/retinabg.png",
    paragraphs: [
      "The retina is the light-sensitive layer at the back of the eye that captures images and sends signals to the brain.",
      "Damage to the retina can lead to partial or total vision loss if not detected and treated early.",
    ],
    image: "/assets/retina-scan.webp",
    retinaImages: {
      top: "/assets/retina1.png",
      bottom: "/assets/retina2.png",
    },
    callout: {
      title: "Retina care",
      text: "focuses on diagnosing and treating diseases that affect the retina, macula, and blood vessels at the back of the eye.",
    },
  },
  eligibility: {
    eyebrow: "WARNING SIGNS",
    title: "When Should You",
    accent: "Consider Evaluation?",
    body: "Watch out for these warning signs and schedule a comprehensive evaluation if they occur.",
    checks: ["Blurred or distorted vision", "Floaters or dark spots in vision", "Difficulty seeing in low light", "Loss of peripheral (side) vision", "Diabetes or high blood pressure"],
    note: "Early evaluation is key: If you experience any of these symptoms or have risk factors, schedule a comprehensive retinal examination.",
    image: "/assets/retina-exam.webp",
    warningImages: [
      { image: "/assets/blur_vision.png", label: "Blurred Vision" },
      { image: "/assets/dark_spots.png", label: "Dark Spots" },
      { image: "/assets/low_vision.png", label: "Low Light" },
      { image: "/assets/side_vision.png", label: "Side Vision" },
    ],
  },
  treatmentOptions: {
    eyebrow: "TREATMENT OPTIONS",
    title: "Our Retina Care &",
    accent: "Treatment Options",
    body: "Advanced, precise care for better outcomes.",
    options: [
      { image: "/assets/retina1.png", title: "Retina Surgery", tag: "ADVANCED CARE", text: "Advanced surgical solutions for complex retinal conditions." },
      { image: "/assets/retina2.png", title: "Laser Therapy", tag: "TARGETED TREATMENT", text: "Targeted laser treatment to seal leaking retinal tears, reduce swelling, and protect vision." },
      { image: "/assets/retina-medical.webp", title: "Medical Management", tag: "PERSONALISED PLAN", text: "Medications and injections to manage retinal conditions and reduce swelling." },
    ],
  },
  benefits: {
    eyebrow: "KEY BENEFITS",
    title: "Benefits of Timely",
    accent: "Retina Care",
    body: "Preserve your vision",
    items: [
      { image: "/assets/active-life.webp", title: "Maintain an active life" },
      { image: "/assets/preserve-vision.webp", title: "Preserve your vision" },
      { image: "/assets/independent-life.webp", title: "Live Independently" },
    ],
  },
  testimonials: {
    eyebrow: "PATIENT STORIES",
    title: "You're Not Alone,",
    accent: "Hear From Others Like You",
    body: "Real experiences from patients who protected their sight with retina care",
    items: [
      { quote: "After battling with vision loss for years, I finally found a solution. My eye health has improved significantly, and I'm able to see clearly again. Thank you, Shanthi EyeTech!", name: "Girish Gole", meta: "Retina Evaluation - 61 years" },
      { quote: "Early retina care helped protect my sight. The doctors were calm, precise, and explained every scan and treatment option clearly.", name: "Jyoti Carson", meta: "Retina Care - 58 years" },
      { quote: "My diabetes had started affecting my eyes. Regular retina treatment helped me stay independent and confident with my vision.", name: "Suresh Sharma", meta: "Diabetic Retina Care - 64 years" },
      { quote: "State-of-the-art retina imaging equipment and deeply knowledgeable specialists. They saved my vision from retinal detachment.", name: "Sanjay Gupta", meta: "Retinal Laser Therapy - 55 years" },
      { quote: "Outstanding diagnostic accuracy and compassionate treatment. I am deeply thankful to Dr. Solanki and the entire retina team.", name: "Radhika Kulkarni", meta: "Macular Care - 69 years" },
      { quote: "Very thorough examination and gentle procedure. My vision has remained stable and clear thanks to timely intervention.", name: "Harish Chandra", meta: "Anti-VEGF Treatment - 73 years" },
    ],
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    title: "Retina care",
    accent: "FAQs",
    cardTitle: "Have Questions About Retina Care?",
    cardText: "Our specialists are here to answer your questions and guide you through your treatment options.",
    items: [
      { question: "How do I know if I have cataracts?", answer: "Common signs include cloudy or blurry vision, difficulty seeing at night, sensitivity to light, seeing halos around lights, fading colors, and frequent changes in glasses prescription. A comprehensive eye examination can confirm cataracts." },
      { question: "Is cataract surgery safe?", answer: "Treatment is recommended only after a detailed evaluation. Our specialists use modern technology and established clinical safety protocols." },
      { question: "How long does cataract surgery take?", answer: "Most consultations take 30-45 minutes. Some advanced diagnostic tests may require a little longer." },
      { question: "Will I need glasses after cataract surgery?", answer: "Our team can help you understand available insurance and payment options before treatment." },
      { question: "What is the recovery time?", answer: "Most patients experience clearer vision within 24 to 48 hours and resume normal daily activities within a few days." },
    ],
  },
  appointment: {
    eyebrow: "TAKE THE FIRST STEP",
    title: "Start Your",
    accent: "Vision Journey",
    text: "Restore your clear vision and rediscover life's precious moments. Our experienced team is ready to guide you through safe, effective cataract treatment.",
    image: "/assets/retina-chair.webp",
    serviceLabel: "retina care",
  },
};

export const servicePages = {
  cataract: cataractContent,
  classic: classicContent,
  lasik: classicContent,
  retina: retinaContent,
};










