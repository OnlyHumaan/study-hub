export interface Department {
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
  resourceCount: number;
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
  { id: "cs", name: "Computer Science", faculty: "Faculty of Science", icon: "Monitor", courseCount: 6 },
  { id: "accounting", name: "Accounting", faculty: "Faculty of Management", icon: "Calculator", courseCount: 4 },
  { id: "economics", name: "Economics", faculty: "Social Sciences", icon: "TrendingUp", courseCount: 5 },
  { id: "mass-comm", name: "Mass Communication", faculty: "Faculty of Arts", icon: "Mic", courseCount: 3 },
  { id: "microbiology", name: "Microbiology", faculty: "Life Sciences", icon: "Microscope", courseCount: 4 },
  { id: "political-science", name: "Political Science", faculty: "Social Sciences", icon: "Landmark", courseCount: 3 },
  { id: "business-admin", name: "Business Administration", faculty: "Management", icon: "Briefcase", courseCount: 5 },
  { id: "international-relations", name: "International Relations", faculty: "Inter-Faculty", icon: "Globe", courseCount: 3 },
  { id: "sociology", name: "Sociology", faculty: "Social Sciences", icon: "Users", courseCount: 4 },
];

export const courses: Course[] = [
  { id: "cs201", code: "CS-201", title: "Data Structures", description: "Implementation and analysis of fundamental structures including trees, graphs, and hash tables.", departmentId: "cs", level: "Undergraduate", resourceCount: 42 },
  { id: "cs302", code: "CS-302", title: "Algorithms", description: "Analysis of time and space complexity, divide and conquer, greedy methods, and dynamic programming.", departmentId: "cs", level: "Undergraduate", resourceCount: 35 },
  { id: "cs405", code: "CS-405", title: "Operating Systems", description: "Memory management, process scheduling, file systems and concurrency in modern OS architectures.", departmentId: "cs", level: "Undergraduate", resourceCount: 28 },
  { id: "cs330", code: "CS-330", title: "Database Systems", description: "Relational algebra, SQL, database design, and non-relational storage strategies for big data.", departmentId: "cs", level: "Undergraduate", resourceCount: 31 },
  { id: "cs510", code: "CS-510", title: "Artificial Intelligence", description: "Heuristic search, machine learning foundations, neural networks, and expert systems.", departmentId: "cs", level: "Masters", resourceCount: 24 },
  { id: "cs440", code: "CS-440", title: "Software Engineering", description: "Software lifecycle models, agile methodologies, system design and quality assurance.", departmentId: "cs", level: "Undergraduate", resourceCount: 19 },
  { id: "cs401", code: "CS-401", title: "Neural Networks & Deep Learning", description: "An exploration of biological inspiration behind modern AI architectures, focusing on backpropagation and gradient descent.", departmentId: "cs", level: "Undergraduate", resourceCount: 22 },
  { id: "phy902", code: "PHY-902", title: "Quantum Field Theory II", description: "Advanced study of renormalization groups, gauge theories, and the Higgs mechanism in the Standard Model.", departmentId: "cs", level: "Doctoral", resourceCount: 15 },
  { id: "eco550", code: "ECO-550", title: "Macroeconomic Policy Lab", description: "Statistical modeling of fiscal and monetary interventions using modern computational econometrics.", departmentId: "economics", level: "Masters", resourceCount: 18 },
  { id: "math101", code: "MATH-101", title: "Foundations of Analysis", description: "A rigorous introduction to the theory of functions of a real variable. Essential for all mathematical and physical science tracks.", departmentId: "cs", level: "Core Curriculum", resourceCount: 30 },
  { id: "bio605", code: "BIO-605", title: "Synthetic Biology Workshop", description: "Design and construction of new biological parts, devices, and systems for pharmaceutical applications.", departmentId: "microbiology", level: "Masters", resourceCount: 12 },
];

export const resources: Resource[] = [
  { id: "r1", courseId: "cs201", title: "Introduction to Algorithms (6.006)", description: "A cornerstone resource covering fundamental algorithms and data structures with a focus on implementation and mathematical analysis.", sourceWebsite: "MIT OpenCourseWare", sourceUrl: "https://ocw.mit.edu", type: "Video Lectures", isPrimary: true },
  { id: "r2", courseId: "cs201", title: "Algorithms, Part I", description: "Princeton University course focused on elementary data structures, sorting, and searching algorithms.", sourceWebsite: "Coursera", sourceUrl: "https://coursera.org", type: "Video Lectures" },
  { id: "r3", courseId: "cs201", title: "DS Self-Paced Guide", description: "A comprehensive portal for learning and practicing data structures through code snippets and visual explanations.", sourceWebsite: "GeeksForGeeks", sourceUrl: "https://geeksforgeeks.org", type: "Interactive Tutorials" },
  { id: "r4", courseId: "cs201", title: "Visualizing Data Structures", description: "Animated guides to understanding how trees, graphs, and linked lists operate under the hood.", sourceWebsite: "YouTube Academic", sourceUrl: "https://youtube.com", type: "Video Lectures" },
  { id: "r5", courseId: "cs201", title: "Algorithms Fundamentals", description: "A beginner-friendly approach to binary search, recursive algorithms, and basic data organization.", sourceWebsite: "Khan Academy", sourceUrl: "https://khanacademy.org", type: "Text Documentation" },
  { id: "r6", courseId: "cs302", title: "Algorithmic Foundations PDF", description: "Comprehensive PDF covering algorithm design paradigms and complexity analysis.", sourceWebsite: "ocw.mit.edu", sourceUrl: "https://ocw.mit.edu", type: "Text Documentation" },
  { id: "r7", courseId: "eco550", title: "Global Market Trends 2023", description: "Analysis of global economic indicators and market forecasting methodologies.", sourceWebsite: "worldbank.org", sourceUrl: "https://worldbank.org", type: "Text Documentation" },
  { id: "r8", courseId: "bio605", title: "Mitosis Interactive Simulation", description: "Interactive simulation for understanding cell division processes.", sourceWebsite: "nature.com", sourceUrl: "https://nature.com", type: "Interactive Tutorials" },
  { id: "r9", courseId: "cs405", title: "The Medici Archive Project", description: "Historical computing archive with OS development resources.", sourceWebsite: "medici.org", sourceUrl: "https://medici.org", type: "Text Documentation" },
];

export const getCoursesByDepartment = (deptId: string) =>
  courses.filter((c) => c.departmentId === deptId);

export const getResourcesByCourse = (courseId: string) =>
  resources.filter((r) => r.courseId === courseId);

export const getDepartmentById = (id: string) =>
  departments.find((d) => d.id === id);

export const getCourseById = (id: string) =>
  courses.find((c) => c.id === id);
