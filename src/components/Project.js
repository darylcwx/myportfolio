import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { GetThemeAndBP } from "../utils/getThemeAndBP.js";
export default function Project({
	title,
	src,
	frameworks,
	platforms,
	description,
}) {
	const { theme, xs } = GetThemeAndBP();
	return (
		<div key={title}>
			<Box py={10}>
				<Typography variant="h4" py={2}>
					{title}
				</Typography>
				{src.includes("youtube") ? (
					<iframe
						width="100%"
						height={xs ? "200" : "400"}
						src={src}
						frameBorder="0"
					></iframe>
				) : (
					<img src={`/images/projects/${src}`} alt="" width="100%" />
				)}

				<Typography
					variant="body1"
					py={1}
					dangerouslySetInnerHTML={{ __html: description }}
				></Typography>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					spacing={2}
					py={2}
					sx={{
						display: "flex",
						justifyContent: "space-evenly",
					}}
				>
					<Stack
						direction="row"
						spacing={2}
						sx={{ display: "flex", alignItems: "center" }}
					>
						<Typography
							variant="body2"
							sx={{ whiteSpace: "nowrap" }}
						>
							Built on:
						</Typography>
						{frameworks.map((framework) => (
							<Link
								href={framework.link}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Box
									sx={{
										width: "50px",
										height: "50px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										overflow: "hidden",
									}}
								>
									<img
										src={`/images/software/${framework.src}`}
										style={{
											maxWidth: "100%",
											maxHeight: "100%",
										}}
									/>
								</Box>
								<Typography
									variant="caption"
									mt={1}
									sx={{ textAlign: "center" }}
								>
									{framework.name}
								</Typography>
							</Link>
						))}
					</Stack>
					<Stack
						direction="row"
						spacing={2}
						sx={{ display: "flex", alignItems: "center" }}
					>
						<Typography
							variant="body2"
							sx={{ whiteSpace: "nowrap" }}
						>
							Live on:
						</Typography>
						{platforms.map((platform) => (
							<Link
								href={platform.link}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Box
									sx={{
										width: "50px",
										height: "50px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										overflow: "hidden",
									}}
								>
									<img
										src={`/images/software/${platform.src}`}
										style={{
											maxWidth: "100%",
											maxHeight: "100%",
										}}
									/>
								</Box>
								<Typography variant="caption" mt={1}>
									{platform.name}
								</Typography>
							</Link>
						))}
					</Stack>
				</Stack>
			</Box>
		</div>
	);
}
