export const portfolioData = {
  personal: {
    name: "Dinesh Reddy Yaramada",
    title: "Full Stack Developer / Software Engineer",
    email: "dineshy2307@gmail.com",
    phone: "(806) 401-3047",
    linkedin: "https://linkedin.com/in/dineshyaramada",
    location: "Texas, United States",
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
      achievements: [],
    },
    {
      company: "HummingWave Technologies",
      role: "Full Stack Developer",
      period: "July 2019 – July 2021",
      location: "Bengaluru, Karnataka, India",
      achievements: [
       ]
    },
    {
      company: "OpenText",
      role: "Associate Software Engineer",
      period: "September 2018 – March 2019",
      location: "Bengaluru, Karnataka, India",
      achievements: [
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
      description: "Implemented Retrieval-Augmented Generation AI agent for Cricket's History, current matches going around the globe and where to catch them live, recent updates about your favorite teams and resources to help play better.",
      technologies: ["Python", "LangChain", "VectorDB", "OpenAI API"],
      features: [
        "Retrieval-Augmented Generation AI agent",
        "Cricket history and live match updates",
        "Recent updates about favorite teams",
        "Resources for improving gameplay"
      ]
    },
    {
      title: "Research Publication",
      description: "Published research on 'Review and Advancement of Automation Testing with Integrated Frameworks', in the International Journal of Emerging Technologies and Innovative Research.",
      technologies: ["Automation testing", "Integrated Frameworks", "API Testing", "Python"],
      features: [
        "Focus on automation testing advancements",
        "Flawless Automation Testing algorithms.",
        "Impact Factor 7.95 calculated by Google Scholar",
        "Published in International JETIR Volume 6 | Issue 4",
      ]
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
    "Building LLM Applications With Prompt Engineering",
    "Full Stack Development",
    "Google Analytics Individual Qualification",
    "Python Programming", 
  ]
};
