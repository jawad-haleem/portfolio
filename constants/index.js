
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
    title: "Machine Learning Engineer (NLP)",
    company_name: "Kyaas Solutions",
    icon: interns,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Assist in data collection, cleaning, and preprocessing tasks.",
      "Support feature engineering efforts under senior ML engineers' guidance.",
      "Develop and implement machine learning models following established guidelines.",
      "Collaborate with the ML team for model testing and evaluation.",
      "Learn actively, conduct research on ML techniques, and contribute to ML projects with a proactive and enthusiastic attitude.",
      
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
      "Impressive AI Project! The algorithms are cutting-edge, delivering precise results. Kudos to the team for innovation and accuracy!",
      // "Generative AI with Large Language Models",
    name: "ikrama1000@gmail.com⭐⭐⭐⭐",
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
