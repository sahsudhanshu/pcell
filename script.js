// ═══════════════════════════════════════════════════════════
// Career & Industry Connect 2026 — IIIT Allahabad
// Interactive Logic
// ═══════════════════════════════════════════════════════════

// ── Speaker Data (complete with bios from official biographies document) ──
const SPEAKERS = [
  {
    name: "Mr. Prasanta Sarkar",
    role: "General Manager, Electrical Vehicles",
    company: "Tata Motors",
    initials: "PS",
    gradient: 1,
    image: "https://media.licdn.com/dms/image/v2/D5603AQFbso--Uu_J_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690970841646?e=1790812800&v=beta&t=nDkhXoN9a2Fobt6N5njICwpjucpj5JTnvlgC3uMPuE4",
    bio: "Mr. Prasanta Sarkar brings over 33 years of engineering experience spanning material handling systems, automotive body electronics, engine management systems, and electric vehicle technologies. He holds a B.Tech in Mechanical Engineering from IIT Kharagpur (1993) and an MS in Software Systems from BITS Pilani (2001), specializing in Systems Engineering. His career includes stints at Essar Steel, Delphi, and Robert Bosch, before joining Tata Motors in 2005, where he pioneered indigenous Engine Management Systems. He currently heads Federated Learning at Tata Motors' Engineering Research Center, with active interests in battery/motor digital twins, range estimation, and Gen 3 embedded software development tools."
  },
  {
    name: "Mr. Pallab Gupta",
    role: "Telecom & Standardization Lead",
    company: "Nokia",
    initials: "PG",
    gradient: 2,
    image: "https://media.licdn.com/dms/image/v2/D5603AQEnY8aq8y-Haw/profile-displayphoto-scale_400_400/B56ZroBRfeLYAo-/0/1764829241947?e=1790812800&v=beta&t=y9r2TogZ3jE32XW1fUKsAOVtFT15AtyvLFVWmVZ0TaQ",
    bio: "Mr. Pallab Gupta is working at Nokia and has deep expertise in Telecom Standardization. He is actively involved in shaping industry standards for next-generation wireless communication systems and has been instrumental in driving Nokia's standardization initiatives across multiple technology generations."
  },
  {
    name: "Dr. Syed Rizvi",
    role: "Staff Engineer",
    company: "Analog Devices Inc.",
    initials: "SR",
    gradient: 3,
    image: "https://media.licdn.com/dms/image/v2/C5603AQEnLroRMbvioA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517248449811?e=1790812800&v=beta&t=iSSk0FggEa099Nkj_OigfEkTSZeCQ5WV8QRJfs8D5Ew",
    bio: "Dr. Syed Rizvi specializes in semiconductor device modeling, advanced characterization methodologies, and formulation of device reliability framework. His current and previous works sit at the intersection of device physics and technology development, focusing on translating experimental characterization into predictive models for in-house fabrication processes. Syed Rizvi holds a dual-degree, MTech–PhD, in Microelectronics and VLSI (Electrical Engineering) from IIT Kanpur."
  },
  {
    name: "Mr. Uday Tej",
    role: "Head of Projects Division",
    company: "Novel Patent Services Ltd.",
    initials: "UT",
    gradient: 4,
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHcciWni5LqdQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713778191882?e=1790812800&v=beta&t=kGCSj_K7KQPgIlzFCFI5hJudVreFgUv9hXS3z7bicJg",
    bio: "Mr. Uday Tej heads the Projects Division at Novel Patent Services Ltd. He oversees the execution of all patent analytics projects for corporate clients and has expertise in patentability searches, clearance searches, and is responsible for patent deliverables to the clients."
  },
  {
    name: "Mr. Charan Tej Seeram",
    role: "Manager, Technical Division",
    company: "Novel Patent Services Ltd.",
    initials: "CT",
    gradient: 5,
    image: "https://media.licdn.com/dms/image/v2/D5603AQGOxyt30ttmvg/profile-displayphoto-scale_200_200/B56Z_0XFFsIsAc-/0/1786511122365?e=1790812800&v=beta&t=7_z5GdkwAjxs5Obvs_DxWwC8oFW1KPjhJJy-aM-rUO8",
    bio: "Mr. Charan Tej Seeram is Manager at Novel Patent Services Ltd. and manages the technical division. He has expertise in IP search and analysis from patentability, invalidation and Freedom to Operate Studies to landscape. He drives technology transfer and patent circumvention strategy."
  },
  {
    name: "Dr. Manjeer Majumder",
    role: "Research Engineer",
    company: "Nokia, Bangalore",
    initials: "MM",
    gradient: 6,
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHhdsWWl7sNow/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1624377195191?e=1790812800&v=beta&t=EJJfgXLzapXMKHfhsIflpblTDKrhH5C6PFKLG39C7BU",
    bio: "Dr. Manjeer Majumder holds an M.Tech–Ph.D. dual degree in Electrical Engineering from IIT Kanpur, where the doctoral research focused on channel estimation and pilot design for single- and multi-carrier wireless communication systems, including MIMO and mmWave MIMO-OFDM. At Nokia, Manjeer works on 5G NR features with a focus on beamforming and scheduling, while also developing expertise in AI/ML applications for wireless communications."
  },
  {
    name: "Dr. Rajat Channappanavar",
    role: "Senior Power Architect",
    company: "AmberSemi",
    initials: "RC",
    gradient: 7,
    image: "https://media.licdn.com/dms/image/v2/D5603AQHilUM_v6Jwxw/profile-displayphoto-scale_200_200/B56ZuSzIcgIcAY-/0/1767694436876?e=1790812800&v=beta&t=ZM80-LyvQTE0-Qt4pan9I3IP8pITH6d0wlR5GJJu43Q",
    bio: "Dr. Rajat Channappanavar completed his Ph.D. from IIT Kanpur specializing in power electronics for data center applications. He is currently working on vertical power architectures and high-density power delivery topologies for hyperscale AI data centers at AmberSemi."
  }
];

// ── Exhibitor Data ──
const EXHIBITORS_FLOOR1 = [
  { name: "Rivika Organic Food Pvt Ltd.", rep: "Saddam Husain", badge: "incubated", email: "saddamhusain1994@gmail.com" },
  { name: "NCode Sutram for Artificial Intelligence Pvt Ltd", rep: "Mr Ashutosh Mishra", badge: "incubated", email: "ncodesutram@gmail.com" },
  { name: "DEBUGGERS SQUAD INNOVATIONS", rep: "Aditya Kumar Singh", badge: "applied", email: "iitianadityakumarsingh@gmail.com" },
  { name: "KimUp", rep: "Ranjeet Maurya", badge: "incubated", email: "ranjeet@kimup.in" },
  { name: "CURELEX HEALTHTECH PRIVATE LIMITED", rep: "Shriyansh Singh", badge: "incubated", email: "contact.curelex@gmail.com" },
  { name: "Lyfshilp Academy Pvt. Ltd.", rep: "Bhawna Khorwal", repNote: "(Senior Manager)", badge: "incubated", email: "bhawna@lyfshilpacademy.com" },
  { name: "PulseOne", rep: "Mohd Salman Khan", badge: "incubated", email: "salman@pulseone.in" },
  { name: "Chip Prototype", rep: "Mr. Vinay Mishra", badge: "mnnit", email: "mishravinay496@gmail.com" },
  { name: "FPGA Prototype", rep: "Dr. Bharat Bhushan Upadhyay", badge: "rgipt", email: "bbupadhayay@rgipt.ac.in" }
];

const EXHIBITORS_GROUND = [
  { name: "SYNCXYOU", rep: "SOUMILI GHOSH", badge: "student", email: "iit2025163@iiita.ac.in" },
  { name: "With Me", rep: "Subham Thakare", badge: "student", email: "mbe2026001@iiita.ac.in" },
  { name: "SPIREXA", rep: "Utkarsh Kumar", badge: "student", email: "bdi2026007@iiita.ac.in" },
  { name: "Aegis ID", rep: "Abdul Azeem Ansari", badge: "student", email: "iit2024243@iiita.ac.in" },
  { name: "Autonomous Tracked Vehicle with GPS Navigation", rep: "Khavina Balamurugan", badge: "student", email: "iec2025037@iiita.ac.in" }
];

const BADGE_LABELS = {
  incubated: "Incubated at IIITA",
  applied: "Applied for Incubation",
  mnnit: "MNNIT PhD student",
  rgipt: "RGIPT Faculty",
  student: "Student of IIITA"
};

// ── Utility ──
function pad2(n) {
  return String(n).padStart(2, "0");
}

// ── Render Speakers ──
function renderSpeakers() {
  const grid = document.getElementById("speaker-grid");
  const chevron = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';

  SPEAKERS.forEach((sp, i) => {
    const card = document.createElement("div");
    card.className = `speaker-card reveal reveal-delay-${(i % 4) + 1}`;
    card.tabIndex = 0;
    const avatarClass = sp.image ? "avatar" : `avatar avatar-gradient-${sp.gradient}`;
    const avatarContent = sp.image ? `<img src="${sp.image}" alt="${sp.name}" class="avatar-img">` : sp.initials;

    card.innerHTML = `
      <div class="${avatarClass}">${avatarContent}</div>
      <p class="speaker-name">${sp.name}</p>
      <p class="speaker-role">${sp.role}</p>
      <p class="speaker-company">${sp.company}</p>
      <div class="speaker-divider"></div>
      <span class="speaker-link">View Full Profile ${chevron}</span>
    `;
    card.addEventListener("click", () => openBio(sp));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openBio(sp);
      }
    });
    grid.appendChild(card);
  });
}

// ── Bio Modal ──
function openBio(sp) {
  const panel = document.getElementById("speaker-bio-panel");
  const avatarEl = document.getElementById("bio-avatar");
  avatarEl.className = sp.image ? "bio-avatar" : `bio-avatar avatar-gradient-${sp.gradient}`;
  avatarEl.innerHTML = sp.image ? `<img src="${sp.image}" alt="${sp.name}" class="avatar-img">` : sp.initials;
  
  document.getElementById("bio-name").textContent = sp.name;
  document.getElementById("bio-role").textContent = sp.role;
  document.getElementById("bio-company").textContent = sp.company;
  document.getElementById("bio-text").textContent = sp.bio || "Bio coming soon.";
  panel.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBio() {
  document.getElementById("speaker-bio-panel").classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("bio-close").addEventListener("click", closeBio);
document.getElementById("bio-backdrop").addEventListener("click", closeBio);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeBio();
});

// ── Render Tables ──
function renderTable(tbodyId, data) {
  const tbody = document.getElementById(tbodyId);
  data.forEach((row, i) => {
    const tr = document.createElement("tr");
    const repHtml = row.repNote
      ? `${row.rep}<span class="rep-note">${row.repNote}</span>`
      : row.rep;
    tr.innerHTML = `
      <td class="cell-num">${pad2(i + 1)}</td>
      <td><strong>${row.name}</strong></td>
      <td>${repHtml}</td>
      <td><span class="badge badge-${row.badge}">${BADGE_LABELS[row.badge]}</span></td>
      <td class="cell-email"><a href="mailto:${row.email}">${row.email}</a></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExhibitors() {
  renderTable("table-a", EXHIBITORS_FLOOR1);
  renderTable("table-b", EXHIBITORS_GROUND);
  document.getElementById("count-a").textContent = `${EXHIBITORS_FLOOR1.length} Exhibitors`;
  document.getElementById("count-b").textContent = `${EXHIBITORS_GROUND.length} Exhibitors`;
}

// ── Countdown Timer ──
function updateCountdown() {
  // Event: Sept 19, 2026 09:00 IST (UTC+5:30)
  const target = new Date("2026-09-19T09:00:00+05:30").getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("cd-days").textContent = "00";
    document.getElementById("cd-hours").textContent = "00";
    document.getElementById("cd-mins").textContent = "00";
    document.getElementById("cd-secs").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("cd-days").textContent = pad2(days);
  document.getElementById("cd-hours").textContent = pad2(hours);
  document.getElementById("cd-mins").textContent = pad2(mins);
  document.getElementById("cd-secs").textContent = pad2(secs);
}

// ── Scroll Reveal (Intersection Observer) ──
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ── Sticky Header Shadow ──
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  const onScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ── Mobile Menu ──
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  const backdrop = document.getElementById("nav-backdrop");
  const iconPath = document.getElementById("menu-icon-path");

  function toggleMenu(forceClose = false) {
    const shouldOpen = forceClose ? false : !nav.classList.contains("open");
    nav.classList.toggle("open", shouldOpen);
    toggle.classList.toggle("open", shouldOpen);
    toggle.setAttribute("aria-expanded", String(shouldOpen));
    if (backdrop) backdrop.classList.toggle("open", shouldOpen);
    if (iconPath) {
      iconPath.setAttribute("d", shouldOpen ? "M18 6 6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18");
    }
  }

  toggle.addEventListener("click", () => toggleMenu());
  if (backdrop) backdrop.addEventListener("click", () => toggleMenu(true));
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => toggleMenu(true));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) toggleMenu(true);
  });
}

// ── Smooth Scroll for anchor links ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const headerHeight = document.getElementById("site-header").offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// ── Back to Top ──
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── Agenda Tabs ──
function initAgendaTabs() {
  const tabs = document.querySelectorAll(".agenda-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const day = tab.dataset.day;
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      document.querySelectorAll(".agenda-content").forEach((c) => c.classList.remove("active"));
      document.getElementById(`agenda-day-${day}`).classList.add("active");
    });
  });
}

// ── Init Everything ──
function init() {
  renderSpeakers();
  renderExhibitors();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  initScrollReveal();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initBackToTop();
  initAgendaTabs();
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
