(() => {
  "use strict";

  const data = window.LIFECYCLE_DATA;
  const glossary = window.GLOSSARY_DATA || [];
  const main = document.querySelector("#main-content");
  const rail = document.querySelector("#stage-rail");
  const drawer = document.querySelector("#detail-drawer");
  const drawerContent = document.querySelector("#drawer-content");
  const drawerBackdrop = document.querySelector("#drawer-backdrop");
  const searchDialog = document.querySelector("#search-dialog");
  const searchInput = document.querySelector("#global-search");
  const searchResults = document.querySelector("#search-results");
  const mobileMenu = document.querySelector("#mobile-menu");

  const allActivities = data.stages.flatMap(stage =>
    stage.activities.map(activity => ({ ...activity, stage }))
  );
  const activityById = new Map(allActivities.map(activity => [activity.id, activity]));
  const stageById = new Map(data.stages.map(stage => [stage.id, stage]));
  const trackById = new Map(data.continuousTracks.map(track => [track.id, track]));
  const glossaryById = new Map(glossary.map(entry => [entry.id, entry]));
  const glossaryByTerm = new Map(glossary.map(entry => [entry.term, entry]));

  let currentView = "overview";
  let currentStage = null;

  const titleAcronyms = new Map([
    ["ai", "AI"], ["api", "API"], ["apis", "APIs"], ["ci", "CI"], ["dataops", "DataOps"],
    ["devops", "DevOps"], ["finops", "FinOps"], ["iam", "IAM"], ["llm", "LLM"],
    ["ai/ml", "AI/ML"], ["ci/cd", "CI/CD"], ["dpo", "DPO"], ["grc", "GRC"],
    ["hr", "HR"], ["isms", "ISMS"], ["it", "IT"], ["itsm", "ITSM"], ["kpi", "KPI"],
    ["kpis", "KPIs"], ["mcp", "MCP"], ["mlops", "MLOps"], ["pii", "PII"], ["qa", "QA"],
    ["rag", "RAG"], ["raci", "RACI"], ["sla", "SLA"], ["slo", "SLO"], ["sme", "SME"],
    ["smes", "SMEs"], ["soc", "SOC"], ["sop", "SOP"], ["sre", "SRE"], ["ui", "UI"],
    ["ux", "UX"]
  ]);
  const titleMinorWords = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into", "nor", "of", "on", "or", "per", "the", "to", "via", "with"]);

  function titleCase(value) {
    if (!value) return value;
    const words = value.trim().split(/\s+/);
    return words.map((word, wordIndex) => {
      if (word === "&") return word;
      const match = word.match(/^([^A-Za-z0-9]*)(.*?)([^A-Za-z0-9]*)$/);
      if (!match) return word;
      const [, prefix, core, suffix] = match;
      const parts = core.split(/([-\u2013])/);
      const converted = parts.map((part, partIndex) => {
        if (part === "-" || part === "–") return part;
        const lower = part.toLowerCase();
        const acronym = titleAcronyms.get(lower);
        if (acronym) return acronym;
        const isFirst = wordIndex === 0 && partIndex === 0;
        const isLast = wordIndex === words.length - 1 && partIndex === parts.length - 1;
        if (!isFirst && !isLast && titleMinorWords.has(lower)) return lower;
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }).join("");
      return `${prefix}${converted}${suffix}`;
    }).join(" ");
  }

  function searchableText(...values) {
    const strings = [];
    const collect = value => {
      if (typeof value === "string") strings.push(value);
      else if (Array.isArray(value)) value.forEach(collect);
      else if (value && typeof value === "object") Object.values(value).forEach(collect);
    };
    values.forEach(collect);
    return strings.join(" ").toLowerCase();
  }

  function matchesSearch(text, query) {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return terms.every(term => text.includes(term));
  }

  const activitySearchIndex = new Map(allActivities.map(activity => [
    activity.id,
    searchableText(
      activity.id, activity.title, activity.summary, activity.explanation, activity.owner,
      activity.tags, activity.steps, activity.outputs, activity.considerations, activity.evidence,
      activity.flow, activity.stage.title, activity.stage.shortTitle, activity.stage.phase,
      activity.stage.tagline
    )
  ]));
  const stageSearchIndex = new Map(data.stages.map(stage => [
    stage.id,
    searchableText(
      stage.id, stage.title, stage.shortTitle, stage.phase, stage.tagline, stage.description,
      stage.outcomes, stage.roles, stage.method, stage.gate
    )
  ]));
  const trackSearchIndex = new Map(data.continuousTracks.map(track => [
    track.id,
    searchableText(track)
  ]));
  const glossarySearchIndex = new Map(glossary.map(entry => [
    entry.id,
    searchableText(entry)
  ]));

  const icons = {
    arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 15.1A8 8 0 0 1 8.9 4 8.5 8.5 0 1 0 20 15.1Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    shield: '<path d="M12 3 4.5 6v5.4c0 4.6 3.1 8.7 7.5 9.6 4.4-.9 7.5-5 7.5-9.6V6L12 3Z"/><path d="m9 12 2 2 4-4"/>',
    scale: '<path d="M12 3v18M5 6h14M6 6l-3 6h6L6 6ZM18 6l-3 6h6l-3-6ZM8 21h8"/>',
    spark: '<path d="m12 2 1.4 5.2L18 9.5l-4.6 2.3L12 17l-1.4-5.2L6 9.5l4.6-2.3L12 2Z"/><path d="m19 15 .6 2.3L22 18.5l-2.4 1.2L19 22l-.6-2.3-2.4-1.2 2.4-1.2L19 15Z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.6V20"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.6V20"/>',
    method: '<path d="M5 4h14v4H5zM5 16h14v4H5zM8 8v8M16 8v8"/>',
    gate: '<path d="M4 21V5l8-2 8 2v16M9 21v-8h6v8M4 9h16"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
    print: '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/>',
    reset: '<path d="M4 4v6h6M5.5 16a8 8 0 1 0 .8-9.8L4 10"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    filter: '<path d="M3 5h18M6 12h12M10 19h4"/>',
    file: '<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/>'
  };

  function icon(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.layers}</svg>`;
  }

  function hydrateIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach(element => {
      element.innerHTML = icon(element.dataset.icon);
    });
  }

  function renderRail() {
    rail.innerHTML = `
      <nav class="rail-mobile-nav" aria-label="Guide sections">
        <button class="nav-link" type="button" data-view="overview">Overview</button>
        <button class="nav-link" type="button" data-view="library">Activity Library</button>
        <button class="nav-link" type="button" data-view="glossary">Glossary</button>
      </nav>
      <p class="rail-label">Delivery Path</p>
      <div class="stage-nav">
        ${data.stages.map(stage => `
          <button class="stage-nav-button ${currentStage === stage.id ? "is-active" : ""}"
            type="button" data-stage="${stage.id}" style="--stage-color:${stage.color}">
            <span class="stage-number">${String(stage.number).padStart(2, "0")}</span>
            <span>
              <span class="stage-nav-title">${titleCase(stage.shortTitle)}</span>
              <span class="stage-nav-meta">${stage.duration}</span>
            </span>
          </button>
        `).join("")}
      </div>
    `;
  }

  function setActiveNavigation() {
    document.querySelectorAll("[data-view]").forEach(button => {
      button.classList.toggle("is-active", button.dataset.view === currentView);
    });
    rail.querySelectorAll("[data-stage]").forEach(button => {
      button.classList.toggle("is-active", button.dataset.stage === currentStage);
    });
  }

  function navigate(view, targetId = null, updateHash = true) {
    currentView = view;
    currentStage = view === "stage" ? targetId : null;
    rail.classList.remove("is-open");
    mobileMenu.setAttribute("aria-expanded", "false");

    if (view === "stage") renderStage(stageById.get(targetId) || data.stages[0]);
    else if (view === "library") renderLibrary();
    else if (view === "glossary") renderGlossary();
    else renderOverview();

    setActiveNavigation();
    hydrateIcons(main);
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (updateHash) {
      const hash = view === "stage"
        ? `#stage/${targetId}`
        : view === "glossary" && targetId
          ? `#glossary/${targetId}`
          : `#${view}`;
      history.pushState(null, "", hash);
    }

    if (view === "glossary" && targetId) {
      requestAnimationFrame(() => focusGlossaryTerm(targetId));
    }
  }

  function renderOverview() {
    const nodes = data.continuousTracks.map((track, index) =>
      `<span class="orbit-node" style="--node-color:${track.color}" title="${titleCase(track.title)}">${String(index + 1).padStart(2, "0")}</span>`
    ).join("");

    main.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">From First Question to Final Shutdown</p>
          <h1>Build Agents That Earn Their Autonomy.</h1>
          <p>A field guide for turning a promising use case into a useful, secure, measurable, and responsibly operated agentic AI product.</p>
          <div class="hero-actions">
            <button class="button primary" type="button" data-stage="discover">Begin the Lifecycle <span class="icon" data-icon="arrow"></span></button>
          </div>
        </div>
        <div class="hero-orbit" aria-label="Five continuous workstreams surround the lifecycle">
          <div class="orbit-ring"></div>
          <div class="orbit-core">Trustworthy Value</div>
          ${nodes}
        </div>
      </section>

      <section class="section" aria-labelledby="lifecycle-heading">
        <div class="section-heading">
          <div>
            <p class="eyebrow">The Delivery Path</p>
            <h2 id="lifecycle-heading">Nine Stages. One Learning Loop.</h2>
          </div>
          <p>Compare conventional elapsed time with an AI coding-agent-assisted range. Agent-assisted lower bounds assume reusable foundations, rapid access, and low-risk scope; approvals, data readiness, human review, and adoption still determine the upper bounds.</p>
        </div>
        <div class="lifecycle-grid">
          ${data.stages.map(stage => `
            <article class="stage-card" data-stage="${stage.id}" role="button" tabindex="0" style="--stage-color:${stage.color}">
              <div class="stage-card-top">
                <span class="stage-index">Stage ${String(stage.number).padStart(2, "0")}</span>
                <span class="stage-duration">${stage.duration}</span>
              </div>
              <h3>${titleCase(stage.title)}</h3>
              <p>${stage.tagline}</p>
              <div class="stage-agent-time">
                <span><span class="icon" data-icon="spark"></span> With Coding Agent</span>
                <strong>${stage.assistedDuration}</strong>
              </div>
              <div class="stage-card-foot">
                <span class="stage-card-arrow"><span class="icon" data-icon="arrow"></span></span>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section" aria-labelledby="tracks-heading">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Always On</p>
            <h2 id="tracks-heading">Continuous Workstreams</h2>
          </div>
          <p>These responsibilities do not belong at the end of delivery. Their controls, evidence, and owners evolve through every stage.</p>
        </div>
        <div class="track-grid">
          ${data.continuousTracks.map(track => `
            <article class="track-card" style="--track-color:${track.color}" data-workstream="${track.id}" role="button" tabindex="0">
              <span class="track-icon icon" data-icon="${track.icon}"></span>
              <h3>${titleCase(track.title)}</h3>
              <p>${track.summary}</p>
              <span class="track-card-link" aria-hidden="true"><span class="icon" data-icon="arrow"></span></span>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section principle-banner" aria-labelledby="principle-heading">
        <div class="principle-mark" aria-hidden="true">
          <span></span><span></span><span></span>
          <strong>Minimum Necessary Agency</strong>
        </div>
        <div class="principle-copy">
          <p class="eyebrow">The Central Design Rule</p>
          <h2 id="principle-heading">Autonomy Is a Risk Budget.</h2>
          <p>Grant it deliberately, action by action, as evidence and controls mature. More agency is not automatically a more advanced solution.</p>
          <div class="principle-list">
            ${data.principles.map((principle, index) => `
              <div class="principle-item"><span>${index + 1}</span><span>${principle}</span></div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function activityCard(activity, stage) {
    return `
      <article class="activity-card" style="--stage-color:${stage.color}">
        <div class="activity-copy">
          <h3>${titleCase(activity.title)}</h3>
          <p>${activity.summary}</p>
          <div class="activity-tags">
            ${activity.tags.map(tag => `<span class="tag">${titleCase(tag)}</span>`).join("")}
          </div>
        </div>
        <button class="activity-open" type="button" data-activity="${activity.id}">
          Deep Dive <span class="icon" data-icon="arrow"></span>
        </button>
      </article>
    `;
  }

  function renderStage(stage) {
    currentStage = stage.id;
    main.innerHTML = `
      <section class="stage-hero" style="--stage-color:${stage.color}" data-stage-number="${String(stage.number).padStart(2, "0")}">
        <div class="stage-hero-copy">
          <p class="stage-kicker">Stage ${String(stage.number).padStart(2, "0")} · ${titleCase(stage.phase)}</p>
          <h1>${titleCase(stage.title)}</h1>
          <p>${stage.description}</p>
          <div class="hero-actions">
            <button class="button primary" type="button" data-scroll="activities">Explore ${stage.activities.length} Activities</button>
          </div>
        </div>
        <aside class="gate-card">
          <span class="gate-label"><span class="icon" data-icon="gate"></span> Evidence Gate</span>
          <h3>${titleCase(stage.gate.title)}</h3>
          <p>Advance when the evidence—not the calendar—supports these conditions:</p>
          <ul>${stage.gate.criteria.map(item => `<li>${item}</li>`).join("")}</ul>
        </aside>
      </section>

      <div class="stage-meta-row">
        <div class="meta-card">
          <span class="meta-card-label"><span class="icon" data-icon="clock"></span> Typical Elapsed Time</span>
          <p>${stage.duration}</p>
        </div>
        <div class="meta-card agent-time-card">
          <span class="meta-card-label"><span class="icon" data-icon="spark"></span> With Coding Agent</span>
          <p>${stage.assistedDuration}</p>
        </div>
        <div class="meta-card">
          <span class="meta-card-label"><span class="icon" data-icon="users"></span> Core Team</span>
          <p>${stage.roles}</p>
        </div>
        <div class="meta-card">
          <span class="meta-card-label"><span class="icon" data-icon="method"></span> Working Method</span>
          <p>${stage.method}</p>
        </div>
      </div>

      <section class="section" id="activities" aria-labelledby="activities-heading" tabindex="-1">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Execution Guide</p>
            <h2 id="activities-heading">Essential Activities</h2>
          </div>
          <p>Open any activity for a practical sequence, expected evidence, accountable owner, and the mistakes that most often undermine it.</p>
        </div>
        <div class="activity-list">
          ${stage.activities.map(activity => activityCard(activity, stage)).join("")}
        </div>
      </section>

      <section class="section" aria-labelledby="outcomes-heading">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Stage Outputs</p>
            <h2 id="outcomes-heading">What Should Exist Afterward</h2>
          </div>
        </div>
        <div class="track-grid">
          ${stage.outcomes.map((outcome, index) => `
            <article class="track-card" style="--track-color:${stage.color}">
              <span class="track-icon">${String(index + 1).padStart(2, "0")}</span>
              <h3>${titleCase(outcome)}</h3>
              <p>Versioned, owned, and linked to the evidence used at the ${stage.gate.title.toLowerCase()}.</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderLibrary(query = "", stageFilter = "all", tagFilter = "all") {
    const tags = [...new Set(allActivities.flatMap(activity => activity.tags))].sort();
    main.innerHTML = `
      <header class="page-head">
        <div>
          <p class="eyebrow">Reference Workspace</p>
          <h1>Activity Library</h1>
          <p>Search the complete lifecycle by activity, stage, discipline, output, consideration, or accountable owner.</p>
        </div>
      </header>
      <div class="filter-bar">
        <label class="field">
          <span class="icon" data-icon="search"></span>
          <input id="library-search" type="search" value="${query}" placeholder="Search the lifecycle...">
        </label>
        <label class="field">
          <span class="icon" data-icon="layers"></span>
          <select id="stage-filter" aria-label="Filter by stage">
            <option value="all">All Stages</option>
            ${data.stages.map(stage => `<option value="${stage.id}" ${stageFilter === stage.id ? "selected" : ""}>${stage.number}. ${titleCase(stage.title)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span class="icon" data-icon="filter"></span>
          <select id="tag-filter" aria-label="Filter by discipline">
            <option value="all">All Disciplines</option>
            ${tags.map(tag => `<option value="${tag}" ${tagFilter === tag ? "selected" : ""}>${titleCase(tag)}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="results-meta">
        <span id="library-count"></span>
        <span>Open a card for implementation detail</span>
      </div>
      <div class="library-grid" id="library-grid"></div>
    `;
    updateLibraryResults();
  }

  function updateLibraryResults() {
    const grid = document.querySelector("#library-grid");
    if (!grid) return;
    const query = document.querySelector("#library-search").value;
    const stageFilter = document.querySelector("#stage-filter").value;
    const tagFilter = document.querySelector("#tag-filter").value;

    const matches = allActivities.filter(activity => {
      return matchesSearch(activitySearchIndex.get(activity.id), query)
        && (stageFilter === "all" || activity.stage.id === stageFilter)
        && (tagFilter === "all" || activity.tags.includes(tagFilter));
    });

    document.querySelector("#library-count").textContent = `${matches.length} ${matches.length === 1 ? "activity" : "activities"}`;
    grid.innerHTML = matches.length ? matches.map(activity => `
      <article class="library-card" style="--card-color:${activity.stage.color}">
        <span class="library-card-stage">${String(activity.stage.number).padStart(2, "0")} · ${titleCase(activity.stage.title)}</span>
        <h3>${titleCase(activity.title)}</h3>
        <p>${activity.summary}</p>
        <div class="activity-tags">${activity.tags.map(tag => `<span class="tag">${titleCase(tag)}</span>`).join("")}</div>
        <div class="library-card-foot">
          <span class="tag">${titleCase(activity.owner)}</span>
          <button class="activity-open" type="button" data-activity="${activity.id}">Deep Dive <span class="icon" data-icon="arrow"></span></button>
        </div>
      </article>
    `).join("") : `
      <div class="empty-state">
        <span class="icon" data-icon="search"></span>
        <h3>No Matching Activities</h3>
        <p>Try a broader term or reset one of the filters.</p>
      </div>
    `;
    hydrateIcons(grid);
  }

  function renderGlossary() {
    const categories = [...new Set(glossary.map(entry => entry.category))].sort();
    const letters = [...new Set(glossary.map(entry => entry.term[0].toUpperCase()))].sort();
    main.innerHTML = `
      <header class="page-head glossary-head">
        <div>
          <p class="eyebrow">Agentic AI Reference</p>
          <h1>Agentic AI Glossary</h1>
          <p>Explore clear definitions for the architecture, retrieval, evaluation, security, governance, and operating concepts used throughout the delivery lifecycle.</p>
        </div>
        <div class="glossary-stat" aria-label="${glossary.length} glossary terms">
          <strong>${glossary.length}</strong>
          <span>Essential Terms</span>
        </div>
      </header>
      <div class="filter-bar glossary-filter-bar">
        <label class="field">
          <span class="icon" data-icon="search"></span>
          <input id="glossary-search" type="search" placeholder="Search terms and definitions..." autocomplete="off">
        </label>
        <label class="field">
          <span class="icon" data-icon="filter"></span>
          <select id="glossary-category" aria-label="Filter glossary by category">
            <option value="all">All Categories</option>
            ${categories.map(category => `<option value="${category}">${category}</option>`).join("")}
          </select>
        </label>
      </div>
      <nav class="alphabet-filter" aria-label="Filter glossary by first letter">
        <button class="alphabet-button is-active" type="button" data-glossary-letter="all" aria-pressed="true">All</button>
        ${letters.map(letter => `<button class="alphabet-button" type="button" data-glossary-letter="${letter}" aria-pressed="false">${letter}</button>`).join("")}
      </nav>
      <div class="results-meta">
        <span id="glossary-count"></span>
        <span>Select a term to reveal its definition and delivery context</span>
      </div>
      <div class="glossary-grid" id="glossary-grid"></div>
    `;
    main.dataset.glossaryLetter = "all";
    updateGlossaryResults();
  }

  function updateGlossaryResults() {
    const grid = document.querySelector("#glossary-grid");
    if (!grid) return;
    const query = document.querySelector("#glossary-search").value;
    const category = document.querySelector("#glossary-category").value;
    const letter = main.dataset.glossaryLetter || "all";
    const matches = glossary.filter(entry =>
      matchesSearch(glossarySearchIndex.get(entry.id), query)
      && (category === "all" || entry.category === category)
      && (letter === "all" || entry.term[0].toUpperCase() === letter)
    );

    document.querySelector("#glossary-count").textContent = `${matches.length} ${matches.length === 1 ? "term" : "terms"}`;
    grid.innerHTML = matches.length ? matches.map(entry => `
      <details class="glossary-card" id="glossary-${entry.id}">
        <summary data-glossary-toggle>
          <span>
            <span class="glossary-category">${entry.category}</span>
            <strong>${entry.term}</strong>
          </span>
          <span class="glossary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="glossary-body">
          <p class="glossary-definition">${entry.definition}</p>
          <div class="glossary-context">
            <span>Why It Matters</span>
            <p>${entry.context}</p>
          </div>
          ${entry.related.length ? `
            <div class="glossary-related">
              <span>Related Terms</span>
              <div>
                ${entry.related.map(term => {
                  const relatedEntry = glossaryByTerm.get(term);
                  return relatedEntry
                    ? `<button type="button" data-glossary="${relatedEntry.id}">${term}</button>`
                    : `<span>${term}</span>`;
                }).join("")}
              </div>
            </div>
          ` : ""}
        </div>
      </details>
    `).join("") : `
      <div class="empty-state">
        <span class="icon" data-icon="search"></span>
        <h3>No Matching Terms</h3>
        <p>Try a broader phrase, another category, or a different letter.</p>
      </div>
    `;
    hydrateIcons(grid);
  }

  function focusGlossaryTerm(id) {
    const entry = glossaryById.get(id);
    if (!entry) return;
    const search = document.querySelector("#glossary-search");
    const category = document.querySelector("#glossary-category");
    if (!search || !category) return;
    search.value = "";
    category.value = "all";
    main.dataset.glossaryLetter = "all";
    document.querySelectorAll("[data-glossary-letter]").forEach(button => {
      const active = button.dataset.glossaryLetter === "all";
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    updateGlossaryResults();
    const card = document.querySelector(`#glossary-${id}`);
    if (card) {
      card.open = true;
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.querySelector("summary").focus({ preventScroll: true });
    }
  }

  function openActivity(id) {
    const activity = activityById.get(id);
    if (!activity) return;
    const stage = activity.stage;
    const initials = activity.owner.split(/\s+/).map(word => word[0]).join("").slice(0, 2).toUpperCase();

    drawerContent.innerHTML = `
      <div class="drawer-head">
        <span class="drawer-stage">${String(stage.number).padStart(2, "0")} · ${titleCase(stage.title)}</span>
        <button class="drawer-close" type="button" data-action="close-drawer" aria-label="Close details">
          <span class="icon" data-icon="close"></span>
        </button>
      </div>
      <div class="drawer-main" style="--drawer-color:${stage.color}">
        <h2 id="drawer-title">${titleCase(activity.title)}</h2>
        <p class="drawer-lead">${activity.summary}</p>
        <div class="activity-tags">${activity.tags.map(tag => `<span class="tag">${titleCase(tag)}</span>`).join("")}</div>

        <div class="drawer-owner">
          <span class="owner-avatar">${initials}</span>
          <span><strong>Accountable Lead</strong><span>${titleCase(activity.owner)}</span></span>
        </div>

        <div class="drawer-tabs" role="tablist" aria-label="Activity details">
          <button class="drawer-tab is-active" type="button" role="tab" aria-selected="true" data-drawer-tab="overview">Overview</button>
          <button class="drawer-tab" type="button" role="tab" aria-selected="false" data-drawer-tab="steps">Action Plan</button>
          <button class="drawer-tab" type="button" role="tab" aria-selected="false" data-drawer-tab="evidence">Evidence</button>
        </div>

        <div class="drawer-panel" data-drawer-panel="overview">
          <section class="drawer-section simple-explanation">
            <span class="explanation-label">Explanation</span>
            <p>${activity.explanation}</p>
          </section>
          ${activity.flow ? `
            <section class="drawer-section">
              <h3>${titleCase(activity.flow.title)}</h3>
              <div class="rag-flow">
                ${activity.flow.items.map((item, index) => `
                  <div class="rag-flow-item">
                    <span class="rag-flow-number">${index + 1}</span>
                    <span><strong>${titleCase(item.title)}</strong><small>${item.detail}</small></span>
                  </div>
                `).join("")}
              </div>
              <p class="rag-flow-note">${activity.flow.note}</p>
            </section>
          ` : ""}
          <section class="drawer-section">
            <h3>Why It Matters</h3>
            <p>${activity.summary} Skipping this work pushes uncertainty into later stages, where it becomes harder and more expensive to correct.</p>
          </section>
          <section class="drawer-section">
            <h3>Key Considerations</h3>
            <ul class="consideration-list">${activity.considerations.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
        </div>

        <div class="drawer-panel" data-drawer-panel="steps" hidden>
          <section class="drawer-section">
            <h3>Recommended Sequence</h3>
            <ol class="step-list">${activity.steps.map(step => `<li>${step}</li>`).join("")}</ol>
          </section>
        </div>

        <div class="drawer-panel" data-drawer-panel="evidence" hidden>
          <section class="drawer-section">
            <h3>Expected Outputs</h3>
            <ul class="output-list">${activity.outputs.map(output => `<li>${output}</li>`).join("")}</ul>
          </section>
          <section class="drawer-section">
            <h3>Definition of Done</h3>
            <div class="evidence-box">
              <strong>Evidence, Not Assertion</strong>
              <p>${activity.evidence}</p>
            </div>
          </section>
        </div>

        <div class="drawer-actions">
          <button class="button" type="button" data-stage="${stage.id}">Open Stage</button>
        </div>
      </div>
    `;
    drawer.style.setProperty("--drawer-color", stage.color);
    hydrateIcons(drawer);
    drawerBackdrop.hidden = false;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    drawer.querySelector(".drawer-close").focus();
  }

  function openWorkstream(id) {
    const track = trackById.get(id);
    if (!track) return;
    const initials = track.title.split(/\s+/).map(word => word[0]).join("").slice(0, 2).toUpperCase();

    drawerContent.innerHTML = `
      <div class="drawer-head">
        <span class="drawer-stage">Continuous Workstream · Always On</span>
        <button class="drawer-close" type="button" data-action="close-drawer" aria-label="Close details">
          <span class="icon" data-icon="close"></span>
        </button>
      </div>
      <div class="drawer-main workstream-drawer" style="--drawer-color:${track.color}">
        <span class="workstream-hero-icon icon" data-icon="${track.icon}"></span>
        <h2 id="drawer-title">${titleCase(track.title)}</h2>
        <p class="drawer-lead">${track.summary}</p>

        <div class="drawer-owner">
          <span class="owner-avatar">${initials}</span>
          <span><strong>Accountable Ownership</strong><span>${titleCase(track.accountable)}</span></span>
        </div>

        <div class="drawer-tabs" role="tablist" aria-label="${track.title} details">
          <button class="drawer-tab is-active" type="button" role="tab" aria-selected="true" data-drawer-tab="overview">Overview</button>
          <button class="drawer-tab" type="button" role="tab" aria-selected="false" data-drawer-tab="lifecycle">Lifecycle Lens</button>
          <button class="drawer-tab" type="button" role="tab" aria-selected="false" data-drawer-tab="evidence">Evidence</button>
        </div>

        <div class="drawer-panel" data-drawer-panel="overview">
          <section class="drawer-section simple-explanation">
            <span class="explanation-label">Explanation</span>
            <p>${track.explanation}</p>
          </section>
          <section class="drawer-section">
            <h3>Objective</h3>
            <p>${track.objective}</p>
          </section>
          <section class="drawer-section">
            <h3>Core Responsibilities</h3>
            <ul class="workstream-list">${track.responsibilities.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
          <section class="drawer-section">
            <h3>Key Partners</h3>
            <div class="partner-cloud">${track.partners.map(partner => `<span class="tag">${titleCase(partner)}</span>`).join("")}</div>
          </section>
        </div>

        <div class="drawer-panel" data-drawer-panel="lifecycle" hidden>
          <section class="drawer-section">
            <h3>Questions to Ask at Every Stage</h3>
            <p>This workstream continues throughout delivery. Use these questions to keep it active as the product evolves.</p>
            <div class="lifecycle-lens">
              ${track.lifecycle.map(([stage, question], index) => `
                <article class="lifecycle-lens-item">
                  <span class="lens-number">${String(index + 1).padStart(2, "0")}</span>
                  <span><strong>${titleCase(stage)}</strong><p>${question}</p></span>
                </article>
              `).join("")}
            </div>
          </section>
        </div>

        <div class="drawer-panel" data-drawer-panel="evidence" hidden>
          <section class="drawer-section">
            <h3>Evidence to Maintain</h3>
            <ul class="output-list">${track.evidence.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
          <section class="drawer-section">
            <h3>Signals to Monitor</h3>
            <ul class="signal-list">${track.indicators.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
          <section class="drawer-section">
            <h3>Common Failure Patterns</h3>
            <ul class="consideration-list">${track.pitfalls.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
        </div>
      </div>
    `;
    drawer.style.setProperty("--drawer-color", track.color);
    hydrateIcons(drawer);
    drawerBackdrop.hidden = false;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    drawer.querySelector(".drawer-close").focus();
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    drawerBackdrop.hidden = true;
    document.body.style.overflow = "";
  }

  function openSearch() {
    if (!searchDialog.open) searchDialog.showModal();
    searchInput.value = "";
    updateSearchResults("");
    setTimeout(() => searchInput.focus(), 0);
  }

  function updateSearchResults(query) {
    const normalized = query.trim();
    const glossaryMatches = normalized
      ? glossary.filter(entry => matchesSearch(glossarySearchIndex.get(entry.id), normalized)).slice(0, 8)
      : [];
    const trackMatches = data.continuousTracks.filter(track =>
      matchesSearch(trackSearchIndex.get(track.id), normalized)
    ).slice(0, normalized ? 5 : 2);
    const stageMatches = data.stages.filter(stage =>
      matchesSearch(stageSearchIndex.get(stage.id), normalized)
    ).slice(0, normalized ? 4 : 3);
    const activityMatches = allActivities.filter(activity =>
      matchesSearch(activitySearchIndex.get(activity.id), normalized)
    ).slice(0, normalized ? 8 : 5);

    searchResults.innerHTML = `
      ${glossaryMatches.map(entry => `
        <button class="search-result" type="button" data-glossary="${entry.id}">
          <span class="search-result-icon glossary-result-icon">${entry.term[0].toUpperCase()}</span>
          <span><strong>${entry.term}</strong><small>${entry.definition}</small></span>
          <span class="search-result-type">Glossary</span>
        </button>
      `).join("")}
      ${trackMatches.map(track => `
        <button class="search-result" type="button" data-workstream="${track.id}">
          <span class="search-result-icon icon" style="--result-color:${track.color}" data-icon="${track.icon}"></span>
          <span><strong>${titleCase(track.title)}</strong><small>Continuous across all nine lifecycle stages</small></span>
          <span class="search-result-type">Workstream</span>
        </button>
      `).join("")}
      ${stageMatches.map(stage => `
        <button class="search-result" type="button" data-stage="${stage.id}">
          <span class="search-result-icon" style="--result-color:${stage.color}">${String(stage.number).padStart(2, "0")}</span>
          <span><strong>${titleCase(stage.title)}</strong><small>${titleCase(stage.phase)}</small></span>
          <span class="search-result-type">Stage</span>
        </button>
      `).join("")}
      ${activityMatches.map(activity => `
        <button class="search-result" type="button" data-activity="${activity.id}">
          <span class="search-result-icon" style="--result-color:${activity.stage.color}">A</span>
          <span><strong>${titleCase(activity.title)}</strong><small>${titleCase(activity.stage.title)} · ${titleCase(activity.owner)}</small></span>
          <span class="search-result-type">Activity</span>
        </button>
      `).join("")}
      ${!glossaryMatches.length && !trackMatches.length && !stageMatches.length && !activityMatches.length ? `
        <div class="empty-state"><span class="icon" data-icon="search"></span><h3>No Results</h3><p>Try a term, role, output, discipline, or stage name.</p></div>
      ` : ""}
    `;
    hydrateIcons(searchResults);
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("agentic-atlas-theme", theme);
    const themeIcon = document.querySelector("#theme-toggle [data-icon]");
    themeIcon.dataset.icon = theme === "dark" ? "moon" : "sun";
    hydrateIcons(document.querySelector("#theme-toggle"));
  }

  document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    const stageButton = event.target.closest("button[data-stage], .stage-card[data-stage]");
    const activityButton = event.target.closest("[data-activity]");
    const workstreamButton = event.target.closest("[data-workstream]");
    const glossaryButton = event.target.closest("[data-glossary]");
    const glossaryLetterButton = event.target.closest("[data-glossary-letter]");
    const glossaryToggle = event.target.closest("[data-glossary-toggle]");
    const actionButton = event.target.closest("[data-action]");
    const scrollButton = event.target.closest("[data-scroll]");
    const tabButton = event.target.closest("[data-drawer-tab]");

    if (glossaryToggle) {
      event.preventDefault();
      const card = glossaryToggle.closest(".glossary-card");
      if (card) card.open = !card.open;
      return;
    }
    if (glossaryButton) {
      if (searchDialog.open) searchDialog.close();
      navigate("glossary", glossaryButton.dataset.glossary);
      return;
    }
    if (glossaryLetterButton) {
      main.dataset.glossaryLetter = glossaryLetterButton.dataset.glossaryLetter;
      document.querySelectorAll("[data-glossary-letter]").forEach(button => {
        const active = button === glossaryLetterButton;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      updateGlossaryResults();
      return;
    }
    if (activityButton) {
      if (searchDialog.open) searchDialog.close();
      openActivity(activityButton.dataset.activity);
      return;
    }
    if (workstreamButton) {
      if (searchDialog.open) searchDialog.close();
      openWorkstream(workstreamButton.dataset.workstream);
      return;
    }
    if (stageButton) {
      if (searchDialog.open) searchDialog.close();
      closeDrawer();
      navigate("stage", stageButton.dataset.stage);
      return;
    }
    if (viewButton) {
      closeDrawer();
      navigate(viewButton.dataset.view);
      return;
    }
    if (scrollButton) {
      const target = document.getElementById(scrollButton.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.focus({ preventScroll: true });
      }
      return;
    }
    if (tabButton) {
      const tab = tabButton.dataset.drawerTab;
      drawer.querySelectorAll("[data-drawer-tab]").forEach(button => {
        const active = button.dataset.drawerTab === tab;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
      });
      drawer.querySelectorAll("[data-drawer-panel]").forEach(panel => {
        panel.hidden = panel.dataset.drawerPanel !== tab;
      });
      return;
    }
    if (actionButton) {
      if (actionButton.dataset.action === "close-drawer") closeDrawer();
    }
  });

  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
    const card = event.target.closest(".stage-card, .track-card");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      if (card.matches(".stage-card")) navigate("stage", card.dataset.stage);
      else openWorkstream(card.dataset.workstream);
    }
  });

  main.addEventListener("input", event => {
    if (event.target.id === "library-search") updateLibraryResults();
    if (event.target.id === "glossary-search") updateGlossaryResults();
  });
  main.addEventListener("change", event => {
    if (event.target.id === "stage-filter" || event.target.id === "tag-filter") updateLibraryResults();
    if (event.target.id === "glossary-category") updateGlossaryResults();
  });
  searchInput.addEventListener("input", () => updateSearchResults(searchInput.value));
  document.querySelector("#search-trigger").addEventListener("click", openSearch);
  drawerBackdrop.addEventListener("click", closeDrawer);
  mobileMenu.addEventListener("click", () => {
    const open = rail.classList.toggle("is-open");
    mobileMenu.setAttribute("aria-expanded", String(open));
  });
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
  window.addEventListener("popstate", routeFromHash);

  function routeFromHash() {
    const hash = location.hash.replace(/^#/, "");
    if (hash.startsWith("stage/")) navigate("stage", hash.split("/")[1], false);
    else if (hash.startsWith("glossary/")) navigate("glossary", hash.split("/")[1], false);
    else if (["library", "glossary", "overview"].includes(hash)) navigate(hash, null, false);
    else navigate("overview", null, false);
  }

  const savedTheme = localStorage.getItem("agentic-atlas-theme");
  const initialTheme = savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(initialTheme);
  renderRail();
  hydrateIcons();
  routeFromHash();
})();
