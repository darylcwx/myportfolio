import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import MyTimelineItem from "../utils/timelineItem";
import { motion } from "framer-motion";
import experiences from "../constants/experiences"
export default function ExperienceContent() {
	const { theme, xs } = GetThemeAndBP();
	
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
							<motion.div
								initial={{ opacity: 0, y: 200 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0,
									type: "spring",
									stiffness: 150,
								}}
							>
								<MyTimelineItem
									key={experience.id}
									{...experience}
								/>
							</motion.div>
						))}
					</Timeline>
				</Box>
			</Box>
		</>
	);
}
