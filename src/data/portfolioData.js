import { FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import chatImage from '../assets/projects/chat.svg';
import ecommerceImage from '../assets/projects/ecommerce.svg';
import expenseImage from '../assets/projects/expense.svg';
import avatarImage from '../assets/projects/avatar.svg';
import chatbotImage from '../assets/projects/chatbot.svg';

export const profile = {
  name: 'Vishal Chandel',
  title: 'Frontend Developer | Web Designer',
  tagline: 'Frontend Developer fresher with 6+ months of hands-on training in building responsive and performance-optimized websites.',
  bio: 'Skilled in HTML, CSS, Bootstrap, JavaScript, React.js, and Lighthouse optimization. I am seeking an entry-level frontend role to apply technical skills, contribute to real projects, and grow professionally.',
  email: 'vishalchandel210@gmail.com',
  phone: '8894155350',
  location: 'Green Enclave, Mohali, Punjab',
  social: {
    github: '',
    linkedin: ''
  }
};

export const skills = [
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: FaGitAlt }
];

export const technicalSkills = [
  'HTML5',
  'CSS3',
  'Bootstrap 5',
  'JavaScript (ES6)',
  'jQuery',
  'React.js',
  'Lighthouse Optimization',
  'Responsive Design',
  'Cross-Browser Compatibility',
  'Basic MERN Stack'
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
    title: 'E-commerce App',
    image: ecommerceImage,
    description:
      'A full-featured commerce platform with product browsing, cart management, order placement, and authentication.',
    stack: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/vishalchandel/ecommerce-app',
    demoUrl: 'https://ecommerce-demo.example.com'
  },
  {
    title: 'Chat Application',
    image: chatImage,
    description:
      'A real-time chat experience with room-based messaging, typing states, and robust socket event handling.',
    stack: ['React', 'Node.js', 'Socket.io'],
    githubUrl: 'https://github.com/vishalchandel/chat-app',
    demoUrl: 'https://chat-demo.example.com'
  },
  {
    title: 'Expense Tracker',
    image: expenseImage,
    description:
      'An analytics-focused finance tracker for recording expenses, category summaries, and visual trend reports.',
    stack: ['React', 'Chart.js', 'JavaScript'],
    githubUrl: 'https://github.com/vishalchandel/expense-tracker',
    demoUrl: 'https://expense-demo.example.com'
  },
  {
    title: 'Avatar Generator',
    image: avatarImage,
    description:
      'Avatar generator application that uses Axios API integration to create dynamic avatar styles from user inputs.',
    stack: ['React', 'Axios API', 'JavaScript'],
    githubUrl: '',
    demoUrl: 'https://stellar-puppy-8ee4e4.netlify.app/'
  },
  {
    title: 'Mini Chatbot',
    image: chatbotImage,
    description:
      'A lightweight chatbot utility page that currently supports actions like coin flip, current date, current time, and a few basic helper commands.',
    stack: ['HTML', 'JavaScript', 'UI Logic'],
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