import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
export default function AboutMusic() {
  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        I'm currently listening to...
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            width: "350px",
            paddingY: "36px",
            borderRadius: "8px",
            background: "rgb(22,25,32)",
            background:
              "linear-gradient(0deg, rgba(22,25,32,1) 0%, rgba(22,33,51,1) 99%)",
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Box sx={{ width: "300px" }}>
              <Box sx={{ paddingBottom: "24px" }}>
                <img
                  src={`/images/personal/en.jpg`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "8px",
                  }}
                  alt="嚣张 - en"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "medium" }}>
                    嚣张
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "grey", paddingBottom: "16px" }}>
                    en
                  </Typography>
                </Box>
                <Box>
                  <CheckCircleIcon
                    sx={{ fontSize: "32px", color: "#1fdf64" }}
                  />
                </Box>
              </Box>
              <Slider
                color="white"
                defaultValue={20}
                sx={{ padding: "0px" }}
                disabled
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "grey",
                }}>
                <Typography variant="body3">1:16</Typography>
                <Typography variant="body3">4:13</Typography>
              </Box>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <ShuffleIcon sx={{ fontSize: "28px" }} />
                  <SkipPreviousIcon sx={{ fontSize: "44px" }} />
                  <PauseCircleIcon sx={{ fontSize: "60px" }} />
                  <SkipNextIcon sx={{ fontSize: "44px" }} />
                  <RepeatIcon sx={{ fontSize: "28px", color: "#1fdf64" }} />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: 11,
                    bottom: 10,
                    backgroundColor: "#1fdf64",
                    height: "5px",
                    width: "5px",
                    borderRadius: "8px",
                  }}></Box>
              </Box>
              {/* // */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
