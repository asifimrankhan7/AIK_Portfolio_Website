document.addEventListener("DOMContentLoaded", () => {
  // 1. Populate Content from data.js
  renderServices();
  renderProjects();
  renderProcess();
  renderTechStack();
  renderTestimonials();

  // 2. Initialize Interactions
  initCursor();
  initScrollReveal();
});

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = siteData.services
    .map(
      (s, i) => `
    <div class="service-card reveal ${i > 0 ? `reveal-delay-${i}` : ""}">
      <div class="service-num">${s.num}</div>
      <svg class="service-icon" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" stroke-width="1.2">
        ${s.icon}
      </svg>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
      <div class="service-arrow">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="#c8a96e" stroke-width="1.2" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("work-container");
  if (!container) return;

  container.innerHTML = siteData.projects
    .map(
      (p, i) => `
    <div class="work-card reveal ${i > 0 ? `reveal-delay-${i}` : ""}">
      <div class="work-card-inner">
        <div class="work-card-bg ${p.bgClass}"></div>
        <div class="work-overlay">
          <div class="work-tags">
            ${p.tags.map((tag) => `<span class="work-tag">${tag}</span>`).join("")}
          </div>
          <div class="work-title-card">${p.title}</div>
          <div class="work-year">${p.year}</div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderProcess() {
  const container = document.getElementById("process-container");
  if (!container) return;

  container.innerHTML = siteData.process
    .map(
      (p, i) => `
    <div class="process-step reveal ${i > 0 ? `reveal-delay-${i}` : ""}">
      <span class="step-num">${p.num}</span>
      <div class="step-content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderTechStack() {
  const container = document.getElementById("tech-container");
  if (!container) return;

  container.innerHTML = `
    <div style="font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-dim); padding: 0 28px 20px;">
      Tech Stack
    </div>
    ${siteData.techStack
      .map(
        (t) => `
      <div class="tech-row">
        <span class="tech-name">${t.name}</span>
        <span class="tech-cat">${t.cat}</span>
        <div class="tech-bar-wrap">
          <div class="tech-bar" style="width: ${t.level}"></div>
        </div>
      </div>
    `,
      )
      .join("")}
  `;
}

function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = siteData.testimonials
    .map(
      (t, i) => `
    <div class="testimonial-card reveal ${i > 0 ? `reveal-delay-${i}` : ""}">
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar" style="background: ${t.avatarBg}">${t.avatarInitial}</div>
        <div>
          <div class="author-name">${t.author}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function initCursor() {
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  });

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(animateRing);
  })();

  // Re-run this on dynamic elements
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .service-card, .work-card, .process-step, .tech-row, .testimonial-card")) {
      cursor.classList.add("hovering");
      ring.classList.add("hovering");
    } else {
      cursor.classList.remove("hovering");
      ring.classList.remove("hovering");
    }
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
