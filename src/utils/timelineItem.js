import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
export default function MyTimelineItem(experience) {
	const { theme, xs } = GetThemeAndXSBP();
	const dotSize = 100;
	const avatarSize = 95;
	return (
		<Box>
			{xs ? (
				<Box pb={"40px"}>
					<Paper elevation={24}>
						<Box p={2}>
							<Stack direction="row">
								<Stack sx={{ display: "flex", flexGrow: 1 }}>
									<Typography variant="h5">
										{experience.company}
									</Typography>
									<Typography variant="h6">
										{experience.position}
									</Typography>
									<Typography variant="body2">
										{experience.startDate} -{" "}
										{experience.endDate}
									</Typography>
								</Stack>
								<Box>
									<img
										src={`./images/experience/${experience.img}`}
										width={avatarSize}
										height={avatarSize}
										style={{ borderRadius: "8px" }}
										alt={experience.company}
									/>
								</Box>
							</Stack>
							<Typography
								variant="body1"
								pt={2}
								sx={{ whiteSpace: "pre-line;" }}
							>
								{experience.description}
							</Typography>
						</Box>
					</Paper>
				</Box>
			) : (
				<TimelineItem>
					<TimelineOppositeContent>
						<Typography variant="body1" sx={{ paddingTop: "35px" }}>
							{experience.year}
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot
							sx={{
								border: "none",
								bgcolor: "secondary",
								padding: 0,
								margin: 0,
								width: dotSize,
								height: dotSize,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Avatar
								src={`./images/experience/${experience.img}`}
								sx={{
									width: avatarSize,
									height: avatarSize,
								}}
							/>
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent
						sx={{
							paddingBottom: "40px",
							paddingTop: 0,
						}}
					>
						<Paper elevation={24}>
							<Box p={2}>
								<Typography variant="h5">
									{experience.company}
								</Typography>
								<Typography variant="h6">
									{experience.position}
								</Typography>
								<Typography variant="body2">
									{experience.startDate} -{" "}
									{experience.endDate}
								</Typography>
								<Typography
									variant="body1"
									pt={2}
									sx={{ whiteSpace: "pre-line;" }}
								>
									{experience.description}
								</Typography>
							</Box>
						</Paper>
					</TimelineContent>
				</TimelineItem>
			)}
		</Box>
	);
}
