export type Metric = {
  label: string;
  value: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  strapline: string;
  problem: string;
  architecture: string[];
  impact: string[];
  techStack: string[];
  learnings?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
};

export type ArchitecturePillar = {
  title: string;
  description: string;
  points: string[];
};

export const portfolioData = {
  person: {
    name: "Kowshik Kesavarapu",
    title: "Senior AI Engineer / AI Architect",
    altTitle: "Lead Data Scientist building production AI systems",
    tagline:
      "Designing agentic AI platforms, optimization engines, and ML systems that compress week-long workflows into real-time decisions.",
    location: "Hyderabad, India",
    email: "kesav.koushik@gmail.com",
    linkedin: "https://www.linkedin.com/in/kowshikkesavarapu",
    github: "https://github.com/kowshik46",
    website: "https://kowshik46.github.io",
  },
  heroHighlights: [
    "7+ years across GenAI, applied ML, and enterprise data systems",
    "Hands-on with LangGraph, hybrid RAG, observability, and deployment",
    "Leads teams and translates ambiguous business problems into AI products",
  ],
  metrics: [
    { label: "Experience", value: "7+ Years" },
    { label: "Enterprise Savings", value: "$2.4M / year" },
    { label: "Adoption Scale", value: "200+ Users" },
    { label: "Manual Effort Cut", value: "85%" },
  ] satisfies Metric[],
  about: {
    summary:
      "I build AI systems that move beyond prototypes into operational leverage. My work spans agentic experiences, RAG pipelines, forecasting, optimization, document intelligence, and data platforms - always anchored to measurable business outcomes.",
    focus: [
      "Architecting end-to-end AI workflows that connect LLM orchestration, retrieval, tooling, and production data sources.",
      "Designing decision systems that combine classical ML, optimization, and software engineering to improve cost, throughput, and reliability.",
      "Leading cross-functional teams, mentoring practitioners, and driving GenAI adoption across product and business functions.",
    ],
  },
  skills: [
    {
      title: "Machine Learning",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Time Series Forecasting",
        "Classification",
        "Regression",
        "NLP",
        "Optimization",
      ],
    },
    {
      title: "GenAI / LLMs",
      items: [
        "LangChain",
        "LangGraph",
        "Hybrid RAG",
        "Prompt Engineering",
        "Agentic AI",
        "Hugging Face",
        "Llama",
        "Ollama",
        "LangFuse",
      ],
    },
    {
      title: "Data Engineering",
      items: [
        "SQL",
        "ETL Pipelines",
        "Databricks",
        "Data Governance",
        "Legacy System Parsing",
        "Data Quality",
      ],
    },
    {
      title: "Backend / Systems",
      items: [
        "Python",
        "FastAPI",
        "Flask",
        "REST APIs",
        "Edge Deployment",
        "System Integration",
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Linux",
        "Git",
        "Power BI",
        "Elasticsearch",
      ],
    },
  ] satisfies SkillCategory[],
  projects: [
    {
      title: "Talent Intelligence Agent Platform",
      strapline:
        "Unified five disconnected enterprise systems into a single conversational decision surface for staffing and delivery leaders.",
      problem:
        "Candidate discovery depended on manual navigation across SQL stores, Elasticsearch, internal APIs, and SharePoint, creating week-long turnaround times for what should have been fast staffing decisions.",
      architecture: [
        "Designed an agentic retrieval layer that could route questions to structured systems, search indices, and document repositories from one interface.",
        "Used LangGraph-style orchestration patterns to manage tool selection, retrieval flows, and response synthesis for natural language queries.",
        "Added observability and tracing patterns so prompts, retrieval quality, and response behavior could be monitored in production.",
      ],
      impact: [
        "Reduced candidate identification from roughly one week to near-instant search and answer workflows.",
        "Rolled out to 200+ users across delivery leadership, senior managers, and project managers.",
        "Collapsed a multi-step internal process into a single conversational interface with materially better usability.",
      ],
      techStack: [
        "Python",
        "LangGraph",
        "Hybrid RAG",
        "SQL",
        "Elasticsearch",
        "REST APIs",
        "SharePoint",
        "LangFuse",
      ],
      learnings:
        "Agent systems earn trust when tool routing, source grounding, and traces are visible to operators rather than hidden behind a black-box chat UI.",
    },
    {
      title: "Shipment Recommendation Engine",
      strapline:
        "Built a prescriptive optimization system that recommends truck shipments under real-world operational constraints.",
      problem:
        "Shipment planning was constrained by complex capacity and fulfillment rules, leaving money on the table through avoidable shipment counts and suboptimal allocations.",
      architecture: [
        "Modeled the recommendation workflow as a linear programming optimization problem with business rules encoded as hard constraints.",
        "Connected historical shipping context and operational parameters into a scoring and recommendation engine for planners.",
        "Designed outputs to be interpretable, making the optimization logic easier for business stakeholders to trust and adopt.",
      ],
      impact: [
        "Generated $2.4M in annual savings.",
        "Reduced total shipments by 8% while increasing shipped quantities by 11%.",
        "Turned planning from manual trade-off analysis into repeatable decision support.",
      ],
      techStack: ["Python", "Linear Programming", "SQL", "Optimization Modeling"],
      learnings:
        "Optimization products land best when the mathematical model is paired with business-readable outputs and clear constraint explanations.",
    },
    {
      title: "OCR on Edge Cameras for License Plate Detection",
      strapline:
        "Deployed an OCR pipeline directly onto highway camera hardware for real-time number plate extraction.",
      problem:
        "Traffic teams needed plate detection at the edge, where latency and hardware constraints make many cloud-first computer vision pipelines impractical.",
      architecture: [
        "Combined OpenCV-based vehicle detection with a Tesseract OCR model adapted for UK number plates.",
        "Optimized the computer vision and OCR flow for live inference on edge camera hardware.",
        "Structured the pipeline to support near real-time detection without depending on centralized processing.",
      ],
      impact: [
        "Delivered live plate detection on production camera infrastructure.",
        "Proved that lightweight CV + OCR stacks can be productionized on constrained edge devices.",
      ],
      techStack: ["Python", "OpenCV", "Tesseract OCR", "Edge Deployment"],
      learnings:
        "Production OCR is often a systems problem as much as a model problem - deployment environment, image quality, and hardware constraints drive accuracy just as hard as training.",
    },
    {
      title: "Hybrid RAG Assistants with NLQ",
      strapline:
        "Built retrieval-driven assistants that answer business questions across enterprise knowledge and structured data.",
      problem:
        "Users needed natural language access to business knowledge, but enterprise information lived across unstructured documents, APIs, and operational datasets.",
      architecture: [
        "Implemented hybrid retrieval patterns that blend semantic search, keyword search, and tool-based access to structured systems.",
        "Used agent orchestration to choose the right retrieval path based on the question shape and downstream data source.",
        "Introduced tracing and performance monitoring to observe retrieval quality, answer fidelity, and user behavior over time.",
      ],
      impact: [
        "Enabled NLQ experiences that turned fragmented knowledge stores into usable internal copilots.",
        "Established reusable architecture patterns for future chatbot and assistant projects.",
      ],
      techStack: [
        "LangChain",
        "LangGraph",
        "Hybrid RAG",
        "LangFuse",
        "Python",
        "APIs",
      ],
      learnings:
        "Great assistant UX comes from retrieval design, evaluation loops, and system observability - not just model choice.",
    },
    {
      title: "Excel Template Analyzer",
      strapline:
        "Automated template review and compliance validation for analysts working across large spreadsheet inventories.",
      problem:
        "Analysts were manually validating more than 100 spreadsheet templates, producing inconsistent reviews and severely limiting throughput.",
      architecture: [
        "Designed an AI-assisted validation workflow that could inspect spreadsheet structure, compliance patterns, and reporting issues at scale.",
        "Turned review outputs into analyst-friendly reports so exceptions could be triaged instead of rediscovered manually.",
        "Wrapped the workflow in a delivery process that made it reliable enough for repeat operational use.",
      ],
      impact: [
        "Improved compliance accuracy from roughly 65% to 95%.",
        "Lifted analyst output from 2 to 3 reports per person up to 10 to 15 reports.",
        "Created an effective 5x productivity gain while eliminating manual validation as the bottleneck.",
      ],
      techStack: ["Python", "Excel Processing", "Validation Rules", "Automation"],
    },
    {
      title: "Legacy COBOL Migration Pipelines",
      strapline:
        "Built parsing pipelines that transformed legacy code analysis into a scalable migration accelerator.",
      problem:
        "Insurance systems depended on large COBOL estates that were difficult to analyze manually during migration from COBOL 3 to COBOL 4.",
      architecture: [
        "Engineered Python data pipelines to parse legacy codebases and classify patterns at scale.",
        "Combined automated rule detection with downstream reporting to highlight migration-sensitive segments quickly.",
        "Improved data extraction and query workflows to make migration analysis faster and more reliable for engineering teams.",
      ],
      impact: [
        "Scaled migration analysis beyond manual review of legacy code.",
        "Improved data reliability and query performance on mainframe-aligned datasets.",
      ],
      techStack: ["Python", "SQL", "ETL", "Rule-Based Parsing", "Mainframe Data"],
      learnings:
        "Even non-GenAI systems benefit from architecture thinking: stable ingestion, consistent classification, and reliable analyst feedback loops are what make data platforms usable.",
    },
  ] satisfies Project[],
  experience: [
    {
      company: "Innova Solutions",
      role: "Senior Data Scientist",
      duration: "Jul 2024 - Present",
      location: "Hyderabad, India",
      achievements: [
        "Built a linear-programming shipment recommendation engine that delivered $2.4M in annual savings with fewer shipments and higher shipped volume.",
        "Architected agentic AI and RAG products, including a talent intelligence platform adopted by 200+ users and NLQ assistants with observability built in.",
        "Led a 12-person cross-functional team while driving organization-wide GenAI adoption and BI delivery.",
      ],
    },
    {
      company: "Cohere",
      role: "Data Scientist",
      duration: "Nov 2023 - Jul 2024",
      location: "United Kingdom",
      achievements: [
        "Led a 10-person specialist team creating reasoning-heavy Python and SQL datasets for LLM fine-tuning.",
        "Designed quality standards and curation pipelines that aligned research requirements with high-signal training data production.",
      ],
    },
    {
      company: "Yunex Traffic",
      role: "Data Scientist",
      duration: "Aug 2021 - Aug 2023",
      location: "United Kingdom",
      achievements: [
        "Automated ticket categorization with NLP, saving 72 hours of manual work every week across 9 teams.",
        "Deployed OCR for live highway cameras using OpenCV and Tesseract tuned for UK number plates.",
        "Built internal AI assistants and forecasting proofs of concept covering tender workflows, route optimization, and traffic demand signals.",
      ],
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Analyst",
      duration: "Jan 2019 - Aug 2021",
      location: "Hyderabad, India",
      achievements: [
        "Built Python and SQL pipelines for large-scale insurance data analysis and legacy code migration workflows.",
        "Improved reliability across data extraction and reporting by identifying data quality issues and hardening system behavior.",
      ],
    },
  ] satisfies ExperienceItem[],
  architecture: [
    {
      title: "Agent Systems",
      description:
        "I design AI workflows as coordinated systems, not single prompts - with tool routing, retrieval decisions, and fallback paths treated as product architecture.",
      points: [
        "LangGraph-style orchestration",
        "Tool-calling over enterprise systems",
        "Human-in-the-loop and escalation paths",
      ],
    },
    {
      title: "RAG Pipelines",
      description:
        "Retrieval is designed around the shape of the question and the source of truth, combining structured and unstructured access paths where needed.",
      points: [
        "Hybrid retrieval strategies",
        "Source grounding and answer traceability",
        "NLQ over documents, APIs, and databases",
      ],
    },
    {
      title: "ML Deployment Thinking",
      description:
        "I focus on what makes models usable in production: interfaces, latency, hardware constraints, monitoring, and adoption by business teams.",
      points: [
        "Edge and enterprise deployment",
        "Operational decision support",
        "Scalable API and batch workflows",
      ],
    },
    {
      title: "Observability and Evals",
      description:
        "AI systems need inspection loops. I instrument traces, failure modes, and quality signals so teams can improve behavior instead of guessing.",
      points: [
        "LangFuse tracing",
        "Prompt and retrieval diagnostics",
        "Quality review workflows",
      ],
    },
  ] satisfies ArchitecturePillar[],
  operatingPrinciples: [
    "Start from the business bottleneck, then select the simplest architecture that can create durable leverage.",
    "Blend classical ML, optimization, and LLM systems when the problem demands it instead of forcing one paradigm everywhere.",
    "Design for trust with grounding, observability, and stakeholder-readable outputs.",
    "Treat adoption as part of the system: UX, workflow fit, and measurable outcomes matter as much as model performance.",
  ],
  education: [
    "MSc in Data Science, University of Surrey",
    "BTech in Computer Science and Engineering, KL University",
  ],
} as const;
