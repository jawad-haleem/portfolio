
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
  preesoft,
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
    title: " AI Engineer",
    company_name: "Preesoft Pvt Ltd.",
    icon: preesoft,
    iconBg: "#E6DEDD",
    date: "Nov-2024 - Present",
    points: [
      "Developed AI-powered business solutions to automate tasks, significantly reducing manual effort and operational costs.",
      "Developed production-ready AI applications, including chatbots, voice agents, submittal extractors, and document/RFI generators.",
      "Collaborated cross-functionally with product, engineering, and operations teams to deliver AI solutions aligned with business goals.",
      "Proactively learned and utilized cutting-edge frameworks such as Google Agent Development Kit (ADK) and LangGraph."
      
    ],
  },
  {
    title: "Junior Machine Learning Engineer",
    company_name: "Creative sol",
    icon: upwork,
    iconBg: "#15A800",
    date: "March 2022 - Jan 2023",
    points: [
      "Support data collection, cleaning, and preprocessing tasks.",
      "Collaborate with senior ML engineers on feature engineering and model development.",
      "Assist in model testing, evaluation, and results documentation.",
      "Actively learn and expand ML knowledge through research and hands-on tasks.",
      "Maintain data pipelines, follow coding standards, and contribute to team meetings with enthusiasm.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Impressive AI Project! The algorithms are cutting-edge, delivering precise results. Kudos to the team for innovation and accuracy!⭐⭐⭐⭐",
      // "Generative AI with Large Language Models",
    name: "ikrama1000@gmail.com",
    designation: "",
    
  },
  {
    testimonial:
      "Seamless integration! User-friendly interface makes it accessible to all. Excellent work in pushing the boundaries of technology!⭐⭐⭐⭐⭐"
      ,// "Python for Data Science and Machine Learning Bootcamp",
    name: "nayabimtiaz123@gmail.com",
    designation: "",

  },
  {
    testimonial:
      "Exceptional AI solution! The model's performance exceeded expectations, showcasing the team's expertise. A game-changer in the field!⭐⭐⭐⭐",
    name: "andrew.smith@gmail.com",
    designation: "",
    company: "",
    image: tracy,
  }
  // ,
  // {
  //   testimonial:
  //     "Microsoft Certified: Azure AI Fundamentals",
  //   name: "Microsoft",
  //   designation: "",
  //   company: "",
  //   image: tracy,
  // },
  // {
  //   testimonial:
  //     "HCIA-Big Data",
  //   name: "Huawei",
  //   designation: "",
  //   company: "",
  //   image: tracy,
  // },
  // {
  //   testimonial:
  //     "Programming in C++: A Hands-on Introduction Specialization",
  //   name: "Coursera",
  //   designation: "",
  //   company: "",
  //   image: tracy,
  // },

];

const projects = [
  {
    name: "Customized-Chatbot",
    description:
      "Successfully implemented an intelligent chatbot using LangGraph, streamlining the company’s demo booking process and reducing manual workload. The bot autonomously schedules demos by checking available slots on Google Calendar and responds to client queries using contextual information from internal documentation and company blogs. Built with LangGraph, the solution leverages low-level control over conversational flow, enabling a modern and efficient approach to chatbot development.",
    tags: [
      {
        name: "RAG ",
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
        name: "LangGraph",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain ",
        color: "green-text-gradient",
      },
      {
        name: "LLM orchestration ",
        color: "pink-text-gradient",
      },
      {
        name: "AI Automation ",
        color: "blue-text-gradient",
      },
      {
        name: "Multi-Agent AI ",
        color: "green-text-gradient",
      },
    ],
    image: weathersnap,
    source_code_link: "https://github.com/afnanqasim74/huggingface-chatbot",
  },
  {
    name: "LaTeX to Python Conversion",
    description:
      "Achieved the highest accuracy of 98.3% in Kaggle competition. Fine-tuned code T5 for converting LaTeX mathematical expressions to Python code by leveraging and fine-tuning the T5 model across all teams.",
    tags: [
      {
        name: "NLP ",
        color: "blue-text-gradient",
      },
      {
        name: "Synthetic data generation",
        color: "green-text-gradient",
      },
      {
        name: "Fine-Tune ",
        color: "pink-text-gradient",
      },
      {
        name: "Code T5",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis ",
        color: "green-text-gradient",
      },
      {
        name: "Code-Generation",
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
