
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  interns,
  upwork,
  nextalgo,
  weathersnap,
  linearvision,
  hairday,
  threejs,
  mitch,
  kevin,
  tracy,
} from "../src/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python",
    icon: web,
  },
  {
    title: "NLP",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
  {
    title: "Deep Learning ",
    icon: backend,
  },
  {
    title: "GAN's",
    icon: creator,
  },
  {
    title: "LLM's",
    icon: backend,
  },
  {
    title: "Transformers",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Junior Machine Learning Engineer",
    company_name: "Kyaas Solutions",
    icon: interns,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Assist in data collection, cleaning, and preprocessing tasks.",
      "Support feature engineering efforts under senior ML engineers' guidance.",
      "Develop and implement machine learning models following established guidelines.",
      "Collaborate with the ML team for model testing and evaluation.",
      "Learn actively, conduct research on ML techniques, and contribute to ML projects with a proactive and enthusiastic attitude.",
      
    ],
  },
  {
    title: "Freelancer",
    company_name: "Fiverr",
    icon: upwork,
    iconBg: "#15A800",
    date: "Feb 2022 - Present",
    points: [
      "Delivering projects on Full-Stack Development, utilizing my expertise in the MERN stack, ReactJS/Native, Azure, AI/ML, and Metaverse.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Providing personal tutoring in various technologies such as API's, AI & VR/AR development.",
      "Maintaining effective communication with clients to ensure their satisfaction and delivering solutions that meet their needs.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Sharjeel has been nothing short of amazing. He is prepared, proactive, and knowledgeable.",
    name: "Mitch Schneider",
    designation: "CEO",
    company: "Infinium Designs",
    image: mitch,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's success as Sharjeel does.",
    name: "Kevin Dunne",
    designation: "COS",
    company: "Industry Dive",
    image: kevin,
  },
  {
    testimonial:
      "After Sharjeel revamped & optimized our website, our traffic increased by 50%. Such a good experience!",
    name: "Coursera.org",
    designation: "",
    company: "",
    image: tracy,
  },

];

const projects = [
  {
    name: "Chatbot-transformers",
    description:
      "Successfully implemented a chatbot using Google Flan-T5 transformer.Preprocessed the first text before calling the Hugging Face embedding.Created a knowledge base using the preprocessed documents and embeddings.Deployed the knowledge base using Streamlit after saving it in .pkl Utilized the model and knowledge base to predict answers for user queries.",
    tags: [
      {
        name: "ML ",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Chatbot ",
        color: "pink-text-gradient",
      },
      {
        name: "GoogleFlanT5",
        color: "blue-text-gradient",
      },
      {
        name: "HuggingFace ",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "Deployment",
        color: "green-text-gradient",
      },
    ],
    image: weathersnap,
    source_code_link: "https://github.com/afnanqasim74/huggingface-chatbot",
  },
  {
    name: "Linear Vision",
    description:
      "Web application that enables users with the power of DALL-E 2's API integration & an image editor resulting in a sleek and minimalist user interface to edit your images creatively.",
    tags: [
      {
        name: "ML ",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Chatbot ",
        color: "pink-text-gradient",
      },
      {
        name: "GoogleFlanT5",
        color: "blue-text-gradient",
      },
      {
        name: "HuggingFace ",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "Deployment",
        color: "green-text-gradient",
      },
      
      
    ],
    image: linearvision,
    source_code_link: "https://github.com/Sharjeel-Riaz/Linear-Vision",
    
  },
  {
    name: "Hair Day",
    description:
      "An all-inclusive salon experience platform that empowers users to book a wide range of haircare and beauty services, and provides personalized recommendations for their unique needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: hairday,
    source_code_link: "https://github.com/Sharjeel-Riaz/Hair-Day-Website",
  
  },
];

export { services, technologies, experiences, testimonials, projects };
