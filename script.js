// Agenda data — edit here to update the Agenda modal.
const AGENDA = {
  day1: [
    { time: "10:00 – 10:10 AM", title: "Inauguration Ceremony", type: "plain" },
    { time: "10:10 – 10:15 AM", title: "Annual Placement Report by Student Career Progression (SCP) Team", type: "plain" },
    { time: "10:15 – 10:30 AM", title: "Director's Welcome Address", type: "highlight" },
    { time: "10:30 – 11:30 AM", title: "Keynote Talk 1", sub: "Mr. Prasanta Sarkar, General Manager, Electrical Vehicles, Tata Motors", type: "keynote", speakerId: "speaker-prasanta-sarkar" },
    { time: "11:30 – 11:45 AM", title: "High Tea & Refreshments", type: "break" },
    { time: "11:45 AM – 12:45 PM", title: "Keynote Talk 2", sub: "Mr. Pallab Gupta, Telecom & Standardization Lead, Nokia", type: "keynote", speakerId: "speaker-pallab-gupta" },
    { time: "12:45 – 01:00 PM", title: "Official Conclave Group Photograph Session", type: "plain" },
    { time: "01:00 – 03:00 PM", title: "Luncheon & Academic-Industry Networking Reception", type: "meal" },
    { time: "03:00 – 03:45 PM", title: "Expert Session 1", sub: "Dr. Syed Rizvi, Staff Engineer, Analog Devices Inc.", type: "session", speakerId: "speaker-syed-rizvi" },
    { time: "03:45 – 04:30 PM", title: "Expert Session 2", sub: "Mr. Uday Tej & Mr. Charan Tej Seeram, Novel Patent Services Ltd.", type: "session", speakerId: "speaker-uday-tej" },
    { time: "04:30 – 05:00 PM", title: "Panel Discussion 1", type: "highlight" },
    { time: "05:45 – 06:00 PM", title: "High Tea & Refreshments", type: "break" },
    { time: "06:00 – 06:15 PM", title: "Group Photograph Session (Final Year Interns)", type: "plain" },
    { time: "10:00 AM – 05:45 PM", title: "Innovation Exhibition", sub: "Patents, Prototypes, Startup Ideas from IIITA Students, Exhibitions from Industry", type: "parallel", tag: "All Day", link: "#startups" }
  ],
  day2: [
    { time: "10:00 – 10:45 AM", title: "Expert Session 3", sub: "Dr. Manjeer Majumder, Research Engineer, Nokia, Bangalore", type: "session", speakerId: "speaker-manjeer-majumder" },
    { time: "10:45 – 11:30 AM", title: "Expert Session 4", sub: "Dr. Rajat Channappanavar, Senior Power Architect, AmberSemi", type: "session", speakerId: "speaker-rajat-channappanavar" },
    { time: "11:30 – 11:45 AM", title: "High Tea & Refreshments", type: "break" },
    { time: "11:45 AM – 12:30 PM", title: "Expert Session 5", sub: "Speaker to be announced", type: "session" },
    { time: "12:30 – 01:00 PM", title: "Panel Discussion 2", type: "highlight" },
    { time: "01:00 – 03:00 PM", title: "Luncheon & Academic-Industry Networking Reception", type: "meal" },
    { time: "03:00 – 05:00 PM", title: "Internship Tech Talks", sub: "Final Year Interns", type: "parallel", tag: "Concurrent" },
    { time: "03:00 – 05:00 PM", title: "Industry Exhibitions", sub: "Posters from Industries, Demonstration of Prototypes", type: "parallel", tag: "Concurrent" },
    { time: "05:00 – 05:30 PM", title: "Closing Ceremony", type: "highlight" },
    { time: "05:30 – 05:45 PM", title: "High Tea & Refreshments", type: "break" }
  ]
};

// Speaker data — edit here to update the Speakers section.
const SPEAKERS = [
  {
    name: "Mr. Prasanta Sarkar",
    role: "General Manager, Electrical Vehicles",
    company: "Tata Motors",
    bio: "Brings over 33 years of engineering experience spanning material handling systems, automotive body electronics, engine management systems, and electric vehicle technologies. He holds a B.Tech in Mechanical Engineering from IIT Kharagpur (1993) and an MS in Software Systems from BITS Pilani (2001), specializing in Systems Engineering. His career includes stints at Essar Steel, Delphi, and Robert Bosch, before joining Tata Motors in 2005, where he pioneered indigenous Engine Management Systems and has since driven innovations in hybrid powertrains, EV failure-root-cause analytics, and federated learning-based automation for EV service. He currently heads Federated Learning at Tata Motors' Engineering Research Center, with active interests in battery/motor digital twins, range estimation, and Gen 3 embedded software development tools."
  },
  {
    name: "Mr. Pallab Gupta",
    role: "Telecom & Standardization Lead",
    company: "Nokia",
    bio: "A technology and standardization leader with more than 22 years of experience in the Telecommunication industry across research, technology strategy, and global standards. As a Principal Standardization Lead at Nokia, he shapes strategic technology positions and contributes to standards development across 3GPP, GSMA and TSDSI, working with operators, vendors, academia and regulatory stakeholders. He is recognized for driving consensus among companies with diverse interests and translating industry priorities into globally adopted telecommunications standards, and currently serves as Rapporteur for a 3GPP SA2 study on IMS architecture enhancements. His areas of expertise include 5G and 6G System Architecture, AI-native networks, IMS, Private Networks, Sensing, and Non-Terrestrial Networks (NTN)/UAV/UAS. He is an IEEE Senior Member with more than 200 patent applications worldwide."
  },
  {
    name: "Dr. Syed Rizvi",
    role: "Staff Engineer",
    company: "Analog Devices Inc.",
    bio: "Specializes in semiconductor device modeling, advanced characterization methodologies, and formulation of device reliability framework. His current and previous works sit at the intersection of device physics and technology development, focusing on translating experimental characterization into predictive models for in-house fabrication processes. He holds a dual-degree, MTech &ndash; PhD, in Microelectronics and VLSI (Electrical Engineering) from IIT Kanpur."
  },
  {
    name: "Mr. Uday Tej",
    role: "Head of Projects Division",
    company: "Novel Patent Services Ltd.",
    bio: "Heads the Projects Division at Novel Patent Services Ltd., overseeing execution of all patent analytics projects for corporate clients. He has expertise in patentability searches and clearance searches, and is responsible for patent deliverables to the clients."
  },
  {
    name: "Mr. Charan Tej Seeram",
    role: "Manager, Technical Division",
    company: "Novel Patent Services Ltd.",
    bio: "Manager at Novel Patent Services Ltd., managing the technical division. He has expertise in IP search and analysis spanning patentability, invalidation, and Freedom to Operate studies to landscape analysis, and drives technology transfer and patent circumvention strategy."
  },
  {
    name: "Dr. Manjeer Majumder",
    role: "Research Engineer",
    company: "Nokia, Bangalore",
    bio: "Holds an M.Tech&ndash;Ph.D. dual degree in Electrical Engineering from IIT Kanpur, where doctoral research focused on channel estimation and pilot design for single- and multi-carrier wireless communication systems, including MIMO and mmWave MIMO-OFDM. At Nokia, he works on 5G NR features with a focus on beamforming and scheduling, while also developing expertise in AI/ML applications for wireless communications."
  },
  {
    name: "Dr. Rajat Channappanavar",
    role: "Senior Power Architect",
    company: "AmberSemi",
    bio: "Completed his Ph.D. from IIT Kanpur, where he worked on power electronics for data center applications. He is presently working on vertical power architecture for AI data centers at AmberSemi."
  }
];

// Verify all names and emails against the source list before publishing.
const EXHIBITORS_FLOOR1 = [
  { name: "Rivika Organic Food Pvt Ltd.", rep: "Saddam Husain", badge: "incubated", email: "saddamhusain1994@gmail.com" },
  { name: "NCode Sutram for Artificial Intelligence Pvt Ltd", rep: "Mr Ashutosh Mishra", badge: "incubated", email: "ncodesutram@gmail.com" },
  { name: "DEBUGGERS SQUAD INNOVATIONS", rep: "Aditya Kumar Singh", badge: "applied", email: "iitianadityakumarsingh@gmail.com" },
  { name: "Kim Up", rep: "Ranjeet Maurya", badge: "incubated", email: "ranjeet@kimup.in" },
  { name: "CURELEX HEALTHTECH PRIVATE LIMITED", rep: "Shriyansh Singh", badge: "incubated", email: "contact.curelex@gmail.com" },
  { name: "Lyfshilp Academy Pvt. Ltd.", rep: "Bhawna Khorwal", repNote: "(Senior Manager)", badge: "incubated", email: "bhawna@lyfshilpacademy.com" },
  { name: "PulseOne", rep: "Mohd Salman Khan", badge: "incubated", email: "salman@pulseone.in" },
  { name: "Chip Prototype", rep: "Mr. Vinay Mishra", badge: "mnnit", email: "mishravinay496@gmail.com" },
  { name: "FPGA Prototype", rep: "Dr. Bharat Bhushan Upadhyay", badge: "rgipt", email: "bbupadhayay@rgipt.ac.in" }
];

const EXHIBITORS_GROUND = [
  { name: "SYNCKYOU", rep: "SOUMILI GHOSH", badge: "student", email: "iit2025163@iiita.ac.in" },
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

function pad2(n) {
  return String(n).padStart(2, "0");
}

function slugifyName(name) {
  return name
    .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderSpeakers() {
  const grid = document.getElementById("speaker-grid");
  const userIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></svg>';
  const chevron = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="m9 18 6-6-6-6"/></svg>';

  SPEAKERS.forEach((sp, i) => {
    const bio = sp.bio || "Bio coming soon.";
    const tooltipId = `speaker-tooltip-${i}`;
    const card = document.createElement("div");
    card.className = "speaker-card";
    card.id = `speaker-${slugifyName(sp.name)}`;
    card.tabIndex = 0;
    card.setAttribute("aria-describedby", tooltipId);
    card.innerHTML = `
      <div class="avatar">${userIcon}<span class="avatar-label">[Photo: 180x180px]</span></div>
      <p class="speaker-name">${sp.name}</p>
      <p class="speaker-role">${sp.role}</p>
      <p class="speaker-company">${sp.company}</p>
      <div class="speaker-divider"></div>
      <span class="speaker-link">View Full Profile ${chevron}</span>
      <div class="tooltip" id="${tooltipId}" role="tooltip">
        <p class="tooltip-name">${sp.name}</p>
        <p class="tooltip-company">${sp.company}</p>
        <div class="tooltip-divider"></div>
        <p class="tooltip-bio">${bio}</p>
      </div>
    `;
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = card.classList.contains("is-open");
      document.querySelectorAll(".speaker-card.is-open").forEach((c) => c.classList.remove("is-open"));
      if (!wasOpen) card.classList.add("is-open");
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Escape") card.classList.remove("is-open");
    });
    grid.appendChild(card);
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".speaker-card.is-open").forEach((c) => c.classList.remove("is-open"));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".speaker-card.is-open").forEach((c) => c.classList.remove("is-open"));
    }
  });
}

function renderTable(tbodyId, data) {
  const tbody = document.getElementById(tbodyId);
  data.forEach((row, i) => {
    const tr = document.createElement("tr");
    const repHtml = row.repNote
      ? `${row.rep}<span class="rep-note">${row.repNote}</span>`
      : row.rep;
    tr.innerHTML = `
      <td class="cell-num">${pad2(i + 1)}</td>
      <td>${row.name}</td>
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

function renderAgendaRow(item) {
  const hasSpeaker = item.speakerId && document.getElementById(item.speakerId);
  let titleHtml = item.type === "parallel" && item.tag
    ? `<span class="parallel-pill">${item.tag}</span>${item.title}`
    : item.title;
  const titleTag = item.link ? "button" : "p";
  const titleAttrs = item.link ? ` type="button" data-scroll-target="${item.link}"` : "";
  let cellHtml = `<${titleTag} class="row-title"${titleAttrs}>${titleHtml}</${titleTag}>`;

  if (item.sub) {
    cellHtml += hasSpeaker
      ? `<button type="button" class="row-sub speaker-jump-link" data-speaker-id="${item.speakerId}">${item.sub}</button>`
      : `<p class="row-sub">${item.sub}</p>`;
  }

  return `<tr class="row-${item.type}">
    <td class="time-cell">${item.time}</td>
    <td class="detail-cell">${cellHtml}</td>
  </tr>`;
}

function renderAgendaTables() {
  document.getElementById("agenda-day1-body").innerHTML = AGENDA.day1.map(renderAgendaRow).join("");
  document.getElementById("agenda-day2-body").innerHTML = AGENDA.day2.map(renderAgendaRow).join("");
}

function initAgenda() {
  renderAgendaTables();

  const overlay = document.getElementById("agenda-overlay");
  const modal = document.getElementById("agenda-modal");
  const openBtn = document.getElementById("agenda-open-btn");
  const closeX = document.getElementById("agenda-close-x");
  const closeFooterBtn = document.getElementById("agenda-close-footer");
  const printBtn = document.getElementById("agenda-print-btn");
  const tablist = document.querySelector(".agenda-tabs");
  const tabs = Array.from(document.querySelectorAll(".agenda-tab"));
  const panels = { day1: document.getElementById("panel-day1"), day2: document.getElementById("panel-day2") };
  const body = document.getElementById("agenda-body");

  let activeDay = "day1";
  const today = new Date();
  if (today.getFullYear() === 2026 && today.getMonth() === 8 && today.getDate() === 20) {
    activeDay = "day2";
  }
  let lastFocused = null;
  let restoredPaddingRight = "";

  function setActiveTab(day, opts) {
    activeDay = day;
    tabs.forEach((tab) => {
      const isActive = tab.dataset.day === day;
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (isActive && opts && opts.focusTab) tab.focus();
    });
    panels.day1.hidden = day !== "day1";
    panels.day2.hidden = day !== "day2";
    body.scrollTop = 0;
  }

  tabs.forEach((tab) => tab.addEventListener("click", () => setActiveTab(tab.dataset.day)));

  tablist.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = tabs.findIndex((t) => t.dataset.day === activeDay);
    const next = e.key === "ArrowRight" ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[next].dataset.day, { focusTab: true });
  });

  function getFocusable() {
    return Array.from(modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter((el) => el.offsetParent !== null);
  }

  function handleKeydown(e) {
    if (e.key === "Escape") {
      closeAgenda();
      return;
    }
    if (e.key !== "Tab") return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function handleOverlayClick(e) {
    if (e.target === overlay) closeAgenda();
  }

  function lockScroll() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    restoredPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  function unlockScroll() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = restoredPaddingRight;
  }

  function openAgenda() {
    if (!overlay.hidden) return;
    lastFocused = document.activeElement;
    setActiveTab(activeDay);
    overlay.hidden = false;
    document.body.classList.add("agenda-open");
    lockScroll();
    requestAnimationFrame(() => overlay.classList.add("is-open"));
    document.addEventListener("keydown", handleKeydown);
    overlay.addEventListener("click", handleOverlayClick);
    const activeTab = tabs.find((t) => t.dataset.day === activeDay);
    if (activeTab) activeTab.focus();
    if (location.hash !== "#agenda") history.replaceState(null, "", "#agenda");
  }

  function closeAgenda(focusEl) {
    if (overlay.hidden) return;
    overlay.classList.remove("is-open");
    document.body.classList.remove("agenda-open");
    unlockScroll();
    document.removeEventListener("keydown", handleKeydown);
    overlay.removeEventListener("click", handleOverlayClick);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => { overlay.hidden = true; };
    if (reduced) finish();
    else setTimeout(finish, 180);
    if (location.hash === "#agenda") {
      history.replaceState(null, "", location.pathname + location.search);
    }
    const target = focusEl || lastFocused || openBtn;
    if (target && typeof target.focus === "function") target.focus({ preventScroll: true });
  }

  openBtn.addEventListener("click", openAgenda);
  closeX.addEventListener("click", () => closeAgenda());
  closeFooterBtn.addEventListener("click", () => closeAgenda());
  printBtn.addEventListener("click", () => window.print());

  body.addEventListener("click", (e) => {
    const speakerBtn = e.target.closest(".speaker-jump-link");
    if (speakerBtn) {
      const card = document.getElementById(speakerBtn.dataset.speakerId);
      closeAgenda(card);
      if (card) {
        setTimeout(() => {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("flash-highlight");
          setTimeout(() => card.classList.remove("flash-highlight"), 1200);
        }, 200);
      }
      return;
    }
    const scrollBtn = e.target.closest("[data-scroll-target]");
    if (scrollBtn) {
      const target = document.querySelector(scrollBtn.dataset.scrollTarget);
      closeAgenda();
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    }
  });

  window.addEventListener("hashchange", () => {
    if (location.hash === "#agenda" && overlay.hidden) openAgenda();
    else if (location.hash !== "#agenda" && !overlay.hidden) closeAgenda();
  });

  if (location.hash === "#agenda") openAgenda();
}

renderSpeakers();
renderExhibitors();
initAgenda();
