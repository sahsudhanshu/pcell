// Speaker data — edit here to update the Speakers section.
const SPEAKERS = [
  {
    name: "Mr. Prasanta Sarkar",
    role: "General Manager, Electrical Vehicles",
    company: "Tata Motors",
    // TODO: bio not available in source, add when supplied.
    bio: null
  },
  {
    name: "Mr. Pallab Gupta",
    role: "Telecom & Standardization Lead",
    company: "Nokia",
    // TODO
    bio: null
  },
  {
    // TODO: name/role/company not visible in reference, fill in when available.
    name: "TODO",
    role: "TODO",
    company: "TODO",
    bio: null
  },
  {
    name: "Mr. Uday Tej",
    role: "Head of Projects Division",
    company: "Novel Patent Services Ltd.",
    // TODO
    bio: null
  },
  {
    name: "Mr. Charan Tej Seeram",
    role: "Manager, Technical Division",
    company: "Novel Patent Services Ltd.",
    // TODO
    bio: null
  },
  {
    name: "Dr. Manjeer Majumder",
    role: "Research Engineer",
    company: "Nokia, Bangalore",
    // TODO
    bio: null
  },
  {
    name: "Dr. Rajat Channappanavar",
    role: "Senior Power Architect",
    company: "AmberSemi",
    bio: "Completed his Ph.D. from IIT Kanpur specializing in power electronics for data center applications. He is currently working on vertical power architectures and high-density power delivery topologies for hyperscale AI data centers at AmberSemi."
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

function renderSpeakers() {
  const grid = document.getElementById("speaker-grid");
  const userIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></svg>';
  const chevron = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="m9 18 6-6-6-6"/></svg>';

  SPEAKERS.forEach((sp, i) => {
    const bio = sp.bio || "Bio coming soon.";
    const tooltipId = `speaker-tooltip-${i}`;
    const card = document.createElement("div");
    card.className = "speaker-card";
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

renderSpeakers();
renderExhibitors();
