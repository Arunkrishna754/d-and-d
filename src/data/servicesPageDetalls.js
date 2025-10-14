// banner images
import gameDevBanner from "../assets/images/bannerimage/game-landing-banner.jpg";
import gameAboutImg from "../assets/images/bannerimage/game-development-about.png";
import aiBannerImg from "../assets/images/bannerimage/ai-landing-banner.jpg";
import aiAboutImg from "../assets/images/bannerimage/ai-development-about.png";
import cloudBannerImg from "../assets/images/bannerimage/cloud-landing-banner.jpg";
import cloudAboutImg from "../assets/images/bannerimage/cloud-development-about.png";
import arVrBannerImg from "../assets/images/bannerimage/vrar-landing-banner.jpg";
import arVrAboutImg from "../assets/images/bannerimage/vrar-development-about.png";
import blockchainBannerImg from "../assets/images/bannerimage/blockchain-landing-banner.jpg";
import blockchainAboutImg from "../assets/images/bannerimage/block-development-about.png";
import aiCallingBannerImg from "../assets/images/bannerimage/aicalling-landing-banner.jpg";
import aiCallingAboutImg from "../assets/images/bannerimage/aicalling-development-about.png";
import iotBannerImg from "../assets/images/bannerimage/iot-landing-banner.jpg";
import iotAboutImg from "../assets/images/bannerimage/iot-development-about.png";
import erpBannerImg from "../assets/images/bannerimage/erp-landing-banner.jpg";
import erpAboutImg from "../assets/images/bannerimage/erp-development-about.png";
import rpaBannerImg from "../assets/images/bannerimage/rpa-landing-banner.jpg";
import rpaAboutImg from "../assets/images/bannerimage/rpa-development-about.png";
import dataScienceBannerImg from "../assets/images/bannerimage/data-landing-banner.jpg";
import dataScienceAboutImg from "../assets/images/bannerimage/data-development-about.png";
//services list service icons
import { ReactComponent as EcommerceIcon } from "../assets/svgs/ecommerce.svg";
import { ReactComponent as SocialMediaIcon } from "../assets/svgs/socialmedia.svg";
import { ReactComponent as LandingPageIcon } from "../assets/svgs/landingpage.svg";
import { ReactComponent as CustomWebsiteIcon } from "../assets/svgs/customwebsite.svg";
import { ReactComponent as IosIcon } from "../assets/svgs/iosdevelopment.svg";
import { ReactComponent as AndroidIcon } from "../assets/svgs/androiddevelopment.svg";
import { ReactComponent as FlutterIcon } from "../assets/svgs/flutterdevelopment.svg";
import { ReactComponent as HybridAppIcon } from "../assets/svgs/hybridappdevelopment.svg";
import { ReactComponent as GameIcon } from "../assets/svgs/landingpageservices/2D3D Game Development.svg";
import { ReactComponent as MultiplayerIcon } from "../assets/svgs/landingpageservices/Multiplayer Game Solutions.svg";
import { ReactComponent as MobileGameIcon } from "../assets/svgs/landingpageservices/Mobile Game Development.svg";
import { ReactComponent as MlIcon } from "../assets/svgs/landingpageservices/Machine Learning Models.svg";
import { ReactComponent as NlpIcon } from "../assets/svgs/landingpageservices/Natural Language Processing.svg";
import { ReactComponent as AiRobotIcon } from "../assets/svgs/landingpageservices/AI-Powered Automation.svg";
import { ReactComponent as CloudInfraIcon } from "../assets/svgs/landingpageservices/Cloud Infrastructure.svg";
import { ReactComponent as CloudMigrationIcon } from "../assets/svgs/landingpageservices/Cloud Migration.svg";
import { ReactComponent as DevopsIcon } from "../assets/svgs/landingpageservices/DevOps & CICD.svg";
import { ReactComponent as ArIcon } from "../assets/svgs/landingpageservices/Augmented Reality Apps.svg";
import { ReactComponent as VrIcon } from "../assets/svgs/landingpageservices/Virtual Reality Simulations.svg";
import { ReactComponent as MrIcon } from "../assets/svgs/landingpageservices/Mixed Reality Solutions.svg";
import { ReactComponent as SmartContractIcon } from "../assets/svgs/landingpageservices/Smart Contract Development.svg";
import { ReactComponent as DappIcon } from "../assets/svgs/landingpageservices/Decentralized Apps.svg";
import { ReactComponent as NftIcon } from "../assets/svgs/landingpageservices/NFTToken Development.svg";
import { ReactComponent as VoiceBotIcon } from "../assets/svgs/landingpageservices/Voice Bot Integration.svg";
import { ReactComponent as ConversationIcon } from "../assets/svgs/landingpageservices/Conversational AI Workflows.svg";
import { ReactComponent as CallAnalyticsIcon } from "../assets/svgs/landingpageservices/Call Analytics.svg";
import { ReactComponent as IotDeviceIcon } from "../assets/svgs/landingpageservices/Smart Device Integration.svg";
import { ReactComponent as IotAnalyticsIcon } from "../assets/svgs/landingpageservices/Real-Time Data Analytics.svg";
import { ReactComponent as IotAppIcon } from "../assets/svgs/landingpageservices/IoT App Development.svg";
import { ReactComponent as ERPSystemIcon } from "../assets/svgs/landingpageservices/Custom ERP Development.svg";
import { ReactComponent as InventoryIcon } from "../assets/svgs/landingpageservices/Inventory & Supply Chain Management.svg";
import { ReactComponent as FinanceIcon } from "../assets/svgs/landingpageservices/Finance & Accounting Modules.svg";
import { ReactComponent as HRIcon } from "../assets/svgs/landingpageservices/HR & Payroll Management.svg";
import { ReactComponent as IntegrationIcon } from "../assets/svgs/landingpageservices/ERP Integration & Migration.svg";
import { ReactComponent as AutomationIcon } from "../assets/svgs/landingpageservices/Process Automation Consulting.svg";
import { ReactComponent as BotIcon } from "../assets/svgs/landingpageservices/Bot Development & Deployment.svg";
import { ReactComponent as WorkflowIcon } from "../assets/svgs/landingpageservices/Workflow Automation.svg";
import { ReactComponent as AIIcon } from "../assets/svgs/landingpageservices/RPA with AI Integration.svg";
import { ReactComponent as MonitoringIcon } from "../assets/svgs/landingpageservices/RPA Support & Monitoring.svg";
import { ReactComponent as DataPipelineIcon } from "../assets/svgs/landingpageservices/Data Engineering.svg";
import { ReactComponent as WarehouseIcon } from "../assets/svgs/landingpageservices/Data Warehousing.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/svgs/landingpageservices/Data Analytics & BI.svg";
import { ReactComponent as ShieldIcon } from "../assets/svgs/landingpageservices/Data Governance & Quality.svg";

import {
  appDevBanner,
  appLandingAbout,
  webDevBanner,
  webLandingAbout,
} from "../constant";

export const landingPageContent = [
  {
    id: "web-development",
    bannerImg: webDevBanner,
    aboutImg: webLandingAbout,
    title: "Web Development",
    bannerHeading: "Transforming Ideas into Seamless Web Experiences",
    bannerDesc:
      "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence.",
    aboutHeading: "Transforming Your Vision into Cutting-Edge Web Solutions",
    aboutDesc:
      "At Dots&Decimals Infotech, we craft high-performance websites and digital experiences designed to elevate your online presence. From custom development to responsive design, our solutions are built for usability, aesthetics, and business success.",
    expertiseHeading: "Web Development That Transforms",
    expertiseDesc: `At Dots&Decimals Infotech, we craft digital experiences that do more than just look good - they drive results. 
  In today's competitive online landscape, your website needs to be fast, intuitive, and conversion-optimized. 
  We build responsive, secure websites that not only establish your brand's credibility but also work tirelessly 
  to generate leads and grow your business. From lightning-fast load times to seamless user journeys, we engineer 
  every element for maximum impact.`,
  },
  {
    id: "app-development",
    bannerImg: appDevBanner,
    aboutImg: appLandingAbout,
    title: "App Development",
    bannerHeading: "Creating Seamless App Experiences for a Digital World",
    bannerDesc:
      "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience.",
    aboutHeading: "Crafting Intuitive Apps for the Modern Digital Era",
    aboutDesc:
      "At Dots&Decimals Infotech, we develop innovative, high-performance mobile applications tailored to your business needs. With a blend of technical expertise and creative design, we build apps that enhance user engagement and drive business growth.",
    expertiseHeading: "App Development That Delivers",
    expertiseDesc: `At Dots&Decimals Infotech, we create mobile experiences that users love and businesses rely on. 
  In an era where mobile dominates digital interactions, your app needs to be performant, engaging, and reliable. 
  We develop native and cross-platform applications that deliver smooth performance, intuitive interfaces, 
  and features that keep users coming back. From initial concept to post-launch optimization, we build apps 
  that solve real business challenges and drive measurable results.`,
  },
  {
    id: "game-development",
    bannerImg: gameDevBanner,
    aboutImg: gameAboutImg,
    title: "Game Development",
    bannerHeading: "Building Immersive Game Worlds That Captivate",
    bannerDesc:
      "From mobile to console, we design and develop stunning, high-performance games with engaging gameplay and lifelike visuals.",
    aboutHeading: "Engaging, Interactive, and Visually Stunning Games",
    aboutDesc:
      "Dots&Decimals Infotech crafts immersive gaming experiences that blend creative storytelling with advanced technology. We specialize in mobile, PC, and console game development, bringing your ideas to life with engaging gameplay mechanics and beautiful graphics.",
    expertiseHeading: "Game Development That Inspires",
    expertiseDesc: `Gaming is more than just play—it's an experience. We combine cutting-edge tech, game engines, and rich narrative design 
    to create unforgettable adventures. Whether it’s AR/VR games, 2D platformers, or high-end 3D titles, 
    our team ensures performance, scalability, and user satisfaction.`,
  },
  {
    id: "ai-development",
    bannerImg: aiBannerImg,
    aboutImg: aiAboutImg,
    title: "AI Development",
    bannerHeading: "Harnessing the Power of AI for Smarter Solutions",
    bannerDesc:
      "Build intelligent systems that learn, adapt, and solve real-world problems through advanced machine learning and AI technologies.",
    aboutHeading: "Smarter Technologies, Smarter Decisions",
    aboutDesc:
      "Our AI solutions are designed to revolutionize business workflows, customer service, and data analysis. From predictive analytics to natural language processing, we engineer smart applications that evolve with your business.",
    expertiseHeading: "AI Development That Thinks Ahead",
    expertiseDesc: `We don’t just build AI—we build intelligence into your systems. With machine learning models, NLP engines, 
    and recommendation systems, we help you unlock actionable insights, automate operations, and innovate faster.`,
  },
  {
    id: "cloud-computing",
    bannerImg: cloudBannerImg,
    aboutImg: cloudAboutImg,
    title: "Cloud Computing",
    bannerHeading: "Future-Proof Your Business with Scalable Cloud Solutions",
    bannerDesc:
      "Secure, scalable cloud infrastructure and services that improve agility, reduce costs, and support growth.",
    aboutHeading: "Cloud Solutions That Evolve With You",
    aboutDesc:
      "We help businesses migrate, manage, and optimize their digital infrastructure on the cloud. Our services cover AWS, Azure, Google Cloud, and hybrid solutions tailored to your operational needs.",
    expertiseHeading: "Cloud Services That Scale",
    expertiseDesc: `Unlock the flexibility and efficiency of the cloud. We provide end-to-end cloud strategy, deployment, 
    and maintenance that ensures performance, security, and cost-effectiveness across your digital ecosystem.`,
  },
  {
    id: "ar-vr-technology",
    bannerImg: arVrBannerImg,
    aboutImg: arVrAboutImg,
    title: "AR/VR Technology",
    bannerHeading: "Bridging Real and Virtual Worlds",
    bannerDesc:
      "Next-gen augmented and virtual reality experiences that redefine user engagement across industries.",
    aboutHeading: "Immersive AR/VR Experiences That Leave a Mark",
    aboutDesc:
      "We specialize in developing AR/VR solutions for retail, education, training, and entertainment. From headset-based VR to mobile AR apps, we deliver experiences that are interactive, immersive, and unforgettable.",
    expertiseHeading: "AR/VR That Engages",
    expertiseDesc: `Step into the future with immersive technologies. Our AR/VR developers blend creativity and innovation 
    to craft solutions that engage, educate, and inspire like never before.`,
  },
  {
    id: "blockchain-development",
    bannerImg: blockchainBannerImg,
    aboutImg: blockchainAboutImg,
    title: "Blockchain Development",
    bannerHeading: "Decentralized Solutions for the Modern World",
    bannerDesc:
      "Build transparent, secure, and decentralized applications using blockchain technology for a range of industries.",
    aboutHeading: "Smart, Transparent, and Tamper-Proof Systems",
    aboutDesc:
      "From smart contracts to DeFi platforms, we develop blockchain solutions that offer trust, traceability, and decentralization. Our expertise spans Ethereum, Binance Smart Chain, Hyperledger, and more.",
    expertiseHeading: "Blockchain That Builds Trust",
    expertiseDesc: `Whether you're launching a crypto wallet, NFT marketplace, or enterprise DApp, our blockchain developers 
    ensure performance, security, and compliance for your ecosystem.`,
  },
  {
    id: "ai-calling-solutions",
    bannerImg: aiCallingBannerImg,
    aboutImg: aiCallingAboutImg,
    title: "AI Calling Solutions",
    bannerHeading: "Revolutionize Communication with AI-Powered Calling",
    bannerDesc:
      "Automated voice solutions that intelligently engage customers, schedule appointments, and handle inquiries with human-like clarity.",
    aboutHeading: "Smarter Conversations at Scale",
    aboutDesc:
      "Our AI calling platforms empower businesses to handle thousands of calls with intelligent responses and dynamic conversation flows. Ideal for customer support, telemarketing, and reminders.",
    expertiseHeading: "AI Calling That Connects",
    expertiseDesc: `Built on powerful NLP and speech synthesis technologies, our AI calling solutions deliver personalized, scalable, 
    and cost-effective communication for your business.`,
  },
  {
    id: "iot-solutions",
    bannerImg: iotBannerImg,
    aboutImg: iotAboutImg,
    title: "IoT Solutions",
    bannerHeading: "Connect, Monitor, and Automate with Smart IoT",
    bannerDesc:
      "IoT solutions that enable real-time monitoring, automation, and data exchange across devices and systems.",
    aboutHeading: "Smarter Devices, Smarter Business",
    aboutDesc:
      "We build IoT ecosystems that improve efficiency and decision-making by connecting hardware, sensors, and cloud platforms. From smart homes to industrial IoT, our solutions are scalable and secure.",
    expertiseHeading: "IoT That Works for You",
    expertiseDesc: `From edge computing to real-time dashboards, our IoT development services ensure seamless connectivity, 
    robust data processing, and actionable intelligence to drive smart operations.`,
  },
  {
    id: "erp-solutions",
    bannerImg: erpBannerImg,
    aboutImg: erpAboutImg,
    title: "ERP Solutions",
    bannerHeading: "Streamline Business Operations with Integrated ERP Systems",
    bannerDesc:
      "Comprehensive ERP solutions to unify your business processes, enhance productivity, and improve decision-making across departments.",
    aboutHeading: "Smart Business Management Starts with ERP",
    aboutDesc:
      "We implement customized ERP systems that centralize data, automate workflows, and simplify operations. Whether it’s finance, HR, supply chain, or sales, our ERP solutions provide real-time insights and scalability.",
    expertiseHeading: "ERP That Works for You",
    expertiseDesc: `From SAP to custom-built ERP platforms, we tailor systems that align with your unique needs. 
    Boost operational efficiency, reduce manual effort, and make smarter decisions with a fully integrated ERP solution.`,
  },
  {
    id: "rpa-solutions",
    bannerImg: rpaBannerImg,
    aboutImg: rpaAboutImg,
    title: "Robotic Process Automation",
    bannerHeading: "Automate Repetitive Tasks and Unlock Efficiency with RPA",
    bannerDesc:
      "RPA solutions designed to automate manual, rule-based processes—saving time, reducing costs, and increasing accuracy.",
    aboutHeading: "Smarter Automation with Intelligent Bots",
    aboutDesc:
      "Our RPA solutions streamline high-volume workflows such as data entry, invoice processing, and system updates. We develop bots that mimic human actions to speed up operations and free your team for more strategic work.",
    expertiseHeading: "Efficiency Through Automation",
    expertiseDesc: `We use leading platforms like UiPath, Automation Anywhere, and Power Automate to build scalable, secure bots. 
    Achieve faster turnaround, minimize errors, and improve consistency with our end-to-end RPA development services.`,
  },
  {
    id: "data-science",
    bannerImg: dataScienceBannerImg,
    aboutImg: dataScienceAboutImg,
    title: "Data Science Services",
    bannerHeading: "Uncover Insights and Drive Innovation with Data Science",
    bannerDesc:
      "Advanced data science solutions that turn raw data into actionable insights using machine learning, predictive analytics, and AI-driven models.",
    aboutHeading: "Data-Driven Decisions Start Here",
    aboutDesc:
      "We provide end-to-end data science services including data cleaning, modeling, visualization, and AI model deployment. Our solutions help you forecast trends, optimize operations, and personalize customer experiences.",
    expertiseHeading: "From Data to Decisions",
    expertiseDesc: `Whether you need customer segmentation, churn prediction, or demand forecasting, our data science team builds intelligent solutions 
    that empower your business with real-time analytics and strategic foresight.`,
  },
];

export const developmentServiceDetails = [
  {
    type: "web-development",
    title: "Web Solutions",
    tagline: "Transform Your Digital Presence With Cutting-Edge Web Solutions",
    description:
      "We craft high-performance websites that combine stunning design with robust functionality to elevate your brand and drive conversions.",
    services: [
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
    ],
  },
  {
    type: "app-development",
    title: "Mobile Solutions",
    tagline: "Powerful Mobile Experiences That Drive Engagement And Growth",
    description:
      "We develop intuitive, high-performance mobile applications that deliver seamless user experiences across all platforms and devices.",
    services: [
      {
        id: 6,
        title: "Native iOS Apps",
        icon: IosIcon,
        description:
          "High-performance apps built with Swift for optimal speed, security, and seamless integration with Apple ecosystem features.",
      },
      {
        id: 7,
        title: "Native Android Apps",
        icon: AndroidIcon,
        description:
          "Robust applications developed in Kotlin that leverage Android's full capabilities for superior performance.",
      },
      {
        id: 8,
        title: "Cross-Platform Solutions",
        icon: FlutterIcon,
        description:
          "Cost-effective apps that work seamlessly across both iOS and Android using React Native or Flutter frameworks.",
      },
      {
        id: 9,
        title: "UI/UX Design",
        icon: HybridAppIcon,
        description:
          "Intuitive interfaces and smooth interactions designed to maximize user engagement and satisfaction.",
      },
      {
        id: 10,
        title: "App Integration",
        icon: HybridAppIcon,
        description:
          "Seamless connection with third-party APIs, payment systems, and enterprise software for enhanced functionality.",
      },
    ],
  },
  {
    type: "game-development",
    title: "Game Development",
    tagline: "Immersive and Interactive Gaming Solutions",
    description:
      "We design and develop captivating gaming experiences across platforms with stunning visuals, intuitive gameplay, and immersive storytelling.",
    services: [
      {
        id: 11,
        title: "2D/3D Game Development",
        icon: GameIcon,
        description:
          "Visually engaging games built in Unity and Unreal Engine with immersive graphics and dynamic mechanics.",
      },
      {
        id: 12,
        title: "Multiplayer Game Solutions",
        icon: MultiplayerIcon,
        description:
          "Online multiplayer capabilities with real-time interactions, leaderboards, and chat integration.",
      },
      {
        id: 13,
        title: "Mobile Game Development",
        icon: MobileGameIcon,
        description:
          "High-performance mobile games for iOS and Android with optimized performance and user-centric design.",
      },
    ],
  },
  {
    type: "ai-development",
    title: "AI Development",
    tagline: "Smarter Solutions With Artificial Intelligence",
    description:
      "Build intelligent systems that learn, adapt, and evolve with AI and ML solutions tailored to enhance decision-making and automation.",
    services: [
      {
        id: 14,
        title: "Machine Learning Models",
        icon: MlIcon,
        description:
          "Custom ML models for prediction, classification, and analysis using structured and unstructured data.",
      },
      {
        id: 15,
        title: "Natural Language Processing",
        icon: NlpIcon,
        description:
          "Language-aware applications for sentiment analysis, chatbots, translation, and more.",
      },
      {
        id: 16,
        title: "AI-Powered Automation",
        icon: AiRobotIcon,
        description:
          "Automate workflows, customer support, and business operations with intelligent AI agents.",
      },
    ],
  },
  {
    type: "cloud-computing",
    title: "Cloud Computing",
    tagline: "Scalable, Secure, and Cost-Effective Cloud Solutions",
    description:
      "Leverage cloud technologies to deploy and manage your applications with agility, security, and scalability.",
    services: [
      {
        id: 17,
        title: "Cloud Infrastructure",
        icon: CloudInfraIcon,
        description:
          "Reliable cloud setup on AWS, Azure, or GCP for hosting, storage, and computing needs.",
      },
      {
        id: 18,
        title: "Cloud Migration",
        icon: CloudMigrationIcon,
        description:
          "Seamless migration of on-premise systems to the cloud with zero data loss.",
      },
      {
        id: 19,
        title: "DevOps & CI/CD",
        icon: DevopsIcon,
        description:
          "Continuous integration and deployment pipelines to streamline development workflows and ensure fast delivery.",
      },
    ],
  },
  {
    type: "ar-vr-technology",
    title: "AR/VR Solutions",
    tagline: "Create Immersive Realities with AR & VR",
    description:
      "Design engaging and interactive Augmented and Virtual Reality experiences for entertainment, training, and enterprise.",
    services: [
      {
        id: 20,
        title: "Augmented Reality Apps",
        icon: ArIcon,
        description:
          "AR apps that overlay interactive digital content onto the real world using advanced computer vision.",
      },
      {
        id: 21,
        title: "Virtual Reality Simulations",
        icon: VrIcon,
        description:
          "Fully immersive VR environments for training, education, real estate, and gaming.",
      },
      {
        id: 22,
        title: "Mixed Reality Solutions",
        icon: MrIcon,
        description:
          "Blending physical and digital worlds to build next-gen user experiences and enterprise tools.",
      },
    ],
  },
  {
    type: "blockchain-development",
    title: "Blockchain Development",
    tagline: "Secure and Transparent Blockchain Solutions",
    description:
      "We build decentralized applications and smart contracts that ensure trust, transparency, and data integrity.",
    services: [
      {
        id: 23,
        title: "Smart Contract Development",
        icon: SmartContractIcon,
        description:
          "Self-executing contracts with logic built on Ethereum, Solana, or custom chains.",
      },
      {
        id: 24,
        title: "Decentralized Apps (DApps)",
        icon: DappIcon,
        description:
          "User-friendly DApps with secure wallet integration and Web3 functionalities.",
      },
      {
        id: 25,
        title: "NFT & Token Development",
        icon: NftIcon,
        description:
          "Custom tokens, NFT marketplaces, and minting platforms built for scale and performance.",
      },
    ],
  },
  {
    type: "ai-calling-solutions",
    title: "AI Calling Solutions",
    tagline: "Automate Customer Conversations with AI",
    description:
      "Voice-driven AI solutions for outbound and inbound calls that reduce human load and improve engagement.",
    services: [
      {
        id: 26,
        title: "Voice Bot Integration",
        icon: VoiceBotIcon,
        description:
          "Deploy smart voice bots for customer support, reminders, and sales outreach.",
      },
      {
        id: 27,
        title: "Conversational AI Workflows",
        icon: ConversationIcon,
        description:
          "Custom call flows and NLP-based systems that mimic natural conversation and handle FAQs.",
      },
      {
        id: 28,
        title: "Call Analytics",
        icon: CallAnalyticsIcon,
        description:
          "Track and analyze call performance with sentiment detection and conversion tracking.",
      },
    ],
  },
  {
    type: "iot-solutions",
    title: "IoT Solutions",
    tagline: "Connect Devices. Empower Insights.",
    description:
      "Build intelligent IoT ecosystems that monitor, analyze, and optimize operations in real-time.",
    services: [
      {
        id: 29,
        title: "Smart Device Integration",
        icon: IotDeviceIcon,
        description:
          "Connect sensors and devices to a centralized platform for monitoring and control.",
      },
      {
        id: 30,
        title: "Real-Time Data Analytics",
        icon: IotAnalyticsIcon,
        description:
          "Collect and analyze sensor data in real-time for predictive insights and automation.",
      },
      {
        id: 31,
        title: "IoT App Development",
        icon: IotAppIcon,
        description:
          "User-friendly web and mobile apps to visualize and interact with connected devices.",
      },
    ],
  },
  {
    type: "erp-solutions",
    title: "ERP Solutions",
    tagline: "Streamline Operations with Smart ERP Systems",
    description:
      "We build integrated ERP systems that unify your business processes, improve decision-making, and boost overall productivity across departments.",
    services: [
      {
        id: 11,
        title: "Custom ERP Development",
        icon: ERPSystemIcon,
        description:
          "Tailored ERP solutions designed to automate workflows and centralize data across your organization, built to meet your unique business needs.",
      },
      {
        id: 12,
        title: "Inventory & Supply Chain Management",
        icon: InventoryIcon,
        description:
          "End-to-end solutions to manage inventory, procurement, and supply chain operations efficiently and in real time.",
      },
      {
        id: 13,
        title: "Finance & Accounting Modules",
        icon: FinanceIcon,
        description:
          "Accurate, compliant, and integrated accounting tools to simplify financial management and reporting.",
      },
      {
        id: 14,
        title: "HR & Payroll Management",
        icon: HRIcon,
        description:
          "Automate HR operations, track employee performance, and streamline payroll processing through robust ERP modules.",
      },
      {
        id: 15,
        title: "ERP Integration & Migration",
        icon: IntegrationIcon,
        description:
          "Seamless integration with existing tools and hassle-free migration from legacy systems to modern ERP platforms.",
      },
    ],
  },
  {
    type: "rpa-solutions",
    title: "RPA Solutions",
    tagline: "Automate Repetitive Tasks and Optimize Efficiency",
    description:
      "We implement intelligent RPA solutions to automate rule-based tasks, reduce operational costs, and enhance accuracy across your business processes.",
    services: [
      {
        id: 16,
        title: "Process Automation Consulting",
        icon: AutomationIcon,
        description:
          "Analyze business processes to identify automation opportunities and design strategic RPA roadmaps for maximum impact.",
      },
      {
        id: 17,
        title: "Bot Development & Deployment",
        icon: BotIcon,
        description:
          "Build and deploy software bots that automate repetitive tasks, from data entry to report generation and more.",
      },
      {
        id: 18,
        title: "Workflow Automation",
        icon: WorkflowIcon,
        description:
          "Orchestrate complex workflows involving multiple systems and departments for end-to-end automation.",
      },
      {
        id: 19,
        title: "RPA with AI Integration",
        icon: AIIcon,
        description:
          "Enhance bots with AI and ML capabilities to handle unstructured data and make intelligent decisions.",
      },
      {
        id: 20,
        title: "RPA Support & Monitoring",
        icon: MonitoringIcon,
        description:
          "Ongoing support and performance monitoring to ensure your automation processes remain robust and up to date.",
      },
    ],
  },
  {
    type: "data-science",
    title: "Data Solutions",
    tagline: "Unlock the Power of Your Data for Strategic Growth",
    description:
      "We provide end-to-end data services to help you collect, manage, analyze, and visualize data, turning raw information into actionable insights.",
    services: [
      {
        id: 21,
        title: "Data Engineering",
        icon: DataPipelineIcon,
        description:
          "Design and build scalable data pipelines and architectures for efficient data flow and storage.",
      },
      {
        id: 22,
        title: "Data Warehousing",
        icon: WarehouseIcon,
        description:
          "Centralized and optimized storage solutions for large-scale data with high availability and security.",
      },
      {
        id: 23,
        title: "Data Analytics & BI",
        icon: AnalyticsIcon,
        description:
          "Transform complex datasets into intuitive dashboards and reports using advanced analytics and business intelligence tools.",
      },
      {
        id: 24,
        title: "Data Migration & Integration",
        icon: IntegrationIcon,
        description:
          "Seamless migration and integration services to unify data from various sources into a cohesive system.",
      },
      {
        id: 25,
        title: "Data Governance & Quality",
        icon: ShieldIcon,
        description:
          "Ensure data accuracy, security, and compliance with strong governance policies and quality control practices.",
      },
    ],
  },
];
