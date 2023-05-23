import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
export default function Experience({
	company,
	position,
	startDate,
	endDate,
	img,
	description,
}) {
	const { theme, xs } = GetThemeAndXSBP();
	return (
		<>
			<Box py={5}>
				<Timeline position={xs ? "left" : "alternate"}>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>Eat</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>Code</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot />
						</TimelineSeparator>
						<TimelineContent>Sleep</TimelineContent>
					</TimelineItem>
				</Timeline>
			</Box>
		</>
	);
}
