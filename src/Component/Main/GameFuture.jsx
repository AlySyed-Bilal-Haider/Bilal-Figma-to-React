import React from "react";
import { Box, Container, Typography } from "@mui/material";
import drown from "../../images/drown.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
function GameFuture() {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
          py: 4,
          background: " rgb(0,0,0)",
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 46%, rgba(62,62,62,1) 77%)",
        }}
      >
        <Box sx={{ width: { md: "40%", xs: "95%" }, color: "white" }}>
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "19px" },
              p: 1,
              pl: { md: 4, xs: 1 },
            }}
          >
            EZZSTAR brings the fun of video games into a 3D virtual space that
            you can control with your hands. The game plays like an interactive
            movie, where users are immersed in an animated environment using
            virtual reality headsets.
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              p: 2,
              pl: { md: 4, xs: 1 },
              fontSize: { md: "70px", xs: "35px" },
              wordSpacing: "20px",
              letterSpacing: "10px",
              fontWeight: 900,
              mt: 2,
              background: "linear-gradient(60deg,#0beec5,#f43ed8)",
              backgroundClip: "text",
              textFillColor: " transparent",
            }}
          >
            THE FUTURE OF GAMING
          </Typography>
        </Box>
        <Box sx={{ width: { md: "40%", xs: "99%" }, textAlign: "center" }}>
          <img
            src={drown}
            alt="right image"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default GameFuture;
