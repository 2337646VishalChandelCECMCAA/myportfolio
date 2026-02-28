import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill, RiVercelFill } from 'react-icons/ri';
import { SiExpress, SiGithub, SiJavascript } from 'react-icons/si';
import expenseImage from '../assets/projects/expense.svg';
import avatarImage from '../assets/projects/avatar.svg';
import chatbotImage from '../assets/projects/chatbot.svg';

export const profile = {
  name: 'Vishal Chandel',
  title: 'Frontend Developer',
  tagline: 'Frontend Developer | React | JavaScript',
  intro: [
    'I build responsive, accessible, and performance-focused web interfaces with React and modern JavaScript.',
    'I focus on clean architecture, reusable components, and recruiter-friendly product experiences.'
  ],
  bio: 'Frontend Developer with hands-on training in building optimized user interfaces and responsive websites. I apply modern JavaScript practices, strong UI fundamentals, and performance-first implementation to deliver reliable web experiences.',
  email: 'vishalchandel210@gmail.com',
  phone: '8894155350',
  location: 'Green Enclave, Mohali, Punjab',
  resumeUrl: '/Vishal-Chandel-Resume.pdf',
  social: {
    github: 'https://github.com/2337646VishalChandelCECMCAA',
    linkedin: ''
  }
};

export const topSkills = [
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Git', icon: FaGitAlt }
];

export const skillCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Tailwind', icon: RiTailwindCssFill }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vercel', icon: RiVercelFill }
    ]
  }
];

export const tools = ['VS Code', 'Git & GitHub', 'Chrome DevTools', 'Claude'];

export const certifications = [
  'Python Essentials 1 - Cisco Networking Academy (2025)',
  'Web Designing Internship - Solitaire Infosys Pvt. Ltd.',
  'React.js Training - Techlive Solutions',
  'International Conference Participation - CBSA, CGC Landran (2025)'
];

export const projects = [
  {
    title: 'Expense Tracker Analytics',
    image: expenseImage,
    description:
      'Built a state-driven expense management interface with categorized entries, interactive chart visualizations, and efficient client-side aggregation for monthly trend analysis.',
    stack: ['React', 'Chart.js', 'JavaScript'],
    githubUrl: 'https://github.com/vishalchandel/expense-tracker',
    demoUrl: 'https://expense-demo.example.com'
  },
  {
    title: 'Avatar Generator',
    image: avatarImage,
    description:
      'Implemented an avatar generator with Axios-powered API calls, customizable style controls, and responsive state handling for real-time visual preview updates.',
    stack: ['React', 'Axios', 'REST API'],
    githubUrl: '',
    demoUrl: 'https://stellar-puppy-8ee4e4.netlify.app/'
  },
  {
    title: 'Mini Chatbot',
    image: chatbotImage,
    description:
      'Developed a lightweight utility chatbot using rule-based command mapping, supporting actions like coin flip, date/time retrieval, and quick helper responses.',
    stack: ['HTML', 'JavaScript', 'DOM APIs'],
    githubUrl: 'https://github.com/Vishalchandel08/MY-PROJECTS/blob/main/chatbot.html',
    demoUrl: 'https://vishalchandel08.github.io/MY-PROJECTS/chatbot.html'
  }
];

export const timeline = [
  {
    period: 'Jul 2025 - Dec 2025',
    title: 'Frontend / React Training',
    subtitle: 'Wisdom InfoSoft, Mohali',
    description:
      'Built responsive webpages and UI components using HTML, CSS, Bootstrap, JavaScript, and React.js; improved website performance and SEO using Lighthouse; worked on real-world frontend assignments.'
  },
  {
    period: 'Jan 2022 - Aug 2022 (6 Weeks)',
    title: 'Web Designing Internship',
    subtitle: 'Solitaire Infosys Pvt. Ltd.',
    description: 'Designed and styled webpages using HTML and CSS and assisted in frontend layout development for live projects.'
  },
  {
    period: 'Jun 2024 - Jul 2024 (6 Weeks)',
    title: 'React.js Training',
    subtitle: 'Techlive Solutions',
    description: 'Learned React fundamentals including components, props, and state.'
  },
  {
    period: '2023 - 2025',
    title: 'Master of Computer Applications (MCA)',
    subtitle: 'CGC Landran, Mohali',
    description: 'Graduated with CGPA: 7.29.'
  },
  {
    period: '2020 - 2023',
    title: 'Bachelor of Computer Applications (BCA)',
    subtitle: 'CGC Landran, Mohali',
    description: 'Graduated with CGPA: 7.38.'
  }
];