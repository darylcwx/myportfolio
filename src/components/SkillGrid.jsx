import React from "react";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import { motion, AnimatePresence } from "framer-motion";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Tooltip from "@mui/material/Tooltip";

export default function SkillGrid({ category, skills }) {
  const ref = useRef(null);
  const { theme } = GetThemeAndBP();

  const [selectedSkill, setSelectedSkill] = useState(null);
  const handleClick = (category, skill, e) => {
    setSelectedSkill(skill);
  };
  const handleClose = () => {
    setSelectedSkill(null);
  };

  const [tooltip, setTooltip] = useState(
    <>
      Copy to clipboard{" "}
      <ContentCopyIcon fontSize="16px" style={{ verticalAlign: "middle" }} />
    </>
  );
  const handleCopy = () => {
    navigator.clipboard.writeText(selectedSkill.validNumber);
    setTooltip(
      <>
        Copied!{" "}
        <CheckCircleIcon fontSize="16px" style={{ verticalAlign: "middle" }} />
      </>
    );
    setTimeout(() => {
      setTooltip(
        <>
          Copy to clipboard{" "}
          <ContentCopyIcon
            fontSize="16px"
            style={{ verticalAlign: "middle" }}
          />
        </>
      );
    }, 3000);
  };

  // handles click outside of paper
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <Grid container spacing={2} sx={{ position: "relative" }}>
        {skills.map((skill) => (
          <Grid
            key={skill.name}
            item
            xs={4}
            sm={4}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {typeof skill.src === "object" ? (
                <motion.div
                  initial={false}
                  whileHover={{
                    scale: 1.2,
                    filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
                  }}
                  whileTap={{ scale: 1 }}
                  style={{
                    filter: `drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))`,
                  }}>
                  <IconButton onClick={(e) => handleClick(category, skill, e)}>
                    {React.cloneElement(skill.src, {
                      sx: {
                        fontSize: "96px",
                        color: theme.palette.secondary.main,
                      },
                    })}
                  </IconButton>
                </motion.div>
              ) : (
                <motion.div
                  initial={false}
                  whileHover={{
                    scale: 1.2,
                    transition: "transform 0.3s ease-in-out",
                    filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
                  }}
                  whileTap={{ scale: 1 }}
                  style={{
                    filter: `drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))`,
                  }}>
                  <img
                    src={require(`../../public/images/software/${skill.src}`)}
                    alt={skill.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    onClick={(e) => handleClick(category, skill, e)}
                  />
                </motion.div>
              )}
            </Box>
          </Grid>
        ))}
        <AnimatePresence>
          {selectedSkill && (
            <ClickAwayListener ref={ref} onClickAway={handleClose}>
              <Box
                id="paper"
                key="paper"
                sx={{
                  display: "flex",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-47.5%)",
                }}>
                <motion.div
                  initial={{ scale: 0, opacity: 0, y: -100 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: -100 }}
                  transition={{ duration: 0.2 }}>
                  <Paper
                    elevation={12}
                    sx={{
                      minWidth: "350px",
                      padding: "24px",
                      borderRadius: "8px",
                    }}>
                    <Box sx={{ textAlign: "end" }}>
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{ padding: "0" }}>
                        <CloseIcon
                          fontSize="small"
                          sx={{
                            fontSize: "24px",
                            color: theme.palette.secondary.main,
                          }}
                        />
                      </IconButton>
                    </Box>
                    <Typography variant="h6" sx={{ paddingBottom: "16px" }}>
                      {selectedSkill.name}
                    </Typography>
                    {category == "Certifications" ? (
                      <>
                        <Typography variant="body2">
                          Validate at:{" "}
                          <Link
                            href={selectedSkill.validLink}
                            target="_blank"
                            rel="noopener noreferrer">
                            AWS verification
                          </Link>
                          <br></br>
                          Validation Number:{" "}
                          <Tooltip
                            title={tooltip}
                            sx={{
                              backgroundColor: theme.palette.secondary.main,
                              color: theme.palette.primary.main,
                            }}>
                            <Box
                              component="span"
                              sx={{
                                cursor: "pointer",
                                color: theme.palette.secondary.main,
                              }}
                              onClick={handleCopy}>
                              {selectedSkill.validNumber}
                            </Box>
                          </Tooltip>
                          <br></br>
                          <br></br>
                          Issue Date: {selectedSkill.issueDate}
                          <br></br>
                          Expiration Date: {selectedSkill.expirationDate}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography
                          variant="body2"
                          sx={{ whiteSpace: "pre-line" }}>
                          {selectedSkill.description}
                        </Typography>
                        <Slider
                          disabled
                          value={selectedSkill.level}
                          sx={{
                            color: theme.palette.secondary.main,
                            padding: "0px",
                          }}
                          components={{ Thumb: "false" }}
                          componentsProps={{
                            Track: { color: theme.palette.secondary.main },
                          }}
                        />
                      </>
                    )}
                  </Paper>
                </motion.div>
              </Box>
            </ClickAwayListener>
          )}
        </AnimatePresence>
      </Grid>
    </>
  );
}
