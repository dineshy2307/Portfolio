export const portfolioData = {
  personal: {
    name: "Dinesh Yaramada",
    title: "Full Stack Developer & Software Engineer",
    email: "dineshy2307@gmail.com",
    phone: "(806) 401-3047",
    linkedin: "https://linkedin.com/in/dinesh-yaramada",
    location: "Lubbock, Texas, United States",
    summary: "Experienced Full Stack Developer with a Master's degree in Computer Science from Texas Tech University and a Bachelor's in Computer Science from CVR College of Engineering. My expertise spans software development and system architecture. Motivated by solving complex problems, I aim to leverage technology to create meaningful impact while fostering collaboration and creativity.",
  },
  
  skills: {
    frontend: [
      "JavaScript", "TypeScript", "React", "Vue.js", "Angular", 
      "HTML/CSS", "Tailwind", "Material-UI", "Bootstrap"
    ],
    backend: [
      "Java", "Python", "Go", "Node.js", "Spring Boot", "Django", 
      "REST API", "GraphQL", "Express.js", "NestJS"
    ],
    cloud: [
      "AWS", "Docker", "Kubernetes", "Jenkins", "Git", "Lambda", 
      "EC2", "S3", "DynamoDB", "CloudWatch"
    ],
    database: [
      "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "VectorDB"
    ],
    mobile: [
      "React Native", "Android", "iOS", "Kotlin", "Swift"
    ],
    tools: [
      "JUnit", "Gradle", "Selenium", "Kafka", "Spark", "Elasticsearch", 
      "Hibernate", "A/B Testing", "Performance Testing"
    ]
  },

  experience: [
    {
      company: "Quext",
      role: "Full Stack Web Developer",
      period: "June 2023 – Present",
      location: "Lubbock, Texas, United States",
      achievements: [
        "Created a calendar service using Vue.js integrating with Broadcasting & Scheduling services with Java(Spring/Hibernate) for messaging, leasing, property managers residents and accelerating service by 45%",
        "Executed a centralized Web Application administrator console to enhance management efficiency for residents and prospects, centralizing leasing offices and workload of leasing agents by reducing processing turn-around time by 65%",
        "Implemented RAG (Retrieval-Augmented Generation) GenAI agent for domain-specific responses, integrating databases and custom knowledge libraries achieving $1.2M average savings across 115 multi-family properties",
        "Enhanced an Android app featuring augmented reality and real-time mapping with virtual assistant and super-imposed navigation for prospects to help in self-guided touring of all amenities on property"
      ]
    },
    {
      company: "HummingWave Technologies",
      role: "Full Stack Developer",
      period: "July 2019 – July 2021",
      location: "Bengaluru, Karnataka, India",
      achievements: [
        "Designed scalable solution for managing credit policies, integrating third-party services, and sourcing partner APIs using Java(Spring/SpringBoot) to enhance financial technology offerings for over 1.3 million users nationwide",
        "Integrated analytics and user segmentation in a B2B web application for analytics, rich push notifications, and surveys, resulting in a 47% expansion in revenue and a 143% increase in recurring revenue",
        "Adopted MVVM architecture and managed the transition of an existing Android application from Java to Kotlin with over a 100K active users for a cleaner separation of concerns between the different layers of the application",
        "Developed an Android application that enables personal and consumer loans for individuals to small-scale businesses using cryptocurrencies and digital assets as collateral, achieving 800K downloads and a 4.5/5 happiness rating"
      ]
    },
    {
      company: "OpenText",
      role: "Associate Software Engineer",
      period: "September 2018 – March 2019",
      location: "Bengaluru, Karnataka, India",
      achievements: [
        "Developed and implemented an end-to-end test automation framework that reduced regression testing time by 65%, leveraging Selenium WebDriver",
        "Spearheaded quality assurance initiatives for a Business Process Management (BPM) suite ensuring workflow automation and collaborated with stakeholders to identify process inefficiencies to optimize automation",
        "Implemented a comprehensive SOAP-to-REST API transformation strategy restructuring service endpoints to enhance scalability, performance and led the redesign of legacy SOAP-based services into modern RESTful architectures"
      ]
    }
  ],

  projects: [
    {
      title: "Multi-User Drawing Tool",
      description: "An electronic classroom where multiple users can simultaneously view and draw on a \"chalkboard\" with each person's edits synchronized in real time. Available to download and back up with look-up of superimposing comments by users.",
      technologies: ["React", "Konva.js", "Socket.io", "WebSockets"],
      features: [
        "Real-time collaborative drawing",
        "Multi-user synchronization", 
        "Comment overlay system",
        "Data backup and recovery"
      ]
    },
    {
      title: "Synchronized Desktop Calendar",
      description: "A desktop calendar with globally shared and synchronized calendars, allowing users to schedule meetings with other. Calendar spread with GUI scaling and hovering for CRUD events along with recommendation to reduce fragmentation.",
      technologies: ["TypeScript", "React", "REST API", "PostgreSQL"],
      features: [
        "Global calendar synchronization",
        "Meeting scheduling system",
        "GUI scaling and responsiveness", 
        "Fragmentation reduction algorithms"
      ]
    },
    {
      title: "RAG GenAI Agent",
      description: "Implemented Retrieval-Augmented Generation AI agent for domain-specific responses, integrating databases and custom knowledge libraries to achieve significant cost savings.",
      technologies: ["Python", "LangChain", "VectorDB", "OpenAI API"],
      impact: {
        savings: "$1.2M",
        properties: 115,
        description: "Revolutionized property management operations through AI-powered responses and automation"
      }
    }
  ],

  education: [
    {
      degree: "Master's in Computer Science",
      school: "Texas Tech University",
      period: "Aug 2021 – May 2023",
      gpa: "3.8/4.0",
      coursework: ["Advanced Algorithms", "Machine Learning", "Intelligent Systems", "Information Security", "Neural Networks"]
    },
    {
      degree: "Bachelor's in Computer Science and Engineering", 
      school: "CVR College of Engineering",
      period: "Aug 2015 – May 2019",
      gpa: "8.2/10.0",
      coursework: ["Data Structures", "Algorithms", "OOPS", "C/C++", "Web Development", "Image Processing", "Microprocessors"]
    }
  ],

  certifications: [
    "Full Stack Development",
    "Python Programming", 
    "Building LLM Applications With Prompt Engineering",
    "Google Analytics Individual Qualification",
    "Research Publication"
  ]
};
