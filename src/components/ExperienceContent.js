import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import MyTimelineItem from "../utils/timelineItem.js";
export default function ExperienceContent() {
	const { theme, xs } = GetThemeAndXSBP();
	const experiences = [
		{
			id: 9,
			company: "NTT Global Ltd.",
			position: "Software Engineer Intern",
			startDate: "May 2023",
			endDate: "Tentatively Aug 2023",
			year: "2023",
			img: "ntt.jpeg",
			description: `TBC, tentatively:
				- Develop and maintain web apps using modern front-end frameworks such as React
				- Design, test, implement software features to improve performance, scalability, and user experience
				- Build and maintain RESTful APIs using server-side tech such as Node.js
				- Collaborate with cross-functional teams/other interns to identify and resolve technical issues and participate in reviews to ensure QA`,
		},
		{
			id: 8,
			company: "Ba Ge Chuan Chuan Pte. Ltd.",
			position: "Restaurant Crew Member",
			startDate: "Apr 2022",
			endDate: "Jan 2023",
			year: "2022",
			img: "bgcc.png",
			description: `- Serve food and drinks
				- Customer service and experience
				- Learned the key details to how a F&B business operates`,
		},
		{
			id: 7,
			company: "City Surfer Pte. Ltd.",
			position: "Service Provider",
			startDate: "Jun 2021",
			endDate: "Present",
			year: "2021",
			img: "cs.jpeg",
			description: `- Increased productivity by 50% by creating an Excel Order Tracking System
							- Created a 1 - click functionality to update and save documents, and send emails`,
		},
		{
			id: 6,
			company: "Singapore Armed Forces",
			position: "NSF Platoon Commander (LTA)",
			startDate: "Jul 2019",
			endDate: "May 2021",
			year: "2020",
			img: "saf.jpeg",
			description: `Achievements & Awards:
		- 20 / 20 Armour Officer Advanced Course
		- 19 / 20 Armour Infantry Officer Cadet Course
		\n - Served as a Platoon Commander for the 40th Battalion, Singapore Armoured Regiment(40SAR)
		- Responsible for three Armoured Fighting Vehicles(AFVs) along with 22 dismounted troopers
	- Carefully selected as the only platoon out of 9 platoons to be the Battalion's designated task force`,
		},
		{
			id: 5,
			company: "Da Paulo Group - Gastronomia",
			position: "Restaurant Crew Member",
			startDate: "Feb 2019",
			endDate: "Jun 2019",
			year: "2019",
			img: "dp.jpeg",
			description: `- Barista duties
			- Cashier duties
			- Food preparation and serving
			- Runner, ad-hoc duties
			- Customer service and experience`,
		},
		{
			id: 4,
			company: "DBS Private Banking",
			position: "Internship",
			startDate: "Sep 2018",
			endDate: "Jan 2019",
			year: "2018",
			img: "dbs.jpeg",
			description: `- Demonstrated expertise in Microsoft Office suite, including Word, Excel, and PowerPoint, to produce professional reports and presentations
			- Generated and presented the Annual Performance Review based on stipulated KPIs
			- Developed a internal survey form to collate responses for end of year peer review
			- Sat in for SCRUM and AGILE meetings facilitating a new project
			- Grade: A`,
		},
		{
			id: 3,
			company: "Louis Vuitton",
			position: "Retail Sales Associate",
			startDate: "Feb 2018",
			endDate: "Aug 2018",
			year: "2018",
			img: "lv.jpeg",
			description: `- Serve clients
			- Assist Sales Associates
			- Stock organization, stock transfers
			- Runner, ad-hoc duties`,
		},
		{
			id: 2,
			company: "The Prada Group - Prada",
			position: "Retail Sales Associate",
			startDate: "Oct 2017",
			endDate: "Dec 2017",
			year: "2017",
			img: "prada.jpeg",
			description: `- Serve clients
			- Assist Sales Associates
			- Stock organization, stock transfers
			- Runner, ad-hoc duties`,
		},
		{
			id: 1,
			company: "The Prada Group - Prada",
			position: "Retail Sales Associate",
			startDate: "Mar 2017",
			endDate: "Apr 2017",
			year: "2017",
			img: "prada.jpeg",
			description: `The gap between the same roles above is due to school commitments`,
		},
		{
			id: 0,
			company: "Club 21 Pte. Ltd. - Balenciaga",
			position: "Retail Sales Associate",
			startDate: "Aug 2016",
			endDate: "Feb 2017",
			year: "2016",
			img: "c21.jpg",
			description: `- Assist Sales Associates
			- Stockroom organization, stock transfers
			- Runner, ad-hoc duties`,
		},
	];
	return (
		<>
			<Box>
				<Typography variant="body1">
					My part-time experience ranges from professional internships
					to retail, to F&B. It includes most of my major part-time
					stints, and has taught me uncountable valuable lessons.
					These experiences built my communication skills and
					cultivated strong teamwork and collaboration skills, allowed
					me to develop my leadership skills through leading people
					all whilst demonstrating critical thinking and
					problem-solving skills.
				</Typography>
				<Box py={5}>
					<Timeline
						sx={{
							[`& .${timelineOppositeContentClasses.root}`]: {
								flex: 0,
								paddingTop: 0,
								paddingBottom: 0,
							},
							padding: 0,
							margin: 0,
						}}
					>
						{experiences.map((experience) => (
							<MyTimelineItem
								key={experience.id}
								{...experience}
							/>
						))}
					</Timeline>
				</Box>
			</Box>
		</>
	);
}
