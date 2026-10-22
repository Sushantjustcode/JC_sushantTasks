import type { PortfolioContent } from './types'

/**
 * Single source of truth for everything the visitor reads.
 * Content comes from Sushant's CV. Fields marked `undefined` are not in the CV
 * and are shown as clearly labelled placeholders rather than invented.
 */
export const portfolio: PortfolioContent = {
  owner: {
    name: 'Sushant Chauhan',
    title: 'Full-Stack MERN Developer • Game & 3D Environment Designer',
    tagline: 'A highly questionable investigation into one person’s professional existence.',
    positioning:
      'Builds MERN web applications and game-ready 3D environments, with a self-driven habit of shipping end-to-end projects.',
    location: 'Karnal, Haryana, India',
    availability: undefined,
    resumeUrl: '/Sushant_Chauhan_CV.pdf',
  },

  contacts: [
    { id: 'email', label: 'Email', href: 'sushantjogi026@gmail.com' },
    { id: 'phone', label: 'Phone', href: 'tel:+917015132358', display: '+91-7015132358' },
    { id: 'linkedin', label: 'LinkedIn', href:'https://www.linkedin.com/in/sushant-chauhan-675291322?utm' },
    { id: 'github', label: 'GitHub', href: 'https://github.com/Sushantjustcode' },
    { id: 'portfolio', label: 'Portfolio', href: 'http://sushantjustcode.netlify.app' },
  ],

  about: [
    'Full-Stack MERN developer with hands-on experience building web applications with React.js, Node.js, Express.js and MongoDB.',
    'Completed an intensive backend-focused MERN internship and an industrial training program, and independently builds end-to-end personal projects on an ongoing basis.',
    'Practical experience in game development, level design and 3D modeling adds problem solving, visual hierarchy, performance awareness and attention to detail to every build.',
  ],

  strengths: [
    'Problem Solving',
    'Debugging & Troubleshooting',
    'Systematic Thinking',
    'Creativity & Design Thinking',
    'Adaptability',
    'Communication',
    'Confidence',
    'Leadership',
  ],

  skills: [
    {
      id: 'frontend',
      label: 'Frontend',
      items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      id: 'backend',
      label: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'CRUD', 'MERN'],
    },
    { id: 'databases', label: 'Databases', items: ['MongoDB', 'SQL'] },
    {
      id: 'programming',
      label: 'Programming',
      items: ['C', 'C++', 'C#', 'Python', 'OOP', 'DSA'],
    },
    {
      id: 'game3d',
      label: 'Game & 3D',
      items: [
        'Blender',
        'Unity',
        'Unreal Engine',
        'Level Design',
        '3D Modeling',
        'Environment Art',
        'Lighting',
        'Texturing',
      ],
    },
    { id: 'tools', label: 'Tools', items: ['Git', 'GitHub'] },
    {
      id: 'productivity',
      label: 'Productivity',
      items: ['MS Excel', 'MS PowerPoint', 'MS Word', 'YouTube Creator Studio', 'Video Editing'],
    },
  ],

  projects: [
    {
      id: 'student-management-system',
      title: 'Student Management System',
      kind: 'web',
      summary: 'MERN-stack application for managing and searching student records.',
      highlights: [
        'Built as the internship project at CodeQuotient School of Technology, Panipat.',
        'Implemented CRUD operations, database integration and structured student-record workflows.',
        'Designed a responsive interface for managing and searching student information.',
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      contribution: 'Internship project built with the MERN stack.',
      featured: true,
    },
    {
      id: 'horror-forest-level',
      title: 'Horror Game — Forest Level Design',
      kind: 'game',
      summary: 'A horror-themed forest level shaped by composition, pacing, sightlines and lighting.',
      highlights: [
        'Created exploration spaces, set-pieces and atmosphere-focused environments to support gameplay flow.',
        'Applied level design thinking to guide player attention and communicate mood through the environment.',
      ],
      technologies: ['Unreal Engine', 'Unity', 'Blender'],
      featured: true,
    },
    {
      id: 'game-assets-3d',
      title: '3D Modeling — Game Assets',
      kind: '3d',
      summary: 'Game assets and environment elements prepared for real-time 3D scenes.',
      highlights: [
        'Worked with materials, textures, lighting and game-ready asset preparation.',
        'Balanced visual detail with practical real-time requirements.',
      ],
      technologies: ['Blender', 'Unity', 'Unreal Engine'],
      featured: true,
    },
    {
      id: 'library-management-system',
      title: 'Library Management System',
      kind: 'web',
      summary: 'Management application for organizing books and library records.',
      highlights: ['Focused on clear data handling, practical workflows and an easy-to-use interface.'],
      technologies: ['Web Development', 'Database'],
      featured: false,
    },
    {
      id: 'portfolio-websites',
      title: 'Personal Portfolio Websites',
      kind: 'web',
      summary: 'Responsive portfolio websites presenting development and creative work.',
      highlights: ['Focused on clean navigation, visual hierarchy, responsive layouts and professional presentation.'],
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
      featured: false,
    },
  ],

  projectOrder: [
    'student-management-system',
    'horror-forest-level',
    'game-assets-3d',
    'library-management-system',
    'portfolio-websites',
  ],

  milestones: [
    {
      id: 'bca',
      kind: 'education',
      title: 'BCA — Artificial Intelligence',
      organisation: 'Kurukshetra University',
      period: 'July 2024 – July 2027',
      points: [],
    },
    {
      id: 'industrial-trainee',
      kind: 'training',
      title: 'Industrial Trainee',
      organisation: 'CodeQuotient School of Technology',
      period: 'Jul 2025 – Aug 2025',
      points: [
        'Project-driven 6–8 week program on professional software development practices and career readiness.',
        'Practiced collaborative workflows, code reviews and iterative debugging.',
        'Earned recognition from mentors for learning agility and consistency.',
      ],
    },
    {
      id: 'web-intern',
      kind: 'work',
      title: 'Web Development Intern — Backend & MERN Training',
      organisation: 'CodeQuotient School of Technology, Panipat',
      period: 'Jul 2026 – Aug 2026',
      points: [
        'Applied the MERN stack with an emphasis on backend development, REST APIs and database operations.',
        'Built a Student Management System as the internship project.',
      ],
    },
    {
      id: 'self-driven',
      kind: 'learning',
      title: 'Self-Driven Developer — Independent Projects & Continuous Learning',
      organisation: 'Independent Work',
      period: 'Ongoing',
      points: [
        'Conceptualized, designed and built multiple end-to-end projects across full-stack web development and 3D environment art.',
        'Continuously iterates on past projects to refine performance, visual polish and code quality.',
      ],
    },
  ],

  achievements: [
    { id: 'hackwars', text: 'HackWars Hackathon Runner-Up — NIT Karnataka', category: 'hackathon' },
    {
      id: 'codemaster',
      text: 'CodeMaster Hackathon Runner-Up (Semifinalist) — CQST College',
      category: 'hackathon',
    },
    { id: 'whitehat', text: 'WhiteHat Jr Game Developer Achievement — 2020', category: 'game-dev' },
    { id: 'football', text: 'Football Medallist — Interschool Competition', category: 'sport' },
    { id: 'basketball', text: 'Basketball Medallist — Interschool Competition', category: 'sport' },
  ],
}
