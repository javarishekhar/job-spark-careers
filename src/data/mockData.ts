
export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary: string;
  benefits: string[];
  featured: boolean;
  category: string;
  posted: string;
  deadline: string;
  logo: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyId: "tc-1",
    location: "New York, NY",
    type: "Full-time",
    experience: "5+ years",
    description: "We are seeking an experienced Frontend Developer to join our team. The ideal candidate will have a strong understanding of React, TypeScript, and modern frontend architecture.",
    requirements: [
      "5+ years of experience with frontend development",
      "Strong proficiency with React and TypeScript",
      "Experience with state management libraries",
      "Understanding of responsive design principles",
      "Experience with testing frameworks"
    ],
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable components for future use",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with back-end developers and designers",
      "Maintain and improve code quality"
    ],
    salary: "$120k - $150k",
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Flexible work hours",
      "Remote work options",
      "Professional development budget"
    ],
    featured: true,
    category: "tech",
    posted: "2 days ago",
    deadline: "2023-12-15",
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzY5Mg&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignHub",
    companyId: "dh-1",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    description: "We're looking for a talented UX/UI Designer to create amazing user experiences. The ideal candidate should have a portfolio that demonstrates their design thinking and problem-solving skills.",
    requirements: [
      "3-5 years of experience in UX/UI design",
      "Proficiency with design tools like Figma or Sketch",
      "Strong portfolio showing design process",
      "Understanding of user-centered design principles",
      "Experience with design systems"
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and testing",
      "Collaborate with developers to implement designs",
      "Maintain design system consistency",
      "Stay updated with latest design trends"
    ],
    salary: "$90k - $110k",
    benefits: [
      "Health insurance",
      "Unlimited PTO",
      "Equipment allowance",
      "Professional development budget",
      "Flexible hours"
    ],
    featured: false,
    category: "design",
    posted: "1 week ago",
    deadline: "2023-12-30",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzY1MA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "DataWorks",
    companyId: "dw-1",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our data science team to solve complex problems using machine learning and statistical analysis. You'll work with large datasets to extract insights and build predictive models.",
    requirements: [
      "3+ years of experience in data science",
      "Strong programming skills in Python",
      "Experience with machine learning libraries",
      "Statistical analysis background",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Develop machine learning models",
      "Analyze large datasets to find patterns",
      "Collaborate with engineering and product teams",
      "Present findings to stakeholders",
      "Optimize data collection procedures"
    ],
    salary: "$130k - $160k",
    benefits: [
      "Comprehensive health benefits",
      "Stock options",
      "Flexible schedule",
      "Remote work options",
      "Education stipend"
    ],
    featured: true,
    category: "tech",
    posted: "3 days ago",
    deadline: "2023-12-20",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzY3Ng&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "ServerStack",
    companyId: "ss-1",
    location: "Austin, TX",
    type: "Full-time",
    experience: "4+ years",
    description: "We are looking for a talented Backend Engineer to help build and maintain our server infrastructure. You'll work on designing APIs, optimizing database queries, and ensuring system reliability.",
    requirements: [
      "4+ years of experience in backend development",
      "Proficiency in Node.js, Python, or Java",
      "Experience with SQL and NoSQL databases",
      "Understanding of RESTful APIs",
      "Knowledge of cloud services (AWS, GCP, or Azure)"
    ],
    responsibilities: [
      "Design and implement backend services",
      "Optimize database performance",
      "Ensure application security",
      "Collaborate with frontend developers",
      "Write technical documentation"
    ],
    salary: "$110k - $140k",
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Paid parental leave",
      "Weekly team lunches",
      "Hybrid work model"
    ],
    featured: false,
    category: "tech",
    posted: "5 days ago",
    deadline: "2023-12-25",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzYwOA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "5",
    title: "Marketing Manager",
    company: "GrowthCo",
    companyId: "gc-1",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "5+ years",
    description: "We're seeking a creative and analytical Marketing Manager to lead our marketing initiatives. You'll be responsible for developing strategies to increase brand awareness and drive customer acquisition.",
    requirements: [
      "5+ years of experience in marketing",
      "Experience with digital marketing channels",
      "Strong analytical skills",
      "Excellent project management abilities",
      "Creative thinking and problem-solving skills"
    ],
    responsibilities: [
      "Develop and implement marketing strategies",
      "Manage marketing budget and campaigns",
      "Analyze campaign performance",
      "Collaborate with sales and product teams",
      "Build and manage a small marketing team"
    ],
    salary: "$95k - $115k",
    benefits: [
      "Comprehensive health benefits",
      "401(k) matching",
      "Professional development opportunities",
      "Paid time off",
      "Work-from-home Fridays"
    ],
    featured: false,
    category: "marketing",
    posted: "1 week ago",
    deadline: "2023-12-18",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzYyNA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    id: "6",
    title: "Product Manager",
    company: "TechCorp",
    companyId: "tc-1",
    location: "New York, NY",
    type: "Full-time",
    experience: "4+ years",
    description: "We are looking for a Product Manager to join our team and oversee the development of our software products from conception to launch. You'll work closely with engineering, design, and marketing teams.",
    requirements: [
      "4+ years of product management experience",
      "Technical background or understanding",
      "Experience with agile methodologies",
      "Strong communication and presentation skills",
      "Data-driven decision making approach"
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Create and prioritize product backlog",
      "Work with development teams to deliver features",
      "Analyze market trends and user feedback",
      "Present product roadmaps to stakeholders"
    ],
    salary: "$115k - $145k",
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Stock options",
      "Professional development budget",
      "Flexible working hours"
    ],
    featured: true,
    category: "tech",
    posted: "4 days ago",
    deadline: "2023-12-22",
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzY5Mg&ixlib=rb-4.0.3&q=80&w=1080"
  }
];

export const categories = [
  {
    id: "tech",
    name: "Technology",
    count: 1243,
  },
  {
    id: "design",
    name: "Design",
    count: 856,
  },
  {
    id: "marketing",
    name: "Marketing",
    count: 723,
  },
  {
    id: "engineering",
    name: "Engineering",
    count: 982,
  },
  {
    id: "sales",
    name: "Sales",
    count: 675,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    count: 542,
  },
];

export const locations = [
  "New York, NY",
  "San Francisco, CA",
  "Austin, TX",
  "Chicago, IL",
  "Boston, MA",
  "Seattle, WA",
  "Remote",
];

export const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Remote",
];

export const experienceLevels = [
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Executive",
];
