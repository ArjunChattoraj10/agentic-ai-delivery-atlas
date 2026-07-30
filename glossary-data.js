window.GLOSSARY_DATA = [
  {
    id: "ab-test",
    term: "A/B Test",
    category: "Evaluation & Quality",
    definition: "An online evaluation method that routes similar users or requests to two or more variants of a system and compares their outcomes statistically to decide which performs better.",
    context: "A/B testing lets a team make a data-backed decision about a prompt or model change instead of relying on subjective impressions from a small sample.",
    related: ["Online Evaluation", "Canary Release", "Evaluation Metric"]
  },
  {
    id: "a2a",
    term: "A2A (Agent-to-Agent Protocol)",
    category: "Agents & Orchestration",
    definition: "An open protocol that standardizes how independent agents, potentially built by different teams or vendors, discover each other's capabilities and exchange tasks and results.",
    context: "A shared agent-to-agent protocol lets a multi-agent system mix agents from different teams without every pair needing a custom integration.",
    related: ["Multi-Agent System", "Handoff", "MCP (Model Context Protocol)"]
  },
  {
    id: "agency",
    term: "Agency",
    category: "Agents & Orchestration",
    definition: "The degree of decision-making and action-taking capability granted to an AI system, ranging from suggesting an answer to independently executing actions with real-world effects.",
    context: "Defining agency level up front helps a delivery team decide what human approval or guardrails are needed before an agent can act.",
    related: ["Autonomy", "Excessive Agency", "Human-in-the-Loop"]
  },
  {
    id: "agent",
    term: "Agent",
    category: "Agents & Orchestration",
    definition: "A software component that perceives its environment or task context, decides on a course of action, and takes that action using tools or APIs, often iterating until a goal is met.",
    context: "Distinguishing an agent from a simple script matters because agents make runtime decisions that need monitoring, guardrails, and clear boundaries of responsibility.",
    related: ["Agentic AI", "Autonomy", "Tool Calling (Function Calling)"]
  },
  {
    id: "agentic-ai",
    term: "Agentic AI",
    category: "Agents & Orchestration",
    definition: "An approach to building AI systems where one or more agents plan, use tools, and take multi-step actions toward a goal, rather than only returning a single response to a single prompt.",
    context: "Teams adopt agentic AI when a task requires multiple decisions, tool calls, or handoffs that a single prompt-response model cannot complete on its own.",
    related: ["Agent", "Multi-Agent System", "Orchestrator"]
  },
  {
    id: "ai-assistant",
    term: "AI Assistant",
    category: "Agents & Orchestration",
    definition: "A conversational AI system designed to help a user complete tasks through dialogue, which may or may not include autonomous tool use or multi-step planning.",
    context: "Not every assistant is agentic; knowing whether an assistant only chats or also acts changes what testing and guardrails are required before release.",
    related: ["Copilot", "Agent", "Agentic AI"]
  },
  {
    id: "ai-impact-assessment",
    term: "AI Impact Assessment",
    category: "Governance & Responsible AI",
    definition: "A structured review, conducted before or during development, of the potential benefits, harms, and risks an AI system could have on users, groups, or society.",
    context: "An AI impact assessment done early can surface risk and fairness concerns while the design can still be changed cheaply, rather than after launch.",
    related: ["Risk Appetite", "Fairness", "Responsible AI"]
  },
  {
    id: "audit-trail",
    term: "Audit Trail",
    category: "Governance & Responsible AI",
    definition: "A chronological, tamper-resistant record of what a system did, when, and based on what inputs, kept so behavior can be reviewed or investigated later.",
    context: "A complete audit trail is often what lets a team reconstruct exactly why an agent took a specific action during an incident review.",
    related: ["Trace", "Data Lineage", "Responsible AI"]
  },
  {
    id: "autonomy",
    term: "Autonomy",
    category: "Agents & Orchestration",
    definition: "The extent to which an agent can complete a task and make decisions without a human confirming each step, typically expressed as a spectrum rather than an on/off switch.",
    context: "Setting the right autonomy level for each action lets a team allow low-risk steps to run freely while gating higher-risk actions behind human approval.",
    related: ["Agency", "Human-in-the-Loop", "Human-on-the-Loop"]
  },
  {
    id: "bias",
    term: "Bias",
    category: "Governance & Responsible AI",
    definition: "A systematic skew in a system's outputs, often inherited from training data, retrieved content, or design choices, that favors certain outcomes, groups, or perspectives over others.",
    context: "Bias can enter an agentic system through the base model, the retrieved knowledge base, or even the examples used in a prompt template, so it must be checked at each layer.",
    related: ["Fairness", "Evaluation Dataset", "Responsible AI"]
  },
  {
    id: "canary-release",
    term: "Canary Release",
    category: "Operations & Delivery",
    definition: "A deployment strategy that rolls out a change to a small subset of traffic or users first, monitoring results before gradually expanding to everyone.",
    context: "Canary releases limit the blast radius of a bad agent or model change by catching problems while only a small fraction of users are affected.",
    related: ["A/B Test", "Rollback", "Observability"]
  },
  {
    id: "chunk-overlap",
    term: "Chunk Overlap",
    category: "Data & Architecture",
    definition: "The amount of shared text repeated between consecutive chunks during chunking, intended to reduce the chance that a relevant fact is split across a chunk boundary and lost.",
    context: "Increasing chunk overlap can improve recall at the cost of a larger, more redundant index and higher storage and retrieval cost.",
    related: ["Chunk Size", "Chunking", "Recall@K"]
  },
  {
    id: "chunk-size",
    term: "Chunk Size",
    category: "Data & Architecture",
    definition: "The target length, usually measured in tokens or characters, of each passage produced during chunking.",
    context: "Choosing chunk size is a trade-off: smaller chunks improve retrieval precision but can lose surrounding context, while larger chunks preserve context but dilute similarity scoring.",
    related: ["Chunking", "Chunk Overlap", "Context Window"]
  },
  {
    id: "chunking",
    term: "Chunking",
    category: "Data & Architecture",
    definition: "Splitting a document into smaller passages sized to fit retrieval and context limits, done in a way that tries to preserve coherent, self-contained meaning within each piece.",
    context: "Poorly chosen chunk boundaries can split a fact across two chunks, causing retrieval to return incomplete or misleading evidence.",
    related: ["Chunk Size", "Chunk Overlap", "Parsing"]
  },
  {
    id: "ci-cd",
    term: "CI/CD (Continuous Integration / Continuous Delivery)",
    category: "Operations & Delivery",
    definition: "Automated pipelines that build, test, and deploy code changes frequently and reliably, running checks such as regression tests before a change reaches production.",
    context: "Extending CI/CD to include prompt, evaluation, and dataset changes keeps AI-specific assets under the same automated safety checks as application code.",
    related: ["Regression Test", "Versioning", "Rollback"]
  },
  {
    id: "circuit-breaker",
    term: "Circuit Breaker",
    category: "Operations & Delivery",
    definition: "A resilience pattern that stops calls to a failing dependency for a period of time once failures cross a threshold, preventing repeated calls from making an outage worse.",
    context: "A circuit breaker around a flaky tool or model endpoint keeps one failing dependency from cascading into a full agent outage.",
    related: ["Retry", "Rate Limit", "Idempotency"]
  },
  {
    id: "context-window",
    term: "Context Window",
    category: "Models & Prompting",
    definition: "The maximum amount of text, measured in tokens, that a model can consider at once across the system prompt, conversation history, retrieved content, and its own output.",
    context: "When retrieved documents, memory, and conversation history together exceed the context window, a team must decide what to trim, summarize, or leave out.",
    related: ["Token", "Short-Term Memory (Working Memory)", "Chunking"]
  },
  {
    id: "copilot",
    term: "Copilot",
    category: "Agents & Orchestration",
    definition: "An AI assistant pattern that works alongside a human inside their existing workflow or tool, suggesting or drafting actions that the human reviews, edits, or approves rather than acting fully independently.",
    context: "The copilot pattern is a common, lower-risk starting point for agentic delivery because a human stays in control of the final action.",
    related: ["AI Assistant", "Human-in-the-Loop", "Autonomy"]
  },
  {
    id: "corpus",
    term: "Corpus",
    category: "Data & Architecture",
    definition: "The full set of raw source documents or content collected as candidate material for a knowledge base, before curation, cleaning, or indexing.",
    context: "A corpus can include outdated, duplicate, or unauthorized material, so it must be reviewed before becoming part of an agent's trusted knowledge base.",
    related: ["Knowledge Base", "Document Ingestion", "Parsing"]
  },
  {
    id: "cosine-similarity",
    term: "Cosine Similarity",
    category: "Knowledge & Retrieval",
    definition: "A mathematical measure of the angle between two vectors, commonly used to compare embeddings; it is one specific retrieval signal for approximate relatedness, not a general-purpose measure of correctness or answer quality.",
    context: "A high cosine similarity score only means two pieces of text are positioned closely by the embedding model, so it should be combined with other checks like reranking or groundedness before trusting a retrieved result.",
    related: ["Similarity Score", "Embedding", "Reranking"]
  },
  {
    id: "data-lineage",
    term: "Data Lineage",
    category: "Data & Architecture",
    definition: "A traceable record of where a piece of data originated, how it was transformed, and everywhere it has flowed, including into prompts, embeddings, or model outputs.",
    context: "Data lineage lets a team answer questions like which documents fed a given answer or which downstream systems are affected if a source record must be deleted.",
    related: ["Data Residency", "Audit Trail", "Document Ingestion"]
  },
  {
    id: "data-residency",
    term: "Data Residency",
    category: "Data & Architecture",
    definition: "A requirement or guarantee that specific data, including prompts, logs, or knowledge base content, is stored and processed only within particular geographic or jurisdictional boundaries.",
    context: "Data residency requirements can determine which model provider, region, or deployment option a team is even allowed to use for a given workload.",
    related: ["Data Lineage", "PII (Personally Identifiable Information)", "Identity and Access Management (IAM)"]
  },
  {
    id: "dataops",
    term: "DataOps",
    category: "Operations & Delivery",
    definition: "The set of practices and tooling for reliably managing the data pipelines that feed a system, including ingestion, quality checks, and lineage tracking.",
    context: "Strong DataOps practices ensure that changes to source data reach an agent's knowledge base predictably instead of silently going stale.",
    related: ["MLOps", "Document Ingestion", "Data Lineage"]
  },
  {
    id: "document-ingestion",
    term: "Document Ingestion",
    category: "Data & Architecture",
    definition: "The process of pulling source files or records from their original systems into a pipeline so they can be parsed, chunked, and indexed for retrieval.",
    context: "Ingestion needs to track source, permissions, and version for each document so later access control and updates stay accurate as content changes.",
    related: ["Corpus", "Parsing", "Data Lineage"]
  },
  {
    id: "drift",
    term: "Drift",
    category: "Evaluation & Quality",
    definition: "A gradual change over time that degrades system quality without any code change, commonly seen as model drift, when an underlying model's behavior shifts after a provider update; data drift, when real-world input patterns diverge from what the system was built or tested on; or evaluation drift, when the evaluation criteria or judge itself becomes stale relative to current expectations.",
    context: "Because drift can occur even when nothing in the team's own pipeline changed, ongoing monitoring and periodic re-evaluation are needed even for a system that once passed all its tests.",
    related: ["Observability", "Regression Test", "Online Evaluation"]
  },
  {
    id: "embedding",
    term: "Embedding",
    category: "Knowledge & Retrieval",
    definition: "A numeric vector representation of a piece of text or other content, produced so that items with similar meaning end up with mathematically similar vectors.",
    context: "Embeddings are what make semantic search possible, since comparing vectors lets a system match meaning even when the exact wording differs.",
    related: ["Embedding Model", "Vector", "Vectorization"]
  },
  {
    id: "embedding-model",
    term: "Embedding Model",
    category: "Knowledge & Retrieval",
    definition: "The specific machine learning model used to convert text or other content into embeddings; different embedding models produce vectors that are not directly comparable to each other.",
    context: "Switching embedding models usually requires re-embedding and re-indexing the entire knowledge base, since old and new vectors are not compatible.",
    related: ["Embedding", "Vectorization", "Vector Index"]
  },
  {
    id: "episodic-memory",
    term: "Episodic Memory",
    category: "Agents & Orchestration",
    definition: "A form of long-term memory that stores records of specific past events or interactions, such as what happened in a prior session, rather than general facts.",
    context: "Episodic memory lets an agent recall what a specific user asked or decided previously, which is useful for continuity but must be scoped correctly per user.",
    related: ["Semantic Memory", "Long-Term Memory", "Memory"]
  },
  {
    id: "evaluation-dataset",
    term: "Evaluation Dataset",
    category: "Evaluation & Quality",
    definition: "A set of representative inputs, and ideally expected outputs or grading criteria, used to measure how well a system performs; a curated, trusted subset used as a reference standard is often called a golden dataset.",
    context: "An evaluation dataset should be refreshed and expanded as new failure cases are discovered in production, not treated as a fixed, one-time artifact.",
    related: ["Evaluation Harness", "Evaluation Metric", "Regression Test"]
  },
  {
    id: "evaluation-harness",
    term: "Evaluation Harness",
    category: "Evaluation & Quality",
    definition: "The tooling and pipeline that runs a system against an evaluation dataset, applies scoring methods, and produces comparable, repeatable results across versions.",
    context: "A shared evaluation harness lets a team compare a new prompt, model, or retrieval change against a documented baseline instead of relying on informal spot checks.",
    related: ["Evaluation Dataset", "Regression Test", "Offline Evaluation"]
  },
  {
    id: "evaluation-metric",
    term: "Evaluation Metric",
    category: "Evaluation & Quality",
    definition: "A specific, defined measurement used to score system quality, such as groundedness, recall@k, or task success rate; a metric is typically paired with a threshold, the minimum acceptable score required before a change can ship.",
    context: "Picking metrics that match the actual task, and setting honest thresholds, prevents a team from shipping a change that looks good on an easy metric but performs poorly for real users.",
    related: ["Evaluation Harness", "LLM-as-a-Judge", "Regression Test"]
  },
  {
    id: "excessive-agency",
    term: "Excessive Agency",
    category: "Security & Safety",
    definition: "A risk where an agent is granted more autonomy, permissions, or tool access than its task actually requires, increasing the potential damage if it is misled, malfunctions, or is attacked.",
    context: "Limiting excessive agency, by scoping tool permissions tightly to each task, reduces how much harm a single compromised or confused agent run can cause.",
    related: ["Identity and Access Management (IAM)", "Autonomy", "Kill Switch"]
  },
  {
    id: "explainability",
    term: "Explainability",
    category: "Governance & Responsible AI",
    definition: "The degree to which a person can understand why a model or agent produced a particular output or took a particular action.",
    context: "Explainability matters most for decisions that affect people directly, where a user or reviewer needs a coherent reason, not just a correct-looking answer.",
    related: ["Transparency", "Responsible AI", "Audit Trail"]
  },
  {
    id: "fairness",
    term: "Fairness",
    category: "Governance & Responsible AI",
    definition: "The property of a system treating different individuals and groups equitably, without producing systematically worse outcomes for some groups than others.",
    context: "Fairness testing should use evaluation data that represents the real population of users, since a system can pass generic tests while still underperforming for specific groups.",
    related: ["Bias", "Responsible AI", "Human Evaluation"]
  },
  {
    id: "finops",
    term: "FinOps",
    category: "Operations & Delivery",
    definition: "The discipline of tracking, attributing, and optimizing the cost of running a system, including model, tool, and infrastructure spend, as part of ongoing operations.",
    context: "FinOps practices help a team catch a runaway agent loop or an unexpectedly expensive model choice before it produces a large, surprising bill.",
    related: ["MLOps", "Rate Limit", "Small Language Model"]
  },
  {
    id: "foundation-model",
    term: "Foundation Model",
    category: "Models & Prompting",
    definition: "A large, general-purpose model trained on broad data that can be adapted, prompted, or fine-tuned for many different downstream tasks rather than one narrow purpose.",
    context: "Foundation models let teams build many different products on the same underlying model instead of training a new model per use case.",
    related: ["Large Language Model", "Multimodal Model", "Small Language Model"]
  },
  {
    id: "groundedness",
    term: "Groundedness",
    category: "Models & Prompting",
    definition: "The degree to which a model's response is supported by specific, verifiable evidence, such as retrieved documents or provided context, rather than only by patterns learned during training.",
    context: "Measuring groundedness lets a team check whether an answer can be traced to real source material before trusting it in a regulated or high-stakes workflow.",
    related: ["Hallucination", "RAG (Retrieval-Augmented Generation)", "Evaluation Metric"]
  },
  {
    id: "guardrail",
    term: "Guardrail",
    category: "Security & Safety",
    definition: "A software-enforced rule or check that constrains what a model or agent is allowed to say or do, applied independently of whether the model itself follows its instructions.",
    context: "Guardrails matter most for actions the model must never be trusted to police on its own, such as blocking a disallowed tool call outright rather than just asking the model not to make it.",
    related: ["Prompt Injection", "Excessive Agency", "Kill Switch"]
  },
  {
    id: "hallucination",
    term: "Hallucination",
    category: "Models & Prompting",
    definition: "A confident but factually incorrect or fabricated statement produced by a model, including invented facts, sources, or details not supported by its input or training.",
    context: "Because a model cannot reliably tell you when it is hallucinating, teams need grounding, citations, and evaluation to catch it before it reaches a user.",
    related: ["Groundedness", "RAG (Retrieval-Augmented Generation)", "LLM-as-a-Judge"]
  },
  {
    id: "handoff",
    term: "Handoff",
    category: "Agents & Orchestration",
    definition: "The transfer of a task, along with its relevant context and state, from one agent to another agent or to a human.",
    context: "Clean handoffs need enough shared context to avoid the receiving agent or person repeating work or missing constraints already established.",
    related: ["Multi-Agent System", "State", "Human-in-the-Loop"]
  },
  {
    id: "human-evaluation",
    term: "Human Evaluation",
    category: "Evaluation & Quality",
    definition: "Assessment of a system's outputs by people, often domain experts or representative users, judging qualities like usefulness, correctness, and tone that automated metrics may miss.",
    context: "Human evaluation remains important for nuanced or high-stakes tasks where automated scoring alone cannot reliably judge quality.",
    related: ["LLM-as-a-Judge", "Evaluation Dataset", "Online Evaluation"]
  },
  {
    id: "human-in-the-loop",
    term: "Human-in-the-Loop",
    category: "Agents & Orchestration",
    definition: "An oversight pattern in which a person must review and explicitly approve an agent's proposed action before it is executed.",
    context: "Human-in-the-loop review is typically required for actions that are costly, sensitive, or hard to reverse, even when the agent is otherwise trusted to plan the steps.",
    related: ["Human-on-the-Loop", "Autonomy", "Kill Switch"]
  },
  {
    id: "human-on-the-loop",
    term: "Human-on-the-Loop",
    category: "Agents & Orchestration",
    definition: "An oversight pattern in which an agent acts independently while a person monitors its behavior and can intervene or stop it, without approving every individual action in advance.",
    context: "Human-on-the-loop oversight allows an agent to run at a higher autonomy level while still giving people a way to catch and correct problems in near real time.",
    related: ["Human-in-the-Loop", "Kill Switch", "Autonomy"]
  },
  {
    id: "hybrid-search",
    term: "Hybrid Search",
    category: "Knowledge & Retrieval",
    definition: "A retrieval approach that combines semantic search and keyword search, then merges or reranks their results, aiming to capture both meaning-based and exact-match relevance.",
    context: "Hybrid search is often the default choice for production RAG systems because it reduces the failure modes unique to either method alone.",
    related: ["Semantic Search", "Keyword Search (Lexical Search)", "Reranking"]
  },
  {
    id: "idempotency",
    term: "Idempotency",
    category: "Operations & Delivery",
    definition: "A property of an operation where performing it multiple times produces the same result and side effects as performing it once.",
    context: "Designing agent tool calls to be idempotent makes retries and recovery from partial failures much safer to automate.",
    related: ["Retry", "State", "Circuit Breaker"]
  },
  {
    id: "identity-and-access-management",
    term: "Identity and Access Management (IAM)",
    category: "Security & Safety",
    definition: "The systems and policies that authenticate who or what is making a request and authorize exactly what they are allowed to access; the least privilege principle, granting only the minimum access needed for a task, is a core IAM practice.",
    context: "An agent should use its own scoped identity and permissions rather than inheriting a user's or developer's full access, so a compromised or confused agent cannot exceed the access it truly needs.",
    related: ["PII (Personally Identifiable Information)", "Excessive Agency", "Audit Trail"]
  },
  {
    id: "indirect-prompt-injection",
    term: "Indirect Prompt Injection",
    category: "Security & Safety",
    definition: "An attack where malicious instructions are hidden inside content a system retrieves or processes, such as a document, webpage, or email, so the model encounters and follows them without the user ever typing them.",
    context: "Indirect prompt injection is a major risk for RAG and browsing agents, since any ingested content becomes a potential vector for hidden instructions.",
    related: ["Prompt Injection", "Excessive Agency", "Threat Model"]
  },
  {
    id: "jailbreak",
    term: "Jailbreak",
    category: "Security & Safety",
    definition: "A technique or crafted input designed to bypass a model's built-in safety training or usage policies, causing it to produce content or actions it was designed to refuse.",
    context: "Because new jailbreak techniques are discovered continuously, defenses need ongoing red teaming rather than a one-time fix.",
    related: ["Prompt Injection", "Red Teaming", "Guardrail"]
  },
  {
    id: "keyword-search",
    term: "Keyword Search (Lexical Search)",
    category: "Knowledge & Retrieval",
    definition: "A search technique that matches content based on exact or stemmed word overlap between the query and the source text, rather than on learned meaning.",
    context: "Keyword search remains valuable for exact identifiers, codes, and names that embedding-based semantic search can sometimes miss or blur together.",
    related: ["Semantic Search", "Hybrid Search", "Metadata Filtering"]
  },
  {
    id: "kill-switch",
    term: "Kill Switch",
    category: "Security & Safety",
    definition: "A mechanism that lets a person immediately stop an agent, disable a tool, or halt a workflow in an emergency, independent of the agent's own decision-making.",
    context: "A tested kill switch is a baseline safety requirement for any agent with the ability to take real-world actions, not just an optional extra.",
    related: ["Human-on-the-Loop", "Guardrail", "Excessive Agency"]
  },
  {
    id: "knowledge-base",
    term: "Knowledge Base",
    category: "Knowledge & Retrieval",
    definition: "The organized collection of documents, records, or data that an agent is allowed to search and use as source material when answering questions.",
    context: "The quality and currency of a knowledge base directly limits the quality of any answer a retrieval-based agent can give.",
    related: ["Corpus", "RAG (Retrieval-Augmented Generation)", "Document Ingestion"]
  },
  {
    id: "large-language-model",
    term: "Large Language Model",
    category: "Models & Prompting",
    definition: "A neural network trained on large amounts of text data to predict and generate language, typically with billions of parameters, used as the reasoning engine behind many AI assistants and agents.",
    context: "Choosing an LLM involves trading off answer quality, latency, cost, and data-handling requirements for the specific task at hand.",
    related: ["Foundation Model", "Small Language Model", "Multimodal Model"]
  },
  {
    id: "latency",
    term: "Latency",
    category: "Operations & Delivery",
    definition: "The time it takes a system to respond to a request, from when it is sent to when a usable result is returned.",
    context: "Multi-step agent workflows can accumulate latency quickly across several model and tool calls, so teams often need to parallelize steps or set time budgets.",
    related: ["Throughput", "Rate Limit", "Small Language Model"]
  },
  {
    id: "llm-as-a-judge",
    term: "LLM-as-a-Judge",
    category: "Evaluation & Quality",
    definition: "An evaluation technique that uses a language model, guided by a scoring rubric, to grade another system's output at scale instead of requiring a person to review every case.",
    context: "LLM-as-a-judge scores should be periodically checked against human evaluation, since the judge model can share the same blind spots or biases as the system it is grading.",
    related: ["Human Evaluation", "Evaluation Metric", "Offline Evaluation"]
  },
  {
    id: "long-term-memory",
    term: "Long-Term Memory",
    category: "Agents & Orchestration",
    definition: "Information an agent stores outside a single session, in a database or knowledge store, so it can be retrieved and reused in future interactions.",
    context: "Long-term memory lets an agent personalize responses over time, but it also creates data it must protect, expire, and let users review or delete.",
    related: ["Short-Term Memory (Working Memory)", "Episodic Memory", "Knowledge Base"]
  },
  {
    id: "mcp",
    term: "MCP (Model Context Protocol)",
    category: "Agents & Orchestration",
    definition: "An open protocol that standardizes how an AI application connects to external tools, data sources, and context providers, so a client model can discover and call them in a consistent way.",
    context: "Adopting a standard protocol like MCP reduces the custom integration code needed each time an agent must connect to a new tool or data source.",
    related: ["Tool", "A2A (Agent-to-Agent Protocol)", "Tool Calling (Function Calling)"]
  },
  {
    id: "memory",
    term: "Memory",
    category: "Agents & Orchestration",
    definition: "The general capability of an agent to retain and later use information from earlier in a conversation or across separate sessions.",
    context: "Choosing what an agent remembers, and for how long, directly affects both the usefulness and the privacy risk of the system.",
    related: ["Short-Term Memory (Working Memory)", "Long-Term Memory", "Context Window"]
  },
  {
    id: "metadata-filtering",
    term: "Metadata Filtering",
    category: "Knowledge & Retrieval",
    definition: "Narrowing a search to documents matching specific structured attributes, such as date, source, owner, or permission level, before or alongside similarity-based ranking.",
    context: "Metadata filtering is often what enforces access control in a RAG system, ensuring a user's query only retrieves content they are authorized to see.",
    related: ["Knowledge Base", "Identity and Access Management (IAM)", "Reranking"]
  },
  {
    id: "mlops",
    term: "MLOps",
    category: "Operations & Delivery",
    definition: "The set of practices and tooling for reliably building, testing, deploying, and monitoring machine learning models and the pipelines around them in production.",
    context: "MLOps practices bring the same rigor to models and prompts, such as versioning and automated testing, that traditional software engineering applies to code.",
    related: ["CI/CD (Continuous Integration / Continuous Delivery)", "DataOps", "Versioning"]
  },
  {
    id: "model-card",
    term: "Model Card",
    category: "Governance & Responsible AI",
    definition: "A structured document describing a model's intended use, known limitations, training data at a high level, and evaluation results, published to help others use it responsibly.",
    context: "Reviewing a model card before adoption helps a team spot known weaknesses or unsupported use cases before they become production incidents.",
    related: ["Transparency", "Evaluation Metric", "Responsible AI"]
  },
  {
    id: "mrr",
    term: "MRR (Mean Reciprocal Rank)",
    category: "Knowledge & Retrieval",
    definition: "An evaluation metric that scores a retrieval system by how high up the first relevant result appears, averaged across many queries, rewarding systems that place a good result near the top.",
    context: "MRR is especially useful when there is typically one clearly best answer and the team cares most about how quickly a user or model reaches it.",
    related: ["nDCG (Normalized Discounted Cumulative Gain)", "Recall@K", "Precision@K"]
  },
  {
    id: "multi-agent-system",
    term: "Multi-Agent System",
    category: "Agents & Orchestration",
    definition: "An architecture in which several specialized agents, each with a narrower role, collaborate or hand off work to one another to complete a larger task.",
    context: "Splitting work across specialized agents can improve reliability and maintainability, but it also adds coordination, state-sharing, and failure-handling complexity that must be designed deliberately.",
    related: ["Orchestrator", "Handoff", "A2A (Agent-to-Agent Protocol)"]
  },
  {
    id: "multimodal-model",
    term: "Multimodal Model",
    category: "Models & Prompting",
    definition: "A model that can accept or produce more than one type of content, such as text, images, audio, or structured data, within the same interaction.",
    context: "Multimodal models let an agent process inputs like screenshots or scanned documents directly instead of requiring a separate conversion step.",
    related: ["Foundation Model", "Document Ingestion", "Large Language Model"]
  },
  {
    id: "ndcg",
    term: "nDCG (Normalized Discounted Cumulative Gain)",
    category: "Knowledge & Retrieval",
    definition: "An evaluation metric that scores the overall ranking quality of a list of retrieved results, giving more credit for placing highly relevant items near the top rather than just checking whether any relevant item was returned.",
    context: "nDCG is useful when multiple retrieved documents can each be partially relevant, not just relevant or irrelevant, which better matches how RAG context is actually assembled.",
    related: ["MRR (Mean Reciprocal Rank)", "Reranking", "Recall@K"]
  },
  {
    id: "observability",
    term: "Observability",
    category: "Operations & Delivery",
    definition: "The capability to understand a running system's internal behavior from the external signals it produces, such as logs, traces, and metrics, well enough to diagnose problems.",
    context: "Strong observability is what lets a team quickly find which agent step, tool call, or retrieval result caused a bad outcome in production.",
    related: ["Trace", "Telemetry", "Drift"]
  },
  {
    id: "offline-evaluation",
    term: "Offline Evaluation",
    category: "Evaluation & Quality",
    definition: "Testing a system against a fixed evaluation dataset in a controlled environment before it is exposed to real users or live traffic.",
    context: "Offline evaluation is the gate a team runs before release to catch regressions and quality problems cheaply, without risking real users.",
    related: ["Online Evaluation", "Evaluation Harness", "Regression Test"]
  },
  {
    id: "online-evaluation",
    term: "Online Evaluation",
    category: "Evaluation & Quality",
    definition: "Measuring a system's real-world performance and quality using live production traffic and user behavior, after it has been released.",
    context: "Online evaluation reveals issues that offline test cases could not anticipate, such as unexpected user phrasing or edge cases in live data.",
    related: ["Offline Evaluation", "A/B Test", "Observability"]
  },
  {
    id: "orchestrator",
    term: "Orchestrator",
    category: "Agents & Orchestration",
    definition: "A component or agent that coordinates the sequence of steps, sub-agents, and tool calls needed to complete a task, tracking progress and deciding what happens next.",
    context: "A well-defined orchestrator gives a team one place to add error handling, retries, and logging instead of scattering that logic across every agent.",
    related: ["Planner", "Router", "Multi-Agent System"]
  },
  {
    id: "parsing",
    term: "Parsing",
    category: "Data & Architecture",
    definition: "Converting a source file, such as a PDF, spreadsheet, or webpage, into clean, structured text that a downstream chunking and embedding pipeline can reliably process.",
    context: "Poor parsing, such as losing table structure or reading order, can silently corrupt content before it ever reaches chunking or embedding.",
    related: ["Document Ingestion", "Chunking", "Corpus"]
  },
  {
    id: "pii",
    term: "PII (Personally Identifiable Information)",
    category: "Security & Safety",
    definition: "Information that can identify a specific individual, such as a name, email address, or government ID number, which requires special handling to protect privacy.",
    context: "An agent's prompts, memory, and logs are all potential places PII can leak, so each needs its own review, redaction, or retention policy.",
    related: ["Data Residency", "Identity and Access Management (IAM)", "Audit Trail"]
  },
  {
    id: "planner",
    term: "Planner",
    category: "Agents & Orchestration",
    definition: "A component that breaks a goal into an ordered sequence of steps or sub-tasks before or during execution, which the agent or orchestrator then carries out.",
    context: "Separating planning from execution makes it easier to inspect and correct an agent's intended steps before it takes irreversible actions.",
    related: ["Orchestrator", "Agent", "State"]
  },
  {
    id: "precision-at-k",
    term: "Precision@K",
    category: "Knowledge & Retrieval",
    definition: "A retrieval metric measuring the fraction of the top K results returned for a query that are actually relevant; also referred to more generally as retrieval precision.",
    context: "Low precision@K means irrelevant results are crowding out useful context, which can dilute or distract the model's final answer.",
    related: ["Recall@K", "Top-K", "nDCG (Normalized Discounted Cumulative Gain)"]
  },
  {
    id: "prompt-injection",
    term: "Prompt Injection",
    category: "Security & Safety",
    definition: "An attack where a user directly crafts input intended to override a model's instructions, safety rules, or intended behavior.",
    context: "Prompt injection defenses need to combine careful prompt design with software-enforced rules, since instructions alone cannot reliably stop a determined attacker.",
    related: ["Indirect Prompt Injection", "Guardrail", "Jailbreak"]
  },
  {
    id: "prompt-template",
    term: "Prompt Template",
    category: "Models & Prompting",
    definition: "A reusable, parameterized prompt structure with placeholders for variables such as user input or retrieved context, used so prompts are consistent and testable across runs.",
    context: "Versioning prompt templates like code lets a team track exactly which wording produced a given evaluation result or production behavior.",
    related: ["System Prompt", "Structured Output", "Evaluation Harness"]
  },
  {
    id: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    category: "Knowledge & Retrieval",
    definition: "A pattern in which a system retrieves relevant content from a knowledge source and inserts it into the model's prompt so the model can generate an answer grounded in that content, rather than relying only on what it learned during training.",
    context: "RAG lets a team update what an agent knows by changing the underlying documents, without retraining or fine-tuning the model itself.",
    related: ["Knowledge Base", "Groundedness", "Vector Database"]
  },
  {
    id: "rate-limit",
    term: "Rate Limit",
    category: "Operations & Delivery",
    definition: "A restriction on how many requests a client or system may send to a service within a given time window, used to protect capacity and control cost.",
    context: "Agents that call models or tools in a loop can hit rate limits quickly, so retry and backoff logic must handle limit errors gracefully.",
    related: ["Throughput", "Retry", "Circuit Breaker"]
  },
  {
    id: "recall-at-k",
    term: "Recall@K",
    category: "Knowledge & Retrieval",
    definition: "A retrieval metric measuring the fraction of all relevant documents that appear within the top K results returned for a query; also referred to more generally as retrieval recall.",
    context: "Low recall@K means relevant evidence exists in the knowledge base but the retrieval step is failing to surface it to the model.",
    related: ["Precision@K", "Top-K", "MRR (Mean Reciprocal Rank)"]
  },
  {
    id: "red-teaming",
    term: "Red Teaming",
    category: "Security & Safety",
    definition: "The practice of deliberately attempting to make a system fail, misbehave, or be misused, in order to find and fix weaknesses before real attackers or accidents do.",
    context: "Red teaming an agent should include attempts at prompt injection, tool misuse, and jailbreaks, not just the underlying model's raw response quality.",
    related: ["Threat Model", "Jailbreak", "Prompt Injection"]
  },
  {
    id: "regression-test",
    term: "Regression Test",
    category: "Evaluation & Quality",
    definition: "A repeated evaluation run against a fixed set of known cases, used to confirm that a change to a prompt, model, or pipeline has not broken behavior that previously worked correctly.",
    context: "Regression tests catch cases where fixing one failure accidentally reintroduces or worsens a different, previously resolved failure.",
    related: ["Evaluation Dataset", "Evaluation Harness", "CI/CD (Continuous Integration / Continuous Delivery)"]
  },
  {
    id: "reranking",
    term: "Reranking",
    category: "Knowledge & Retrieval",
    definition: "A second-pass scoring step that reorders an initial set of retrieved candidates using a more accurate, often more expensive, model before selecting the final results to use.",
    context: "Reranking lets a system use a fast, approximate first-pass search over a large corpus and reserve a slower, more precise model only for the smaller shortlist of candidates.",
    related: ["Top-K", "Similarity Score", "Metadata Filtering"]
  },
  {
    id: "responsible-ai",
    term: "Responsible AI",
    category: "Governance & Responsible AI",
    definition: "The overall practice of designing, building, and operating AI systems in ways that are safe, fair, transparent, and accountable to the people they affect.",
    context: "Responsible AI is not a single control but an umbrella covering practices like fairness testing, explainability, audit trails, and human oversight throughout the lifecycle.",
    related: ["Explainability", "Fairness", "Audit Trail"]
  },
  {
    id: "retry",
    term: "Retry",
    category: "Operations & Delivery",
    definition: "Automatically attempting a failed operation again, typically with a delay or backoff strategy, in the hope that a transient failure will succeed on a later attempt.",
    context: "Retries must be paired with idempotency, since blindly retrying a non-idempotent action like sending a payment could cause it to happen twice.",
    related: ["Idempotency", "Circuit Breaker", "Rate Limit"]
  },
  {
    id: "risk-appetite",
    term: "Risk Appetite",
    category: "Governance & Responsible AI",
    definition: "The level and type of risk an organization is willing to accept in exchange for the value an AI system provides, used to guide decisions about autonomy, review, and controls.",
    context: "Documenting risk appetite up front helps a team decide consistently which agent actions require human approval versus which can run autonomously.",
    related: ["AI Impact Assessment", "Human-in-the-Loop", "Threat Model"]
  },
  {
    id: "rollback",
    term: "Rollback",
    category: "Operations & Delivery",
    definition: "Reverting a system to a previous known-good version after a release causes a problem, undoing the change rather than trying to fix it forward.",
    context: "A fast, tested rollback path is essential for agentic systems, since an agent change that misbehaves can act on real systems before anyone notices.",
    related: ["CI/CD (Continuous Integration / Continuous Delivery)", "Canary Release", "Versioning"]
  },
  {
    id: "router",
    term: "Router",
    category: "Agents & Orchestration",
    definition: "A component that inspects an incoming request or intermediate result and decides which model, tool, agent, or workflow branch should handle it next.",
    context: "Routing lets a system send simple requests to a cheaper, faster model and only escalate complex or sensitive requests to a stronger model or human.",
    related: ["Orchestrator", "Multi-Agent System", "Tool"]
  },
  {
    id: "semantic-memory",
    term: "Semantic Memory",
    category: "Agents & Orchestration",
    definition: "A form of long-term memory that stores general facts, concepts, and relationships rather than records of specific events.",
    context: "Semantic memory is often what a knowledge base or vector store provides an agent, supplying stable facts rather than a log of past interactions.",
    related: ["Episodic Memory", "Knowledge Base", "Long-Term Memory"]
  },
  {
    id: "semantic-search",
    term: "Semantic Search",
    category: "Knowledge & Retrieval",
    definition: "A search technique that matches content by meaning, typically using embeddings and vector comparison, so a query can find relevant results even without shared exact words.",
    context: "Semantic search helps an agent find relevant passages when a user's phrasing differs from the wording in the source documents.",
    related: ["Keyword Search (Lexical Search)", "Hybrid Search", "Embedding"]
  },
  {
    id: "short-term-memory",
    term: "Short-Term Memory (Working Memory)",
    category: "Agents & Orchestration",
    definition: "The information an agent actively holds and manipulates during a single task or conversation, typically limited by the model's context window and discarded once the session ends.",
    context: "Because short-term memory is bounded by the context window, an agent handling a long task needs summarization or retrieval to avoid losing earlier details.",
    related: ["Context Window", "Long-Term Memory", "Memory"]
  },
  {
    id: "similarity-score",
    term: "Similarity Score",
    category: "Knowledge & Retrieval",
    definition: "A general numeric estimate of how closely two pieces of content match, produced by any comparison method, such as cosine similarity, a lexical overlap score, or a learned reranker.",
    context: "Because similarity scores from different methods are not directly comparable, a retrieval pipeline should document which scoring method produced the numbers it uses for ranking or filtering.",
    related: ["Cosine Similarity", "Reranking", "Top-K"]
  },
  {
    id: "sla",
    term: "SLA (Service Level Agreement)",
    category: "Operations & Delivery",
    definition: "A formal, often contractual, commitment made to customers or stakeholders about a service's expected performance or availability, typically with consequences if it is not met.",
    context: "An SLA is usually set less aggressively than the internal SLOs that support it, leaving margin to detect and fix problems before the external commitment is broken.",
    related: ["SLO (Service Level Objective)", "Rate Limit", "Circuit Breaker"]
  },
  {
    id: "slo",
    term: "SLO (Service Level Objective)",
    category: "Operations & Delivery",
    definition: "An internal, measurable target for a system's performance or reliability, such as a specific latency or uptime percentage, that a team commits to meeting.",
    context: "SLOs give a team a concrete, agreed number to test against instead of a vague goal like the system should be fast and reliable.",
    related: ["SLA (Service Level Agreement)", "Latency", "Throughput"]
  },
  {
    id: "small-language-model",
    term: "Small Language Model",
    category: "Models & Prompting",
    definition: "A language model with a smaller parameter count than typical large language models, designed to run faster, cheaper, or on more constrained hardware while covering a narrower or simpler set of tasks well.",
    context: "Routing simple, high-volume requests to a small language model and reserving a large model for harder cases can cut cost and latency without sacrificing quality where it matters.",
    related: ["Large Language Model", "Router", "Latency"]
  },
  {
    id: "state",
    term: "State",
    category: "Agents & Orchestration",
    definition: "The current set of facts an agent is tracking about a task in progress, such as completed steps, intermediate results, and pending decisions.",
    context: "Persisting state correctly lets an agent resume a long-running task after an interruption instead of restarting from scratch.",
    related: ["Memory", "Planner", "Idempotency"]
  },
  {
    id: "structured-output",
    term: "Structured Output",
    category: "Models & Prompting",
    definition: "A model response constrained to a defined schema, such as JSON with specific fields, instead of unstructured free text.",
    context: "Structured output makes a model's response easier for downstream code to parse reliably and lets tool calls pass validated arguments.",
    related: ["Tool Calling (Function Calling)", "Prompt Template", "Evaluation Metric"]
  },
  {
    id: "system-prompt",
    term: "System Prompt",
    category: "Models & Prompting",
    definition: "The instructions given to a model before the conversation begins that set its role, tone, constraints, and behavior for the rest of the interaction.",
    context: "A system prompt shapes behavior but is not a security boundary by itself, since a determined user or malicious document can still attempt to override it.",
    related: ["Prompt Template", "Guardrail", "Prompt Injection"]
  },
  {
    id: "telemetry",
    term: "Telemetry",
    category: "Operations & Delivery",
    definition: "The structured operational data, such as timings, token counts, costs, tool calls, and errors, automatically collected from a running system for monitoring and analysis.",
    context: "Telemetry collected consistently across every agent run is what makes cost, latency, and reliability dashboards possible.",
    related: ["Observability", "Trace", "Latency"]
  },
  {
    id: "temperature",
    term: "Temperature",
    category: "Models & Prompting",
    definition: "A generation setting that controls how much randomness a model applies when choosing its next output token, with lower values producing more predictable output and higher values producing more varied output.",
    context: "Lowering temperature for tasks like tool argument generation or structured output reduces unwanted variability that could break downstream parsing.",
    related: ["Structured Output", "Hallucination", "Large Language Model"]
  },
  {
    id: "threat-model",
    term: "Threat Model",
    category: "Security & Safety",
    definition: "A structured analysis of how a system could realistically be misused, attacked, or tricked, used to identify needed controls and tests before those risks are exploited.",
    context: "A threat model specific to agentic behavior, such as tool misuse or data exfiltration through retrieved content, catches risks that a generic application security review can miss.",
    related: ["Red Teaming", "Indirect Prompt Injection", "Excessive Agency"]
  },
  {
    id: "throughput",
    term: "Throughput",
    category: "Operations & Delivery",
    definition: "The number of requests or tasks a system can handle successfully within a given period of time.",
    context: "Throughput and latency must be planned together, since a system fast for one request can still fail under high concurrent load without enough capacity.",
    related: ["Latency", "Rate Limit", "SLO (Service Level Objective)"]
  },
  {
    id: "token",
    term: "Token",
    category: "Models & Prompting",
    definition: "A unit of text, roughly a word piece or a few characters, that a language model reads and generates; model limits, cost, and latency are typically measured in tokens rather than words.",
    context: "Because pricing and context limits are token-based, teams estimate cost and check whether a prompt plus retrieved content fits before sending it to the model.",
    related: ["Context Window", "Large Language Model", "Latency"]
  },
  {
    id: "tool",
    term: "Tool",
    category: "Agents & Orchestration",
    definition: "An external function, API, or system that an agent can invoke to retrieve information or take an action beyond generating text, such as querying a database or sending an email.",
    context: "Every tool an agent can call expands what it can do but also expands the attack surface and blast radius that must be secured and tested.",
    related: ["Tool Calling (Function Calling)", "MCP (Model Context Protocol)", "Identity and Access Management (IAM)"]
  },
  {
    id: "tool-calling",
    term: "Tool Calling (Function Calling)",
    category: "Agents & Orchestration",
    definition: "The mechanism by which a model outputs a structured request to invoke a specific function or tool with specific arguments, instead of only producing free-form text; also called function calling in several model APIs.",
    context: "Reliable tool calling depends on clear tool schemas and validation, since a model can request a tool with malformed or unsafe arguments.",
    related: ["Tool", "Structured Output", "MCP (Model Context Protocol)"]
  },
  {
    id: "top-k",
    term: "Top-K",
    category: "Knowledge & Retrieval",
    definition: "The number of highest-scoring results a retrieval system returns from a search, before or after reranking, for use as context in a response.",
    context: "Setting top-k too low can omit relevant evidence, while setting it too high can crowd the context window with irrelevant or noisy content.",
    related: ["Reranking", "Context Window", "Recall@K"]
  },
  {
    id: "trace",
    term: "Trace",
    category: "Operations & Delivery",
    definition: "A recorded end-to-end path of a single request through a system, made up of individual spans that each represent one step, such as a model call, tool call, or retrieval query.",
    context: "Reviewing a trace lets an engineer see exactly which step in an agent's run was slow, failed, or produced an unexpected result.",
    related: ["Observability", "Telemetry", "Latency"]
  },
  {
    id: "transparency",
    term: "Transparency",
    category: "Governance & Responsible AI",
    definition: "Making it clear to users and stakeholders that they are interacting with an AI system, what it can and cannot do, and what data it uses.",
    context: "Transparent disclosure, such as labeling AI-generated content or agent actions, helps users calibrate how much to trust and verify a given output.",
    related: ["Explainability", "Responsible AI", "Model Card"]
  },
  {
    id: "vector",
    term: "Vector",
    category: "Data & Architecture",
    definition: "An ordered list of numbers representing a point in a multi-dimensional space; in AI retrieval, a vector is typically the numeric output produced by an embedding model for a piece of content.",
    context: "Understanding that a vector is just a numeric representation, not a guarantee of meaning, helps teams avoid over-trusting distance calculations between vectors.",
    related: ["Embedding", "Vectorization", "Vector Index"]
  },
  {
    id: "vector-database",
    term: "Vector Database",
    category: "Data & Architecture",
    definition: "A database system purpose-built to store vectors alongside their source content and metadata, and to efficiently search them at scale; it is the storage and query layer, distinct from the vector index algorithm it uses internally.",
    context: "Choosing a vector database involves evaluating its scale, filtering capabilities, latency, and how well it integrates with existing access control, not just its search accuracy.",
    related: ["Vector Index", "Vector", "Metadata Filtering"]
  },
  {
    id: "vector-index",
    term: "Vector Index",
    category: "Data & Architecture",
    definition: "The specific data structure and algorithm, such as an approximate nearest-neighbor graph, that a vector database uses internally to make similarity search fast at scale instead of comparing a query against every stored vector.",
    context: "Approximate vector indexes trade a small amount of retrieval accuracy for large gains in search speed, which is usually the right trade-off once a knowledge base grows large.",
    related: ["Vector Database", "Cosine Similarity", "Vector"]
  },
  {
    id: "vectorization",
    term: "Vectorization",
    category: "Data & Architecture",
    definition: "The process step of running content through an embedding model to produce its vector representation; vectorization is the action, while the resulting vector and the model used are distinct concepts.",
    context: "Vectorization must be repeated consistently, using the same embedding model and preprocessing, whenever content in the knowledge base changes.",
    related: ["Embedding", "Embedding Model", "Vector"]
  },
  {
    id: "versioning",
    term: "Versioning",
    category: "Operations & Delivery",
    definition: "Tracking distinct, identifiable versions of an artifact, such as a prompt, model, dataset, or configuration, so any behavior can be traced back to exactly what produced it.",
    context: "Versioning every prompt and model choice lets a team reproduce an evaluation result or a production incident precisely, months later.",
    related: ["CI/CD (Continuous Integration / Continuous Delivery)", "Rollback", "Audit Trail"]
  }
];
