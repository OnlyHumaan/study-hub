import courseAccountingPrinciples from "@/assets/course-accounting-principles.jpg";
import courseBusinessMath from "@/assets/course-business-math.jpg";
import courseCostAccounting from "@/assets/course-cost-accounting.jpg";
import courseManagementAccounting from "@/assets/course-management-accounting.jpg";
import courseAuditing from "@/assets/course-auditing.jpg";
import courseFinancialReporting from "@/assets/course-financial-reporting.jpg";
import courseTaxation from "@/assets/course-taxation.jpg";
import courseAdvancedAuditing from "@/assets/course-advanced-auditing.jpg";

  id: string;
  name: string;
  faculty: string;
  icon: string;
  courseCount: number;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  departmentId: string;
  level: "Undergraduate" | "Masters" | "Doctoral" | "Core Curriculum";
  academicLevel?: "100 Level" | "200 Level" | "300 Level" | "400 Level";
  resourceCount: number;
  thumbnail?: string;
}

export interface Resource {
  id: string;
  courseId: string;
  title: string;
  description: string;
  sourceWebsite: string;
  sourceUrl: string;
  type: "Video Lectures" | "Interactive Tutorials" | "Text Documentation" | "Certification Courses";
  isPrimary?: boolean;
}

export const departments: Department[] = [
  { id: "accounting", name: "Accounting", faculty: "Faculty of Management", icon: "Calculator", courseCount: 8 },
  { id: "biochemistry", name: "BioChemistry", faculty: "Faculty of Science", icon: "FlaskConical", courseCount: 3 },
  { id: "business-admin", name: "Business Administration", faculty: "Faculty of Management", icon: "Briefcase", courseCount: 4 },
  { id: "cs", name: "Computer Science", faculty: "Faculty of Science", icon: "Monitor", courseCount: 5 },
  { id: "criminology", name: "Criminology", faculty: "Social Sciences", icon: "ShieldAlert", courseCount: 3 },
  { id: "computer-engineering", name: "Computer Engineering", faculty: "Faculty of Engineering", icon: "Cpu", courseCount: 4 },
  { id: "economics", name: "Economics", faculty: "Social Sciences", icon: "TrendingUp", courseCount: 4 },
  { id: "estate-management", name: "Estate Management", faculty: "Faculty of Environmental Sciences", icon: "Building2", courseCount: 3 },
  { id: "human-resources", name: "Human Resources Management", faculty: "Faculty of Management", icon: "UserCog", courseCount: 3 },
  { id: "info-management-tech", name: "Information & Management Technology", faculty: "Faculty of Management", icon: "Server", courseCount: 4 },
  { id: "international-relations", name: "International Relations & Diplomacy", faculty: "Social Sciences", icon: "Globe", courseCount: 3 },
  { id: "linguistics", name: "Linguistics", faculty: "Faculty of Arts", icon: "Languages", courseCount: 3 },
  { id: "mass-comm", name: "Mass Communication", faculty: "Faculty of Arts", icon: "Mic", courseCount: 3 },
  { id: "microbiology", name: "Microbiology", faculty: "Faculty of Science", icon: "Microscope", courseCount: 3 },
  { id: "political-science", name: "Political Science", faculty: "Social Sciences", icon: "Landmark", courseCount: 3 },
  { id: "project-management", name: "Project Management", faculty: "Faculty of Management", icon: "ClipboardList", courseCount: 3 },
  { id: "public-admin", name: "Public Administration", faculty: "Social Sciences", icon: "Building", courseCount: 3 },
  { id: "sociology", name: "Sociology", faculty: "Social Sciences", icon: "Users", courseCount: 3 },
];

export const courses: Course[] = [
  // Accounting — 100 Level
  { id: "acc101", code: "ACC-101", title: "Principles of Accounting", description: "Fundamentals of financial accounting including journals, ledgers, and trial balance.", departmentId: "accounting", level: "Undergraduate", academicLevel: "100 Level", resourceCount: 4, thumbnail: courseAccountingPrinciples },
  { id: "acc102", code: "ACC-102", title: "Business Mathematics", description: "Quantitative methods and mathematical applications in accounting.", departmentId: "accounting", level: "Undergraduate", academicLevel: "100 Level", resourceCount: 3, thumbnail: courseBusinessMath },
  // Accounting — 200 Level
  { id: "acc201", code: "ACC-201", title: "Cost Accounting", description: "Cost classification, job costing, process costing, and budgeting techniques.", departmentId: "accounting", level: "Undergraduate", academicLevel: "200 Level", resourceCount: 3, thumbnail: courseCostAccounting },
  { id: "acc202", code: "ACC-202", title: "Management Accounting", description: "Budgeting, variance analysis, and performance measurement.", departmentId: "accounting", level: "Undergraduate", academicLevel: "200 Level", resourceCount: 3, thumbnail: courseManagementAccounting },
  { id: "acc203", code: "ACC-203", title: "Auditing & Assurance", description: "Principles and practices of external auditing, internal controls, and professional ethics.", departmentId: "accounting", level: "Undergraduate", academicLevel: "200 Level", resourceCount: 3, thumbnail: courseAuditing },
  // Accounting — 300 Level
  { id: "acc301", code: "ACC-301", title: "Financial Reporting & IFRS", description: "International financial reporting standards and financial statement preparation.", departmentId: "accounting", level: "Undergraduate", academicLevel: "300 Level", resourceCount: 3, thumbnail: courseFinancialReporting },
  { id: "acc302", code: "ACC-302", title: "Taxation", description: "Nigerian tax legislation, personal and corporate tax computation, and tax planning.", departmentId: "accounting", level: "Undergraduate", academicLevel: "300 Level", resourceCount: 3, thumbnail: courseTaxation },
  { id: "acc303", code: "ACC-303", title: "Advanced Auditing", description: "Advanced external and internal audit practices and forensic accounting.", departmentId: "accounting", level: "Undergraduate", academicLevel: "300 Level", resourceCount: 3, thumbnail: courseAdvancedAuditing },

  // BioChemistry
  { id: "bch101", code: "BCH-101", title: "General Biochemistry", description: "Introduction to the chemistry of biomolecules, enzymes, and metabolic pathways.", departmentId: "biochemistry", level: "Undergraduate", resourceCount: 3 },
  { id: "bch201", code: "BCH-201", title: "Metabolism & Bioenergetics", description: "Energy metabolism, glycolysis, TCA cycle, and oxidative phosphorylation.", departmentId: "biochemistry", level: "Undergraduate", resourceCount: 3 },
  { id: "bch301", code: "BCH-301", title: "Molecular Biology", description: "DNA replication, transcription, translation, and gene expression regulation.", departmentId: "biochemistry", level: "Undergraduate", resourceCount: 3 },

  // Business Administration
  { id: "bus101", code: "BUS-101", title: "Introduction to Business", description: "Overview of business environments, management functions, and entrepreneurship.", departmentId: "business-admin", level: "Undergraduate", resourceCount: 3 },
  { id: "bus201", code: "BUS-201", title: "Organizational Behaviour", description: "Individual and group behaviour in organizations, leadership, and motivation theories.", departmentId: "business-admin", level: "Undergraduate", resourceCount: 3 },
  { id: "bus301", code: "BUS-301", title: "Strategic Management", description: "Strategy formulation, competitive analysis, and corporate governance.", departmentId: "business-admin", level: "Undergraduate", resourceCount: 3 },
  { id: "bus401", code: "BUS-401", title: "Marketing Management", description: "Marketing mix, consumer behaviour, market segmentation, and digital marketing.", departmentId: "business-admin", level: "Undergraduate", resourceCount: 3 },

  // Computer Science
  { id: "cs201", code: "CS-201", title: "Data Structures", description: "Implementation and analysis of fundamental structures including trees, graphs, and hash tables.", departmentId: "cs", level: "Undergraduate", resourceCount: 5 },
  { id: "cs302", code: "CS-302", title: "Algorithms", description: "Analysis of time and space complexity, divide and conquer, greedy methods, and dynamic programming.", departmentId: "cs", level: "Undergraduate", resourceCount: 3 },
  { id: "cs405", code: "CS-405", title: "Operating Systems", description: "Memory management, process scheduling, file systems and concurrency in modern OS architectures.", departmentId: "cs", level: "Undergraduate", resourceCount: 3 },
  { id: "cs330", code: "CS-330", title: "Database Systems", description: "Relational algebra, SQL, database design, and non-relational storage strategies.", departmentId: "cs", level: "Undergraduate", resourceCount: 3 },
  { id: "cs510", code: "CS-510", title: "Artificial Intelligence", description: "Heuristic search, machine learning foundations, neural networks, and expert systems.", departmentId: "cs", level: "Masters", resourceCount: 3 },

  // Criminology
  { id: "crm101", code: "CRM-101", title: "Introduction to Criminology", description: "Theories of crime, criminal behaviour, and the criminal justice system.", departmentId: "criminology", level: "Undergraduate", resourceCount: 3 },
  { id: "crm201", code: "CRM-201", title: "Penology", description: "Punishment theories, correctional institutions, and rehabilitation programmes.", departmentId: "criminology", level: "Undergraduate", resourceCount: 3 },
  { id: "crm301", code: "CRM-301", title: "Forensic Science", description: "Crime scene investigation, evidence collection, and forensic analysis techniques.", departmentId: "criminology", level: "Undergraduate", resourceCount: 3 },

  // Computer Engineering
  { id: "cpe101", code: "CPE-101", title: "Circuit Analysis", description: "DC and AC circuit analysis, Kirchhoff's laws, and network theorems.", departmentId: "computer-engineering", level: "Undergraduate", resourceCount: 3 },
  { id: "cpe201", code: "CPE-201", title: "Digital Logic Design", description: "Boolean algebra, combinational and sequential circuits, and FPGA fundamentals.", departmentId: "computer-engineering", level: "Undergraduate", resourceCount: 3 },
  { id: "cpe301", code: "CPE-301", title: "Embedded Systems", description: "Microcontroller programming, real-time operating systems, and hardware-software interfacing.", departmentId: "computer-engineering", level: "Undergraduate", resourceCount: 3 },
  { id: "cpe401", code: "CPE-401", title: "Computer Architecture", description: "Processor design, memory hierarchy, pipelining, and parallel computing architectures.", departmentId: "computer-engineering", level: "Undergraduate", resourceCount: 3 },

  // Economics
  { id: "eco101", code: "ECO-101", title: "Microeconomics", description: "Supply and demand, market structures, consumer theory, and price determination.", departmentId: "economics", level: "Undergraduate", resourceCount: 3 },
  { id: "eco201", code: "ECO-201", title: "Macroeconomics", description: "National income, inflation, unemployment, monetary and fiscal policy.", departmentId: "economics", level: "Undergraduate", resourceCount: 3 },
  { id: "eco301", code: "ECO-301", title: "Development Economics", description: "Economic growth theories, poverty, inequality, and development strategies for emerging economies.", departmentId: "economics", level: "Undergraduate", resourceCount: 3 },
  { id: "eco401", code: "ECO-401", title: "Econometrics", description: "Statistical methods for economic data, regression analysis, and hypothesis testing.", departmentId: "economics", level: "Undergraduate", resourceCount: 3 },

  // Estate Management
  { id: "esm101", code: "ESM-101", title: "Introduction to Estate Management", description: "Fundamentals of property management, land tenure, and real estate markets.", departmentId: "estate-management", level: "Undergraduate", resourceCount: 3 },
  { id: "esm201", code: "ESM-201", title: "Property Valuation", description: "Methods of property valuation including comparative, income, and cost approaches.", departmentId: "estate-management", level: "Undergraduate", resourceCount: 3 },
  { id: "esm301", code: "ESM-301", title: "Urban Planning & Development", description: "Land use planning, zoning regulations, and sustainable urban development.", departmentId: "estate-management", level: "Undergraduate", resourceCount: 3 },

  // Human Resources Management
  { id: "hrm101", code: "HRM-101", title: "Principles of HRM", description: "Recruitment, selection, training, and employee relations in organizations.", departmentId: "human-resources", level: "Undergraduate", resourceCount: 3 },
  { id: "hrm201", code: "HRM-201", title: "Compensation Management", description: "Salary structures, benefits administration, and performance-based pay systems.", departmentId: "human-resources", level: "Undergraduate", resourceCount: 3 },
  { id: "hrm301", code: "HRM-301", title: "Labour Law", description: "Employment legislation, workers' rights, collective bargaining, and industrial relations.", departmentId: "human-resources", level: "Undergraduate", resourceCount: 3 },

  // Information & Management Technology
  { id: "imt101", code: "IMT-101", title: "Introduction to Information Systems", description: "Foundations of information systems, data processing, and IT infrastructure.", departmentId: "info-management-tech", level: "Undergraduate", resourceCount: 3 },
  { id: "imt201", code: "IMT-201", title: "Database Management Systems", description: "Database design, SQL programming, normalization, and data warehousing.", departmentId: "info-management-tech", level: "Undergraduate", resourceCount: 3 },
  { id: "imt301", code: "IMT-301", title: "Systems Analysis & Design", description: "Requirements gathering, system modelling, UML diagrams, and software development lifecycles.", departmentId: "info-management-tech", level: "Undergraduate", resourceCount: 3 },
  { id: "imt401", code: "IMT-401", title: "Cybersecurity Fundamentals", description: "Network security, cryptography, threat analysis, and information assurance.", departmentId: "info-management-tech", level: "Undergraduate", resourceCount: 3 },

  // International Relations & Diplomacy
  { id: "ird101", code: "IRD-101", title: "Introduction to International Relations", description: "Theories of international relations, state sovereignty, and global governance.", departmentId: "international-relations", level: "Undergraduate", resourceCount: 3 },
  { id: "ird201", code: "IRD-201", title: "Diplomacy & Foreign Policy", description: "Diplomatic practices, negotiation strategies, and foreign policy analysis.", departmentId: "international-relations", level: "Undergraduate", resourceCount: 3 },
  { id: "ird301", code: "IRD-301", title: "International Organizations", description: "Structure and functions of the UN, AU, ECOWAS, and other international bodies.", departmentId: "international-relations", level: "Undergraduate", resourceCount: 3 },

  // Linguistics
  { id: "lin101", code: "LIN-101", title: "Introduction to Linguistics", description: "Phonetics, phonology, morphology, syntax, and semantics fundamentals.", departmentId: "linguistics", level: "Undergraduate", resourceCount: 3 },
  { id: "lin201", code: "LIN-201", title: "Sociolinguistics", description: "Language variation, dialects, language policy, and multilingualism in society.", departmentId: "linguistics", level: "Undergraduate", resourceCount: 3 },
  { id: "lin301", code: "LIN-301", title: "Applied Linguistics", description: "Language teaching methodology, second language acquisition, and translation studies.", departmentId: "linguistics", level: "Undergraduate", resourceCount: 3 },

  // Mass Communication
  { id: "mac101", code: "MAC-101", title: "Introduction to Mass Communication", description: "Media theories, press systems, and the role of media in society.", departmentId: "mass-comm", level: "Undergraduate", resourceCount: 3 },
  { id: "mac201", code: "MAC-201", title: "Broadcast Journalism", description: "Radio and television production, scriptwriting, and news presentation techniques.", departmentId: "mass-comm", level: "Undergraduate", resourceCount: 3 },
  { id: "mac301", code: "MAC-301", title: "Public Relations", description: "Corporate communications, crisis management, and media relations strategies.", departmentId: "mass-comm", level: "Undergraduate", resourceCount: 3 },

  // Microbiology
  { id: "mcb101", code: "MCB-101", title: "General Microbiology", description: "Study of bacteria, viruses, fungi, and parasites with laboratory techniques.", departmentId: "microbiology", level: "Undergraduate", resourceCount: 3 },
  { id: "mcb201", code: "MCB-201", title: "Medical Microbiology", description: "Pathogenic microorganisms, host-parasite interactions, and infectious disease control.", departmentId: "microbiology", level: "Undergraduate", resourceCount: 3 },
  { id: "mcb301", code: "MCB-301", title: "Industrial Microbiology", description: "Fermentation technology, bioreactors, and microbial products in industry.", departmentId: "microbiology", level: "Undergraduate", resourceCount: 3 },

  // Political Science
  { id: "pol101", code: "POL-101", title: "Introduction to Political Science", description: "Political concepts, ideologies, government systems, and political institutions.", departmentId: "political-science", level: "Undergraduate", resourceCount: 3 },
  { id: "pol201", code: "POL-201", title: "Comparative Politics", description: "Comparative analysis of political systems, parties, and electoral processes.", departmentId: "political-science", level: "Undergraduate", resourceCount: 3 },
  { id: "pol301", code: "POL-301", title: "Nigerian Government & Politics", description: "Constitutional development, federalism, and governance in Nigeria.", departmentId: "political-science", level: "Undergraduate", resourceCount: 3 },

  // Project Management
  { id: "prm101", code: "PRM-101", title: "Principles of Project Management", description: "Project lifecycle, planning, scheduling, and project management methodologies.", departmentId: "project-management", level: "Undergraduate", resourceCount: 3 },
  { id: "prm201", code: "PRM-201", title: "Risk Management", description: "Risk identification, assessment, mitigation strategies, and contingency planning.", departmentId: "project-management", level: "Undergraduate", resourceCount: 3 },
  { id: "prm301", code: "PRM-301", title: "Quality Management", description: "Quality assurance, total quality management, Six Sigma, and continuous improvement.", departmentId: "project-management", level: "Undergraduate", resourceCount: 3 },

  // Public Administration
  { id: "pad101", code: "PAD-101", title: "Introduction to Public Administration", description: "Principles of public sector management, bureaucracy, and governance structures.", departmentId: "public-admin", level: "Undergraduate", resourceCount: 3 },
  { id: "pad201", code: "PAD-201", title: "Public Policy Analysis", description: "Policy formulation, implementation, evaluation, and decision-making frameworks.", departmentId: "public-admin", level: "Undergraduate", resourceCount: 3 },
  { id: "pad301", code: "PAD-301", title: "Local Government Administration", description: "Local government structures, decentralization, and community development.", departmentId: "public-admin", level: "Undergraduate", resourceCount: 3 },

  // Sociology
  { id: "soc101", code: "SOC-101", title: "Introduction to Sociology", description: "Social institutions, culture, socialization, and sociological theories.", departmentId: "sociology", level: "Undergraduate", resourceCount: 3 },
  { id: "soc201", code: "SOC-201", title: "Social Research Methods", description: "Quantitative and qualitative research methods, sampling, and data analysis.", departmentId: "sociology", level: "Undergraduate", resourceCount: 3 },
  { id: "soc301", code: "SOC-301", title: "Urban Sociology", description: "Urbanization, social stratification, migration, and community dynamics.", departmentId: "sociology", level: "Undergraduate", resourceCount: 3 },
];

export const resources: Resource[] = [
  // ACC-101 Principles of Accounting
  { id: "r-acc1", courseId: "acc101", title: "Accounting & Financial Statements", description: "Complete video series on double-entry bookkeeping, journals, and financial statements.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-stateme", type: "Video Lectures", isPrimary: true },
  { id: "r-acc2", courseId: "acc101", title: "Accounting Basics", description: "Comprehensive text-based explanations of accounting topics with practice problems.", sourceWebsite: "AccountingCoach", sourceUrl: "https://www.accountingcoach.com", type: "Text Documentation" },
  { id: "r-acc3", courseId: "acc101", title: "Introduction to Financial Accounting", description: "University-level course on accounting principles from Wharton.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org/learn/wharton-accounting", type: "Certification Courses" },
  { id: "r-acc4", courseId: "acc101", title: "Accounting Basics Tutorial by Edspira", description: "Step-by-step accounting tutorials for beginners with practical examples.", sourceWebsite: "YouTube", sourceUrl: "https://www.youtube.com/@Edspira", type: "Video Lectures" },

  // ACC-102 Business Mathematics
  { id: "r-acc5", courseId: "acc102", title: "Algebra & Mathematics", description: "Comprehensive math tutorials covering algebra, calculus, and quantitative methods.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org/math", type: "Video Lectures", isPrimary: true },
  { id: "r-acc6", courseId: "acc102", title: "Mathematics for Engineers", description: "Coursera course on applied mathematics and quantitative reasoning.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Certification Courses" },
  { id: "r-acc7", courseId: "acc102", title: "Business Math by Prof. Leonard", description: "Video lectures covering business mathematics concepts and applications.", sourceWebsite: "YouTube", sourceUrl: "https://www.youtube.com/@ProfessorLeonard", type: "Video Lectures" },

  // ACC-201 Cost Accounting
  { id: "r-acc8", courseId: "acc201", title: "Cost Accounting by Prof. Coram", description: "Detailed lectures on cost allocation, variance analysis, and activity-based costing.", sourceWebsite: "YouTube", sourceUrl: "https://www.youtube.com", type: "Video Lectures", isPrimary: true },
  { id: "r-acc9", courseId: "acc201", title: "Cost Accounting Explained", description: "Interactive lessons covering job costing, process costing, and standard costing.", sourceWebsite: "AccountingCoach", sourceUrl: "https://www.accountingcoach.com", type: "Text Documentation" },
  { id: "r-acc10", courseId: "acc201", title: "Managerial Accounting Fundamentals", description: "Video course covering budgeting, cost behaviour, and decision-making tools.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Certification Courses" },

  // ACC-202 Management Accounting
  { id: "r-acc11", courseId: "acc202", title: "Management Accounting Resources", description: "Professional resources for management accounting practice and study.", sourceWebsite: "CIMA", sourceUrl: "https://www.cimaglobal.com", type: "Text Documentation", isPrimary: true },
  { id: "r-acc12", courseId: "acc202", title: "Management Accounting by ACCA", description: "Video lectures on budgeting, variance analysis, and performance measurement.", sourceWebsite: "YouTube", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-acc13", courseId: "acc202", title: "Accounting for Decision Making", description: "Course on management accounting concepts and decision-making frameworks.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Certification Courses" },

  // ACC-203 Auditing & Assurance
  { id: "r-acc14", courseId: "acc203", title: "Audit & Assurance Resources", description: "Professional auditing resources, standards, and study materials.", sourceWebsite: "ICAEW", sourceUrl: "https://www.icaew.com", type: "Text Documentation", isPrimary: true },
  { id: "r-acc15", courseId: "acc203", title: "Auditing Concepts by ACCA", description: "Video walkthrough of auditing principles and professional ethics.", sourceWebsite: "YouTube", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-acc16", courseId: "acc203", title: "Audit Study Resources", description: "Comprehensive text guide on auditing standards and practices.", sourceWebsite: "ACCA Global", sourceUrl: "https://www.accaglobal.com", type: "Text Documentation" },

  // ACC-301 Financial Reporting & IFRS
  { id: "r-acc17", courseId: "acc301", title: "Official IFRS Resources", description: "Official international financial reporting standards documentation and guidance.", sourceWebsite: "IFRS Foundation", sourceUrl: "https://www.ifrs.org", type: "Text Documentation", isPrimary: true },
  { id: "r-acc18", courseId: "acc301", title: "IFRS Explained", description: "Video series explaining IFRS standards and financial reporting requirements.", sourceWebsite: "YouTube", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-acc19", courseId: "acc301", title: "Financial Reporting", description: "Course on financial statement preparation and IFRS compliance.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Certification Courses" },

  // ACC-302 Taxation
  { id: "r-acc20", courseId: "acc302", title: "Nigerian Tax System Explained", description: "Video series on personal and corporate tax computation in Nigeria.", sourceWebsite: "YouTube", sourceUrl: "https://www.youtube.com", type: "Video Lectures", isPrimary: true },
  { id: "r-acc21", courseId: "acc302", title: "Federal Inland Revenue Service Resources", description: "Official Nigerian tax documentation and guidelines.", sourceWebsite: "FIRS", sourceUrl: "https://www.firs.gov.ng", type: "Text Documentation" },
  { id: "r-acc22", courseId: "acc302", title: "U.S. Federal Taxation", description: "Course on taxation principles and international comparison.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Certification Courses" },

  // ACC-303 Advanced Auditing
  { id: "r-acc23", courseId: "acc303", title: "Advanced Audit Resources", description: "Advanced audit methodologies, forensic accounting, and professional standards.", sourceWebsite: "ACCA Global", sourceUrl: "https://www.accaglobal.com", type: "Text Documentation", isPrimary: true },
  { id: "r-acc24", courseId: "acc303", title: "Advanced Auditing by ACCA", description: "Video lectures on advanced audit practices and forensic accounting.", sourceWebsite: "YouTube", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-acc25", courseId: "acc303", title: "Advanced Audit & Assurance", description: "Professional resources on advanced auditing standards and practices.", sourceWebsite: "ICAEW", sourceUrl: "https://www.icaew.com", type: "Text Documentation" },

  // BioChemistry
  { id: "r-bch1", courseId: "bch101", title: "Biochemistry Fundamentals", description: "MIT lectures covering amino acids, proteins, enzymes, and carbohydrate chemistry.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-bch2", courseId: "bch101", title: "Biochemistry Interactive Course", description: "Interactive biochemistry lessons with molecular visualizations.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Interactive Tutorials" },
  { id: "r-bch3", courseId: "bch101", title: "NCBI Biochemistry Resources", description: "Comprehensive biochemistry textbook and reference materials.", sourceWebsite: "NCBI Bookshelf", sourceUrl: "https://www.ncbi.nlm.nih.gov/books", type: "Text Documentation" },
  { id: "r-bch4", courseId: "bch201", title: "Metabolic Pathways Lectures", description: "Detailed video course on glycolysis, TCA cycle, and electron transport chain.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-bch5", courseId: "bch201", title: "Metabolism Interactive Simulations", description: "Interactive simulations of metabolic pathways and bioenergetics.", sourceWebsite: "Nature Education", sourceUrl: "https://www.nature.com/scitable", type: "Interactive Tutorials" },
  { id: "r-bch6", courseId: "bch201", title: "Bioenergetics Study Guide", description: "Text-based explanations of ATP synthesis and energy metabolism.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Text Documentation" },
  { id: "r-bch7", courseId: "bch301", title: "Molecular Biology of the Gene", description: "MIT course on DNA replication, transcription, and gene regulation.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-bch8", courseId: "bch301", title: "Molecular Biology Animations", description: "Animated tutorials explaining molecular biology processes.", sourceWebsite: "DNA Learning Center", sourceUrl: "https://www.dnalc.org", type: "Interactive Tutorials" },
  { id: "r-bch9", courseId: "bch301", title: "Gene Expression & Regulation", description: "Comprehensive video series on gene expression mechanisms.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Business Administration
  { id: "r-bus1", courseId: "bus101", title: "Introduction to Business", description: "Overview of business functions, management, and entrepreneurship.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-bus2", courseId: "bus101", title: "Business Fundamentals", description: "Interactive modules covering business environments and decision-making.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Interactive Tutorials" },
  { id: "r-bus3", courseId: "bus101", title: "Entrepreneurship Essentials", description: "Harvard Business School course on entrepreneurship basics.", sourceWebsite: "HBS Online", sourceUrl: "https://online.hbs.edu", type: "Certification Courses" },
  { id: "r-bus4", courseId: "bus201", title: "Organizational Behaviour", description: "Course on leadership, motivation, and team dynamics in organizations.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-bus5", courseId: "bus201", title: "Leadership & Management", description: "MIT Sloan lectures on organizational behaviour and management.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures" },
  { id: "r-bus6", courseId: "bus201", title: "OB Study Resources", description: "Text-based study materials on organizational behaviour theories.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-bus7", courseId: "bus301", title: "Strategic Management Course", description: "Comprehensive course on strategy formulation and competitive analysis.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-bus8", courseId: "bus301", title: "Business Strategy Fundamentals", description: "Interactive case studies on strategic management.", sourceWebsite: "HBS Online", sourceUrl: "https://online.hbs.edu", type: "Interactive Tutorials" },
  { id: "r-bus9", courseId: "bus301", title: "Corporate Governance Guide", description: "Documentation on corporate governance principles and best practices.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-bus10", courseId: "bus401", title: "Marketing Management Specialization", description: "Complete marketing course covering the 4Ps and digital marketing.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-bus11", courseId: "bus401", title: "Digital Marketing Fundamentals", description: "Google's free digital marketing certification course.", sourceWebsite: "Google Digital Garage", sourceUrl: "https://learndigital.withgoogle.com", type: "Certification Courses" },
  { id: "r-bus12", courseId: "bus401", title: "Consumer Behaviour Insights", description: "Research articles on consumer psychology and buying behaviour.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Text Documentation" },

  // Computer Science
  { id: "r-cs1", courseId: "cs201", title: "Introduction to Algorithms (6.006)", description: "MIT's foundational algorithms and data structures course.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-cs2", courseId: "cs201", title: "Algorithms, Part I", description: "Princeton course on elementary data structures and sorting.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures" },
  { id: "r-cs3", courseId: "cs201", title: "DS Self-Paced Guide", description: "Learn and practice data structures through code snippets and visuals.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Interactive Tutorials" },
  { id: "r-cs4", courseId: "cs201", title: "Visualizing Data Structures", description: "Animated guides to understanding trees, graphs, and linked lists.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-cs5", courseId: "cs201", title: "Algorithms Fundamentals", description: "Beginner-friendly approach to binary search and recursive algorithms.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Text Documentation" },
  { id: "r-cs6", courseId: "cs302", title: "Algorithm Design & Analysis", description: "Advanced algorithms covering dynamic programming and graph algorithms.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-cs7", courseId: "cs302", title: "Algorithmic Thinking", description: "Interactive problem-solving with algorithmic challenges.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Interactive Tutorials" },
  { id: "r-cs8", courseId: "cs302", title: "Algorithms Specialization", description: "Stanford's comprehensive algorithms specialization.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures" },
  { id: "r-cs9", courseId: "cs405", title: "Operating System Engineering", description: "MIT course on OS design, virtual memory, and file systems.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-cs10", courseId: "cs405", title: "OS Concepts Tutorials", description: "Interactive tutorials on process management and memory allocation.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Interactive Tutorials" },
  { id: "r-cs11", courseId: "cs405", title: "Operating Systems: Three Easy Pieces", description: "Free online textbook covering virtualization, concurrency, and persistence.", sourceWebsite: "OSTEP", sourceUrl: "https://pages.cs.wisc.edu/~remzi/OSTEP/", type: "Text Documentation" },
  { id: "r-cs12", courseId: "cs330", title: "Database Systems Course", description: "CMU course on database internals, query optimization, and transactions.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures", isPrimary: true },
  { id: "r-cs13", courseId: "cs330", title: "SQL Interactive Tutorial", description: "Hands-on SQL exercises from basic queries to advanced joins.", sourceWebsite: "W3Schools", sourceUrl: "https://www.w3schools.com/sql/", type: "Interactive Tutorials" },
  { id: "r-cs14", courseId: "cs330", title: "Database Design Guide", description: "Comprehensive guide to relational database design and normalization.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Text Documentation" },
  { id: "r-cs15", courseId: "cs510", title: "Introduction to AI", description: "MIT course on search algorithms, machine learning, and neural networks.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-cs16", courseId: "cs510", title: "Machine Learning by Andrew Ng", description: "Stanford's foundational ML course covering supervised and unsupervised learning.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures" },
  { id: "r-cs17", courseId: "cs510", title: "AI Interactive Exercises", description: "Hands-on AI coding exercises with Python.", sourceWebsite: "Kaggle", sourceUrl: "https://www.kaggle.com/learn", type: "Interactive Tutorials" },

  // Criminology
  { id: "r-crm1", courseId: "crm101", title: "Introduction to Criminal Justice", description: "Comprehensive course on crime theories and the justice system.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-crm2", courseId: "crm101", title: "Criminology Study Guide", description: "Text-based resource on criminological theories and research methods.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-crm3", courseId: "crm101", title: "Crime & Society Lectures", description: "University lecture series on crime patterns and societal impacts.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-crm4", courseId: "crm201", title: "Corrections & Penology", description: "Course on prison systems, rehabilitation, and restorative justice.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-crm5", courseId: "crm201", title: "Penology Research Articles", description: "Academic articles on punishment theories and correctional reform.", sourceWebsite: "JSTOR", sourceUrl: "https://www.jstor.org", type: "Text Documentation" },
  { id: "r-crm6", courseId: "crm201", title: "Criminal Justice Documentaries", description: "Documentary series exploring correctional institutions worldwide.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-crm7", courseId: "crm301", title: "Forensic Science Introduction", description: "Course covering evidence analysis, DNA profiling, and crime scene procedures.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-crm8", courseId: "crm301", title: "Forensic Science Tutorials", description: "Interactive simulations of forensic analysis techniques.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Interactive Tutorials" },
  { id: "r-crm9", courseId: "crm301", title: "Crime Scene Investigation Guide", description: "Documentation on CSI methodology and evidence handling protocols.", sourceWebsite: "NIJ", sourceUrl: "https://nij.ojp.gov", type: "Text Documentation" },

  // Computer Engineering
  { id: "r-cpe1", courseId: "cpe101", title: "Circuits & Electronics", description: "MIT course on circuit analysis, linear systems, and semiconductor devices.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-cpe2", courseId: "cpe101", title: "Circuit Analysis Made Easy", description: "Step-by-step video tutorials on DC and AC circuit analysis.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-cpe3", courseId: "cpe101", title: "Electronics Tutorials", description: "Interactive circuit simulator and tutorials.", sourceWebsite: "All About Circuits", sourceUrl: "https://www.allaboutcircuits.com", type: "Interactive Tutorials" },
  { id: "r-cpe4", courseId: "cpe201", title: "Digital Design Fundamentals", description: "Course on Boolean algebra, logic gates, and sequential circuits.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-cpe5", courseId: "cpe201", title: "Logic Design Interactive Lab", description: "Interactive simulations for building digital circuits.", sourceWebsite: "Logisim", sourceUrl: "https://www.cburch.com/logisim/", type: "Interactive Tutorials" },
  { id: "r-cpe6", courseId: "cpe201", title: "Digital Logic Reference", description: "Comprehensive guide to combinational and sequential logic design.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Text Documentation" },
  { id: "r-cpe7", courseId: "cpe301", title: "Embedded Systems Programming", description: "Course on microcontroller programming and real-time systems.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-cpe8", courseId: "cpe301", title: "Arduino & Embedded Tutorials", description: "Hands-on tutorials for embedded systems development.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Interactive Tutorials" },
  { id: "r-cpe9", courseId: "cpe301", title: "Embedded Systems Guide", description: "Reference documentation on RTOS and hardware interfacing.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Text Documentation" },
  { id: "r-cpe10", courseId: "cpe401", title: "Computer Architecture", description: "Princeton course on processor design and memory hierarchy.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-cpe11", courseId: "cpe401", title: "Computer Organization Lectures", description: "Video lectures on pipelining and parallel architectures.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures" },
  { id: "r-cpe12", courseId: "cpe401", title: "Architecture Reference Guide", description: "Text documentation on modern processor architecture concepts.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Text Documentation" },

  // Economics
  { id: "r-eco1", courseId: "eco101", title: "Microeconomics (14.01)", description: "MIT course on supply, demand, market equilibrium, and consumer theory.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-eco2", courseId: "eco101", title: "Microeconomics Essentials", description: "Interactive lessons on microeconomic principles and applications.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Interactive Tutorials" },
  { id: "r-eco3", courseId: "eco101", title: "Economics Textbook", description: "Free open-source textbook covering microeconomic theory.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-eco4", courseId: "eco201", title: "Macroeconomics Course", description: "Course on GDP, inflation, monetary policy, and fiscal interventions.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-eco5", courseId: "eco201", title: "Macroeconomics Fundamentals", description: "Interactive modules on macroeconomic models and indicators.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Interactive Tutorials" },
  { id: "r-eco6", courseId: "eco201", title: "World Economic Outlook", description: "IMF reports and data on global macroeconomic trends.", sourceWebsite: "IMF", sourceUrl: "https://www.imf.org", type: "Text Documentation" },
  { id: "r-eco7", courseId: "eco301", title: "Development Economics", description: "Course on poverty, inequality, and economic development strategies.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-eco8", courseId: "eco301", title: "World Development Indicators", description: "World Bank data and reports on economic development metrics.", sourceWebsite: "World Bank", sourceUrl: "https://data.worldbank.org", type: "Text Documentation" },
  { id: "r-eco9", courseId: "eco301", title: "Development Economics Lectures", description: "Video series on development challenges in emerging economies.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-eco10", courseId: "eco401", title: "Econometrics Course", description: "Course on regression analysis, time series, and econometric modelling.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-eco11", courseId: "eco401", title: "Statistics & Econometrics", description: "Interactive exercises on statistical methods for economic data.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Interactive Tutorials" },
  { id: "r-eco12", courseId: "eco401", title: "Econometrics Reference", description: "Comprehensive guide to econometric techniques and interpretation.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },

  // Estate Management
  { id: "r-esm1", courseId: "esm101", title: "Real Estate Fundamentals", description: "Course on property markets, land tenure, and estate management principles.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-esm2", courseId: "esm101", title: "Property Management Guide", description: "Comprehensive guide to real estate management practices.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-esm3", courseId: "esm101", title: "Estate Management Tutorials", description: "Video tutorials on property law and land administration.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-esm4", courseId: "esm201", title: "Property Valuation Methods", description: "Course covering comparative, income, and cost approaches to valuation.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-esm5", courseId: "esm201", title: "Real Estate Valuation Guide", description: "Documentation on property appraisal methodologies.", sourceWebsite: "RICS", sourceUrl: "https://www.rics.org", type: "Text Documentation" },
  { id: "r-esm6", courseId: "esm201", title: "Valuation Case Studies", description: "Video analysis of real property valuation scenarios.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-esm7", courseId: "esm301", title: "Urban Planning Course", description: "Course on land use planning, zoning, and sustainable development.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-esm8", courseId: "esm301", title: "Urban Development Guide", description: "UN-Habitat resources on sustainable urban development.", sourceWebsite: "UN-Habitat", sourceUrl: "https://unhabitat.org", type: "Text Documentation" },
  { id: "r-esm9", courseId: "esm301", title: "Smart Cities Lectures", description: "Video series on modern urban planning and smart city concepts.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Human Resources Management
  { id: "r-hrm1", courseId: "hrm101", title: "Human Resource Management", description: "Comprehensive course on recruitment, selection, and employee development.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-hrm2", courseId: "hrm101", title: "HRM Fundamentals", description: "Interactive HR management modules with case studies.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Interactive Tutorials" },
  { id: "r-hrm3", courseId: "hrm101", title: "HR Management Guide", description: "Open textbook covering all aspects of human resource management.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-hrm4", courseId: "hrm201", title: "Compensation & Benefits", description: "Course on designing compensation systems and benefits packages.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-hrm5", courseId: "hrm201", title: "Pay Structure Design", description: "Documentation on salary structures and pay equity.", sourceWebsite: "SHRM", sourceUrl: "https://www.shrm.org", type: "Text Documentation" },
  { id: "r-hrm6", courseId: "hrm201", title: "Performance Management", description: "Video tutorials on performance appraisals and reward systems.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-hrm7", courseId: "hrm301", title: "Employment Law Course", description: "Course on labour legislation, workers' rights, and industrial relations.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-hrm8", courseId: "hrm301", title: "Labour Law Guide", description: "ILO resources on international labour standards.", sourceWebsite: "ILO", sourceUrl: "https://www.ilo.org", type: "Text Documentation" },
  { id: "r-hrm9", courseId: "hrm301", title: "Collective Bargaining Lectures", description: "Video lectures on negotiation and dispute resolution.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Information & Management Technology
  { id: "r-imt1", courseId: "imt101", title: "Information Systems Fundamentals", description: "Course on IS components, data processing, and IT infrastructure.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-imt2", courseId: "imt101", title: "IT Fundamentals", description: "Google's IT support professional certificate course.", sourceWebsite: "Google", sourceUrl: "https://grow.google/certificates/it-support/", type: "Certification Courses" },
  { id: "r-imt3", courseId: "imt101", title: "IS Study Guide", description: "Comprehensive text resource on information systems concepts.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-imt4", courseId: "imt201", title: "Database Management Course", description: "Course on SQL, database design, and data warehousing.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-imt5", courseId: "imt201", title: "SQL Interactive Practice", description: "Hands-on SQL exercises from basic to advanced.", sourceWebsite: "W3Schools", sourceUrl: "https://www.w3schools.com/sql/", type: "Interactive Tutorials" },
  { id: "r-imt6", courseId: "imt201", title: "Database Design Reference", description: "Documentation on normalization and database architecture.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Text Documentation" },
  { id: "r-imt7", courseId: "imt301", title: "Systems Analysis Course", description: "Course on requirements engineering, UML, and SDLC methodologies.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-imt8", courseId: "imt301", title: "UML Tutorials", description: "Interactive UML diagram creation and modelling exercises.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://www.geeksforgeeks.org", type: "Interactive Tutorials" },
  { id: "r-imt9", courseId: "imt301", title: "Software Engineering Guide", description: "Documentation on software development methodologies.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-imt10", courseId: "imt401", title: "Cybersecurity Specialization", description: "Course on network security, cryptography, and threat analysis.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-imt11", courseId: "imt401", title: "Cybersecurity Labs", description: "Interactive cybersecurity exercises and capture-the-flag challenges.", sourceWebsite: "TryHackMe", sourceUrl: "https://tryhackme.com", type: "Interactive Tutorials" },
  { id: "r-imt12", courseId: "imt401", title: "Security Reference Guide", description: "NIST cybersecurity framework documentation.", sourceWebsite: "NIST", sourceUrl: "https://www.nist.gov/cyberframework", type: "Text Documentation" },

  // International Relations & Diplomacy
  { id: "r-ird1", courseId: "ird101", title: "Global Politics Course", description: "Course on IR theories, sovereignty, and international systems.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-ird2", courseId: "ird101", title: "International Relations Fundamentals", description: "Text-based guide to realism, liberalism, and constructivism in IR.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-ird3", courseId: "ird101", title: "World Affairs Lectures", description: "Yale lectures on global governance and international order.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-ird4", courseId: "ird201", title: "Diplomacy & Negotiation", description: "Course on diplomatic practices, protocols, and foreign policy.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-ird5", courseId: "ird201", title: "Foreign Policy Analysis", description: "Documentation on foreign policy decision-making processes.", sourceWebsite: "CFR", sourceUrl: "https://www.cfr.org", type: "Text Documentation" },
  { id: "r-ird6", courseId: "ird201", title: "Diplomatic History", description: "Video series on the evolution of modern diplomacy.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-ird7", courseId: "ird301", title: "International Organizations", description: "Course on the UN, regional organizations, and multilateral diplomacy.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-ird8", courseId: "ird301", title: "UN System Guide", description: "Official documentation on the United Nations system and agencies.", sourceWebsite: "United Nations", sourceUrl: "https://www.un.org", type: "Text Documentation" },
  { id: "r-ird9", courseId: "ird301", title: "ECOWAS & AU Lectures", description: "Video lectures on African regional organizations.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Linguistics
  { id: "r-lin1", courseId: "lin101", title: "Introduction to Linguistics", description: "MIT course on phonetics, syntax, semantics, and language structure.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-lin2", courseId: "lin101", title: "Linguistics Fundamentals", description: "Interactive linguistics lessons covering all major branches.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures" },
  { id: "r-lin3", courseId: "lin101", title: "Language & Linguistics Guide", description: "Text-based introduction to linguistic theory and analysis.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-lin4", courseId: "lin201", title: "Sociolinguistics Course", description: "Course on language variation, dialects, and language policy.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-lin5", courseId: "lin201", title: "Language & Society", description: "Documentation on multilingualism and language planning.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-lin6", courseId: "lin201", title: "Dialect Studies Lectures", description: "Video series on sociolinguistic research and language diversity.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-lin7", courseId: "lin301", title: "Applied Linguistics Course", description: "Course on language teaching, SLA, and translation studies.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-lin8", courseId: "lin301", title: "Language Teaching Methods", description: "Documentation on ESL/EFL teaching methodologies.", sourceWebsite: "British Council", sourceUrl: "https://www.teachingenglish.org.uk", type: "Text Documentation" },
  { id: "r-lin9", courseId: "lin301", title: "Translation Studies Lectures", description: "Video lectures on translation theory and practice.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Mass Communication
  { id: "r-mac1", courseId: "mac101", title: "Media Studies Fundamentals", description: "Course on media theories, press systems, and communication models.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-mac2", courseId: "mac101", title: "Communication Theory Guide", description: "Text resource on mass communication theories and media effects.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-mac3", courseId: "mac101", title: "Media & Society Lectures", description: "Video series on the role of media in contemporary society.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-mac4", courseId: "mac201", title: "Broadcast Journalism Course", description: "Course on TV and radio production techniques and news reporting.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-mac5", courseId: "mac201", title: "Video Production Tutorials", description: "Practical tutorials on camera work, editing, and scriptwriting.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Interactive Tutorials" },
  { id: "r-mac6", courseId: "mac201", title: "Journalism Standards Guide", description: "Reuters handbook on journalism standards and practices.", sourceWebsite: "Reuters", sourceUrl: "https://www.reuters.com", type: "Text Documentation" },
  { id: "r-mac7", courseId: "mac301", title: "Public Relations Course", description: "Course on corporate communications and crisis management.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-mac8", courseId: "mac301", title: "PR Strategy Guide", description: "Documentation on PR campaigns and media relations.", sourceWebsite: "PRSA", sourceUrl: "https://www.prsa.org", type: "Text Documentation" },
  { id: "r-mac9", courseId: "mac301", title: "Crisis Communication Lectures", description: "Video lectures on managing organizational crises.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Microbiology
  { id: "r-mcb1", courseId: "mcb101", title: "General Microbiology Course", description: "MIT course on bacteria, viruses, and microbial physiology.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-mcb2", courseId: "mcb101", title: "Microbiology Interactive", description: "Interactive simulations of microbial processes and lab techniques.", sourceWebsite: "Khan Academy", sourceUrl: "https://www.khanacademy.org", type: "Interactive Tutorials" },
  { id: "r-mcb3", courseId: "mcb101", title: "Microbiology Textbook", description: "Free online microbiology textbook with illustrations.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-mcb4", courseId: "mcb201", title: "Medical Microbiology Course", description: "Course on pathogenic organisms and infectious disease.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-mcb5", courseId: "mcb201", title: "Infectious Disease Guide", description: "WHO resources on infectious diseases and epidemiology.", sourceWebsite: "WHO", sourceUrl: "https://www.who.int", type: "Text Documentation" },
  { id: "r-mcb6", courseId: "mcb201", title: "Pathogen Biology Lectures", description: "Video lectures on host-parasite interactions.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-mcb7", courseId: "mcb301", title: "Industrial Microbiology Course", description: "Course on fermentation, bioreactors, and microbial biotechnology.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-mcb8", courseId: "mcb301", title: "Fermentation Technology Guide", description: "Documentation on industrial fermentation processes.", sourceWebsite: "Nature Education", sourceUrl: "https://www.nature.com/scitable", type: "Text Documentation" },
  { id: "r-mcb9", courseId: "mcb301", title: "Bioprocessing Tutorials", description: "Video tutorials on bioreactor design and operation.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Political Science
  { id: "r-pol1", courseId: "pol101", title: "Introduction to Political Science", description: "Yale course on political concepts, ideologies, and government systems.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures", isPrimary: true },
  { id: "r-pol2", courseId: "pol101", title: "Political Science Fundamentals", description: "Comprehensive guide to political theory and institutions.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-pol3", courseId: "pol101", title: "Politics & Government Course", description: "Course on political ideologies and government structures.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures" },
  { id: "r-pol4", courseId: "pol201", title: "Comparative Politics Course", description: "Course comparing political systems across democracies and authoritarian regimes.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-pol5", courseId: "pol201", title: "Electoral Systems Guide", description: "Documentation on different electoral systems and their effects.", sourceWebsite: "IDEA", sourceUrl: "https://www.idea.int", type: "Text Documentation" },
  { id: "r-pol6", courseId: "pol201", title: "Comparative Government Lectures", description: "Lecture series comparing government institutions worldwide.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-pol7", courseId: "pol301", title: "Nigerian Politics Course", description: "Course on Nigerian constitutional development and federalism.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures", isPrimary: true },
  { id: "r-pol8", courseId: "pol301", title: "Nigerian Constitution Guide", description: "Documentation on the Nigerian constitution and governance.", sourceWebsite: "Nigeria Law", sourceUrl: "https://www.nigeria-law.org", type: "Text Documentation" },
  { id: "r-pol9", courseId: "pol301", title: "African Governance Lectures", description: "Video lectures on governance challenges in Africa.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Project Management
  { id: "r-prm1", courseId: "prm101", title: "Project Management Fundamentals", description: "Google's project management professional certificate course.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Certification Courses", isPrimary: true },
  { id: "r-prm2", courseId: "prm101", title: "PMBOK Guide Overview", description: "Documentation on the Project Management Body of Knowledge.", sourceWebsite: "PMI", sourceUrl: "https://www.pmi.org", type: "Text Documentation" },
  { id: "r-prm3", courseId: "prm101", title: "Project Planning Tutorials", description: "Video tutorials on project scheduling, WBS, and Gantt charts.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-prm4", courseId: "prm201", title: "Risk Management Course", description: "Course on risk identification, analysis, and mitigation strategies.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-prm5", courseId: "prm201", title: "Risk Analysis Framework", description: "PMI documentation on risk management processes.", sourceWebsite: "PMI", sourceUrl: "https://www.pmi.org", type: "Text Documentation" },
  { id: "r-prm6", courseId: "prm201", title: "Risk Assessment Tutorials", description: "Video tutorials on quantitative and qualitative risk analysis.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-prm7", courseId: "prm301", title: "Quality Management Course", description: "Course on TQM, Six Sigma, and continuous improvement.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-prm8", courseId: "prm301", title: "Six Sigma Guide", description: "Documentation on Six Sigma methodology and tools.", sourceWebsite: "ASQ", sourceUrl: "https://asq.org", type: "Text Documentation" },
  { id: "r-prm9", courseId: "prm301", title: "Quality Control Tutorials", description: "Video tutorials on quality assurance techniques.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Public Administration
  { id: "r-pad1", courseId: "pad101", title: "Public Administration Course", description: "Course on public sector management, bureaucracy, and governance.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-pad2", courseId: "pad101", title: "Public Management Guide", description: "Open textbook on public administration theory and practice.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-pad3", courseId: "pad101", title: "Governance Lectures", description: "Video lectures on public sector governance models.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-pad4", courseId: "pad201", title: "Public Policy Analysis", description: "Course on policy formulation, implementation, and evaluation.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r-pad5", courseId: "pad201", title: "Policy Analysis Framework", description: "Documentation on evidence-based policy-making approaches.", sourceWebsite: "World Bank", sourceUrl: "https://data.worldbank.org", type: "Text Documentation" },
  { id: "r-pad6", courseId: "pad201", title: "Public Policy Lectures", description: "Video series on policy analysis and decision-making.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-pad7", courseId: "pad301", title: "Local Government Course", description: "Course on decentralization and local governance structures.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-pad8", courseId: "pad301", title: "Decentralization Guide", description: "World Bank resources on decentralization and community development.", sourceWebsite: "World Bank", sourceUrl: "https://data.worldbank.org", type: "Text Documentation" },
  { id: "r-pad9", courseId: "pad301", title: "Community Development Lectures", description: "Video lectures on participatory development approaches.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },

  // Sociology
  { id: "r-soc1", courseId: "soc101", title: "Introduction to Sociology", description: "Course on social institutions, culture, and sociological theories.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-soc2", courseId: "soc101", title: "Sociology Fundamentals", description: "Free open-source sociology textbook.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-soc3", courseId: "soc101", title: "Society & Culture Lectures", description: "Video lectures on social structures and cultural dynamics.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-soc4", courseId: "soc201", title: "Research Methods Course", description: "Course on quantitative and qualitative sociological research methods.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-soc5", courseId: "soc201", title: "Social Research Guide", description: "Documentation on research design, sampling, and data collection.", sourceWebsite: "OpenStax", sourceUrl: "https://openstax.org", type: "Text Documentation" },
  { id: "r-soc6", courseId: "soc201", title: "Research Methodology Tutorials", description: "Video tutorials on survey design and statistical analysis.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
  { id: "r-soc7", courseId: "soc301", title: "Urban Sociology Course", description: "Course on urbanization, social stratification, and community dynamics.", sourceWebsite: "Coursera", sourceUrl: "https://www.coursera.org", type: "Video Lectures", isPrimary: true },
  { id: "r-soc8", courseId: "soc301", title: "Urbanization Studies", description: "UN data and reports on global urbanization trends.", sourceWebsite: "UN-Habitat", sourceUrl: "https://unhabitat.org", type: "Text Documentation" },
  { id: "r-soc9", courseId: "soc301", title: "City & Society Lectures", description: "Video series on urban social problems and community development.", sourceWebsite: "YouTube Academic", sourceUrl: "https://www.youtube.com", type: "Video Lectures" },
];

export const getCoursesByDepartment = (deptId: string) =>
  courses.filter((c) => c.departmentId === deptId);

export const getResourcesByCourse = (courseId: string) =>
  resources.filter((r) => r.courseId === courseId);

export const getDepartmentById = (id: string) =>
  departments.find((d) => d.id === id);

export const getCourseById = (id: string) =>
  courses.find((c) => c.id === id);
