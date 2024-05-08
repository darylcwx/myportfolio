const projects = [
  {
    title: "Authentication Project",
    src: "authentication.png",
    frameworks: [
      {
        name: "React",
        link: "https://reactjs.org/",
        src: "react.png",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
        src: "typescript.png",
      },
      {
        name: "AWS",
        link: "https://aws.amazon.com/",
        src: "aws.png",
      },
      {
        name: "Material UI",
        link: "https://mui.com/",
        src: "mui.png",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        src: "tailwind.png",
      },
    ],
    platforms: [
      {
        name: "Github",
        link: "https://github.com/cs301-itsa/project-2023-24t1-g3-t2",
        src: "github.png",
      },
    ],
    description: `This serverless application was built as a prototype for Ascenda Loyalty as our client for a module on IT Solution Architecture. Scrutinizing ISO qualities, we used the SST framework and leveraged the Infrastructure as Code (IaC) pattern along with AWS CDK to develop an authentication platform which encompasses JWT authentication, MFA and SSO.`,
  },
  {
    title: "Skill Based Role Portal",
    src: "sbrp.png",
    frameworks: [
      { name: "Vue.js", link: "https://vuejs.org/", src: "vue.png" },
      {
        name: "Flask",
        link: "https://flask.palletsprojects.com/en/3.0.x/",
        src: "flask.png",
      },
      {
        name: "MySQL",
        link: "https://www.mysql.com/",
        src: "sql.png",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        src: "tailwind.png",
      },
    ],
    platforms: [
      {
        name: "Github",
        link: "https://github.com/darylcwx/skillbasedroleportal",
        src: "github.png",
      },
    ],
    description: `A working prototype, The main purpose behind this application was to live out the core of Software Project Management, such as the SCRUM framework, clear documentation, integration/unit testing, and CI/CD.`,
  },
  {
    title: "Seiko Mods Artisan",
    src: "smodsartisan.png",
    frameworks: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
        src: "nextjs.png",
      },
      {
        name: "Mantine UI",
        link: "https://mantine.dev/",
        src: "mantine.png",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        src: "tailwind.png",
      },
      {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        src: "mongodb.png",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/?gad=1",
        src: "framermotion.png",
      },
      {
        name: "Telegram Bot API",
        link: "https://core.telegram.org/",
        src: "telegram.png",
      },
    ],
    platforms: [
      {
        name: "Vercel App",
        link: "https://smods-artisan.vercel.app/",
        src: "vercel2.png",
      },
      {
        name: "Github",
        link: "https://github.com/darylcwx/smods-artisan",
        src: "github.png",
      },
    ],
    description: `A web app designed for the watches I have custom made so far, Seiko Mods Artisan is a website I'm exploring to implement a small online store, 
        which allowed me to explore React and NextJS. WIP.
        <br><br><i>You make watches?</i>
        <br>Yes I do. Click the picture above to find out more! 🤩`,
  },
  {
    title: "This very website!",
    src: "myportfolio.png",
    frameworks: [
      {
        name: "React",
        link: "https://reactjs.org/",
        src: "react.png",
      },
      {
        name: "Material UI",
        link: "https://mui.com/",
        src: "mui.png",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/",
        src: "framermotion.png",
      },
      {
        name: "Telegram Bot API",
        link: "https://core.telegram.org/",
        src: "telegram.png",
      },
    ],
    platforms: [
      {
        name: "Vercel App",
        link: "https://darylchua.vercel.app/",
        src: "vercel2.png",
      },
      {
        name: "Github",
        link: "https://github.com/darylcwx/myportfolio",
        src: "github.png",
      },
    ],
    description: `I've always admired how artists in their respective fields showcase their work through their Instagram/website portfolios. 
        With that said, I couldn't resist the opportunity to create my own portfolio website.`,
  },
  {
    title: "Seiko Mods Artisan",
    src: "smodsartisan.png",
    frameworks: [
      {
        name: "Next.js",
        link: "https://nextjs.org/",
        src: "nextjs.png",
      },
      {
        name: "Mantine UI",
        link: "https://mantine.dev/",
        src: "mantine.png",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        src: "tailwind.png",
      },
      {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        src: "mongodb.png",
      },
      {
        name: "Framer Motion",
        link: "https://www.framer.com/motion/?gad=1",
        src: "framermotion.png",
      },
      {
        name: "Telegram Bot API",
        link: "https://core.telegram.org/",
        src: "telegram.png",
      },
    ],
    platforms: [
      {
        name: "Vercel App",
        link: "https://smods-artisan.vercel.app/",
        src: "vercel2.png",
      },
      {
        name: "Github",
        link: "https://github.com/darylcwx/smods-artisan",
        src: "github.png",
      },
    ],
    description: `A web app designed for the watches I have custom made so far, Seiko Mods Artisan is a website I'm exploring to implement a small online store, 
        which allowed me to explore React and NextJS. WIP.
        <br><br><i>You make watches?</i>
        <br>Yes I do. Click the picture above to find out more! 🤩`,
  },
  {
    title: "Receipt Calculator",
    src: "receiptcalculator.png",
    frameworks: [
      {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        src: "bootstrap.png",
      },
      {
        name: "Telegram Bot API",
        link: "https://core.telegram.org/",
        src: "telegram.png",
      },
      {
        name: "OCR Space API",
        link: "https://ocr.space/OCRAPI",
        src: "OCRspace.png",
      },
    ],
    platforms: [
      {
        name: "Vercel App",
        link: "https://receipt-calculator.vercel.app/",
        src: "vercel2.png",
      },
      {
        name: "Github",
        link: "https://github.com/darylcwx/receiptCalculator",
        src: "github.png",
      },
    ],

    description: `Inspired by real world problems wishing to ensure the correct split of a bill, Receipt Calculator solves this problem. 
        Through names, food/items, prices, and the participation of each person, each person's share can be calculated. 
        Optical Character Recognition through taking a picture of the receipt was implemented recently!`,
  },
  // {
  // 	title: "Chess Game",
  // 	src: "chessgame.png",
  // 	frameworks: [
  // 		{
  // 			name: "Next.js",
  // 			link: "https://nextjs.org/",
  // 			src: "nextjs.png",
  // 		},
  // 		{
  // 			name: "Chakra UI",
  // 			link: "https://chakra-ui.com/",
  // 			src: "chakraui.jpg",
  // 		},
  // 		{
  // 			name: "Tailwind CSS",
  // 			link: "https://tailwindcss.com/",
  // 			src: "tailwind.png",
  // 		},
  // 		{
  // 			name: "Telegram Bot API",
  // 			link: "https://core.telegram.org/",
  // 			src: "telegram.png",
  // 		},
  // 	],
  // 	platforms: [
  // 		// {
  // 		// 	name: "Vercel App",
  // 		// 	link: "https://null.vercel.app/",
  // 		// 	src: "vercel2.png",
  // 		// },
  // 		{
  // 			name: "Github",
  // 			link: "https://github.com/jadatanjq/chess-game",
  // 			src: "github.png",
  // 		},
  // 	],
  // 	description: `A microservice architecture based application that runs online chess games for 2 friends.
  // 	WIP.`,
  // },
  {
    title: "Bukit Better Driving Center",
    src: "https://www.youtube.com/embed/8TnJ-BvkvGo",
    // src: "https://youtu.be/8TnJ-BvkvGo",
    frameworks: [
      { name: "Vue.js", link: "https://vuejs.org/", src: "vue.png" },
      {
        name: "Quasar",
        link: "https://quasar.dev/",
        src: "quasar.png",
      },
      {
        name: "GreenSock",
        link: "https://greensock.com/gsap/",
        src: "gsap.png",
      },
      {
        name: "Firebase",
        link: "https://firebase.google.com/",
        src: "firebase.png",
      },
    ],
    platforms: [
      {
        name: "Netlify App",
        link: "https://bukitbetterdrivingcenter.netlify.app/",
        src: "netlify.png",
      },
      {
        name: "Github",
        link: "https://github.com/raphaelgohwx/bbdc-project/",
        src: "github.png",
      },
    ],
    description: `Bukit Better Driving Center is a school project designed to revamp what was inspired by Bukit Batok Driving Center's website. It was my first step to leverage on proper frameworks and databases to build a practical and relevant use case, which later on result in the birth of my own website.`,
  },
  {
    title: "Microsoft Excel Order Tracking System",
    src: "https://www.youtube.com/embed/czirF7NbzsQ",
    // src: "https://youtu.be/czirF7NbzsQ",
    frameworks: [
      {
        name: "Google Forms",
        link: "https://www.google.com/forms/about/",
        src: "gforms.png",
      },
      {
        name: "Zapier",
        link: "https://zapier.com/",
        src: "zapier.png",
      },
      {
        name: "MS Excel + VBA",
        link: "https://learn.microsoft.com/en-us/office/vba/api/overview/",
        src: "excel.png",
      },
    ],
    platforms: [
      {
        name: "Imported to OneDrive",
        link: "https://1drv.ms/x/s!Aj8bmYh8HCEVwXGK781zbE4haPb1",
        src: "onedrive.png",
      },
    ],
    description: `This Order Tracking system was a side project that I freelanced to build. Employees enter a new order through a Google Form, which Zapier detects upon submission. Order details are then pulled into a OneDrive excel file. 
        Macros help to generate invoices, receipts, and delivery orders, as well as preparing a ready-to-send templated email to the client.<br><br>Beyond theoretical knowledge, this was my first proper project that physically introduced me into the world of automation.`,
  },
];
export default projects;
