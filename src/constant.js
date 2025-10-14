import logoImg from "./assets/logo/logo.png";
import logoImg1 from "./assets/logo/D&D PNG.png"
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import aboutUsPageImg from "./assets/images/about-us-pageImg.jpg";
import { ReactComponent as EcommerceIcon } from "./assets/svgs/ecommerce.svg";
import { ReactComponent as SocialMediaIcon } from "./assets/svgs/socialmedia.svg";
import { ReactComponent as LandingPageIcon } from "./assets/svgs/landingpage.svg";
import { ReactComponent as CustomWebsiteIcon } from "./assets/svgs/customwebsite.svg";
import { ReactComponent as IosIcon } from "./assets/svgs/iosdevelopment.svg";
import { ReactComponent as AndroidIcon } from "./assets/svgs/androiddevelopment.svg";
import { ReactComponent as FlutterIcon } from "./assets/svgs/flutterdevelopment.svg";
import { ReactComponent as HybridAppIcon } from "./assets/svgs/hybridappdevelopment.svg";

import { lazy } from "react";
import ProductList from "./componets/common/ProductList";
import AuthPage from "./componets/common/AuthPage";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
  logoImg1
};
//refresh
// company details
export const companyDetails = {
  phone: "+918807165290",
  tel: "+919003635437", // Ensure this value is defined and correct
  address: "S.F.NO758/2 759/2A, SITE No.86,87, Kovai Thiru Nagar, CBE, Civil Aerodrome Post, Kalapatti, Coimbatore, Tamil Nadu - 641014",
  facebook: "https://facebook.com/yourpage",
  linkedin: "https://linkedin.com/yourpage",
  threads: "https://threads.net/yourpage",
  instagram: "https://instagram.com/yourpage",
  x: "https://twitter.com/yourpage",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "Products",
    path:"/products",
    component: <ProductList />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
   {
    name: "Login / Signup", // ✅ Add new route name
    path: "/auth", // ✅ route path
    component: <AuthPage />, // ✅ your AuthPage component
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Web Development",
    icon: EcommerceIcon,
    description:
      "Unique, tailored websites designed to represent your brand and meet your specific business goals with pixel-perfect implementation.",
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    icon: SocialMediaIcon,
    description:
      "Fully integrated online stores with secure payment gateways, inventory management, and seamless shopping experiences that drive conversions.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    icon: LandingPageIcon,
    description:
      "Easy-to-use CMS platforms that empower you to manage and update your website content without technical expertise.",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    icon: CustomWebsiteIcon,
    description:
      "Mobile-optimized websites that deliver exceptional user experiences across all devices and screen sizes.",
  },
  {
    id: 5,
    title: "SEO Optimization",
    icon: CustomWebsiteIcon,
    description:
      "Comprehensive search engine optimization strategies to improve your website's visibility and organic traffic growth.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "Native iOS Apps",
    icon: IosIcon,
    description:
      "High-performance apps built with Swift for optimal speed, security, and seamless integration with Apple ecosystem features.",
  },
  {
    id: 2,
    title: "Native Android Apps",
    icon: AndroidIcon,
    description:
      "Robust applications developed in Kotlin that leverage Android's full capabilities for superior performance.",
  },
  {
    id: 3,
    title: "Cross-Platform Solutions",
    icon: FlutterIcon,
    description:
      "Cost-effective apps that work seamlessly across both iOS and Android using React Native or Flutter frameworks.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: HybridAppIcon,
    description:
      "Intuitive interfaces and smooth interactions designed to maximize user engagement and satisfaction.",
  },
  {
    id: 5,
    title: "App Integration",
    icon: HybridAppIcon,
    description:
      "Seamless connection with third-party APIs, payment systems, and enterprise software for enhanced functionality.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    link: "web-development",
    title: "Web Development",
    desc: "Crafting modern, responsive, and scalable websites that deliver outstanding user experiences.",
    detailContent: `In a world where online presence is key, having a well-crafted website can make all the difference. At Dots&Decimals Infotech, we build websites that are not only visually stunning but also highly functional, responsive, and optimized for performance. From e-commerce stores to complex web applications, we design and develop websites that deliver real results for your business.

Our Web Development Services Include:
• Tailored Website Design
• E-commerce Solutions
• Content Management Systems (CMS)
• Custom Web Applications
• SEO Optimization`,
  },
  {
    id: 2,
    link: "app-development",
    title: "App Development",
    desc: "Creating high-performance mobile applications for iOS and Android that engage users and drive business growth.",
    detailContent: `In the mobile-first world we live in, a high-performing app is essential for business success. Our app development team excels in creating both iOS and Android apps that are intuitive, engaging, and seamlessly integrated with your business goals. We build mobile solutions that enhance user experiences and drive real results, whether for startups or established enterprises.

Our App Development Services Include:
• iOS & Android App Development
• Cross-Platform App Solutions
• User-Centric UI/UX Design
• App Testing & Support
• App Integration`,
  },
  {
    id: 3,
    link: "game-development",
    title: "Game Development",
    desc: "Creating immersive gaming experiences across all platforms from concept to launch.",
    detailContent: `The gaming industry is booming, and we're here to turn your vision into reality. Our game development services cover everything from concept to post-launch support, ensuring that your game provides an engaging experience for players. Whether you're focused on mobile, console, or PC platforms, we create immersive experiences that stand out in the competitive gaming world.

Our Game Development Services Include:
• 2D/3D Game Design & Development
• Game Concept & Storyboarding
• Augmented & Virtual Reality Games
• Cross-Platform Game Development
• Game Monetization Strategies`,
  },
  {
    id: 4,
    link: "ai-development",
    title: "AI Development",
    desc: "Leveraging artificial intelligence to transform businesses through automation and predictive insights.",
    detailContent: `Artificial Intelligence is revolutionizing the way businesses operate, and we're here to help you harness its full potential. Our AI solutions focus on improving operational efficiency, decision-making, and customer engagement through machine learning, predictive analytics, and natural language processing. Let us help you create smarter systems that drive growth and enhance customer experiences.

Our AI Development Services Include:
• Machine Learning Solutions
• Natural Language Processing (NLP)
• AI Automation
• Predictive Analytics
• AI Chatbots`,
  },
  {
    id: 5,
    link: "cloud-computing",
    title: "Cloud Computing Services",
    desc: "Comprehensive cloud solutions to improve flexibility, scalability and data security.",
    detailContent: `Embrace the future of computing with our comprehensive cloud services. We specialize in cloud migration, infrastructure management, and building scalable cloud-based applications. Our solutions are designed to help you reduce costs, improve flexibility, and scale your business, all while ensuring the highest levels of data security and availability.

Our Cloud Computing Services Include:
• Cloud Migration
• Cloud Infrastructure Management
• Custom Cloud Application Development
• Disaster Recovery Solutions
• DevOps as a Service`,
  },
  {
    id: 6,
    link: "ar-vr-technology",
    title: "AR/VR Technology Services",
    desc: "Creating immersive, interactive experiences with cutting-edge augmented and virtual reality.",
    detailContent: `Augmented Reality (AR) and Virtual Reality (VR) are transforming industries, and we are at the forefront of this revolution. Our AR/VR solutions are designed to create immersive, interactive experiences for your customers. Whether for retail, education, entertainment, or training, we bring your vision to life with cutting-edge technology that engages and inspires.

Our AR/VR Technology Services Include:
• Custom AR/VR Solutions
• Immersive Product Demos
• Virtual Training Solutions
• Virtual Showrooms & Exhibitions
• Interactive Marketing Campaigns`,
  },
  {
    id: 7,
    link: "blockchain-development",
    title: "Blockchain Development",
    desc: "Secure, transparent decentralized solutions for the modern digital landscape.",
    detailContent: `Blockchain technology is reshaping industries by offering secure, transparent, and decentralized solutions. Our team is skilled in creating blockchain-based systems, including smart contracts and decentralized applications (DApps), that help businesses stay ahead in a rapidly evolving digital landscape. Whether you're working with cryptocurrencies or seeking greater data security, we have you covered.

Our Blockchain Development Services Include:
• Blockchain Solutions
• Smart Contract Development
• Cryptocurrency Platforms
• Decentralized Applications (DApps)
• Blockchain Consulting`,
  },
  {
    id: 8,
    link: "ai-calling-solutions",
    title: "AI Calling Solutions",
    desc: "Intelligent voice solutions to automate customer interactions and improve efficiency.",
    detailContent: `Automate customer interactions with our AI-powered calling services. From handling routine inquiries to personalized appointment scheduling, our AI calling systems are designed to streamline customer service and improve operational efficiency. Let us help you enhance customer experience while reducing your team's workload with intelligent voice solutions.

Our AI Calling Solutions Include:
• Automated Call Handling
• Voice Recognition Systems
• Personalized AI Customer Support
• Call Center Automation
• 24/7 Customer Service Solutions`,
  },
  {
    id: 9,
    link: "iot-solutions",
    title: "IoT (Internet of Things) Solutions",
    desc: "Smart connected systems that collect and analyze real-time data for better decision-making.",
    detailContent: `IoT is transforming how devices connect and interact with the world. Our IoT solutions help businesses create smart systems that collect and analyze real-time data for better decision-making and enhanced operations. Whether it's smart homes, industrial automation, or healthcare devices, we deliver IoT solutions that drive efficiency and innovation.

Our IoT Solutions Include:
• Smart Home Technologies
• Industrial IoT Solutions
• Wearables & Health Devices
• Connected Devices & Sensors
• IoT Security Solutions`,
  },
  {
    id: 10,
    link: "erp-solutions",
    title: "Enterprise Resource Planning (ERP)",
    desc: "Integrated systems to streamline business operations and improve efficiency.",
    detailContent: `Streamline your business operations with our custom ERP solutions. We integrate all aspects of your organization, from finance and inventory to human resources and customer relationships, into a single, unified system. Our ERP solutions help businesses improve efficiency, reduce costs, and make data-driven decisions with ease.

Our ERP Services Include:
• Custom ERP Solutions
• ERP System Integration
• Cloud-based ERP
• Enterprise Mobility Solutions
• Data Analytics for ERP`,
  },
  {
    id: 11,
    link: "rpa-solutions",
    title: "Robotic Process Automation (RPA)",
    desc: "Intelligent automation solutions to optimize workflows and reduce errors.",
    detailContent: `Let us help you automate routine tasks and improve your workflow with RPA solutions. From finance to customer service, our RPA services streamline processes, reduce human error, and free up valuable time for your team. We work with you to identify areas for automation and implement intelligent solutions that optimize your operations.

Our RPA Services Include:
• RPA Implementation
• Intelligent Process Automation
• End-to-End Automation Solutions
• RPA Consulting & Strategy
• Process Monitoring & Optimization`,
  },
  {
    id: 12,
    link: "data-science",
    title: "Data Science Services",
    desc: "Transforming complex data into actionable insights that drive strategic decisions.",
    detailContent: `Data is an invaluable resource, and we help businesses unlock its full potential. With our data science services, we transform complex data sets into actionable insights that guide strategic decisions and drive growth. From data analysis to predictive modeling, we provide the tools and expertise to help your business thrive in a data-driven world.

Our Data Science Services Include:
• Data Analytics & Reporting
• Predictive Modeling
• Data Visualization
• Machine Learning & AI
• Data Engineering`,
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Tailored Solutions for Your Business",
    desc: "Every business is unique, and so are its challenges. We take a personalized approach, crafting bespoke digital solutions that align perfectly with your goals and vision.",
  },
  {
    title: "Leveraging Advanced Technology",
    desc: "We harness the power of cutting-edge tools and emerging technologies to develop solutions that keep your business ahead in the fast-evolving digital landscape.",
  },
  {
    title: "Uncompromising Security & Trust",
    desc: "Your data security is our top priority. Our solutions are designed with robust security measures to protect your business from cyber threats and ensure reliability.",
  },
  {
    title: "Building Lasting Partnerships",
    desc: "We go beyond delivering solutions—we become your long-term digital partner. From planning to execution and continuous support, we're committed to your success.",
  },
  {
    title: "Agility & Future-Ready Innovation",
    desc: "We stay ahead of industry trends, ensuring our solutions are not just effective today but also adaptable for the future, keeping you ahead of the competition.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    title: "5G Homes",
    image: require("./assets/images/portfolio/web development/5ghomes.webp"),
  },
  {
    id: 2,
    title: "Autopilot",
    image: require("./assets/images/portfolio/web development/Autopilot.webp"),
  },
  {
    id: 3,
    title: "Bayut",
    image: require("./assets/images/portfolio/web development/bayut.webp"),
  },
  {
    id: 4,
    title: "Cold Creekcap",
    image: require("./assets/images/portfolio/web development/cold creekcap.webp"),
  },
  {
    id: 5,
    title: "College Nutritionist",
    image: require("./assets/images/portfolio/web development/college nutritionnist.webp"),
  },
  {
    id: 6,
    title: "Leadership.net",
    image: require("./assets/images/portfolio/web development/leadership.net.webp"),
  },
  {
    id: 7,
    title: "Menissa Caterings",
    image: require("./assets/images/portfolio/web development/menissa caterings.webp"),
  },
  {
    id: 8,
    title: "Think Reality",
    image: require("./assets/images/portfolio/web development/think reality.webp"),
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    title: "Cryptopadie",
    image: require("./assets/images/portfolio/app development/cryptopadie.webp"),
  },
  {
    id: 2,
    title: "Doctor Plus",
    image: require("./assets/images/portfolio/app development/doctorplus.webp"),
  },
  {
    id: 3,
    title: "Dubai Travel Guide",
    image: require("./assets/images/portfolio/app development/dubai travel guide.webp"),
  },
  {
    id: 4,
    title: "Elora Hair Palour",
    image: require("./assets/images/portfolio/app development/elora hair palour.webp"),
  },
  {
    id: 5,
    title: "Evans Francis",
    image: require("./assets/images/portfolio/app development/evans francis.webp"),
  },
  {
    id: 6,
    title: "House of Deliverance",
    image: require("./assets/images/portfolio/app development/house of deliverance.webp"),
  },
  {
    id: 7,
    title: "MyBitsShop",
    image: require("./assets/images/portfolio/app development/mybitsshop.webp"),
  },
  {
    id: 8,
    title: "Namaz",
    image: require("./assets/images/portfolio/app development/namaz.webp"),
  },
  {
    id: 9,
    title: "Potea",
    image: require("./assets/images/portfolio/app development/potea.webp"),
  },
  {
    id: 10,
    title: "Rentop",
    image: require("./assets/images/portfolio/app development/rentop.webp"),
  },
];
