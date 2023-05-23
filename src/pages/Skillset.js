import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Skillset() {
	const { theme, xs } = GetThemeAndXSBP();
	const styles = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.85)",
			minHeight: "calc(100vh - 48px)",
		},
	};
	return (
		<Box
			sx={{
				backgroundImage: 'url("/images/bg-pf.jpg")',
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "right",
				position: "relative",
				minHeight: "calc(100vh - 48px)",
			}}
		>
			<Box sx={{ ...styles.overlay }}>
				<Container
					maxWidth="md"
					sx={{
						minHeight: "calc(100vh - 48px)",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Accordion 1</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
						>
							<Typography>Accordion 2</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Container>
			</Box>
		</Box>
	);
}
