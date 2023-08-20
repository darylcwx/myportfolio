import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import TimerIcon from "@mui/icons-material/Timer";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
const skillsets = [
	{
		name: "Soft skills",
		skills: [
			{
				name: "Effective communication",
				src: <SpeakerNotesIcon />,
				level: 85,
			},
			{
				name: "Teamwork and collaboration",
				src: <Diversity2Icon />,
				level: 90,
			},
			{
				name: "Adaptability",
				src: <ChangeCircleIcon />,
				level: 90,
			},
			{
				name: "Leadership",
				src: <FollowTheSignsIcon />,
				size: "xl",
				level: 85,
			},
			{
				name: "Time management",
				src: <TimerIcon />,
				level: 80,
			},
			{
				name: "Meticulousness",
				src: <ContentPasteSearchIcon />,
				level: 85,
			},
		],
	},
	{
		name: "Software",
		skills: [
			{ name: "Microsoft Word", src: "word.png", level: 80 },
			{
				name: "Microsoft Powerpoint",
				src: "powerpoint.png",
				level: 80,
			},
			{ name: "Microsoft Excel", src: "excel.png", level: 95 },
			{ name: "Google Suite", src: "google.png", level: 80 },
			{ name: "Figma", src: "figma.png", level: 30 },
			{ name: "Canva", src: "canva.png", level: 60 },
			{ name: "Adobe After Effects", src: "ae.png", level: 60 },
			{ name: "Adobe Premiere Pro", src: "pp.png", level: 50 },
			{ name: "Adobe Photoshop", src: "photoshop.png", level: 20 },
			{
				name: "Adobe Illustrator",
				src: "illustrator.png",
				level: 10,
			},
			{
				name: "Jira",
				src: "jira.png",
				level: 45,
			},
			{
				name: "Postman",
				src: "postman.png",
				level: 50,
			},
			{
				name: "Github Desktop",
				src: "githubdesktop.png",
				level: 80,
			},
			{ name: "Tableau", src: "tableau.png", level: 55 },
		],
	},
	{
		name: "Tech Stack",
		skills: [
			{ name: "HTML", src: "html.png", level: 75 },
			{ name: "CSS", src: "css.png", level: 70 },
			{ name: "Javascript", src: "js.png", level: 75 },
			{ name: "Bootstrap", src: "bootstrap.png", level: 80 },

			{ name: "React", src: "react.png", level: 70 },
			{ name: "Next.js", src: "nextjs.png", level: 40 },
			{ name: "Tailwind", src: "tailwind.png", level: 80 },
			{ name: "Framer Motion", src: "framermotion.png", level: 70 },
			{ name: "Chakra UI", src: "chakraui.jpg", level: 60 },
			{ name: "Material UI", src: "mui.png", level: 60 },
			{ name: "Mantine UI", src: "mantine.png", level: 60 },

			{ name: "Vue.js", src: "vue.png", level: 50 },
			{ name: "Quasar", src: "quasar.png", level: 50 },
			{ name: "Vuetify", src: "vuetify.png", level: 50 },
			{ name: "GSAP", src: "gsap.png", level: 50 },

			{ name: "SQL", src: "sql.png", level: 70 },
			{ name: "Oracle", src: "oracle.png", level: 70 },
			{ name: "Handlebars", src: "handlebars.png", level: 40 },

			{ name: "Python", src: "python.png", level: 70 },
			{ name: "Flask", src: "flask.png", level: 30 },
			{ name: "VBA", src: "vba.png", level: 80 },
			{ name: "PHP", src: "php.png", level: 30 },

			{ name: "Typescript", src: "typescript.png", level: 15 },
			{ name: "C#", src: "csharp.png", level: 20 },

			{ name: "Telegram API", src: "telegram.png", level: 50 },
		],
	},
	{
		name: "Others",
		skills: [
			{ name: "Video editing", src: "videoediting.jpg", level: 60 },
			{ name: "Horology", src: "horology.png", level: 50 },
			{ name: "Guitar", src: "guitar.png", level: 70 },
		],
	},
	{
		name: "Familiar Tech Stack",
		skills: [
			{ name: "Python", src: "python.png", level: 80 },
			{ name: "HTML", src: "html.png", level: 80 },
			{ name: "CSS", src: "css.png", level: 70 },
			{ name: "Javascript", src: "js.png", level: 70 },
			{ name: "Bootstrap", src: "bootstrap.png", level: 70 },
			{ name: "React", src: "react.png", level: 25 },
			{ name: "SQL", src: "sql.png", level: 70 },
			{ name: "VBA", src: "vba.png", level: 80 },
		],
	},
];
export default skillsets;
