import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  cryptotracker,
  calculator,
  forexfusion,
  tyrosoft,
  client,
  playaxis,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  android,
  compose,
  gradle,
  kotlin,
  firebase,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Android",
    icon: android,
  },
  {
    title: "Kotlin",
    icon: kotlin,
  },
  {
    title: "Jetpack Compose",
    icon: compose,
  },
  {
    title: "Gradle",
    icon: gradle,
  },
];

const technologies = [
  {
    name: "Jetpack Compose",
    icon: compose,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Gradle",
    icon: gradle,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Android Developer",
    company_name: "Play-Axis",
    icon: playaxis,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Work for Client Apps",
    company_name: "Person",
    icon: client,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "TyroSoft",
    icon: tyrosoft,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Trading Signal App With Admin Panel",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Jetpack Compose",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: forexfusion,
    source_code_link: "https://github.com/Zuanid-Sutlan/TradingSignalsApp",
  },
  {
    name: "Simple Calculator With Custom UI",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Jetpack Compose",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: calculator,
    source_code_link: "https://github.com/Zuanid-Sutlan/BasicCalculator",
  },
  {
    name: "Simple CryptoTracker",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "CoinMarketCap Api",
        color: "blue-text-gradient",
      },
      {
        name: "Retrofit",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "Jetpack Compose",
        color: "green-text-gradient",
      },
    ],
    image: cryptotracker,
    source_code_link: "https://github.com/Zuanid-Sutlan/CryptoTracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
