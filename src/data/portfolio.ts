/**
 * Central portfolio data — generated from Aarush's resume (Aarush_narang.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aarush Narang',
  displayName: 'Aarush Narang',
  firstName: 'AARUSH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN AARUSH ORIGINAL',
  role: 'AI Solutions Engineer',
  tagline: ['AI / ML', 'PRODUCT', 'GROWTH'],
  intro:
    'A B.Tech Artificial Intelligence & Machine Learning student (CGPA 8.70) building AI-powered applications, intelligent automation systems and scalable software with Python, Java, React and Docker to solve real-world business problems.',
  location: 'Bengaluru, Karnataka',
  email: 'narangaarush909@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/aarush-narang-008715413/',
    github: 'https://github.com/aarushnarang1228-cloud',
  },
  resumePdf: '/assets/Aarush_Narang_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Aarush Narang',
  },
  interests: ['Generative AI & LLMs', 'Software Engineering', 'Product Development', 'Business Growth & Strategy'],
};

export const education = [
  {
    school: 'Christ University',
    place: 'Bengaluru, Karnataka',
    degree: 'Bachelor of Technology — Artificial Intelligence and Machine Learning',
    period: 'June 2023 – Present',
    score: 'CGPA 8.70',
  },
  {
    school: 'Delhi Public School',
    place: 'Ghaziabad',
    degree: 'Class XII — PCM with Computer Science',
    period: 'April 2022 – April 2023',
    score: '87.4%',
  },
  {
    school: 'Delhi Public School',
    place: 'Ghaziabad',
    degree: 'CLass X',
    period: 'April 2020 – April 2021',
    score: '93.2%',
  },
];

export const experience = [
  {
    company: 'Inkspilled',
    role: 'AI Engineer Intern',
    place: 'Hauz Khas, Delhi',
    period: 'January 2026 – April 2026',
    points: [
      'Automated 20+ business workflows across 3 international client engagements, reducing manual effort by 45% by designing and deploying 10+ production-ready AI applications, data-processing pipelines, and decision-support solutions tailored to complex business requirements.',
      'Accelerated solution delivery by 36% across client projects by engineering AI-powered backend services, asynchronous processing pipelines, and scalable automation infrastructure supporting 50K+ document retrieval and processing operations',
    ],
  },
  {
    company: 'Paytm',
    role: 'Backend Software Engineer Intern',
    place: 'Noida, Uttar Pradesh',
    period: 'July 2025 – December 2025',
    points: [
      'Optimized data-intensive workflows processing 10M+ database records, reducing query latency by 25% through database indexing, intelligent caching, transaction optimization, and efficient SQL data access.',
      'Built and optimized scalable backend microservices and REST APIs supporting 250K+ daily API requests, reducing average response latency by 34% through query optimization, asynchronous processing, and efficient service design.',
      'Developed 6+ production-grade backend modules in collaboration with 20+ software engineers, product managers, and QA engineers, enabling secure feature delivery while maintaining 95% service availability across high-volume fintech workflows.',
    ],
  },
  {
    company: 'Reliance Retail',
    role: 'AI Solutions & Cutomer Success Intern',
    place: 'Bengaluru, Karnataka',
    period: 'April 2025 – June 2025',
    points: [
      'Developed and deployed 3+ enterprise AI solutions supporting 10+ enterprise customers, including AI-powered customer support, knowledge retrieval, workflow automation, and analytics solutions, reducing average support resolution time by 43%.',
      'Collaborated with Engineering, Product, and Customer Success teams to troubleshoot customer-facing workflows and productionize AI-powered support capabilities, increasing customer adoption by 32% and CSAT by 24%.',
      'Engineered customer-facing AI infrastructure processing 75K+ enterprise knowledge assets, improving response relevance by 38% and onboarding efficiency by 41% through semantic search, vector indexing, and automated knowledge retrieval.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'financial-intelligence',
    title: 'Multi-Agent Financial Intelligence',
    year: '2026',
    genre: 'AI • FinTech • Agentic Systems',
    logline: 'An AI-powered financial research platform that analyses SEC filings, earnings transcripts, and financial statements to accelerate investment due diligence.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'LangChain', 'FAISS', 'OpenAI API', 'Docker'],
    build: [
      'Built a financial intelligence platform analysing 10K+ SEC filings, earnings transcripts, and financial statements, automating 46% of institutional due-diligence workflows through document processing, semantic retrieval, and LLM-powered reasoning.',
      'Reduced end-to-end investment research time from 2.5 hours to 70 minutes using contextual ranking, scalable retrieval pipelines, intelligent caching, backend APIs, and asynchronous multi-agent orchestration.',
    ],
    features: [
      'Financial document ingestion and analysis',
      'LLM-powered financial question answering',
      'Multi-agent research orchestration',
      'FAISS-based semantic retrieval',
      'Contextual ranking of financial evidence',
      'Automated due-diligence workflows',
    ],
    metrics: [
      { value: '10K+', label: 'financial documents analysed' },
      { value: '46%', label: 'due-diligence workflows automated' },
      { value: '70 min', label: 'research time, down from 2.5 hours' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'supply-chain-intelligence',
    title: 'Supply Chain & Inventory Intelligence',
    year: '2026',
    genre: 'Data Science • Forecasting • Analytics',
    logline: 'A predictive decision intelligence platform that transforms retail transactions into demand forecasts, inventory-risk signals, and replenishment insights.',
    stack: ['Python', 'SQL', 'PostgreSQL', 'AWS', 'QuickSight', 'XGBoost'],
    build: [
      'Architected a supply-chain analytics platform processing 1.5M+ retail transactions across 25K+ SKUs, integrating ETL pipelines, data modelling, demand forecasting, inventory-health metrics, and anomaly detection.',
      'Reduced forecast error by 23% against baseline models and improved inventory-risk detection F1 by 28% through SKU-level forecasting, statistical validation, anomaly detection, and replenishment analysis, enabling 14-day forward visibility into stockout and overstock risks.',
    ],
    features: [
      'Retail transaction ETL and data modelling',
      'SKU-level demand forecasting',
      'XGBoost-based predictive modelling',
      'Stockout and overstock risk detection',
      'Inventory anomaly detection',
      '14-day replenishment risk visibility',
      'AWS-powered analytics and QuickSight dashboards',
    ],
    metrics: [
      { value: '1.5M+', label: 'retail transactions processed' },
      { value: '25K+', label: 'SKUs analysed' },
      { value: '23%', label: 'lower forecast error' },
      { value: '28%', label: 'improvement in risk detection F1' },
      { value: '14 days', label: 'forward risk visibility' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'accountiq',
    title: 'AccountIQ',
    year: '2026',
    genre: 'Agentic AI • Procurement • Sales Intelligence',
    logline: 'An agentic enterprise intelligence platform that connects company research, procurement insights, decision-maker discovery, and personalised B2B outreach.',
    stack: ['Python', 'SQLAlchemy', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Groq API', 'Docker'],
    build: [
      'Engineered an asynchronous account research pipeline using FastAPI, Celery, and Redis, orchestrating 5 data provider adapters to aggregate company, financial, news, enrichment, and people intelligence into structured PostgreSQL records.',
      'Integrated LLM-powered account signal synthesis and personalised B2B outreach generation, combining multi-source research into contextual company summaries and role-aware email drafts, with source attribution to support traceability and research validation.',
    ],
    features: [
      'Multi-provider company research orchestration',
      'SEC EDGAR financial filings and company data',
      'LLM-powered account signal synthesis',
      'Asynchronous research jobs with Celery and Redis',
      'PostgreSQL-backed company intelligence',
      'Financial history and procurement estimates',
      'Contact discovery and enrichment',
      'Personalised B2B email generation',
      'Source-aware research and data provenance',
    ],
    metrics: [
      { value: '5', label: 'data provider adapters' },
      { value: '40%', label: 'target reduction in research time' },
      { value: '30%', label: 'target faster outreach preparation' },
      { value: '95%', label: 'target research job success rate' },
      { value: '3+', label: 'account intelligence categories' },
      { value: '100%', label: 'source attribution target' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'hackverse',
    title: 'HackVerse Winner',
    org: 'MIT Bengaluru',
    detail: 'Won HackVerse by building KYCmitra, a blockchain-based KYC application integrating IBM Granite, Watson AI, and APIs.',
    laurel: 'Hackathon Winner',
  },
  {
    id: 'sap-vibeathon',
    title: 'Winner — SAP Labs Vibeathon',
    org: 'SAP Labs, Bengaluru',
    detail: 'Won an industry-hosted Vibeathon at SAP Labs’ Bengaluru office, recognised for developing an innovative solution in a competitive, hands-on technology challenge.',
    laurel: 'Hackathon Winner',
  },
  {
    id: 'lovelace-hackathon',
    title: 'Runner-Up — Lovelace Hackathon',
    org: 'MIT Bengaluru',
    detail: 'Secured runner-up position in a 72-hour hackathon, translating an idea into a technical solution through sustained development, iterative problem-solving, and rapid prototyping under tight deadlines.',
    laurel: 'Hackathon Runner-Up',
  },
  {
    id: 'code-neutral-hackathon',
    title: 'Second Runner-Up — Code Neutral',
    org: 'ACS College Bengaluru',
    detail: 'Achieved a second runner-up finish at a state-level hackathon, earning podium recognition for the team’s technical solution and execution in a competitive problem-solving environment.',
    laurel: 'State-Level Podium Finish',
  },
  {
    id: 'nasa-space-apps',
    title: 'Overall Coordinator — NASA Space Apps Challenge',
    org: 'NASA International Space Apps Challenge',
    detail: 'Led end-to-end execution of a global innovation hackathon, coordinating 400+ participants and 15+ mentors, judges, organisers, and volunteers across event operations, logistics, stakeholder coordination, and participant engagement.',
    laurel: 'Global Hackathon Leadership',
  },
  {
    id: 'ieee-leadership',
    title: 'Executive Committee Leadership',
    org: 'IEEE Computer Society',
    detail: 'Led a 1500+ member technical community, organizing 50+ technical events and driving student participation.',
    laurel: 'IEEE Leadership',
  },
  {
  id: 'christ-incubation-centre',
  title: 'Lead — Christ Incubation Centre',
  org: 'CHRIST University',
  detail:
    'Led 25+ innovation initiatives impacting 1,500+ students, coordinated 65+ founders and ecosystem stakeholders, and helped channel 100+ student-led startup ideas into the university’s incubation pipeline. Also served as Overall Head of the 8th National YESUMMIT, bringing together 1,200+ attendees from 15+ Indian states.',
  laurel: 'Startup Ecosystem Leadership',
  },
  {
  id: 'sdg-cell',
  title: 'Head — SDG Cell',
  org: 'CHRIST University',
  detail:
    'Led 20+ sustainability and social-impact programs aligned with the UN Sustainable Development Goals, engaging 1,000+ stakeholders across campus and community initiatives. Directed cross-functional campaigns with 40+ student leaders and external partners, mobilised 500+ student volunteers, and built partnerships advancing environmental sustainability, education, health, social inclusion, and community development.',
  laurel: 'Sustainability & Social Impact',
  },
];

export type Certification = { issuer: string; name: string; link?: string; };

export const certifications: Certification[] = [
  // Strong technical foundation
  { issuer: 'AWS', name: 'AWS Certified AI Practitioner' },
  { issuer: 'DeepLearning.AI / Stanford University', name: 'Machine Learning Specialization' },
  { issuer: 'MongoDB', name: 'MongoDB Certified Associate Developer' },

  // Product and business thinking
  { issuer: 'Aha!', name: 'Aha! Product Management Certification' },
  { issuer: 'Forage', name: 'BCG – Data Science Job Simulation' },
  { issuer: 'IIBA Mumbai Chapter', name: 'Product Management First Steps' },

  // Software engineering and infrastructure
  { issuer: 'AWS', name: 'AWS Academy Graduate – Cloud Foundations' },
  { issuer: 'Forage', name: 'J.P. Morgan – Software Engineering Job Simulation' },
  { issuer: 'Neo4j', name: 'Neo4j Database Certified Professional' },
  { issuer: 'Postman', name: 'Postman API Fundamentals Student Expert' },

  // Analytics and applied AI
  { issuer: 'L&T Technology Services', name: 'Programming for Data Analytics' },
  { issuer: 'Microsoft', name: 'Career Essentials in Generative AI by Microsoft and LinkedIn' },
  { issuer: 'NPTEL', name: 'Database Management System' },
  { issuer: 'Udemy', name: 'Machine Learning – From Basic to Advanced Level' },
  { issuer: 'Great Learning', name: 'Crash Course in Machine Learning' },

  // Product execution and project management
  { issuer: 'Atlassian', name: 'Agile Project Management Certification' },
  { issuer: 'ClickUp', name: 'ClickUp Expert Certification' },
  { issuer: 'NPTEL', name: 'Project Management' },
  { issuer: 'Nestlé', name: 'Idea Generation & Successful Entrepreneurship' },

  // Programming and development
  { issuer: 'Oracle', name: 'Java Certified Foundations Associate' },
  { issuer: 'CS50', name: 'Introduction to Programming with Python' },
  { issuer: 'GitHub', name: 'GitHub Foundations' },
  { issuer: 'Cisco', name: 'Python Essentials 1' },
  { issuer: 'Oracle', name: 'Oracle Certified Foundations Associate – Database' },
  { issuer: 'Oracle', name: 'Java Programming – Oracle Academy' },
  { issuer: 'CS50', name: 'Introduction to Databases with SQL' },
  { issuer: 'Cisco', name: 'JavaScript Essentials 2' },
  { issuer: 'Cisco', name: 'JavaScript Essentials 1' },
  { issuer: 'SoloLearn', name: 'React + Redux Course' },
  { issuer: 'Pearson', name: 'IT Specialist – HTML and CSS' },
  { issuer: 'Cisco', name: 'CSS Essentials' },
  { issuer: 'Cisco', name: 'HTML Essentials' },
  { issuer: 'Udemy', name: 'Complete WordPress Website Developer Course' },

  // Business development and marketing
  { issuer: 'Snov.io', name: 'From Lead Generation to Closing Deals' },
  { issuer: 'SkillsBooster', name: 'SEO Strategy 2024: SEO Training to TOP Rank Your Website' },
  { issuer: 'LinkedIn', name: 'Mastering SEO: How to Develop a Superior SEO Strategy' },

  // Additional technical and specialist credentials
  { issuer: 'MathWorks', name: 'MATLAB Onramp – MATLAB Fundamentals' },
  { issuer: 'Cognitive Class', name: 'NoSQL and DBaaS 101 Course' },
  { issuer: 'TestMu AI', name: 'LambdaTest Test Automation Certification' },
  { issuer: 'PagerDuty', name: 'DevOps Professional Certification' },
  { issuer: 'Cisco', name: 'Networking Basics' },
  { issuer: 'Microsoft', name: 'Career Essentials in Generative AI by Microsoft and LinkedIn' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Building, analysing & problem-solving',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'C++', mono: 'C+' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'From intelligent models to AI applications',
    skills: [
      { name: 'LLMs', mono: 'LL' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'LangChain', mono: 'LC' },
      { name: 'LangGraph', mono: 'LG' },
      { name: 'Hugging Face', mono: 'HF' },
      { name: 'FAISS', mono: 'Fa' },
      { name: 'Sentence Transformers', mono: 'ST' },
      { name: 'Stable Diffusion', mono: 'SD' },
      { name: 'GFPGAN', mono: 'GF' },
      { name: 'Whisper', mono: 'Wh' },
      { name: 'Multi-Agent Systems', mono: 'MA' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Reliable services & intelligent workflows',
    skills: [
      { name: 'FastAPI', mono: 'FA' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'RA' },
      { name: 'Asynchronous Processing', mono: 'AP' },
      { name: 'Celery', mono: 'Ce' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'SQLAlchemy', mono: 'SA' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Databases',
    subtitle: 'Structured data, retrieval & analytics',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Vector Search', mono: 'VS' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'XGBoost', mono: 'Xg' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Deployment, containers & infrastructure',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'AWS', mono: 'Aw' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'CI/CD Fundamentals', mono: 'CI' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Interfaces for products & AI applications',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'architecture',
    title: 'AI Systems & Architecture',
    subtitle: 'Orchestration, retrieval & scalable services',
    skills: [
      { name: 'RAG Pipelines', mono: 'RP' },
      { name: 'Agentic Workflows', mono: 'AW' },
      { name: 'Semantic Search', mono: 'SS' },
      { name: 'Workflow Orchestration', mono: 'WO' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Model Serving', mono: 'MS' },
      { name: 'Caching', mono: 'Ca' },
    ],
  },
  {
    id: 'product-business',
    title: 'Product & Business',
    subtitle: 'Connecting technical solutions to business outcomes',
    skills: [
      { name: 'Product Thinking', mono: 'PT' },
      { name: 'Business Intelligence', mono: 'BI' },
      { name: 'Data-Driven Decision Making', mono: 'DD' },
      { name: 'B2B Account Intelligence', mono: 'B2' },
      { name: 'AI-Powered Automation', mono: 'AA' },
      { name: 'Technical Project Leadership', mono: 'PL' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Beyond the screen',
    skills: [
      { name: 'Football', mono: 'Fb' },
      { name: 'Café Hopping', mono: 'Ch' },
      { name: 'Black Coffee', mono: 'Bc' },
      { name: 'Reading Books', mono: 'Bk' },
      { name: 'Crime Thrillers', mono: 'Ct' },
      { name: 'Ghost Stories', mono: 'Gs' },
      { name: 'Stand-up Comedy', mono: 'Sc' },
      { name: 'Horror', mono: 'Hr' },
      { name: 'Cricket', mono: 'Cr' },
      { name: 'Snooker', mono: 'Sn' },
      { name: 'Table Tennis', mono: 'Tt' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['AccountIQ', 'Multi-Agent Financial Intelligence & Due Diligence Platform', 'Supply Chain & Inventory Decision Intelligence Platform'],
  Java: ['Oracle Java Certified Foundations Associate', 'Oracle Academy — Java Programming'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2', 'InkSPILLED — AI-powered media applications'],
  SQL: ['Supply Chain & Inventory Decision Intelligence Platform', 'E-commerce Customer & Marketplace Intelligence Platform'],
  LLMs: ['AccountIQ', 'Enterprise AI Workflow Orchestration Platform'],
  RAG: ['Enterprise AI Workflow Orchestration Platform'],
  LangChain: ['Enterprise AI Workflow Orchestration Platform'],
  'Hugging Face': ['AI/ML model development toolkit'],
  FAISS: ['Multi-Agent Financial Intelligence & Due Diligence Platform'],
  'Multi-Agent Systems': ['Multi-Agent Financial Intelligence & Due Diligence Platform', 'AccountIQ'],
  FastAPI: ['AccountIQ', 'Enterprise AI Workflow Orchestration Platform', 'InkSPILLED — AI serving pipelines'],
  Flask: ['Python web application development'],
  'REST APIs': ['AccountIQ', 'InkSPILLED — AI serving pipelines'],
  Celery: ['AccountIQ — asynchronous research jobs'],
  Redis: ['AccountIQ — asynchronous job orchestration'],
  SQLAlchemy: ['AccountIQ — PostgreSQL persistence layer'],
  PostgreSQL: ['AccountIQ', 'Multi-Agent Financial Intelligence & Due Diligence Platform', 'Supply Chain & Inventory Decision Intelligence Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  Pandas: ['E-commerce Customer & Marketplace Intelligence Platform'],
  'Scikit-learn': ['E-commerce Customer & Marketplace Intelligence Platform'],
  XGBoost: ['Supply Chain & Inventory Decision Intelligence Platform'],
  Docker: ['AccountIQ', 'Enterprise AI Workflow Orchestration Platform', 'Multi-Agent Financial Intelligence & Due Diligence Platform'],
  Kubernetes: ['Cyfuture — model deployment and infrastructure'],
  AWS: ['AWS Academy Graduate — Cloud Foundations', 'AWS Certified AI Practitioner', 'Enterprise AI Workflow Orchestration Platform'],
  GitHub: ['GitHub Foundations', 'Portfolio and project repositories'],
  React: ['Frontend development'],
  HTML: ['Pearson IT Specialist — HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist — HTML and CSS', 'Cisco CSS Essentials'],
  'Stable Diffusion': ['InkSPILLED — AI-powered image and media generation'],
  GFPGAN: ['InkSPILLED — AI-powered media enhancement'],
  Whisper: ['AI tooling and speech-processing toolkit'],
  'Agentic Workflows': ['AccountIQ', 'Enterprise AI Workflow Orchestration Platform'],
  'Semantic Search': ['Enterprise AI Workflow Orchestration Platform', 'Multi-Agent Financial Intelligence & Due Diligence Platform'],
  'Workflow Orchestration': ['Enterprise AI Workflow Orchestration Platform', 'AccountIQ'],
  Microservices: ['AI application and service architecture'],
  'Model Serving': ['Cyfuture — model deployment', 'InkSPILLED — AI serving pipelines'],
  'B2B Account Intelligence': ['AccountIQ'],
  'AI-Powered Automation': ['Enterprise AI Workflow Orchestration Platform', 'InkSPILLED — AI agents'],
  'Technical Project Leadership': ['Christ Incubation Centre — innovation initiatives', 'SDG Cell — sustainability and social-impact programs', 'NASA Space Apps Challenge — overall coordination'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'Building the academic foundation at Delhi Public School before beginning the journey into computer science and artificial intelligence.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Completed Class X at Delhi Public School with 93.2%, building the academic foundation for the years ahead.',
        tags: ['Class X', '93.2%', 'Delhi Public School'],
        runtime: '2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Next Milestone',
        description: 'Completed Class XII at Delhi Public School with 87.4%, preparing for an undergraduate journey in computer science and AI.',
        tags: ['Class XII', '87.4%', 'Delhi Public School'],
        runtime: '2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2023 – Present',
    synopsis: 'Pursuing a B.Tech in Computer Science & Engineering with a specialisation in AI & ML at CHRIST University, Bengaluru.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning , combining core computing foundations with artificial intelligence and machine learning.',
        tags: ['B.Tech', 'Computer Science', 'AI & ML'],
        runtime: 'June 2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Academic Record',
        description: 'Maintaining a current CGPA of 8.70/10 while developing technical skills across programming, data, AI systems, and software engineering.',
        tags: ['CGPA 8.70/10', 'Software Engineering', 'AI'],
        runtime: 'Current',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Curious Mind',
        description: 'Exploring how intelligent systems, retrieval-augmented generation, automation, and software architecture can turn complex problems into practical applications.',
        tags: ['LLMs', 'RAG', 'AI Applications'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'From Code to Production',
    period: '2025 – 2026',
    synopsis: 'Three industry experiences across backend engineering, enterprise AI, and customer-facing technology solutions.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The AI Engineer',
        description: 'Worked as an AI Engineer Intern at InkSPILLED Media, building AI-powered media applications and automation workflows involving generative AI, image enhancement, and media processing.',
        tags: ['Inkspilled', 'Generative AI', 'AI Automation', 'Meida Processing'],
        runtime: 'Jan 2026 – Apr 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Backend Engineer',
        description: 'Worked as a Backend Software Engineer Intern at Paytm, contributing to backend services, API workflows, database operations, and performance-oriented engineering. Previously shared project metrics include 250K+ daily API requests, 15+ modules, 99% availability, and 10M+ records.',
        tags: ['Paytm', 'Backend Engineering', 'APIs', 'Databases'],
        runtime: 'Jul 2025 – Dec 2025',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The AI Solutions Intern',
        description: 'Joined Reliance Retail as an AI Solutions & Customer Success Intern, working across enterprise AI solutions, customer workflows, integrations, and adoption. Previously shared outcomes include 8+ AI solutions, 20+ customers, 65% lower support-resolution time, and 32% higher adoption.',
        tags: ['Reliance Retail', 'Enterprise AI', 'Customer Success'],
        runtime: 'Apr 2025 – Jun 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Intelligent Products',
    period: '2026',
    synopsis: 'Moving beyond individual models to AI-powered platforms, agentic workflows, financial intelligence, and data-driven decision systems.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Architect',
        description: 'Built AccountIQ, an account intelligence platform that orchestrates company research, financial information, account signals, and personalised B2B outreach using FastAPI, PostgreSQL, Celery, Redis, and an LLM API.',
        tags: ['AccountIQ', 'Agentic AI', 'B2B Intelligence', 'FastAPI'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Financial Analyst',
        description: 'Developed a multi-agent financial intelligence and due-diligence platform designed to analyse financial filings and company information. The project targets faster research and more automated due-diligence workflows.',
        tags: ['Financial Intelligence', 'Multi-Agent AI', 'Langchain', 'FAISS'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Decision Scientist',
        description: 'Developed a supply-chain and inventory decision intelligence platform using retail transaction data, forecasting, and machine learning to support inventory-risk analysis and better operational decisions.',
        tags: ['Machine Learning', 'XGBoost', 'Supply Chain', 'Data Analytics'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'The Workflow Engineer',
        description: 'Designed an enterprise AI workflow orchestration platform combining retrieval, LLM-powered processing, and asynchronous execution. The project description reports automation of 52% of manual document-processing tasks across 12M+ knowledge records and a 37% reduction in retrieval latency.',
        tags: ['RAG', 'LLMs', 'Workflow Orchestration', 'Enterprise AI'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "Leadership Beyond the Code",
    period: 'Now streaming',
    synopsis: 'Building communities, coordinating large-scale initiatives, supporting entrepreneurship, and contributing to social impact alongside technical work.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The HackVerse Winner',
        description: 'Won HackVerse at MIT Bengaluru by building KYCmitra, an AI-powered and blockchain-based KYC verification solution under a 24-hour hackathon deadline.',
        tags: ['HackVerse', 'KYCmitra', 'AI', 'Blockchain'],
        runtime: '24-hour hackathon',
        palette: ocean,
      },
      {
        code: 'S05 E02',
        title: 'The Lovelace Runner-Up',
        description: 'Earned runner-up at the 72-hour Lovelace Hackathon organised by MIT Bengaluru, second runner-up at the 24-hour Code Neutral state-level hackathon hosted at ACS College, and won the SIT Vibeathon organised by SAP Labs at its Bengaluru office.',
        tags: ['Lovelace Hackathon', '72 hrs', 'Runner-Up'],
        runtime: '72-hour hackathon',
        palette: jade,
      },
      {
        code: 'S05 E03',
        title: 'The Code Neutral Finalist',
        description: 'Earned second runner-up at the Code Neutral state-level hackathon hosted at ACS College, demonstrating rapid problem-solving and solution development in a 24-hour competition.',
        tags: ['Code Neutral', 'Second Runner-Up', 'State-Level'],
        runtime: 'State Level Hackathon',
        palette: crimson,
      },
      {
        code: 'S05 E04',
        title: 'The Global Event Coordinator',
        description: 'Served as Overall Coordinator for the NASA International Space Apps Challenge at CHRIST University, coordinating 400+ participants and 15+ mentors, judges, organisers, and volunteers across event operations and participant engagement.',
        tags: ['NASA Space Apps Challenge', 'Event Leadership', 'Stakeholder Management'],
        runtime: 'In production',
        palette: violet,
      },
      {
        code: 'S05 E05',
        title: 'The IEEE Leader',
        description: 'Served as IEEE Computer Society Chairperson, leading a community of 500+ members and driving 50+ technical events, workshops, hackathons, and industry engagements while mentoring student leaders and contributing to chapter strategy.',
        tags: ['IEEE Computer Society', '500+ Members', '50+ Events', 'Technical Leadership'],
        runtime: 'In production',
        palette: amber,
      },
      {
        code: 'S05 E06',
        title: 'The Startup Ecosystem Builder',
        description: 'Led initiatives at the CHRIST Incubation Centre, contributing to 25+ innovation initiatives impacting 1,500+ students, coordinating 65+ founders and ecosystem stakeholders, and helping channel 100+ student-led startup ideas into the university incubation pipeline.',
        tags: ['Christ Incubation Centre', 'Entrepreneurship', 'Innovation'],
        runtime: 'In production',
        palette: ocean,
      },
      {
        code: 'S05 E07',
        title: 'The Sustainability Leader',
        description: 'Led sustainability and social-impact initiatives through the SDG Cell, directing 20+ programs aligned with the UN Sustainable Development Goals, engaging 1,000+ stakeholders, collaborating with 40+ student leaders, and mobilising 500+ student volunteers.',
        tags: ['SDG Cell', 'Sustainability', 'Social Impact'],
        runtime: 'In production',
        palette: jade,
      },
      {
        code: 'S05 E08',
        title: 'The Next Chapter',
        description: 'Continuing to explore AI engineering, scalable software systems, product development, and the intersection of technology and business — with the next chapter focused on building useful products and solving real-world problems.',
        tags: ['AI Engineering', 'Product Thinking', 'Software Systems'],
        runtime: 'Now Streaming',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'AI & Engineering', title: 'Python + AI Systems', detail: 'LLMs • Agentic Workflows • Backend Engineering', palette: amber },
  { label: 'Featured Original', title: 'AccountIQ', detail: 'Account Intelligence • Agentic AI • B2B Outreach', palette: crimson },
  { label: 'Financial Intelligence', title: 'Multi-Agent Due Diligence', detail: 'Financial Research • LLMs • Intelligent Automation', palette: ocean },
  { label: 'Industry Experience', title: 'InkSPILLED', detail: 'AI Engineer Intern • Jan–Apr 2026', palette: jade },
  { label: 'Backend Engineering', title: 'Paytm', detail: 'Backend Software Engineer Intern • Jul–Dec 2025', palette: amber },
  { label: 'AI Credential', title: 'AWS AI Practitioner', detail: 'AWS Certified AI Practitioner', palette: crimson },
  { label: 'Machine Learning', title: 'ML Specialization', detail: 'DeepLearning.AI • Stanford University', palette: ocean },
  { label: 'Industry Hackathon Winner', title: 'HackVerse', detail: 'MIT Bengaluru • KYCmitra', palette: crimson },
  { label: 'Technical Leadership', title: 'IEEE Computer Society', detail: 'Student leadership • Technical community building', palette: violet },
  { label: 'Current Focus', title: 'Building What’s Next', detail: 'Scalable AI • System Design • Product Engineering', palette: amber },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'AI meets Engineering',
    lines: ['B.Tech — Artificial Intelligence and Machine Learning', 'CHRIST University, Bengaluru', 'June 2023 – Present'],
    chips: ['CGPA 8.70'],
  },
  {
    kicker: 'The Toolkit',
    title: 'Code. Models. Systems.',
    lines: ['Python, Java, C++ · SQL · JavaScript', 'LangChain, LangGraph, FAISS · FastAPI', 'PostgreSQL, MongoDB · Docker, Kubernetes, AWS'],
    chips: ['AI Engineering', 'Backend', 'Cloud'],
  },
  {
    kicker: 'Industry Experience',
    title: 'From Backend to AI',
    lines: ['AI Engineer Intern — InkSPILLED Media', 'Backend Software Engineer Intern — Paytm', 'AI Solutions & Customer Success Intern — Reliance Retail'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['AccountIQ — Account Intelligence & Personalised B2B Outreach', 'Multi-Agent Financial Intelligence & Due Diligence', 'Supply Chain & Inventory Decision Intelligence'],
  },
  {
    kicker: 'Leadership & Impact',
    title: 'Beyond the code',
    lines: ['IEEE Computer Society · Technical Community Leadership', 'Christ Incubation Centre · Startup Ecosystem Development', 'SDG Cell & NASA Space Apps Challenge · Social Impact and Gloabl Event Leadership'],
  },
  {
    kicker: 'Achievements',
    title: 'Built. Competed. Won.',
    lines: ['Winner · HackVerse', 'Runner-Up · Lovelace Hackathon', 'Second Runner-Up · Code Neutral', 'Winner · SIT Vibeathon'],
  },
  {
    kicker: 'Certified',
    title: 'Learning in progress',
    lines: ['AWS · MongoDB · Oracle · GitHub · Pearson', 'NPTEL · Cisco · Udemy'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Machine Learning'],
  },
];

export type ProfileId = 'aarush' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'aarush',
    name: 'Aarush',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & engineering first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
