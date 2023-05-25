import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Project from "./Project.js";
export default function ProjectsContent() {
	const projects = [
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
					link: "https://chakra-ui.com/",
					src: "chakraui.jpg",
				},
				{
					name: "React Spring",
					link: "https://www.react-spring.dev/",
					src: "reactspring.png",
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
			description: `I've always admired how artists showcase their work through their Instagram portfolios. As a passionate programmer with a keen interest in UI/UX and front-end design, I couldn't resist the opportunity to create my own portfolio website. Drawing upon my years of study and professional experience, I embarked on this journey to highlight my experience in the field. I truly hope that this project will always be a WIP, because it simply means that I never stop learning and growing!`,
		},
		{
			title: "Chess.com but worse",
			src: "chessgame.png",
			frameworks: [
				{
					name: "React",
					link: "https://reactjs.org/",
					src: "react.png",
				},
				{
					name: "Next.js",
					link: "https://nextjs.org/",
					src: "nextjs.png",
				},
				{
					name: "Chakra UI",
					link: "https://chakra-ui.com/",
					src: "chakraui.jpg",
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
					link: "https://null.vercel.app/",
					src: "vercel2.png",
				},
				{
					name: "Github",
					link: "https://github.com/jadatanjq/chess-game",
					src: "github.png",
				},
			],

			description: `A microservice architecture based application that runs online chess games for 2 friends.
			
			WIP.`,
		},
		{
			title: "Seiko Couturier Landing Page",
			src: "seikocouturier.png",
			frameworks: [
				{
					name: "React",
					link: "https://reactjs.org/",
					src: "react.png",
				},
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
					name: "Telegram Bot API",
					link: "https://core.telegram.org/",
					src: "telegram.png",
				},
			],
			platforms: [
				{
					name: "Vercel App",
					link: "https://seiko-couturier.vercel.app/",
					src: "vercel2.png",
				},
				{
					name: "Github",
					link: "https://github.com/darylcwx/seiko-couturier",
					src: "github.png",
				},
			],

			description: `A landing page designed for a friend of mine who is venturing into monetizing his hobbies, Seiko Mods is a page I'm exploring to implement a small store, which displays products and has online payment.
			
			WIP.`,
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

			description: `A small project inspired by having people in my life who wish to ensure a correct split of a bill, Receipt Calculator endeavours to solve this real-world problem. By allowing users to input names, food/items, prices, and the participation of each person, the exact share and how much money to transfer for each person can be calculated.
			
			WIP: Experimentation with OCR and perhaps automated Paylah! requests.`,
		},
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
			description: `Bukit Better Driving Center is a school project designed to revamp what was inspired by Bukit Batok Driving Center's website. 
			
			It further inspired me to put what I have learned in SMU's Web Application Development module into a practical and relevant use case, thus the birth of my own website.`,
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

			description: `A modified fork of an order tracking system that I freelanced to build, employees enter a new order through a Google Form, which upon submission, is detected by Zapier. The order details are pulled into an .xlsm file on OneDrive which is then used to run macros. 
			
			Macros include, but are not limited to, generating invoices, receipts, and delivery orders for the specified orders, as well as preparing a ready-to-send templated email to the client. The video starts at 7:01 as anything prior was in an effort for a school project.`,
		},
	];
	return (
		<>
			<Box>
				<Typography variant="body1">
					As a highly motivated and enthusiastic individual, I thrive
					on taking on new challenges and collaborating with others to
					accomplish shared goals. Below are some of the projects I
					have completed since I have learnt how to code, which
					highlights my passion for learning and my determination to
					deliver quality work.
					<br></br>
					<br></br>I believe that no matter how big or small the
					project, there are always lesson to learn and room for
					improvement. Therefore, I am always excited to take on new
					projects and will put in the effort necessary to see them
					through to completion.
				</Typography>
				<Box>
					{projects.map((project) => (
						<Project key={project.title} {...project} />
					))}
				</Box>
			</Box>
		</>
	);
}
