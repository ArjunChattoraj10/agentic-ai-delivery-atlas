# Agentic AI Lifecycle: Source Review and Revised Outline


## Lifecycle

### 1. Discover and qualify

- Frame the user problem and current workflow.
- Establish baseline measures and a value hypothesis.
- Confirm that agency adds value over simpler automation.
- Assess technical, data, legal, safety, operational, and adoption feasibility.
- Set sponsorship, accountability, decision rights, and the initial risk classification.

### 2. Define and design

- Define functional, quality, security, privacy, accessibility, latency, and cost requirements.
- Design the human-agent journey, including uncertainty, confirmation, correction, escalation, and recovery.
- Set autonomy levels and meaningful human oversight for each consequential action.
- Specify agent roles, boundaries, memory, tools, handoffs, and termination conditions.
- Design evaluation datasets, metrics, slices, thresholds, and release criteria.

### 3. Data and knowledge

- Inventory authoritative sources, ownership, sensitivity, rights, lineage, and permitted use.
- Provision least-privilege access while preserving source permissions.
- Clean, curate, structure, and enrich content with provenance and metadata.
- Build the RAG pipeline: parse and chunk content, create embeddings and vector indexes where useful, compare lexical/hybrid/graph retrieval, rerank and filter results, then add authorized chunks and source references to the model context for grounded, cited generation.
- Operate ingestion, validation, refresh, deletion, reconciliation, and reindexing pipelines.

### 4. Architecture and foundations

- Design components, flows, state, trust boundaries, failures, and deployment topology.
- Benchmark and select models for task quality, safety, latency, privacy, availability, and cost.
- Provision isolated environments through infrastructure as code.
- Establish repositories, CI, artifact provenance, versioning, review, promotion, and rollback.
- Threat-model injection, exfiltration, identity, supply-chain, tool-misuse, memory, and excessive-agency risks.

### 5. Build and integrate

- Implement bounded orchestration, routing, state, memory, handoffs, recovery, and termination.
- Engineer modular prompts, structured outputs, runtime policy, and guardrails.
- Develop narrow, typed, authorized, observable, and recoverable tools and MCP integrations.
- Build an accessible user experience with status, sources, uncertainty, controls, and feedback.
- Instrument correlated, privacy-safe telemetry, budgets, rate limits, feature flags, and kill switches.

### 6. Evaluate and assure

- Evaluate retrieval, task completion, groundedness, tool use, workflow quality, and regressions.
- Perform safety, security, privacy, and adversarial testing.
- Conduct expert and representative-user evaluation for usefulness, comprehension, workload, and reliance.
- Test performance, concurrency, latency, quotas, cost, resilience, and degraded modes.
- Rehearse operations, support, incidents, rollback, recovery, and required approvals.

### 7. Release and adopt

- Package and promote a reproducible, attributable, reversible release.
- Roll out progressively by cohort, capability, autonomy, or traffic.
- Train users on capabilities, limitations, review, escalation, and changed responsibilities.
- Transition runbooks, dashboards, access, and support knowledge to enduring service owners.
- Validate early production outcomes, risks, adoption, latency, incidents, and unit economics.

### 8. Operate and improve

- Monitor service health, agent behavior, outcomes, policy events, drift, feedback, and cost.
- Detect, contain, investigate, communicate, and learn from incidents and near misses.
- Evolve models, prompts, tools, policies, and knowledge through controlled evaluation and release.
- Optimize value, latency, capacity, and cost without weakening quality or safety.
- Perform periodic assurance against current use, users, regulations, vendors, threats, and risk appetite.

### 9. Retire and learn

- Make an evidence-based retirement or replacement decision.
- Transition users, workflows, integrations, and responsibilities.
- Retain required records and verify deletion or transfer of data, indexes, memory, logs, caches, and vendor copies.
- Revoke identities, secrets, permissions, tools, routes, infrastructure, monitoring, and contracts.
- Capture outcomes, failures, reusable patterns, evaluations, controls, and lessons for future use cases.

## Continuous workstreams

- **Governance and assurance:** decision rights, evidence, approvals, traceability, policy alignment, and exceptions
- **Security and privacy:** identity, data protection, threat management, supply chain, testing, and incident response
- **Responsible AI:** fairness, transparency, human agency, safety, accessibility, and accountable use
- **FinOps and sustainability:** budgets, token economics, capacity, latency, efficiency, and benefits realization
- **People and adoption:** role impacts, training, communications, support, feedback, and operating ownership

---
## Review of the original brainstorm

The original list had a useful technical nucleus: feasibility, data preparation, architecture, agent and tool integration, testing, security checks, deployment, and maintenance. It needed three kinds of revision before it could serve as an end-to-end delivery guide.

### Additions

- Business outcomes, baseline measures, benefits realization, and total cost of ownership
- User research, human-agent experience, accessibility, and meaningful human oversight
- Responsible AI, impact assessment, prohibited-use screening, transparency, and accountability
- Evaluation design, representative datasets, release thresholds, red teaming, and human review
- Identity, privacy, threat modeling, supply-chain security, and runtime authorization
- Observability, resilience, incident management, operational ownership, and rollback
- Progressive release, training, adoption, support transition, and organizational change
- Periodic assurance, controlled evolution, retirement, data disposition, and lessons learned

### Modifications

- Correct spelling and normalize terminology.
- Select models and platforms after requirements and evaluation criteria are understood.
- Expand "vectorization" into evidence-based retrieval engineering; vectors are only one retrieval option.
- Treat prompts, policies, knowledge configuration, tools, and evaluations as versioned product assets.
- Expand package checks into software supply-chain security, including provenance, vulnerabilities, licenses, approvals, and transitive dependencies.
- Separate pre-release assurance from ongoing operations and maintenance.
- Replace vague deployment cleanup with reproducible release engineering and explicit rollback.

### Resequencing

- Security, privacy, responsible AI, governance, cost, and adoption are continuous workstreams, not late remediation phases.
- Testing begins when acceptance criteria are defined and continues throughout operation.
- Knowledge-base updates belong in governed knowledge operations.
- Model and retrieval parameters are tuned against evaluation evidence, not chosen in isolation.
- Documentation is evidence produced and maintained throughout the lifecycle.