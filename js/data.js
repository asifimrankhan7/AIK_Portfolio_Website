const siteData = {
  services: [
    {
      num: "01",
      icon: `<rect x="4" y="8" width="40" height="28" rx="2" /><path d="M16 44h16M24 36v8" /><path d="M12 20h6M12 26h10M30 20l6 6-6 6" />`,
      title: "Product<br />Design",
      desc: "Crafting interfaces that delight users and drive business outcomes — from wireframes through pixel-perfect delivery.",
    },
    {
      num: "02",
      icon: `<path d="M8 14l8-8 4 4-8 8-4-4zM32 14l8 8-8 8-4-4 8-8-4 4z" /><path d="M20 36l8-24" />`,
      title: "Engineering<br />& Dev",
      desc: "Full-stack development with a focus on performance, scalability, and clean architecture — from MVP to enterprise-grade.",
    },
    {
      num: "03",
      icon: `<circle cx="24" cy="24" r="18" /><path d="M24 6C24 6 14 16 14 24s10 18 10 18" /><path d="M24 6c0 0 10 10 10 18S24 42 24 42" /><path d="M6 24h36" />`,
      title: "Brand &<br />Identity",
      desc: "Building visual identities that communicate what words can't — logos, systems, and the entire brand experience.",
    },
    {
      num: "04",
      icon: `<path d="M12 8h24a2 2 0 012 2v18a2 2 0 01-2 2H12a2 2 0 01-2-2V10a2 2 0 012-2z" /><path d="M8 16h4M8 24h4M36 16h4M36 24h4" /><path d="M16 40h16M24 30v10" />`,
      title: "Mobile<br />Apps",
      desc: "Native and cross-platform mobile experiences that feel at home on every device, optimized for retention and conversion.",
    },
  ],
  projects: [
    {
      title: "The Aspire Hotel – Guwahati",
      tags: ["Hospitality", "Web Design"],
      year: "2026",
      bgClass: "work-bg-4",
      image: "https://aik.idexa.app/projects/hotel/assets/images/lobby_gallery.png",
    },
    {
      title: "Aaron Holmes Residential",
      tags: ["Real Estate", "Web Design"],
      year: "2025",
      bgClass: "work-bg-1",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    },
    {
      title: "Luminary Analytics Platform",
      tags: ["SaaS", "Product Design"],
      year: "2024",
      bgClass: "work-bg-1",
    },
    {
      title: "Vesper Finance App",
      tags: ["Mobile"],
      year: "2024",
      bgClass: "work-bg-2",
    },
    {
      title: "Orchard Marketplace",
      tags: ["Brand", "Web"],
      year: "2023",
      bgClass: "work-bg-3",
    },
  ],
  process: [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We dig into your business, users, and market to uncover the real problems worth solving — before a single pixel is designed.",
    },
    {
      num: "02",
      title: "Design & Prototype",
      desc: "Rapid ideation, structured exploration, and refined prototypes tested with real users. Iteration until it's undeniably right.",
    },
    {
      num: "03",
      title: "Build & Launch",
      desc: "Meticulous development, performance testing, and a launch strategy that puts your product in front of the right people.",
    },
    {
      num: "04",
      title: "Measure & Evolve",
      desc: "Data-driven iteration post-launch. We stay close to optimize, expand, and scale what works.",
    },
  ],
  techStack: [
    { name: "React / Next.js", cat: "Frontend", level: "95%" },
    { name: "Figma", cat: "Design", level: "98%" },
    { name: "Node / Bun", cat: "Backend", level: "85%" },
    { name: "React Native", cat: "Mobile", level: "80%" },
    { name: "PostgreSQL", cat: "Database", level: "90%" },
    { name: "AWS / Vercel", cat: "Infrastructure", level: "88%" },
    { name: "Framer Motion", cat: "Animation", level: "92%" },
  ],
  testimonials: [
    {
      text: "AIK transformed how we think about our product. They didn't just build what we asked — they challenged us to think bigger, and the result exceeded every benchmark we set.",
      author: "Sarah Okonkwo",
      role: "CPO — Luminary AI",
      avatarBg: "var(--gold)",
      avatarInitial: "S",
    },
    {
      text: "Rare combination of design sensibility and engineering rigour. The team felt like true partners — deeply invested in outcomes, not just deliverables. Would not go anywhere else.",
      author: "Marco Bellini",
      role: "Founder — Orchard",
      avatarBg: "#4a7c6f",
      avatarInitial: "M",
    },
    {
      text: "From zero to a product that our users genuinely love in under four months. The quality of thinking and the attention to craft was unlike anything we'd experienced before.",
      author: "Priya Sharma",
      role: "CEO — Vesper Technologies",
      avatarBg: "#6f4a7c",
      avatarInitial: "P",
    },
  ],
};
