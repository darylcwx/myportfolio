import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
export default function Project({
  title,
  src,
  frameworks,
  platforms,
  description,
}) {
  const { xs } = GetThemeAndBP();
  return (
    <div>
      <Box>
        {src.includes("youtube") ? (
          <iframe
            title={title}
            width="100%"
            height={xs ? "200" : "400"}
            src={src}
            frameBorder="0"
          ></iframe>
        ) : (
          <Link
            href={platforms[0].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`/images/projects/${src}`} alt={title} width="100%" />
          </Link>
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
            <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
              Built on:
            </Typography>
            {frameworks.map((framework, key) => (
              <div key={key}>
                <Link
                  href={framework.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
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
                      alt={framework.name}
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
              </div>
            ))}
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
              Live on:
            </Typography>
            {platforms.map((platform, key) => (
              <div key={key}>
                <Link
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
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
                      alt={platform.name}
                    />
                  </Box>
                  <Typography variant="caption" mt={1}>
                    {platform.name}
                  </Typography>
                </Link>
              </div>
            ))}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
