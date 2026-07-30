const SIMPLE_EXPLANATIONS = {
  "problem-framing": "Clearly describe the problem before choosing any technology. The team identifies who experiences the problem, what happens today, and what a better result would look like.",
  "value-baseline": "Measure how the work performs today so there is a fair before-and-after comparison. This shows whether the new solution actually saves time, improves quality, reduces risk, or creates other value.",
  "agency-fit": "Decide whether the work truly needs an AI agent that can make choices and take actions. If a search tool, fixed workflow, or ordinary automation can solve it more safely, use the simpler option.",
  "feasibility-risk": "Check whether the idea can realistically be built and used safely. The team looks for blockers involving data, technology, integrations, law, security, cost, operations, and people.",
  "stakeholders-governance": "Decide who owns the product and who can make or approve important decisions. This prevents confusion about funding, risk, incidents, data, and production responsibility.",

  "requirements": "Write down what the solution must do and how well it must do it. This includes user needs as well as expectations for speed, security, privacy, reliability, accessibility, and cost.",
  "journey-design": "Plan what the user will see and do from the beginning of a task to the end. This includes how the agent shows progress, explains uncertainty, asks permission, handles errors, and lets the user correct it.",
  "autonomy-oversight": "Decide what the agent may do by itself and what still needs human confirmation or approval. More serious or irreversible actions should have stronger human control.",
  "agent-behavior": "Create a clear job description for each agent. Define its goal, the information and tools it may use, where its responsibility ends, and when it must stop or ask for help.",
  "evaluation-design": "Decide how the team will prove that the solution works before building it. Choose realistic test cases, success measures, safety checks, and the minimum scores required for release.",

  "data-inventory": "Make a complete list of the information the agent may use. For every source, identify who owns it, whether it is trustworthy, how sensitive it is, and whether AI use is permitted.",
  "data-access": "Give the system only the data access it needs, using secure identities and permissions. The same access rules that protect the original information must continue to protect what the agent retrieves.",
  "curation-metadata": "Clean and organize source material so the agent can understand and use it correctly. Remove outdated or duplicate content and add labels such as owner, date, topic, permissions, and original source.",
  "retrieval-pipeline": "Turn approved source content into a searchable knowledge base, then connect that knowledge base to the model. When a user asks a question, the system scores and ranks possible chunks, adds the best authorized evidence to the model's prompt, and asks the model to answer from it. The team tests whether those scores actually select useful evidence instead of treating a similarity score as proof of quality. This complete pattern is called Retrieval-Augmented Generation, or RAG.",
  "knowledge-operations": "Create the ongoing process that keeps the agent's knowledge accurate and current. This covers adding changes, detecting failures, removing deleted content, and rebuilding indexes when needed.",

  "solution-architecture": "Draw the blueprint for the complete solution. Show how users, agents, models, data, tools, policies, and external systems connect, including what should happen when a component fails.",
  "model-selection": "Test several AI models on the actual work and choose the ones that best meet the need. The strongest choice balances answer quality, safety, speed, privacy, availability, and cost.",
  "platform-provisioning": "Create the cloud projects, networks, identities, environments, storage, and other services the team needs. Set them up through repeatable automation rather than one-off manual changes.",
  "engineering-system": "Establish the shared way the team will build and release the product. This includes repositories, code review, versioning, automated tests, security scans, deployment rules, and rollback.",
  "threat-model": "Imagine how someone could misuse, trick, attack, or steal information from the system. Then design controls and tests that prevent, detect, and contain those scenarios.",

  "agent-implementation": "Write the software that makes the agent's workflow run. This controls how it plans, remembers state, chooses tools, hands work to other agents, retries failures, and knows when to stop.",
  "prompt-policy": "Write the instructions that guide the model and add hard rules around them. Prompts shape behavior, while software-enforced policies prevent actions the model must never be trusted to police by itself.",
  "tool-development": "Build safe connectors that let the agent read information or perform actions in other systems. Each tool should accept clear inputs, check permission, limit its power, report errors, and record what happened.",
  "experience-integration": "Build the interface through which people work with the agent. Users should be able to understand its status and evidence, approve important actions, correct mistakes, and recover when something fails.",
  "telemetry-controls": "Record enough information to understand each run and control the system in production. This includes timing, model and tool calls, costs, errors, policy decisions, limits, feature switches, and emergency shutoffs.",

  "offline-evaluation": "Run the system against a controlled set of realistic test cases before exposing it to users. Record exactly which system version, test data, metrics, graders, and pass thresholds produced each score so results remain reproducible and comparable as the product and its evaluation methods evolve.",
  "safety-red-team": "Deliberately try to make the system behave unsafely or break its rules. Test attacks, misleading content, data theft attempts, harmful requests, and unauthorized actions so weaknesses can be fixed before release.",
  "human-quality-review": "Ask representative users and qualified experts to judge the system on realistic work. This reveals whether it is useful, understandable, trustworthy, and easy to supervise—not just technically correct.",
  "performance-resilience": "Test whether the system stays fast, affordable, and reliable under real demand and failures. Simulate busy periods, unavailable models, broken tools, network problems, and quota limits.",
  "operational-readiness": "Confirm that people and processes are ready to support the product in production. Teams should know how to monitor it, answer users, handle incidents, disable risky features, restore service, and roll back a release.",

  "release-engineering": "Package the exact tested version of every component and move it safely into production. The release should be traceable, repeatable, approved, and easy to reverse if something goes wrong.",
  "progressive-rollout": "Introduce the system to a small, controlled group before giving it to everyone. Watch real outcomes and expand only when the evidence says quality, safety, cost, and support are stable.",
  "training-change": "Prepare people to use the new workflow responsibly. Explain what the agent can and cannot do, how work and roles will change, how to spot mistakes, and where to get help.",
  "support-transition": "Hand the finished service to the teams that will run and support it over time. Give them the access, dashboards, instructions, contacts, and practice they need to solve problems.",
  "production-validation": "Check whether the live system delivers the promised results with real users and data. Compare actual value, quality, risk, adoption, speed, incidents, and cost with the original targets.",

  "system-monitoring": "Continuously watch both the technical service and the quality of the agent's behavior. Look for downtime, slow responses, rising costs, bad tool actions, policy violations, drift, and user problems.",
  "incident-management": "Use a prepared process when the AI system causes or nearly causes harm, exposes data, takes a wrong action, or fails badly. Contain the problem, investigate it, communicate clearly, and prevent it from happening again.",
  "continuous-change": "Update models, prompts, architecture, retrieval, tools, policies, knowledge, and evaluation criteria through a controlled process. Link each change to versioned test results, release it gradually, monitor it, and preserve a meaningful comparison with earlier versions and a way to roll back.",
  "value-cost-optimization": "Find ways to deliver better results with less time, computing, and expense. Savings only count when the system still meets its quality, safety, reliability, and user-experience requirements.",
  "periodic-assurance": "Recheck the product on a regular schedule instead of relying forever on its original approval. Confirm that its users, purpose, data, vendors, risks, controls, and legal obligations have not changed in unsafe ways.",

  "retirement-decision": "Decide when the product should be stopped or replaced because it no longer provides enough value, is too risky or expensive, duplicates another service, or can no longer be supported.",
  "user-migration": "Move people and business processes away from the retiring system without interrupting important work. Provide a replacement or safe manual option, clear communication, training, and migration support.",
  "data-disposition": "Decide what information must be kept and securely remove everything else. This includes source copies, indexes, embeddings, agent memory, caches, logs, backups, and data held by vendors.",
  "decommission": "Switch off the service and remove everything that could still run, connect, expose data, or create cost. Revoke access, disable tools and integrations, delete infrastructure, and close vendor services in a controlled order.",
  "lessons-reuse": "Write down what worked, what failed, and what the organization should do differently next time. Turn useful tests, patterns, controls, and insights into reusable assets for future AI products."
};

const ACTIVITY_FLOWS = {
  "retrieval-pipeline": {
    title: "How the RAG flow works",
    note: "RAG gives the model relevant evidence at runtime; it does not retrain the model on the knowledge base.",
    items: [
      { title: "Governed sources", detail: "Start with approved documents, records, APIs, and other authoritative content." },
      { title: "Parse and chunk", detail: "Extract the content and divide it into useful passages while preserving source and section context." },
      { title: "Embed and index", detail: "Create vector embeddings when semantic search helps, and build a vector, lexical, hybrid, or graph index." },
      { title: "Retrieve and rerank", detail: "Use the user's question, permissions, filters, top-K settings, and reranking to select the strongest chunks." },
      { title: "Add prompt context", detail: "Insert the selected chunks and their source references into the model's context at runtime." },
      { title: "Generate and cite", detail: "Ask the model to answer from that context, show citations, and evaluate whether the evidence supports the response." }
    ]
  }
};

const A = (id, title, summary, owner, tags, steps, outputs, considerations, evidence) => ({
  id, title, summary, explanation: SIMPLE_EXPLANATIONS[id], flow: ACTIVITY_FLOWS[id] || null,
  owner, tags, steps, outputs, considerations, evidence
});

const WORKSTREAM_DETAILS = {
  governance: {
    explanation: "Governance is how the organization stays in control of the AI product. It makes clear who may decide what, which evidence is required, who accepts risk, and how every important choice can be traced later.",
    objective: "Keep the product aligned to its approved purpose, policies, obligations, and risk appetite while enabling timely, accountable decisions.",
    accountable: "Business product owner or designated AI system owner",
    partners: ["Executive sponsor", "Enterprise risk", "Legal and compliance", "Architecture", "Data owners", "Security", "Internal audit"],
    responsibilities: [
      "Define accountable owners, decision rights, approval thresholds, and escalation paths.",
      "Classify the use case and determine which policies, regulations, and assurance obligations apply.",
      "Maintain traceability from requirements and risks to controls, tests, approvals, releases, and incidents.",
      "Operate lifecycle gates using current evidence, explicit exceptions, and time-limited risk acceptance.",
      "Review actual use, material changes, residual risk, and continued fitness on a defined cadence."
    ],
    lifecycle: [
      ["Discover", "Who owns the outcome, and is the proposed use permitted and worth governing?"],
      ["Define", "Which decisions require approval, and what evidence will each gate require?"],
      ["Knowledge", "Who authorizes each source, purpose, retention rule, and data exception?"],
      ["Foundation", "Do architecture, vendors, models, and controls satisfy enterprise policy?"],
      ["Build", "Can every prompt, policy, tool, knowledge, and code change be traced to an owner?"],
      ["Evaluate", "Do results support release, and who accepts any documented residual risk?"],
      ["Release", "Is the deployed version approved, attributable, reversible, and within scope?"],
      ["Operate", "Has actual use, regulation, risk, or system behavior changed enough to require review?"],
      ["Retire", "Who confirms obligations, records, dependencies, and closure evidence are complete?"]
    ],
    evidence: ["System and use-case record", "Lifecycle RACI and decision log", "Risk, control, and requirement traceability", "Gate approvals and exception register", "Periodic assurance and continued-use decisions"],
    indicators: ["Overdue approvals or exceptions", "Unowned risks and controls", "Changes without linked evidence", "Use outside approved purpose or population", "Repeat findings and unresolved audit actions"],
    pitfalls: ["Treating governance as paperwork after engineering", "Committees with shared discussion but no accountable decision-maker", "Permanent exceptions with no expiry or compensating control", "Reusing an old approval after the purpose, model, data, tools, or autonomy changes"]
  },
  security: {
    explanation: "Security and privacy protect people, information, systems, and business operations from misuse or exposure. For agents, this also means stopping untrusted content from manipulating the model or tools into doing something unauthorized.",
    objective: "Prevent, detect, contain, and recover from unauthorized access, data disclosure, malicious instructions, unsafe tool use, vulnerable dependencies, and privacy violations.",
    accountable: "Security architect, with the data controller or privacy owner accountable for privacy obligations",
    partners: ["Product and engineering", "Identity and platform teams", "Data owners", "Privacy and legal", "Security operations", "AI red team", "Third-party risk"],
    responsibilities: [
      "Threat-model users, content, models, memory, agents, tools, identities, dependencies, and trust boundaries.",
      "Enforce least privilege, user-context authorization, network boundaries, secrets protection, and separation of environments.",
      "Classify and minimize data; control collection, prompts, retrieval, traces, retention, residency, deletion, and vendor processing.",
      "Secure the software and model supply chain through approved packages, licenses, provenance, scanning, pinning, and patching.",
      "Test prompt injection, exfiltration, confused-deputy behavior, excessive agency, denial of service, and incident containment."
    ],
    lifecycle: [
      ["Discover", "What could be exposed or harmed, and is the proposed use acceptable for this data class?"],
      ["Define", "What security, privacy, identity, retention, and action-authorization requirements apply?"],
      ["Knowledge", "Can source permissions, deletion, provenance, and sensitive-data controls survive ingestion and retrieval?"],
      ["Foundation", "Where are the trust boundaries, threats, secrets, networks, identities, and third parties?"],
      ["Build", "Are prompts and tool outputs treated as untrusted, and are hard controls enforced outside the model?"],
      ["Evaluate", "Can adversaries cause unauthorized disclosure, action, persistence, cost, or loss of availability?"],
      ["Release", "Are artifacts, configurations, credentials, attestations, and rollback controls production-ready?"],
      ["Operate", "Can monitoring detect attacks and privacy events, and can responders contain them quickly?"],
      ["Retire", "Have access, secrets, integrations, data copies, indexes, memory, logs, and vendor holdings been removed?"]
    ],
    evidence: ["Threat model and data-flow diagrams", "Privacy impact and data-processing records", "Access, authorization, and deletion test results", "Dependency inventory and security attestations", "Red-team findings, incident runbooks, and recovery exercises"],
    indicators: ["Unauthorized or denied tool calls", "Prompt-injection and policy events", "Sensitive-data findings in prompts, outputs, or traces", "Critical vulnerabilities and patch age", "Time to detect, contain, revoke, and recover"],
    pitfalls: ["Using prompts as an authorization boundary", "Flattening source permissions in a shared vector index", "Logging full sensitive conversations by default", "Giving an agent broad tools because the model is expected to behave", "Testing only direct user attacks while ignoring malicious retrieved content"]
  },
  "responsible-ai": {
    explanation: "Responsible AI is the discipline of making sure the product is appropriate for people and society, not merely technically impressive. It examines who may benefit or be harmed, how much control people retain, and whether the system is understandable and fair enough for its context.",
    objective: "Deliver useful AI while protecting human agency, safety, fairness, accessibility, transparency, contestability, and accountability.",
    accountable: "Product owner, supported by a Responsible AI or model-risk lead",
    partners: ["Domain experts", "UX research and accessibility", "Legal and compliance", "Data science and evaluation", "Security and safety", "Affected users and communities"],
    responsibilities: [
      "Assess intended purpose, affected people, foreseeable misuse, severity, reversibility, and prohibited applications.",
      "Set proportionate autonomy, meaningful human oversight, escalation, appeal, correction, and safe-stop mechanisms.",
      "Design transparent experiences that communicate capability, limitation, uncertainty, evidence, and system involvement.",
      "Evaluate quality, fairness, safety, accessibility, and reliance across relevant user, language, and scenario slices.",
      "Monitor emerging harms, distribution shifts, complaints, near misses, and use beyond the approved purpose."
    ],
    lifecycle: [
      ["Discover", "Is this an appropriate use of AI, who is affected, and what harms or power imbalances could result?"],
      ["Define", "What autonomy, oversight, transparency, accessibility, appeal, and prohibited behaviors are required?"],
      ["Knowledge", "Whose perspectives are missing, and could source quality or representation create unequal outcomes?"],
      ["Foundation", "Do the selected models and vendors support the required safety, language, accessibility, and transparency needs?"],
      ["Build", "Can users understand, question, correct, stop, and recover from the agent's behavior?"],
      ["Evaluate", "Do quality and harm measures pass for every material user and scenario slice, not just on average?"],
      ["Release", "Are users informed and trained, and is rollout constrained enough to detect unexpected impact?"],
      ["Operate", "Are complaints, overrides, reliance, emerging harms, and purpose drift being reviewed?"],
      ["Retire", "Are users supported through transition, and can prior consequential outcomes still be challenged or corrected?"]
    ],
    evidence: ["AI impact assessment and prohibited-use decision", "Autonomy and human-oversight matrix", "Transparency, accessibility, and UX research findings", "Slice-based quality, fairness, and safety evaluations", "Harm monitoring, complaints, appeals, and remediation records"],
    indicators: ["Quality gaps between user or scenario slices", "Override, correction, abstention, and escalation rates", "Accessibility defects and task-completion gaps", "User understanding and appropriate-reliance measures", "Reported harms, complaints, appeals, and near misses"],
    pitfalls: ["Reducing Responsible AI to a generic principles checklist", "Assuming a human approval click automatically creates meaningful oversight", "Reporting only average accuracy", "Using fluent explanations as proof of correctness", "Monitoring technical failures while ignoring human and societal impact"]
  },
  finops: {
    explanation: "FinOps connects AI spending to useful outcomes. It helps the team understand what each successful task costs, control unpredictable model and agent consumption, and choose designs that are fast and efficient without sacrificing safety or quality.",
    objective: "Sustain positive unit economics and responsible resource use through measurable budgets, capacity planning, architectural efficiency, and benefits realization.",
    accountable: "Product owner for value and budget, with an engineering or FinOps lead for consumption",
    partners: ["Finance", "Platform and cloud teams", "AI and data engineering", "Procurement", "SRE and operations", "Sustainability specialists", "Business analytics"],
    responsibilities: [
      "Establish the current cost baseline, value hypothesis, budget, adoption assumptions, and total cost of ownership.",
      "Model and measure consumption across tokens, models, retrieval, tools, storage, compute, networking, observability, and human review.",
      "Apply budgets, quotas, rate limits, caching, routing, bounded loops, context limits, and capacity controls.",
      "Optimize cost and latency per successful business outcome rather than per isolated model call.",
      "Track realized benefits, forecast demand, manage vendor commitments, and consider energy and resource efficiency."
    ],
    lifecycle: [
      ["Discover", "What is the current cost of the workflow, what value is expected, and what spend would still make the case viable?"],
      ["Define", "What unit-cost, latency, capacity, budget, and sustainability guardrails must the product meet?"],
      ["Knowledge", "What will ingestion, embedding, storage, refresh, retrieval, reranking, and data transfer cost?"],
      ["Foundation", "Which model, region, architecture, and commercial terms best balance quality, resilience, speed, and cost?"],
      ["Build", "Are context, routing, retries, loops, tool calls, caching, and telemetry designed to prevent waste?"],
      ["Evaluate", "What do realistic load, long-tail latency, failure, and successful-task economics show?"],
      ["Release", "Are cohort limits, alerts, forecasts, and budget owners ready for real demand?"],
      ["Operate", "Is unit value improving, and do demand, provider pricing, or quality changes require optimization?"],
      ["Retire", "Have contracts, resources, indexes, storage, monitoring, and residual charges been closed?"]
    ],
    evidence: ["Baseline and benefits model", "Total-cost and capacity forecast", "Cost allocation and unit-economics dashboard", "Performance, load, and cost benchmark", "Optimization experiments and benefits-realization reports"],
    indicators: ["Cost per successful outcome", "Tokens, latency, and tool calls per task", "Budget variance and forecast accuracy", "Cache, routing, retry, and fallback efficiency", "Realized benefit, adoption, and avoided-work measures"],
    pitfalls: ["Optimizing token price while ignoring failed tasks and human rework", "Allowing retries or multi-agent loops to multiply silently", "Treating cloud spend as the full cost while excluding review, support, change, and compliance", "Caching without freshness, privacy, and permission controls", "Claiming benefits from activity counts rather than business outcomes"]
  },
  adoption: {
    explanation: "People and adoption make the new product part of real work. This workstream prepares users, managers, support teams, and process owners for changed responsibilities so the agent is used appropriately and does not become an unsupported demonstration.",
    objective: "Achieve sustained, safe use by aligning workflows, roles, skills, incentives, communications, support, and feedback with the product's intended value.",
    accountable: "Business change owner or product owner",
    partners: ["Representative users", "People managers", "Learning and development", "Communications", "UX research", "Service desk and operations", "HR and employee relations"],
    responsibilities: [
      "Map affected users, roles, workflows, responsibilities, incentives, concerns, and readiness.",
      "Co-design the experience and operating process with representative users rather than imposing a technical workflow.",
      "Provide scenario-based training on capability, limitation, verification, oversight, escalation, and failure recovery.",
      "Prepare communications, champions, managers, office hours, support tiers, knowledge articles, and feedback channels.",
      "Measure adoption, appropriate use, workarounds, trust, workload, proficiency, satisfaction, and realized outcomes."
    ],
    lifecycle: [
      ["Discover", "Whose work changes, what problem do they recognize, and who will sponsor the behavioral change?"],
      ["Define", "How should the future workflow, responsibilities, controls, accessibility, and support experience work?"],
      ["Knowledge", "Who owns source content, and how will experts maintain and correct organizational knowledge?"],
      ["Foundation", "Are environments, access, devices, channels, support capacity, and local constraints ready for users?"],
      ["Build", "Have representative users shaped the interface, guidance, feedback, and recovery paths?"],
      ["Evaluate", "Can users complete real work, recognize errors, avoid overreliance, and escalate without coaching?"],
      ["Release", "Are training, communications, champions, managers, support, and pilot cohorts ready?"],
      ["Operate", "Are adoption, proficiency, workarounds, feedback, workload, and outcome measures driving improvements?"],
      ["Retire", "How will users, processes, responsibilities, integrations, and historical decisions transition safely?"]
    ],
    evidence: ["Stakeholder and change-impact assessment", "Future-state workflow and role map", "Training, communications, and manager toolkit", "Support model, knowledge articles, and service acceptance", "Adoption, proficiency, feedback, and benefits dashboard"],
    indicators: ["Active and repeat use in intended workflows", "Task success, proficiency, and time to competence", "Verification, correction, override, and escalation behavior", "Support demand, workarounds, abandonment, and shadow use", "User workload, confidence, satisfaction, and realized outcomes"],
    pitfalls: ["Treating launch communications as change management", "Training only the happy path instead of limitations and failure recognition", "Measuring logins instead of useful and appropriate use", "Ignoring role anxiety, job impact, incentives, and manager behavior", "Leaving the build team as the permanent undocumented support organization"]
  }
};

window.LIFECYCLE_DATA = {
  continuousTracks: [
    {
      id: "governance",
      title: "Governance & Assurance",
      icon: "scale",
      color: "#5576b8",
      summary: "Decision rights, evidence, approvals, traceability, and policy alignment at every gate.",
      ...WORKSTREAM_DETAILS.governance
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: "shield",
      color: "#167a67",
      summary: "Threat modeling, identity, data protection, supply chain controls, and adversarial testing by design.",
      ...WORKSTREAM_DETAILS.security
    },
    {
      id: "responsible-ai",
      title: "Responsible AI",
      icon: "spark",
      color: "#a66256",
      summary: "Fairness, transparency, human agency, safety, accessibility, and accountable use throughout delivery.",
      ...WORKSTREAM_DETAILS["responsible-ai"]
    },
    {
      id: "finops",
      title: "FinOps & Sustainability",
      icon: "chart",
      color: "#d39834",
      summary: "Token economics, capacity, budgets, latency, carbon-aware choices, and value realization.",
      ...WORKSTREAM_DETAILS.finops
    },
    {
      id: "adoption",
      title: "People & Adoption",
      icon: "people",
      color: "#72466b",
      summary: "Role changes, training, communications, support, feedback, and durable operating ownership.",
      ...WORKSTREAM_DETAILS.adoption
    }
  ],

  principles: [
    "Prove the workflow before adding autonomy.",
    "Grant every agent and tool the least privilege it needs.",
    "Evaluate the whole system, not only the model.",
    "Design human oversight around consequence, not convenience.",
    "Treat prompts, knowledge, policies, and evaluations as versioned product assets."
  ],

  stages: [
    {
      id: "discover",
      number: 1,
      title: "Discover & qualify",
      shortTitle: "Discover",
      phase: "Frame the opportunity",
      duration: "1–3 weeks",
      assistedDuration: "2 days–3 weeks",
      color: "#2c7a68",
      tagline: "Start with a consequential workflow, not a fashionable technology.",
      description: "Clarify the user problem, business value, boundaries, and whether agency is justified. Eliminate weak or unsafe candidates before expensive engineering begins.",
      outcomes: ["Qualified use-case brief", "Measurable value hypothesis", "Initial risk classification"],
      roles: "Product owner, domain lead, AI architect, risk partner",
      method: "Interviews, workflow observation, value/risk workshop",
      gate: {
        title: "Opportunity gate",
        criteria: ["Named users and accountable sponsor", "Baseline and target measures agreed", "Agency adds value over simpler automation", "Risks and prohibited uses screened"]
      },
      activities: [
        A("problem-framing", "Frame the user problem", "Turn the idea into a precise statement of who struggles, what decision or task is affected, and why it matters.", "Product owner", ["Product", "Discovery"], [
          "Observe the current workflow and interview representative users.",
          "Write the problem without naming a model, agent, or platform.",
          "Define in-scope users, triggers, boundaries, and desired outcomes.",
          "Validate the statement with the sponsor and frontline users."
        ], ["Problem statement", "Current-state workflow", "User and stakeholder map"], [
          "Distinguish a real workflow bottleneck from a novelty demo.",
          "Include accessibility, geography, language, and operating context.",
          "Record assumptions that still need evidence."
        ], "Users and sponsor agree that the statement describes the real problem and its consequences."),
        A("value-baseline", "Establish value and baseline", "Quantify today’s cost, quality, speed, risk, and experience so benefits can be measured after release.", "Product owner", ["Value", "Metrics", "FinOps"], [
          "Choose outcome metrics and guardrail metrics.",
          "Measure the current workflow using a representative period.",
          "Estimate value ranges, adoption assumptions, and total cost of ownership.",
          "Assign an owner and data source to every metric."
        ], ["Baseline scorecard", "Benefits hypothesis", "Measurement plan"], [
          "Avoid counting model activity as business value.",
          "Include review time, exception handling, support, and change costs.",
          "Use ranges where early estimates are uncertain."
        ], "The baseline is reproducible, targets are time-bound, and every measure has an owner."),
        A("agency-fit", "Test the need for agency", "Decide whether the use case needs an agent, a deterministic workflow, retrieval, analytics, or conventional automation.", "AI architect", ["Architecture", "Decision"], [
          "Decompose the workflow into decisions, actions, and information needs.",
          "Score task variability, ambiguity, tool use, planning, and consequence.",
          "Compare agentic and non-agentic solution patterns.",
          "Choose the minimum autonomy that can deliver the target outcome."
        ], ["Agency-fit assessment", "Options comparison", "Initial autonomy level"], [
          "Do not use an agent where rules are stable and complete.",
          "Higher consequence requires tighter constraints and oversight.",
          "A copilot is often the correct first release."
        ], "The team can explain why agency is necessary and why the selected autonomy is proportionate."),
        A("feasibility-risk", "Assess feasibility and risk", "Evaluate data, integration, model, legal, security, safety, operational, and adoption feasibility before committing.", "AI architect", ["Feasibility", "Risk", "Governance"], [
          "Identify critical unknowns and dependencies.",
          "Classify impact, data sensitivity, reversibility, and affected populations.",
          "Run time-boxed spikes for the highest technical uncertainties.",
          "Document mitigations, residual risk, and go/no-go conditions."
        ], ["Feasibility matrix", "Initial risk register", "Spike findings"], [
          "Treat access approvals and organizational readiness as feasibility.",
          "Separate evidence from optimism.",
          "Escalate prohibited or high-impact uses early."
        ], "No unresolved critical unknown invalidates the value case or safe delivery path."),
        A("stakeholders-governance", "Set sponsorship and decision rights", "Name accountable owners, reviewers, approvers, and escalation paths for product and AI risk decisions.", "Executive sponsor", ["Governance", "RACI"], [
          "Map business, technology, data, legal, security, risk, and user stakeholders.",
          "Define who owns outcomes, system behavior, data, incidents, and costs.",
          "Establish gate approvers and escalation timeframes.",
          "Agree the initial funding and delivery mandate."
        ], ["Lifecycle RACI", "Decision log", "Governance cadence"], [
          "Accountability cannot be assigned to the agent or vendor.",
          "Include operational owners before design begins.",
          "Resolve conflicting incentives explicitly."
        ], "Every material decision and production responsibility has one accountable human owner.")
      ]
    },
    {
      id: "define",
      number: 2,
      title: "Define & design",
      shortTitle: "Define",
      phase: "Shape the product",
      duration: "2–4 weeks",
      assistedDuration: "3 days–3 weeks",
      color: "#4774a8",
      tagline: "Translate ambition into testable behavior, bounded autonomy, and a usable human experience.",
      description: "Define requirements, journeys, agent boundaries, oversight, policies, and evaluation targets before selecting detailed implementation components.",
      outcomes: ["Prioritized product backlog", "Experience and oversight design", "Acceptance and evaluation criteria"],
      roles: "Product manager, UX lead, domain expert, responsible AI lead",
      method: "Co-design, story mapping, prototyping, failure-mode analysis",
      gate: {
        title: "Definition gate",
        criteria: ["Requirements and non-goals approved", "Human controls match consequence", "Success and failure are testable", "MVP scope is affordable and operable"]
      },
      activities: [
        A("requirements", "Define functional and quality requirements", "Specify what the system must do and the quality attributes that make it safe, useful, and operable.", "Product manager", ["Requirements", "Quality"], [
          "Capture user stories, business rules, constraints, and non-goals.",
          "Define latency, availability, accessibility, privacy, security, and cost targets.",
          "Express uncertain AI behavior as measurable acceptance ranges.",
          "Prioritize MVP, later, and explicitly excluded capabilities."
        ], ["Requirements catalogue", "Prioritized backlog", "Non-functional requirements"], [
          "Avoid requirements such as “be accurate” without task-specific measures.",
          "Include degraded and unavailable states.",
          "Trace requirements to tests and owners."
        ], "Every MVP behavior and quality target is testable and linked to a user or control need."),
        A("journey-design", "Design the human–agent journey", "Create the interaction model for intent, progress, uncertainty, consent, correction, escalation, and recovery.", "UX lead", ["UX", "Human factors", "Accessibility"], [
          "Map the end-to-end journey and moments where the agent acts.",
          "Prototype input, planning, progress, citations, confirmation, and error states.",
          "Test comprehension and trust with representative users.",
          "Define feedback, correction, undo, and support pathways."
        ], ["Journey map", "Interaction prototype", "UX content guidelines"], [
          "Do not imitate certainty when the system is unsure.",
          "Reveal consequential actions before execution.",
          "Support keyboard, assistive technology, and diverse literacy."
        ], "Users understand what the agent can do, what it did, and how to intervene."),
        A("autonomy-oversight", "Set autonomy and human oversight", "Define which actions are automatic, require confirmation, require expert approval, or are prohibited.", "Responsible AI lead", ["Responsible AI", "Controls", "Safety"], [
          "Inventory decisions and actions by impact and reversibility.",
          "Assign an autonomy level and approval rule to each.",
          "Design pause, cancel, override, escalation, and safe-stop mechanisms.",
          "Specify reviewer competence, workload, and service levels."
        ], ["Autonomy matrix", "Human-oversight plan", "Escalation policy"], [
          "A nominal approval click is not meaningful oversight.",
          "Reviewers need enough context and time to challenge outputs.",
          "High-impact actions should fail closed."
        ], "Controls are enforceable, staffed, and proportionate to each action’s consequence."),
        A("agent-behavior", "Specify agent roles and behavior", "Define responsibilities, boundaries, instructions, memory, tools, handoffs, and termination conditions for each agent.", "AI architect", ["Agent design", "Prompts"], [
          "Start with a single-agent baseline and add agents only for clear separation.",
          "Write role charters with goals, allowed actions, constraints, and stop conditions.",
          "Define state, memory scope, handoff contracts, and conflict resolution.",
          "Create representative happy, edge, and adversarial scenarios."
        ], ["Agent role charters", "Conversation and task flows", "Behavior specification"], [
          "More agents increase coordination failure and observability needs.",
          "Names should describe responsibility, not imply personhood.",
          "Never rely on a prompt alone for hard authorization."
        ], "Agent boundaries are non-overlapping, enforceable, and understandable to operators."),
        A("evaluation-design", "Design the evaluation strategy", "Build the test taxonomy, datasets, metrics, thresholds, and review process before implementation biases the target.", "Evaluation lead", ["Evaluation", "Metrics", "QA"], [
          "Define task success, groundedness, tool correctness, safety, UX, latency, and cost metrics.",
          "Create slices for users, languages, edge cases, and known failure modes.",
          "Choose automated graders, deterministic checks, and expert human review.",
          "Set release thresholds and regression tolerances."
        ], ["Evaluation plan", "Golden-set specification", "Release scorecard"], [
          "Model benchmarks rarely predict workflow success.",
          "LLM judges need calibration and bias checks.",
          "Protect evaluation sets from prompt and training leakage."
        ], "The team can objectively decide whether a build is better and whether it is releasable.")
      ]
    },
    {
      id: "knowledge",
      number: 3,
      title: "Data & knowledge",
      shortTitle: "Knowledge",
      phase: "Prepare trusted context",
      duration: "2–6 weeks",
      assistedDuration: "3 days–5 weeks",
      color: "#8a6b39",
      tagline: "Give agents governed context, not an uncurated document dump.",
      description: "Acquire, classify, clean, structure, index, secure, and maintain the data and knowledge that ground agent decisions.",
      outcomes: ["Approved data inventory", "Evaluated knowledge pipeline", "Ownership and refresh controls"],
      roles: "Data owner, data engineer, knowledge manager, privacy lead",
      method: "Data profiling, curation, retrieval experiments, access reviews",
      gate: {
        title: "Knowledge readiness gate",
        criteria: ["Sources are authorized and fit for purpose", "Retrieval meets quality thresholds", "Permissions propagate to results", "Refresh and deletion processes are operational"]
      },
      activities: [
        A("data-inventory", "Inventory and classify sources", "Identify authoritative sources, ownership, sensitivity, quality, rights, lineage, and permitted AI uses.", "Data owner", ["Data", "Privacy", "Governance"], [
          "Catalogue documents, databases, APIs, events, and user-provided context.",
          "Record owner, authority, sensitivity, residency, retention, and license.",
          "Map each source to user tasks and evaluation scenarios.",
          "Exclude redundant, untrusted, or unauthorized content."
        ], ["Data and knowledge catalogue", "Classification record", "Source-to-use mapping"], [
          "Access to data does not imply permission to use it for AI.",
          "Account for personal, confidential, copyrighted, and export-controlled content.",
          "Prefer authoritative systems over copied repositories."
        ], "Every production source has an owner, legal basis, classification, and intended use."),
        A("data-access", "Provision secure data access", "Implement approved identities, permissions, network paths, secrets, and auditability for ingestion and runtime retrieval.", "Security engineer", ["IAM", "Privacy", "Data"], [
          "Use workload identities and short-lived credentials.",
          "Apply least privilege at source, index, and retrieval layers.",
          "Preserve document- or row-level permissions where required.",
          "Test revocation, deletion, and denied-access behavior."
        ], ["Access-control design", "Approved access requests", "Access test evidence"], [
          "A shared index can accidentally flatten source permissions.",
          "Keep development data separated from production data.",
          "Never place credentials in prompts, code, or traces."
        ], "Unauthorized content cannot be ingested, retrieved, logged, or exposed."),
        A("curation-metadata", "Clean, curate, and enrich content", "Improve correctness, structure, metadata, and usability before indexing or model consumption.", "Knowledge manager", ["Curation", "Metadata", "Quality"], [
          "Remove duplicates, obsolete versions, corruption, and boilerplate.",
          "Normalize structure while preserving source and section context.",
          "Add ownership, effective dates, access labels, topics, and provenance.",
          "Sample and review curated outputs with domain experts."
        ], ["Curation rules", "Metadata schema", "Quality report"], [
          "Do not silently “fix” authoritative content during transformation.",
          "Retain original source references and timestamps.",
          "Quality thresholds should vary by consequence."
        ], "Curated content is current, attributable, permission-aware, and understandable in isolation."),
        A("retrieval-pipeline", "Build the knowledge base and RAG pipeline", "Create a chunked and indexed knowledge base, retrieve the best authorized evidence, and add it to the model context for grounded generation.", "AI engineer", ["RAG", "Knowledge base", "Retrieval"], [
          "Parse curated sources into well-formed chunks that preserve headings, source references, permissions, and enough surrounding meaning.",
          "Create embeddings and a vector index where semantic similarity helps; compare this with lexical, hybrid, filtered, and graph retrieval.",
          "At runtime, retrieve candidates from the user's question, enforce access filters, rerank the results, and select the best top-K chunks.",
          "Insert the selected chunks and source references into the model prompt, generate the answer, and require citations back to the evidence.",
          "Calibrate similarity and reranker score thresholds on representative queries, including relevant, ambiguous, and no-answer cases.",
          "Measure recall@K, precision@K, MRR or nDCG, grounded-answer quality, citation correctness, latency, and cost using a versioned benchmark."
        ], ["RAG architecture and runtime data flow", "Chunked and indexed knowledge base", "Versioned retrieval and grounded-answer benchmark"], [
          "Vectorization is optional: lexical, hybrid, or graph retrieval may perform better for some content.",
          "A raw cosine-similarity score is not a quality verdict. Its meaning depends on the embedding model, index, content, query distribution, and retrieval configuration.",
          "Chunk size, overlap, metadata, top-K, and reranking must be tuned together against realistic questions.",
          "Version score distributions and calibrated thresholds with the embedding model, index, chunking strategy, reranker, and benchmark.",
          "Source permissions must be enforced before retrieved chunks enter the model context.",
          "Treat retrieved content as untrusted input and mitigate instructions hidden inside it."
        ], "A reproducible, versioned benchmark shows that representative, edge, and no-answer queries retrieve sufficient authorized evidence and produce grounded answers with valid citations."),
        A("knowledge-operations", "Design knowledge operations", "Automate ingestion, validation, refresh, reconciliation, deletion, reindexing, and incident response.", "Data engineer", ["DataOps", "Operations", "Lineage"], [
          "Define change triggers, refresh frequency, and freshness service levels.",
          "Build validation, quarantine, replay, and reconciliation paths.",
          "Track source, transformation, index version, and deletion lineage.",
          "Create owner alerts and runbooks for stale or failed content."
        ], ["Refresh pipeline", "Lineage and freshness dashboard", "Knowledge runbook"], [
          "Treat deleted and revoked content as urgent propagation events.",
          "Plan for embedding-model and schema migrations.",
          "Avoid full reindexing when safe incremental updates suffice."
        ], "Operators can prove what is indexed, when it changed, and how to correct or remove it.")
      ]
    },
    {
      id: "foundation",
      number: 4,
      title: "Architecture & foundations",
      shortTitle: "Foundation",
      phase: "Create the delivery platform",
      duration: "2–5 weeks",
      assistedDuration: "3 days–4 weeks",
      color: "#6c5a9e",
      tagline: "Build enforceable boundaries, repeatable environments, and observable execution.",
      description: "Select models and platforms, define system architecture, provision environments, establish repositories, and create the secure engineering path.",
      outcomes: ["Approved solution architecture", "Provisioned delivery environments", "Model and platform decision records"],
      roles: "Solution architect, platform engineer, security architect, MLOps lead",
      method: "Architecture trade-offs, threat modeling, benchmark spikes, infrastructure as code",
      gate: {
        title: "Architecture gate",
        criteria: ["Architecture and threats reviewed", "Model choices benchmarked", "Environments and CI controls ready", "Capacity, cost, and resilience targets feasible"]
      },
      activities: [
        A("solution-architecture", "Design the end-to-end architecture", "Define components, trust boundaries, flows, state, failure handling, and deployment topology.", "Solution architect", ["Architecture", "Resilience"], [
          "Map users, channels, agents, models, data, tools, policies, and external systems.",
          "Define synchronous and asynchronous flows, state ownership, and idempotency.",
          "Design timeouts, retries, circuit breakers, fallbacks, and safe degradation.",
          "Document trust boundaries and architecture decisions."
        ], ["Architecture diagrams", "Decision records", "Resilience design"], [
          "Keep deterministic orchestration outside model reasoning where possible.",
          "Bound loops, token use, tool calls, and elapsed time.",
          "Design for regional and provider failure if required."
        ], "Every flow, dependency, state transition, and failure mode has an intentional design."),
        A("model-selection", "Select and route models", "Benchmark models against task quality, safety, latency, context, deployment, privacy, and cost requirements.", "AI architect", ["Models", "Benchmark", "FinOps"], [
          "Create representative task and risk benchmarks.",
          "Compare capable models using the same prompts, tools, and scoring.",
          "Design routing by task difficulty, sensitivity, and service level.",
          "Document fallback, upgrade, and deprecation strategies."
        ], ["Model benchmark", "Selection decision", "Routing policy"], [
          "Choose the smallest model that reliably clears the threshold.",
          "Provider benchmark claims are not use-case evidence.",
          "Account for rate limits, data terms, model drift, and regional availability."
        ], "Selected models meet quality and safety gates within latency, cost, and deployment constraints."),
        A("platform-provisioning", "Provision platforms and environments", "Create isolated development, test, pre-production, and production foundations through repeatable automation.", "Platform engineer", ["Cloud", "IaC", "MLOps"], [
          "Create accounts, subscriptions, projects, networks, identities, keys, and quotas.",
          "Codify infrastructure and configuration with reviewable changes.",
          "Separate environments, data, credentials, logs, and budgets.",
          "Validate disaster recovery, backup, and regional requirements."
        ], ["Infrastructure code", "Environment catalogue", "Provisioning evidence"], [
          "Avoid manual production-only configuration.",
          "Default-deny network and identity paths.",
          "Tag resources for ownership, environment, data class, and cost."
        ], "A clean environment can be recreated consistently with approved controls."),
        A("engineering-system", "Establish the engineering system", "Set repository structure, branching, CI, artifact management, coding standards, and versioning for all AI assets.", "Engineering lead", ["DevOps", "Versioning", "Quality"], [
          "Create repositories and ownership rules.",
          "Version code, prompts, policies, schemas, tools, knowledge configs, and evaluations.",
          "Configure formatting, tests, scanning, review, and protected release paths.",
          "Define environment promotion and rollback conventions."
        ], ["Repository and templates", "CI pipeline", "Versioning standard"], [
          "A prompt change can be a production code change.",
          "Pin dependencies and preserve build provenance.",
          "Never promote untested console edits."
        ], "Every deployable asset has review, test, provenance, and rollback coverage."),
        A("threat-model", "Threat-model the agentic system", "Analyze abuse, prompt injection, data exfiltration, identity, supply chain, tool misuse, denial of service, and unsafe autonomy.", "Security architect", ["Security", "Threat model", "Privacy"], [
          "Map assets, actors, entry points, trust boundaries, and control objectives.",
          "Model direct and indirect prompt injection and cross-agent attacks.",
          "Assess tool authorization, confused deputy, memory poisoning, and excessive agency.",
          "Prioritize mitigations and assign verification tests."
        ], ["Threat model", "Security requirements", "Mitigation backlog"], [
          "Treat external content and tool output as untrusted input.",
          "Prompts are not security boundaries.",
          "Revisit threats when tools, data, or autonomy change."
        ], "No critical threat lacks a preventive, detective, or responsive control and an accountable owner.")
      ]
    },
    {
      id: "build",
      number: 5,
      title: "Build & integrate",
      shortTitle: "Build",
      phase: "Implement the system",
      duration: "4–12 weeks",
      assistedDuration: "1–8 weeks",
      color: "#b75d4e",
      tagline: "Combine probabilistic intelligence with deterministic controls.",
      description: "Implement agents, prompts, tools, workflows, user interfaces, policies, and integrations with tight contracts and complete telemetry.",
      outcomes: ["Working end-to-end product increment", "Versioned prompts, tools, and policies", "Traceable and controlled execution"],
      roles: "AI developer, software engineer, integration engineer, UX engineer",
      method: "Vertical slices, test-driven development, prompt experiments, contract tests",
      gate: {
        title: "Feature-complete gate",
        criteria: ["Priority journeys work end to end", "Hard controls are enforced in code", "Tools and integrations pass contract tests", "Telemetry explains every consequential run"]
      },
      activities: [
        A("agent-implementation", "Implement agent orchestration", "Build planning, routing, state, memory, handoffs, termination, and recovery with explicit limits.", "AI developer", ["Agents", "Orchestration"], [
          "Implement one vertical slice and a simple baseline first.",
          "Encode workflow state and deterministic transitions explicitly.",
          "Add bounded planning, delegation, retries, and termination.",
          "Capture structured events for decisions, calls, errors, and outcomes."
        ], ["Agent services", "State and handoff contracts", "Orchestration tests"], [
          "Prevent infinite loops and runaway delegation.",
          "Separate durable business state from conversational memory.",
          "Make every consequential action attributable."
        ], "Representative workflows complete predictably within limits and can be reconstructed from telemetry."),
        A("prompt-policy", "Engineer prompts and runtime policy", "Create modular instructions, context assembly, structured outputs, guardrails, and policy enforcement.", "AI developer", ["Prompts", "Policy", "Guardrails"], [
          "Separate system policy, role, task, context, examples, and output schema.",
          "Assemble approved retrieved chunks and source references into the model context at runtime.",
          "Use structured output and validate it before downstream use.",
          "Implement input, retrieval, output, and action policy checks.",
          "Version prompts and evaluate changes against regressions."
        ], ["Prompt library", "Policy rules", "Prompt test suite"], [
          "Keep secrets and authorization logic outside prompts.",
          "Longer prompts can reduce clarity and increase attack surface.",
          "Guardrail refusal behavior must be useful and recoverable."
        ], "Prompt and policy changes are reviewable, reproducible, and covered by task and safety tests."),
        A("tool-development", "Develop tools and MCP integrations", "Expose business capabilities through narrow, typed, authorized, observable, and recoverable interfaces.", "Integration engineer", ["Tools", "MCP", "APIs"], [
          "Define schemas, permissions, preconditions, side effects, and error contracts.",
          "Implement authentication, authorization, validation, timeouts, and idempotency.",
          "Return concise structured results and provenance.",
          "Test success, denial, malformed input, partial failure, and rollback."
        ], ["Tool or MCP services", "Interface contracts", "Integration test evidence"], [
          "Tools should expose capabilities, not unrestricted interpreters.",
          "Require confirmation for irreversible or high-impact actions.",
          "Do not assume the model will call a tool correctly."
        ], "Every tool call is authorized for the user and task, schema-valid, auditable, and safely retryable."),
        A("experience-integration", "Build the user experience", "Implement transparent interaction, status, evidence, controls, feedback, and accessible recovery across channels.", "UX engineer", ["UI", "Accessibility", "Trust"], [
          "Implement progressive status for long-running work.",
          "Show sources, uncertainty, material assumptions, and planned actions.",
          "Provide edit, approve, reject, undo, escalate, and feedback controls.",
          "Test responsive, keyboard, screen-reader, timeout, and error behavior."
        ], ["Production UI", "Accessible component tests", "User-feedback capture"], [
          "Avoid anthropomorphic cues that obscure system limitations.",
          "Never hide partial failure behind fluent text.",
          "Protect sensitive reasoning and logs while giving useful explanations."
        ], "Users can efficiently supervise the system and recover from errors without specialist help."),
        A("telemetry-controls", "Instrument telemetry and runtime controls", "Capture correlated, privacy-safe traces, metrics, logs, costs, and policy events with operational controls.", "MLOps engineer", ["Observability", "Controls", "FinOps"], [
          "Create correlation IDs across UI, agents, models, retrieval, and tools.",
          "Log versions, timings, token usage, decisions, sources, calls, and outcomes.",
          "Redact sensitive content and set retention and access controls.",
          "Implement budgets, rate limits, kill switches, and feature flags."
        ], ["Telemetry schema", "Dashboards and alerts", "Runtime control plane"], [
          "Do not log full prompts by default in sensitive workflows.",
          "Telemetry must distinguish user, model, policy, and tool failures.",
          "Kill switches must work without a new deployment."
        ], "Operators can diagnose, contain, and quantify a run without exposing unnecessary sensitive data.")
      ]
    },
    {
      id: "evaluate",
      number: 6,
      title: "Evaluate & assure",
      shortTitle: "Evaluate",
      phase: "Prove readiness",
      duration: "2–6 weeks",
      assistedDuration: "3 days–5 weeks",
      color: "#3d8a99",
      tagline: "Test outcomes, interactions, controls, and failures—not just answers.",
      description: "Evaluate the complete system offline and in realistic environments across quality, safety, security, performance, cost, usability, and operational readiness.",
      outcomes: ["Release evaluation scorecard", "Resolved or accepted risk evidence", "Operational readiness sign-off"],
      roles: "Evaluation lead, QA engineer, red team, domain reviewers",
      method: "Golden sets, simulation, human review, red teaming, load and recovery tests",
      gate: {
        title: "Release readiness gate",
        criteria: ["Quality and safety thresholds met by slice", "Critical security findings resolved", "Performance and cost SLOs met", "Operations, support, and rollback rehearsed"]
      },
      activities: [
        A("offline-evaluation", "Run task and component evaluations", "Measure retrieval, reasoning, tool use, workflow completion, groundedness, and regressions on controlled datasets.", "Evaluation lead", ["Evaluation", "Regression"], [
          "Freeze an evaluation specification containing versioned datasets, slice labels, metric definitions, graders, prompts, thresholds, and regression tolerances.",
          "Record the evaluated model, prompt, architecture, retrieval, tool, policy, and knowledge versions so every result is reproducible.",
          "Run deterministic checks, calibrated model graders, retrieval metrics, and expert review.",
          "Compare against the baseline and previous release by slice, using distributions and confidence intervals where appropriate.",
          "Triage failures into data, prompt, model, tool, policy, or design causes."
        ], ["Versioned evaluation report", "Evaluation lineage manifest", "Failure taxonomy and regression suite"], [
          "Report distributions and slices, not only averages.",
          "Investigate grader disagreement and low-confidence labels.",
          "Include abstention and escalation quality.",
          "When a metric, grader, dataset, or threshold changes, run a bridge comparison against the prior evaluator before interpreting the trend."
        ], "All release thresholds pass with no hidden critical failure slice, and every score is traceable to the evaluated system and evaluation-specification versions."),
        A("safety-red-team", "Perform safety and adversarial testing", "Challenge the system with abuse, injection, exfiltration, harmful requests, policy evasion, and excessive-agency scenarios.", "AI red team lead", ["Safety", "Security", "Red team"], [
          "Build attacks from the threat model and real misuse pathways.",
          "Test direct, indirect, multi-turn, multilingual, encoded, and cross-tool attacks.",
          "Verify prevention, detection, containment, and recovery.",
          "Retest mitigations and add every finding to regression coverage."
        ], ["Red-team report", "Mitigation evidence", "Adversarial regression set"], [
          "Use authorized test environments and controlled data.",
          "Test combinations of small weaknesses, not only isolated controls.",
          "Treat successful but unauthorized action as critical even if output looks safe."
        ], "No unresolved critical exploit can cause unauthorized disclosure, action, or material harm."),
        A("human-quality-review", "Conduct expert and user evaluation", "Assess usefulness, correctness, comprehension, workload, trust calibration, and oversight quality with representative people.", "UX research lead", ["Human evaluation", "UX", "Responsible AI"], [
          "Recruit representative users and qualified domain reviewers.",
          "Run realistic tasks without coaching around system weaknesses.",
          "Measure completion, correction, reliance, workload, and comprehension.",
          "Analyze results by role, accessibility need, language, and experience."
        ], ["Usability study", "Expert quality ratings", "Experience improvement backlog"], [
          "High satisfaction can coexist with unsafe overreliance.",
          "Measure whether users notice and correct plausible errors.",
          "Compensate reviewers and protect sensitive study data."
        ], "Users can achieve target outcomes while maintaining appropriate understanding and control."),
        A("performance-resilience", "Test performance, cost, and resilience", "Validate concurrency, latency, throughput, quotas, token cost, failure recovery, and degraded modes.", "Performance engineer", ["Performance", "Resilience", "FinOps"], [
          "Model realistic workload mixes and peak conditions.",
          "Load test end-to-end and isolate bottlenecks.",
          "Inject provider, network, tool, data, and partial-state failures.",
          "Verify budgets, backpressure, retries, recovery time, and data consistency."
        ], ["Load-test report", "Capacity and cost model", "Recovery evidence"], [
          "LLM latency has long-tail behavior; use percentiles.",
          "Retries can multiply cost and overload dependencies.",
          "Test quota exhaustion and model fallback quality."
        ], "The system meets service and budget objectives under expected peaks and recoverable failures."),
        A("operational-readiness", "Assure operational readiness", "Confirm monitoring, runbooks, support, ownership, incident response, continuity, and change controls before release.", "Service owner", ["Operations", "SRE", "Governance"], [
          "Review dashboards, alerts, on-call coverage, and support routing.",
          "Exercise kill switch, rollback, restore, escalation, and incident communications.",
          "Confirm model, prompt, knowledge, tool, and policy change procedures.",
          "Complete required privacy, security, legal, architecture, and risk approvals."
        ], ["Readiness checklist", "Runbooks and SOPs", "Approval record"], [
          "Operational ownership starts before production.",
          "Runbooks should use observable symptoms, not vague model language.",
          "Define who can disable actions, models, tools, or the entire service."
        ], "Named responders have successfully rehearsed credible incidents and release reversal.")
      ]
    },
    {
      id: "release",
      number: 7,
      title: "Release & adopt",
      shortTitle: "Release",
      phase: "Introduce controlled value",
      duration: "2–8 weeks",
      assistedDuration: "2 days–8 weeks",
      color: "#c27c2c",
      tagline: "Release progressively, teach the new workflow, and preserve a safe path back.",
      description: "Promote a known build through controlled rollout, enable users and support teams, monitor early outcomes, and expand only with evidence.",
      outcomes: ["Controlled production release", "Enabled users and support teams", "Measured early-life performance"],
      roles: "Release manager, product owner, change lead, service owner",
      method: "Pilot cohorts, canary release, feature flags, training, hypercare",
      gate: {
        title: "Scale gate",
        criteria: ["Pilot outcomes meet targets", "No unacceptable harm or control gap", "Support and operations are stable", "Sponsor approves expansion based on evidence"]
      },
      activities: [
        A("release-engineering", "Package and promote the release", "Create a reproducible, signed release across code, configuration, prompts, models, policies, and knowledge versions.", "Release manager", ["DevOps", "Release", "Provenance"], [
          "Freeze and identify every release asset and dependency.",
          "Generate provenance, security attestations, notes, and rollback references.",
          "Promote through controlled environments with approvals.",
          "Run smoke, policy, and integration checks after deployment."
        ], ["Release manifest", "Deployment record", "Rollback package"], [
          "Record model aliases and hosted-model versions where possible.",
          "Do not rebuild artifacts between environments.",
          "Separate deployment from user exposure with feature controls."
        ], "The exact production build is attributable, reproducible, tested, and reversible."),
        A("progressive-rollout", "Run a progressive rollout", "Limit exposure by cohort, capability, autonomy, or traffic while comparing outcomes and controlling risk.", "Product owner", ["Pilot", "Experiment", "Safety"], [
          "Select representative pilot users and explicit inclusion criteria.",
          "Start with low-risk tasks or reduced autonomy.",
          "Define expansion, pause, and rollback thresholds.",
          "Review quality, safety, cost, incidents, and feedback daily during hypercare."
        ], ["Rollout plan", "Cohort dashboard", "Scale decision record"], [
          "Pilots should test real workflows, not only friendly demonstrations.",
          "Protect control groups and consent where experimentation requires it.",
          "Do not expand solely because incident volume is low."
        ], "Pilot evidence demonstrates sustained value and acceptable residual risk."),
        A("training-change", "Enable users and manage change", "Prepare people for new tasks, changed responsibilities, appropriate reliance, and feedback or escalation.", "Change lead", ["Adoption", "Training", "People"], [
          "Assess role and process impacts, incentives, concerns, and readiness.",
          "Create scenario-based training on capability, limits, review, and escalation.",
          "Provide quick-reference guidance in the workflow.",
          "Build champion, office-hours, communications, and feedback channels."
        ], ["Change-impact assessment", "Training and communications", "Adoption plan"], [
          "Training must include failure recognition, not just happy paths.",
          "Address displacement and surveillance concerns transparently.",
          "Managers need guidance on safe performance expectations."
        ], "Users know when to use the system, how to verify it, and where to get help."),
        A("support-transition", "Transition to service and support", "Move knowledge, ownership, access, runbooks, and support pathways into the enduring operating organization.", "Service owner", ["Support", "Operations", "SOP"], [
          "Define support tiers, categories, priorities, and service targets.",
          "Train support and on-call teams using realistic incidents.",
          "Transfer dashboards, runbooks, vendor contacts, and access.",
          "Establish product, engineering, risk, and support triage cadence."
        ], ["Support model", "Knowledge articles", "Service acceptance"], [
          "Support needs safe access to traces without unnecessary sensitive content.",
          "Create categories specific to AI behavior and agent actions.",
          "Avoid making the build team the permanent undocumented support path."
        ], "The operating organization accepts the service and can resolve or escalate common failures."),
        A("production-validation", "Validate production outcomes", "Confirm that real-world behavior, value, risk, and cost match pre-release evidence during early life.", "Product analytics lead", ["Analytics", "Value", "Monitoring"], [
          "Compare production cohorts to baseline and release targets.",
          "Sample traces and outcomes for unanticipated behavior.",
          "Monitor adoption, overrides, escalations, incidents, latency, and unit cost.",
          "Reconcile benefits and total cost with the original business case."
        ], ["Early-life report", "Benefits update", "Prioritized improvement backlog"], [
          "Production user mix and data will differ from evaluation sets.",
          "Low adoption may signal workflow or trust problems.",
          "Separate novelty spikes from durable value."
        ], "The sponsor and service owner agree that production evidence supports continued operation and scaling.")
      ]
    },
    {
      id: "operate",
      number: 8,
      title: "Operate & improve",
      shortTitle: "Operate",
      phase: "Sustain trustworthy value",
      duration: "Continuous",
      assistedDuration: "Continuous",
      color: "#26806e",
      tagline: "Monitor behavior and outcomes, not merely uptime.",
      description: "Operate the service, detect drift and incidents, refresh knowledge, evaluate every change, optimize value and cost, and adapt controls as use evolves.",
      outcomes: ["Stable service and controlled changes", "Continuous evaluation and monitoring", "Realized benefits and managed cost"],
      roles: "Service owner, MLOps/SRE, product manager, risk owner",
      method: "SLO reviews, continuous evaluation, incident learning, controlled experiments",
      gate: {
        title: "Continued-use review",
        criteria: ["Value remains positive and evidenced", "Risk stays within approved appetite", "Models, data, tools, and controls remain supported", "Improvement or retirement decisions are funded"]
      },
      activities: [
        A("system-monitoring", "Monitor service and agent behavior", "Track availability, latency, quality proxies, tool outcomes, policy events, drift, safety, costs, and user feedback.", "Service owner", ["Monitoring", "SRE", "AI Ops"], [
          "Define SLOs, signals, alert thresholds, and escalation routes.",
          "Monitor by model, prompt, agent, tool, knowledge version, and user slice.",
          "Sample interactions for expert review and emerging failure modes.",
          "Tune alerts from incidents and operational learning."
        ], ["Operational dashboards", "Alerts and SLO reports", "Review samples"], [
          "Uptime does not imply correct or safe behavior.",
          "Proxy metrics require periodic validation against real outcomes.",
          "Monitor silent non-use and workarounds."
        ], "Material degradation is detected early enough for a safe and effective response."),
        A("incident-management", "Manage AI incidents and near misses", "Detect, contain, investigate, communicate, remediate, and learn from harmful or unexpected system behavior.", "Incident commander", ["Incident", "Safety", "Operations"], [
          "Classify AI-specific incidents and near misses by impact.",
          "Contain using feature, tool, model, data, cohort, or service controls.",
          "Preserve evidence and determine technical and organizational causes.",
          "Communicate, remediate, report, and add regression tests."
        ], ["Incident record", "Root-cause analysis", "Corrective actions"], [
          "Preserve privacy and legal privilege during investigation.",
          "Look beyond the final model output to the full causal chain.",
          "Track near misses as leading indicators."
        ], "Incidents produce verified containment, transparent accountability, and durable prevention."),
        A("continuous-change", "Evolve models, prompts, tools, and knowledge", "Use controlled change management and regression evidence for prompts, models, architecture, retrieval, tools, policies, knowledge, and evaluation criteria.", "MLOps lead", ["Change", "Evaluation", "MLOps"], [
          "Trigger changes from evidence, not unstructured preference.",
          "Version the candidate prompt, model, architecture, retrieval, tool, policy, and knowledge changes; map each change to the evaluation suites it can affect.",
          "Run impacted suites with the approved evaluation specification and preserve the complete system-to-evaluation lineage.",
          "If a dataset, metric, grader, or threshold must change, approve and version the rationale, then score representative builds with both old and new evaluators to preserve the trend line.",
          "Review risk and compatibility based on change type.",
          "Canary, monitor, and retain a tested rollback path."
        ], ["Change proposal and impact map", "Versioned regression and evaluator comparison", "Promotion and metric-change record"], [
          "Provider-side model updates may create implicit changes.",
          "Knowledge updates can alter behavior as much as prompt changes.",
          "Do not silently redefine a metric or move a threshold; this can make evaluator drift look like product improvement.",
          "Avoid optimizing one metric while degrading safety, cost, or another critical slice."
        ], "No system or evaluator change reaches users without traceable versions, proportionate evidence, an interpretable comparison with prior results, and rollback coverage."),
        A("value-cost-optimization", "Optimize value, performance, and cost", "Improve workflow outcomes and unit economics while preserving safety, quality, and user experience.", "Product manager", ["Value", "FinOps", "Optimization"], [
          "Analyze cost and latency by successful business outcome.",
          "Target waste in context, retrieval, routing, retries, tools, and idle capacity.",
          "Test smaller models, caching, batching, and workflow simplification.",
          "Validate savings against all release guardrails."
        ], ["Unit-economics dashboard", "Optimization experiments", "Benefits realization report"], [
          "Cheap failed tasks are not efficient.",
          "Caching requires freshness, privacy, and permission controls.",
          "Monitor rebound effects from increased usage."
        ], "Unit value improves without a material decline in quality, safety, or trust."),
        A("periodic-assurance", "Perform periodic assurance reviews", "Reassess risk, compliance, controls, vendors, data, models, users, and intended use on a defined cadence.", "Risk owner", ["Governance", "Audit", "Compliance"], [
          "Review actual use against approved purpose and user population.",
          "Revalidate threat model, privacy impact, model risk, and third parties.",
          "Test key controls and sample evidence.",
          "Renew, restrict, remediate, or retire based on findings."
        ], ["Assurance review", "Control evidence", "Continued-use decision"], [
          "Usage can drift beyond the original approval without code changes.",
          "Regulatory and vendor terms can change.",
          "Expired exceptions must not become permanent defaults."
        ], "Continued operation is explicitly justified by current evidence, not inherited approval.")
      ]
    },
    {
      id: "retire",
      number: 9,
      title: "Retire & learn",
      shortTitle: "Retire",
      phase: "Close responsibly",
      duration: "Planned event",
      assistedDuration: "Case-dependent",
      color: "#6f7471",
      tagline: "Decommissioning is a designed lifecycle stage, not an infrastructure cleanup ticket.",
      description: "End or replace the service safely, preserve required records, remove access and data, support affected users, and convert experience into organizational learning.",
      outcomes: ["Safely decommissioned service", "Compliant data and access disposition", "Captured lessons and reusable assets"],
      roles: "Service owner, records manager, security lead, product owner",
      method: "Impact assessment, migration, controlled shutdown, post-product review",
      gate: {
        title: "Closure gate",
        criteria: ["Users and dependencies migrated", "Data and records disposition verified", "Access and infrastructure removed", "Closure evidence and lessons accepted"]
      },
      activities: [
        A("retirement-decision", "Make the retirement decision", "Use value, risk, supportability, duplication, strategy, and replacement evidence to decide and govern closure.", "Product owner", ["Portfolio", "Governance", "Value"], [
          "Review benefits, total cost, incidents, risk, adoption, and technical health.",
          "Identify replacement, migration, legal, contractual, and dependency impacts.",
          "Approve the decision, timeline, funding, and accountable owner.",
          "Freeze nonessential changes and create closure measures."
        ], ["Retirement decision", "Impact assessment", "Closure plan"], [
          "A model or vendor deprecation can force urgent retirement.",
          "Account for downstream systems and unofficial user workarounds.",
          "Do not leave an unsupported service running by default."
        ], "An approved, funded plan covers every user, dependency, obligation, and asset."),
        A("user-migration", "Transition users and workflows", "Move users, processes, integrations, and responsibilities to a replacement or safe manual path.", "Change lead", ["Migration", "Adoption", "Continuity"], [
          "Map affected cohorts, workflows, integrations, and critical dates.",
          "Provide notice, training, export, and migration support.",
          "Run parallel or staged transition where consequence requires it.",
          "Confirm adoption and resolve stranded use cases."
        ], ["Migration plan", "User communications", "Transition acceptance"], [
          "Preserve accessibility and continuity during migration.",
          "Do not surprise users by silently degrading the service.",
          "Support appeals or correction of decisions made before closure."
        ], "No critical user or process depends on the retiring system."),
        A("data-disposition", "Dispose of data, memory, and records", "Retain required evidence while deleting or transferring operational data, indexes, caches, logs, and agent memory.", "Records manager", ["Data", "Privacy", "Records"], [
          "Inventory data stores, replicas, indexes, backups, caches, logs, and vendor copies.",
          "Apply retention, legal hold, transfer, deletion, and anonymization rules.",
          "Propagate deletion to providers and derived stores.",
          "Record and independently verify disposition."
        ], ["Disposition schedule", "Deletion or transfer evidence", "Preserved audit record"], [
          "Embeddings and vector indexes may remain sensitive derived data.",
          "Balance audit evidence with data-minimization obligations.",
          "Check backups and delayed-deletion systems."
        ], "Required records are retrievable and all other data disposition is verified."),
        A("decommission", "Revoke and decommission", "Disable traffic, agents, tools, credentials, integrations, infrastructure, monitoring, and vendor services in a controlled order.", "Platform engineer", ["Decommission", "Security", "Cloud"], [
          "Stop new use and verify migration checkpoints.",
          "Revoke identities, tokens, secrets, permissions, webhooks, and tool access.",
          "Remove routes, compute, stores, queues, dashboards, and contracts.",
          "Scan for orphan resources and confirm billing cessation."
        ], ["Decommission record", "Access revocation evidence", "Asset and cost reconciliation"], [
          "Disable high-impact actions before read-only access.",
          "Keep required monitoring through the closure window.",
          "Do not delete evidence before closure is accepted."
        ], "No callable capability, active credential, orphan resource, or unintended cost remains."),
        A("lessons-reuse", "Capture learning and reusable assets", "Convert outcomes, failures, evaluations, controls, patterns, and user insight into improved future delivery.", "Product excellence lead", ["Learning", "Reuse", "Knowledge"], [
          "Compare realized outcomes with the original hypothesis.",
          "Review architecture, incidents, controls, adoption, cost, and retirement causes.",
          "Generalize reusable evaluations, patterns, controls, and anti-patterns.",
          "Share findings and update standards, templates, and portfolio criteria."
        ], ["Post-product review", "Reusable assets", "Standards updates"], [
          "Preserve learning without retaining unnecessary sensitive data.",
          "Include user and operator perspectives, not only the build team.",
          "Document what should not be repeated."
        ], "Specific lessons are incorporated into organizational practices and future lifecycle gates.")
      ]
    }
  ]
};
