/**
 * AIK PORTFOLIO — BRITTANY CHIANG CLONE ENGINE
 */

const siteData = {
  settings: {
    siteName: "Asif Imran Khan",
    fullName: "Asif Imran Khan",
    role: "Front-End Developer",
    company: "AIK Studio",
    email: "hello@aik.dev",
    year: new Date().getFullYear(),
  },
  about: `
    <p class="mb-4">
      I’m a software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href="#" class="font-medium text-slate-200 hover:text-teal-300">AIK Studio</a>.
    </p>
    <p class="mb-4">
      My journey in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
    </p>
    <p>
      Fast-forward to today, and I’ve had the privilege of working at a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
    </p>
  `,
  experience: [
    {
      period: "2024 — PRESENT",
      role: "Freelancer",
      company: "AIK Studio",
      companyUrl: "#",
      desc: "Working as a freelancer at AIK Studio, specializing in building responsive and accessible front-end experiences.",
      tags: ["Front-end Development", "Freelancing", "UI/UX"]
    },
    {
      period: "01/2023 — PRESENT",
      role: "Medical Biller and Coder",
      company: "SAGILITY INDIA PRIVATE LIMITED",
      companyUrl: "#",
      desc: "Assigning standardized codes for diagnoses and procedures. Preparing and submitting insurance claims while ensuring compliance with healthcare regulations. Maintaining accurate patient records and communicating with insurers to resolve claims.",
      tags: ["Medical Coding", "Healthcare Admin", "Compliance"]
    },
    {
      period: "10/2022 — 01/2023",
      role: "ER Nurse",
      company: "NEW JANAPRIYA SUPER SPECIALITY HOSPITAL",
      companyUrl: "#",
      desc: "Performed rapid assessments and prioritized patient conditions. Conducted triage based on urgency for care. Administered medications, performed procedures, and collaborated with healthcare teams for treatment plans.",
      tags: ["Nursing", "Critical Care", "Triage"]
    }
  ],
  projects: [
    {
      title: "The Aspire Hotel",
      desc: "A luxurious hospitality platform for The Aspire Hotel in Guwahati. Features elegantly appointed room galleries, integrated booking workflows, and automated service management for a premium guest experience.",
      image: "https://aik.idexa.app/projects/hotel/assets/images/lobby_gallery.png",
      url: "https://aik.idexa.app/projects/hotel/index.php#home",
      tags: ["PHP", "Hospitality Tech", "UX Design"]
    },
    {
      title: "Aaron Holmes Residential",
      desc: "A luxury real estate platform for London & UK property experts. Features dynamic property listings, advanced search filters, and comprehensive market intelligence reports.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      url: "https://aaron-holmes.com/design/index.php?page=home",
      tags: ["PHP", "UI/UX", "Real Estate Tech"]
    },
    {
      title: "Luminary AI",
      desc: "An AI-powered content generation platform. Built with a focus on accessibility and seamless user experience.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
      url: "#",
      tags: ["React", "OpenAI API", "Node.js"]
    }
  ]
};

const App = {
  init: function() {
    this.render();
    this.initSpotlight();
    this.initScrollSpy();
  },

  render: function() {
    this.renderAbout();
    this.renderExperience();
    this.renderProjects();
  },

  renderAbout: function() {
    const el = document.getElementById("about-content");
    if (el) el.innerHTML = siteData.about;
  },

  renderExperience: function() {
    const el = document.getElementById("experience-list");
    if (!el) return;
    el.innerHTML = `<ol class="card-list">
      ${siteData.experience.map(exp => `
        <li class="mb-12">
          <div class="card experience-card">
            <header class="card-time" aria-label="${exp.period}">${exp.period}</header>
            <div class="card-content">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="${exp.companyUrl}" rel="noreferrer" aria-label="${exp.role} at ${exp.company}">
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>${exp.role} · <span class="inline-block">${exp.company}</span></span>
                  </a>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">${exp.desc}</p>
              <ul class="tags" aria-label="Technologies used">
                ${exp.tags.map(tag => `<li class="tag">${tag}</li>`).join("")}
              </ul>
            </div>
          </div>
        </li>
      `).join("")}
    </ol>`;
  },

  renderProjects: function() {
    const el = document.getElementById("projects-list");
    if (!el) return;
    el.innerHTML = `<ul class="card-list">
      ${siteData.projects.map(project => `
        <li class="mb-12">
          <div class="card project-card">
            <div class="project-img">
              <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="${project.url}" rel="noreferrer" aria-label="${project.title}">
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>${project.title}</span>
                  </a>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal">${project.desc}</p>
              <ul class="tags" aria-label="Technologies used">
                ${project.tags.map(tag => `<li class="tag">${tag}</li>`).join("")}
              </ul>
            </div>
          </div>
        </li>
      `).join("")}
    </ul>`;
  },

  initSpotlight: function() {
    const spotlight = document.getElementById("spotlight");
    if (!spotlight) return;

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      // Using clientX/Y for fixed positioning
      spotlight.style.setProperty("--x", `${clientX}px`);
      spotlight.style.setProperty("--y", `${clientY}px`);
    }, { passive: true });
  },

  initScrollSpy: function() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav a");

    const onScroll = () => {
      let currentSection = "about";
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      this.updateNav(currentSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check

    // Manual smooth scroll and instant feedback
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Calculate offset (match scroll-mt-24 from CSS)
          const offset = 100; 
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetId === "about" ? 0 : targetPosition,
            behavior: "smooth"
          });

          // Force highlight immediately
          this.updateNav(targetId);
        }
      });
    });
  },

  updateNav: function(id) {
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
      const href = link.getAttribute("href").substring(1);
      if (href === id) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());
