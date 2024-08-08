import { Icons } from "@/components/icons";
import { HomeIcon, Images, MemoryStick, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shubhadip Bhowmik",
  initials: "SB",
  url: "https://shubhadipbhowmik.vercel.app/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a hobbyist software developer and a tinkerer. I love building things and helping people.",
  summary:
    "I am a B.C.A student at Chandigarh University, with a passion for technology. I am an Android and Frontend Web Developer. I write blogs, design UI/Mockups, and Contributing to open-source projects.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "JS",
    "C",
    "C++",
    "JAVA",
    "SQL",
    "FIGMA"
  ],
  memories: "I Love to Capture Past",
  blog: "I reflect myself by my Words", 
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/memories", icon: Images, label: "Memory" },
  ],
  contact: {
    email: "shubhadipbhowmikdev@gmail.com",
    tel: "+917550814404",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/subhadipbhowmik",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubhadip-bhowmik/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/myselfshubhadip",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://www.youtube.com/@shubhadipbhowmik",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Codingport",
      href: "https://codingport.in",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/codingport.png",
      start: "June 2024",
      end: "Present",
      description:
        "Codingport provides programming articles related to Java, Data Structure, C/C++ and other popular programming languages with easy to follow tutorials and example programs. Programming tutorials with interview questions and preparation guide. NPTEL, LinkedIn Learning, Udemy Courses Assignment Answers.",
    },
    {
      company: "Next Drive India",
      href: "https://nextdriveindia.com/",
      badges: [],
      location: "Mohali, Chandigarh",
      title: "Software Engineer",
      logoUrl: "/nextdriveindia.png",
      start: "Nov 2023",
      end: "April 2024",
      description:
        "I am optimising the Web Pages of Next Drive India. Collaborate with the SEO team to optimize website content and ensure it is search engine-friendly. Conduct keyword research and assist in developing SEO strategies.",
    },
    {
      company: "GirlScript Summer of Code",
      href: "https://nextdriveindia.com/",
      badges: [],
      location: "Mohali, Chandigarh",
      title: "Project Admin",
      logoUrl: "/girlscript.png",
      start: "May 2024",
      end: "August 2024",
      description:
        "I lead 30-Days-Of-CPP as a project admin, overseeing collaboration and contributing code and documentation. Engage with global contributors, organize events, and offer technical support to drive open-source innovation.",
    },
    {
      company: "freeCodeCamp",
      href: "https://nextdriveindia.com/",
      badges: [],
      location: "Mohali, Chandigarh",
      title: "Contributing Author",
      logoUrl: "/freecodecamp.png",
      start: "May 2024",
      end: "August 2024",
      description:
        "I write technical blog on different technical stacks.",
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "B.C.A",
      logoUrl: "/chandigarh-university.png",
      start: "2022",
      end: "2025",
      description:
        "Currently I have taken admission here for my B.C.A. I am very excited for physically meet and interact with my new buddy and faculties.",
    },
    {
      school: "Changrachak Jagadish Smriti Vidyapith",
      href: "https://www.cjsvmoyna.org/",
      degree: "Higher Secondary",
      logoUrl: "/cjsv.png",
      start: "2020",
      end: "2022",
      description:
      "It was the first time I was studying far away from my home. A new experiencein hostel life and new friends to get good exposure. Overall a good memory.",
    },
    {
      school: "Moyna Vivekananda Vidyamandir",
      href: "https://schools.org.in/purba-medinipur/19190103302/moyna-vivekananda-vidyamandir.html",
      degree: "Higher Secondary",
      logoUrl: "/mvv.png",
      start: "2014",
      end: "2020",
      description:
      "First of all I am very sorry, because I am unable to express that about my memories and moments in this school. I got lots of love and objurgation from my beloved sir and madams. Name of the school ends with Vidyamandir, Yes I can say one thing that all the teachers are iso-god of the school [Vidyamandir]",
    }
  ],
  projects: [
    {
      title: "Examhunt",
      href: "https://examhunt.netlify.app/",
      dates: "July 2023 - Present",
      active: true,
      description:
        "Examhunt - Best Madhyamik Preparation App 2023 Get Madhyamik All Subjects Suggestions, Notes, Guides and Tips in just One App. All notes are High Quality and made by the best Experienced Teachers. We are available on Android devices and platforms. Study from anywhere at your convenience.",
      technologies: [
        "Kotlin",
        "XML",
        "Android Studio",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://examhunt.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/Examhunt-App/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/examhunt.png",
      video:
        "",
    },
    {
      title: "CU Calculator",
      href: "https://cucalculator.netlify.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "HTML5",
        "CSS3",
        "JS",
        "Github",
      ],
      links: [
        {
          type: "Website",
          href: "https://cucalculator.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/chandigarh-university-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cucal.png",
      video: "",
    },
    {
      title: "30-Days-Of-CPP",
      href: "https://subhadipbhowmik.github.io/30-Days-Of-CPP/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "30 days of CPP programming challenge is a step by step guide to learn CPP programming language in 30 days.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Markdown",
        "C++",
      ],
      links: [
        {
          type: "Website",
          href: "https://subhadipbhowmik.github.io/30-Days-Of-CPP/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/30-Days-Of-CPP/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/30daysofcpp.png",
      video: "",
    },
    {
      title: "Codingport",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
        technologies: [
          "HTML",
          "CSS",
          "JS",
          "SEO"
        ],
      links: [
        {
          type: "Website",
          href: "https://codingport.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/codingport-banner.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    }
  ],
} as const;
