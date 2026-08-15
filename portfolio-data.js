/*
 * ==========================================================
 * AKANCHA RANI - PORTFOLIO DATA CONFIGURATION
 * ==========================================================
 * Update details, projects, skills, certifications, and activities here.
 */

const portfolioData = {
  personal: {
    name: "Akancha Rani",
    badge: "👋 Hello, I'm Akancha Rani",
    rotatingRoles: [
      "🚀 Software Engineer",
      "☕ Java & Spring Boot Developer",
      "🌐 Full Stack Developer",
      "🛡️ Backend & Security Enthusiast"
    ],
    heroHeadline: "Software Engineer & Java Full Stack Developer",
    bio: "Aspiring Software Engineer and MCA student at Lovely Professional University with strong expertise in Java, Spring Boot, RESTful APIs, MySQL, and full-stack web development. Passionate about building robust, scalable backend systems and secure web applications.",
    location: "Ranchi, Jharkhand / Punjab, India",
    email: "akancharani2@gmail.com",
    phone: "+91 8292415174",
    resume: "AkanchaRani_CV.pdf",
    avatar: "profile.jpg",
    social: {
      github: "https://github.com/AkanchaRani",
      linkedin: "https://linkedin.com/in/akancha-rani",
      leetcode: "https://leetcode.com/u/AkanchaRani/",
      email: "mailto:akancharani2@gmail.com"
    },
    stats: [
      { label: "MCA CGPA", value: "8.87", sub: "Top Tier Academic Record" },
      { label: "Projects Built", value: "8+", sub: "Java, Full Stack & Security" },
      { label: "Certifications", value: "12+", sub: "Verified Credentials" },
      { label: "Open Source", value: "GSSoC '26", sub: "Active Contributor" }
    ],
    avatarPills: [
      { text: "MCA @ LPU • 8.87 CGPA", position: "top-right" },
      { text: "Java 21 • Spring Boot", position: "bottom-left" }
    ]
  },

  about: {
    title: "About Me",
    subtitle: "Get to know me better",
    greeting: "Hi, I'm Akancha Rani — a dedicated Software Engineer with a passion for clean backend architecture and practical security.",
    paragraphs: [
      "Currently pursuing my Master of Computer Applications (MCA) at Lovely Professional University (8.87 CGPA), I bridge strong analytical mathematical thinking (from my B.Sc in Mathematics) with modern computer science and software development.",
      "My core focus lies in the Java ecosystem (Java 21, Spring Boot, Spring Data JPA, REST APIs, MySQL), building resilient architectures with DTO validation, clean layered patterns (Controller-Service-Repository), and secure data pipelines.",
      "Beyond coding, I actively contribute to open-source initiatives like GirlScript Summer of Code (GSSoC 2026) and coordinate English learning and communication workshops as Coordinator at The Expressionist Club, LPU."
    ],
    highlights: [
      {
        icon: "fa-server",
        title: "Backend & API Architecture",
        desc: "Designing RESTful services, database schemas with MySQL, DTO validation, and layered Spring Boot microservices."
      },
      {
        icon: "fa-shield-halved",
        title: "Security & Intrusion Analytics",
        desc: "Implementing log analysis, threat pattern detection (SQLi/XSS), session security, and secure authentication workflows."
      },
      {
        icon: "fa-code",
        title: "DSA & Problem Solving",
        desc: "Strengthened algorithmic reasoning across Data Structures & Algorithms in Java with regular practice on LeetCode."
      },
      {
        icon: "fa-users-gear",
        title: "Leadership & Collaboration",
        desc: "Coordinating club activities, managing remote SaaS research workflows, and participating in team code-a-thons."
      }
    ]
  },

  projects: [
    {
      id: "smartdocai",
      title: "SmartDocAI",
      category: "java-spring",
      categoryLabel: "Java & Spring Boot",
      summary: "Spring Boot technical documentation management system for organizing project metadata, database schemas, REST APIs, and automated PDF export.",
      details: "Built using a robust layered Controller-Service-Repository architecture with Java 21, Spring Boot, Spring Data JPA, and MySQL. Features include DTO validation, global exception handlers, automated markdown documentation generation, and PDF record export.",
      tags: ["Java 21", "Spring Boot", "Spring Data JPA", "MySQL", "Maven", "PDF Export"],
      github: "https://github.com/AkanchaRani/SmartDocAI",
      demo: "https://github.com/AkanchaRani/SmartDocAI#readme",
      featured: true,
      icon: "fa-file-lines"
    },
    {
      id: "ai-testcase-gen",
      title: "AI Test Case Generator",
      category: "java-spring",
      categoryLabel: "Java & Spring AI",
      summary: "Spring Boot application for generating, organizing, and managing structured software test cases from functional requirements.",
      details: "Utilizes Spring Web, JPA persistence, Lombok, and a dedicated AI service layer. Manages test case entities, priorities, severities, test types, and execution reports.",
      tags: ["Java", "Spring Boot", "JPA", "MySQL", "AI Service", "REST API"],
      github: "https://github.com/AkanchaRani/ai-testcase-generator",
      demo: "https://github.com/AkanchaRani/ai-testcase-generator#readme",
      featured: true,
      icon: "fa-vial-circle-check"
    },
    {
      id: "cyberids",
      title: "CyberIDS / Cyber Attack Analyzer",
      category: "security",
      categoryLabel: "Security & Full Stack",
      summary: "Intrusion detection and attack analytics dashboard transforming raw access logs into actionable threat intelligence.",
      details: "Simulates and detects malicious patterns such as SQL Injection attempts and XSS payloads. Features secure session authentication, real-time threat monitoring dashboard, IP blocking capability, and an admin audit panel.",
      tags: ["PHP", "MySQL", "JavaScript", "Security Analytics", "Apache", "HTML/CSS"],
      github: "https://github.com/AkanchaRani/cyber-attack-analyzer",
      demo: "https://github.com/AkanchaRani/cyber-attack-analyzer#readme",
      featured: true,
      icon: "fa-shield-virus"
    },
    {
      id: "medicvault",
      title: "MedicVault Healthcare System",
      category: "java-spring",
      categoryLabel: "Core Java & OOP",
      summary: "Comprehensive healthcare and prescription management system with role-based administration and patient records.",
      details: "Engineered in Core Java using OOP design patterns, Collections framework, and file persistence. Provides medicine inventory tracking, prescription logging, low-stock & expiry alerts, and comprehensive health summary reports.",
      tags: ["Core Java", "OOP", "Collections Framework", "File Handling", "CLI Architecture"],
      github: "https://github.com/AkanchaRani/MedicVault",
      demo: "https://github.com/AkanchaRani/MedicVault#readme",
      featured: true,
      icon: "fa-hospital"
    },
    {
      id: "spendwise",
      title: "SpendWise Finance Manager",
      category: "fullstack",
      categoryLabel: "Full Stack Web",
      summary: "Personal finance and expense management platform with interactive spending analytics, custom budgets, and warning alerts.",
      details: "Full-stack web application featuring secure user auth, expense CRUD operations, categorized budgets, monthly threshold notifications, dynamic filters, and visual data insights using Chart.js.",
      tags: ["PHP", "MySQL", "JavaScript", "Chart.js", "Responsive UI"],
      github: "https://github.com/AkanchaRani/SpendWise",
      demo: "https://github.com/AkanchaRani/SpendWise#readme",
      featured: false,
      icon: "fa-chart-pie"
    },
    {
      id: "ar-phonebook",
      title: "AR-PhoneBook Web App",
      category: "fullstack",
      categoryLabel: "Node & Express",
      summary: "Full-stack phonebook contact management web application with clean UI and RESTful backend.",
      details: "Constructed with Node.js, Express.js, and MySQL. Implements secure environment variable handling, full contact CRUD workflows, instant search, and a responsive frontend.",
      tags: ["Node.js", "Express.js", "MySQL", "REST API", "JavaScript"],
      github: "https://github.com/AkanchaRani/ARPhoneBook",
      demo: "https://github.com/AkanchaRani/ARPhoneBook#readme",
      featured: false,
      icon: "fa-address-book"
    },
    {
      id: "car-rental",
      title: "Car Rental Management System",
      category: "cpp",
      categoryLabel: "C++ & Systems",
      summary: "Console-based C++ vehicle rental and customer booking system with file-based persistence.",
      details: "Demonstrates advanced C++ OOP principles (encapsulation, abstraction, classes), vehicle availability tracking, rental calculation, return workflows, and revenue reporting.",
      tags: ["C++", "OOP", "File Handling", "Data Structures", "GCC/MinGW"],
      github: "https://github.com/AkanchaRani/car-rental-cpp-project",
      demo: "https://github.com/AkanchaRani/car-rental-cpp-project#readme",
      featured: false,
      icon: "fa-car"
    },
    {
      id: "file-organizer",
      title: "Automated File Organizer",
      category: "automation",
      categoryLabel: "Automation & Shell",
      summary: "Bash automation utility that sorts and categorizes files into clean directory structures with ShellCheck CI validation.",
      details: "Handles filenames with complex spaces, avoids file collisions, executes fast batch sorting, and includes GitHub Actions CI validation for POSIX compliance.",
      tags: ["Bash", "Linux", "Git Bash", "Automation", "CI/CD"],
      github: "https://github.com/AkanchaRani/file-organizer",
      demo: "https://github.com/AkanchaRani/file-organizer#readme",
      featured: false,
      icon: "fa-folder-tree"
    }
  ],

  experience: [
    {
      role: "Project Manager Intern",
      company: "Helioustin.io",
      period: "June 2026 – August 2026",
      location: "Remote",
      type: "Internship",
      bullets: [
        "Conducted market research and competitor profiling for SaaS business development initiatives.",
        "Created stakeholder mapping documentation, lead database management, and daily execution tracking.",
        "Coordinated with cross-functional team members to ensure milestones were met within deadlines."
      ],
      skills: ["Market Research", "Project Management", "Stakeholder Mapping", "Data Organization"],
      icon: "fa-briefcase"
    },
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC 2026)",
      period: "2026",
      location: "Remote / Open Source",
      type: "Open Source",
      bullets: [
        "Selected as an open-source contributor, collaborating with global developers on real-world repositories.",
        "Strengthened practical Git/GitHub collaboration workflows, pull request reviews, and code contributions.",
        "Contributed bug fixes, documentation enhancements, and feature implementations."
      ],
      skills: ["Git", "GitHub", "Open Source", "Collaboration", "Code Reviews"],
      icon: "fa-code-branch"
    },
    {
      role: "Club Coordinator",
      company: "The Expressionist Club, LPU",
      period: "Sep 2025 – Present",
      location: "LPU, Phagwara, Punjab",
      type: "Leadership",
      bullets: [
        "Organize and host interactive English-learning activities and public speaking sessions for student learners.",
        "Lead a core team of facilitators to drive engaging group discussions, confidence building, and peer learning.",
        "Managed event schedules, audience engagement, and post-session feedback loops."
      ],
      skills: ["Leadership", "Public Speaking", "Event Management", "Team Building"],
      icon: "fa-comments"
    },
    {
      role: "Campus CEO / Ambassador",
      company: "CashKaro Campus Entrepreneurship",
      period: "2025 – 2026",
      location: "LPU Campus",
      type: "Campus Leadership",
      bullets: [
        "Drove brand awareness and outreach campaigns for student-centric digital initiatives across campus.",
        "Honed communication, strategic outreach, leadership, and community networking skills."
      ],
      skills: ["Campus Outreach", "Marketing Strategy", "Networking", "Initiative Taking"],
      icon: "fa-bullhorn"
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        title: "Programming Languages",
        icon: "fa-code",
        items: [
          { name: "Java (Core & Advanced)", level: 90, color: "var(--primary)" },
          { name: "C++", level: 85, color: "var(--primary)" },
          { name: "Python", level: 80, color: "var(--primary)" },
          { name: "PHP", level: 80, color: "var(--primary)" },
          { name: "JavaScript (ES6+)", level: 85, color: "var(--primary)" },
          { name: "SQL", level: 88, color: "var(--primary)" },
          { name: "Bash / Shell", level: 75, color: "var(--primary)" }
        ]
      },
      {
        id: "backend",
        title: "Backend & Frameworks",
        icon: "fa-server",
        items: [
          { name: "Spring Boot", level: 88, color: "var(--primary)" },
          { name: "Spring Data JPA & Hibernate", level: 85, color: "var(--primary)" },
          { name: "RESTful API Architecture", level: 90, color: "var(--primary)" },
          { name: "Node.js & Express.js", level: 80, color: "var(--primary)" },
          { name: "Maven & Build Tools", level: 85, color: "var(--primary)" }
        ]
      },
      {
        id: "databases",
        title: "Databases & Tools",
        icon: "fa-database",
        items: [
          { name: "MySQL", level: 88, color: "var(--primary)" },
          { name: "Git & GitHub", level: 90, color: "var(--primary)" },
          { name: "Postman API Client", level: 85, color: "var(--primary)" },
          { name: "Linux / Unix Commands", level: 80, color: "var(--primary)" },
          { name: "IntelliJ IDEA & VS Code", level: 90, color: "var(--primary)" }
        ]
      },
      {
        id: "core",
        title: "Core CS & Engineering",
        icon: "fa-cubes",
        items: [
          { name: "Data Structures & Algorithms", level: 85, color: "var(--primary)" },
          { name: "Object-Oriented Programming (OOP)", level: 92, color: "var(--primary)" },
          { name: "Database Management Systems (DBMS)", level: 88, color: "var(--primary)" },
          { name: "Agile & Scrum Methodology", level: 85, color: "var(--primary)" }
        ]
      }
    ],
    coreChips: [
      "RESTful APIs",
      "Spring Boot",
      "MySQL",
      "Java 21",
      "DTO Validation",
      "OOP & Design Patterns",
      "Git / GitHub Workflow",
      "Agile Development",
      "Full Stack Development",
      "Threat Detection Basics",
      "Problem Solving",
      "Team Leadership"
    ]
  },

  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Professional University (LPU), Phagwara, Punjab",
      period: "2025 – Present",
      score: "CGPA: 8.87 / 10",
      highlight: "Specialization in Software Development, Advanced Java, Spring Boot, Databases & Enterprise Systems.",
      icon: "fa-graduation-cap"
    },
    {
      id: "bsc",
      degree: "B.Sc Mathematics (Honours)",
      institution: "Ranchi Women's College, Ranchi University, Jharkhand",
      period: "2021 – 2024",
      score: "CGPA: 7.88 / 10",
      highlight: "Built solid foundations in discrete mathematics, calculus, linear algebra, and logical reasoning.",
      icon: "fa-building-columns"
    },
    {
      id: "inter",
      degree: "12th Grade – Science (Intermediate)",
      institution: "R.T.C. Inter College, Ranchi, Jharkhand",
      period: "2019 – 2021",
      score: "Percentage: 90.2%",
      highlight: "Physics, Chemistry, Mathematics with distinction academic performance.",
      icon: "fa-school"
    },
    {
      id: "matric",
      degree: "10th Grade (Matriculation)",
      institution: "R.T.C. High School / CBSE Board, Ranchi",
      period: "Graduated 2019",
      score: "Percentage: 84.6%",
      highlight: "Strong academic foundation in science, mathematics, and computer basics.",
      icon: "fa-book-bookmark"
    }
  ],

  certificates: [
    {
      id: "cert-agile",
      title: "Software Engineering & Agile Development",
      issuer: "Infosys Springboard",
      date: "April 2026",
      image: "assets/certificates/SoftwareEngineering_Agile_Infosys.png",
      verifyUrl: "https://drive.google.com/file/d/1HwewUmHU0waCpkUpLKkJXyYANxTFC7qa/view?usp=sharing",
      badge: "Verified"
    },
    {
      id: "cert-dsa",
      title: "DSA with Java (Alpha Batch)",
      issuer: "Apna College",
      date: "Nov 2025 – Feb 2026",
      image: "assets/certificates/Alpha_DSA_Java_ApnaCollege.png",
      verifyUrl: "https://drive.google.com/file/d/1DB4wf6iKBtKnQNN0nQJLVI5Cvq6-kA1M/view?usp=sharing",
      badge: "Verified"
    },
    {
      id: "cert-sql",
      title: "Introduction to SQL",
      issuer: "Simplilearn",
      date: "Sep – Oct 2025",
      image: "assets/certificates/SQL_Basic_HackerRank.png",
      verifyUrl: "https://simpli-web.app.link/e/OLeZcQ48RWb",
      badge: "Verified"
    },
    {
      id: "cert-python-ds",
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class / IBM",
      date: "2024",
      image: "assets/certificates/PythonForDataScience_IBM.png",
      verifyUrl: "https://courses.cognitiveclass.ai/certificates/4c3f2431c25a4ad9a72c66492f19783a",
      badge: "IBM Verified"
    },
    {
      id: "cert-cyber",
      title: "Cyber Job Simulation",
      issuer: "Deloitte",
      date: "2026",
      image: "assets/certificates/CyberJobSimulation_Deloitte.png",
      verifyUrl: "assets/certificates/CyberJobSimulation_Deloitte.png",
      badge: "Simulation"
    },
    {
      id: "cert-analytics",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "2026",
      image: "assets/certificates/DataAnalytics_JobSimulation_Deloitte.png",
      verifyUrl: "assets/certificates/DataAnalytics_JobSimulation_Deloitte.png",
      badge: "Simulation"
    },
    {
      id: "cert-java-neo",
      title: "Java Programming",
      issuer: "NeoColab",
      date: "2025",
      image: "assets/certificates/JavaProgramming_NeoColab.png",
      verifyUrl: "assets/certificates/JavaProgramming_NeoColab.png",
      badge: "Verified"
    },
    {
      id: "cert-nosql",
      title: "NoSQL Databases",
      issuer: "Infosys Springboard",
      date: "2025",
      image: "assets/certificates/NoSQLDatabases_Infosys.png",
      verifyUrl: "assets/certificates/NoSQLDatabases_Infosys.png",
      badge: "Verified"
    },
    {
      id: "cert-py-fund",
      title: "Python Fundamentals",
      issuer: "Great Learning",
      date: "2025",
      image: "assets/certificates/PythonFundamentals_GreatLearning.png",
      verifyUrl: "assets/certificates/PythonFundamentals_GreatLearning.png",
      badge: "Verified"
    },
    {
      id: "cert-css",
      title: "CSS (Basic)",
      issuer: "HackerRank",
      date: "2024",
      image: "assets/certificates/CSS_Basic_HackerRank.png",
      verifyUrl: "assets/certificates/CSS_Basic_HackerRank.png",
      badge: "HackerRank"
    },
    {
      id: "cert-ai",
      title: "Prompt Engineering & Intelligence in AI",
      issuer: "IBM SkillsBuild",
      date: "2025",
      image: "assets/certificates/IntelligenceBehindAI_IBM_SkillsBuild.png",
      verifyUrl: "assets/certificates/IntelligenceBehindAI_IBM_SkillsBuild.png",
      badge: "IBM"
    },
    {
      id: "cert-agile-scrum",
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "2025",
      image: "assets/certificates/SoftwareEngineering_Agile_Infosys.png",
      verifyUrl: "assets/certificates/AgileScrumInPractice_Infosys.pdf",
      badge: "Verified"
    }
  ],

  activities: [
    {
      id: "act-expressionist",
      title: "The Expressionist Club, LPU",
      role: "Coordinator",
      period: "Sep 2025 – Present",
      description: "Coordinating interactive English-learning workshops, team communication activities, and peer-to-peer speaking practice sessions.",
      image: "assets/activities/ExpressionistClub_LPU.png",
      tag: "Leadership & Club",
      icon: "fa-comments"
    },
    {
      id: "act-gssoc",
      title: "GirlScript Summer of Code 2026",
      role: "Open Source Contributor",
      period: "2026",
      description: "Selected as an open-source contributor for GSSoC 2026, collaborating on open software projects, submitting PRs, and engaging in Git-based code reviews.",
      image: "assets/activities/GSSoC2026_Contributor_Badge.png",
      tag: "Open Source",
      icon: "fa-code-branch"
    },
    {
      id: "act-scratch",
      title: "Scratch Your Brain 2025",
      role: "Code-A-Thon Participant",
      period: "2025",
      description: "Participated in an intensive university coding competition hosted by BodhScript Club, testing speed, algorithmic problem solving, and logical debugging under time limits.",
      image: "assets/activities/ScratchYourBrain_CodeAThon_BodhScriptClub.jpg",
      tag: "Hackathon",
      icon: "fa-laptop-code"
    },
    {
      id: "act-cashkaro",
      title: "Campus Entrepreneurship Program",
      role: "CashKaro Campus CEO",
      period: "2025 – 2026",
      description: "Participated in university entrepreneurship and community outreach initiatives, developing proactive communication, campaign organization, and leadership skills.",
      image: "assets/activities/CampusCEO_CashKaro.png",
      tag: "Entrepreneurship",
      icon: "fa-rocket"
    },
    {
      id: "act-ai-lit",
      title: "AI Literacy & Community Learning",
      role: "Active Participant",
      period: "2025 – 2026",
      description: "Engaged in an AI literacy initiative by Yashoda AI and the National Commission for Women (NCW) to promote technology awareness and practical AI applications.",
      image: "assets/activities/AI_Literacy_YashodaAI_NCW.png",
      tag: "AI Community",
      icon: "fa-brain"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
