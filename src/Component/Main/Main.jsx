import React from "react";
import { Box, Container, Typography } from "@mui/material";
import mainpic from "../../images/main.jpg";
import moodboard from "../../images/moodboard.png";
import brand from "../../images/brand.png";
import spica from "../../images/spica.png";
import Drown from "./Drown";
import GameFuture from "./GameFuture";
import SpicaCurrency from "./SpicaCurrency";
import Coin from "./Coin";
import Blogpost from "./Blogpost";
import useMediaQuery from "@mui/material/useMediaQuery";
function Main() {
  const matches = useMediaQuery("(max-width:700px)");
  const imgStyling = {
    // position: "relative",
    width: matches ? "80%" : "45%",
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          zIndex: -1,
          backgroundImage: `url(${mainpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "self-end",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 900,
            letterSpacing: "1px",
            width: { md: "55%", xs: "90%" },
            textAlign: "center",
            fontSize: { md: "22px", xs: "13px" },
          }}
        >
          VR is the next best thing to being there. That's why we created
          EZZSTAR, a world where you can do anything you want, in any way you
          want.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          py: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "90px", xs: "48px" },
            fontWeight: "bolder",
            textAlign: "center",
            background:
              "linear-gradient(90deg, rgba(11,238,224,1) 0%, rgba(248,7,231,1) 66%)",
            backgroundClip: "text",
            textFillColor: " transparent",
          }}
        >
          BE YOUR OWN VR HERO.
        </Typography>

        <Box
          sx={{
            width: "90%",
            mx: "auto",
            mt: 6,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ width: "33%" }}>
            <img
              src={moodboard}
              style={{ width: matches ? "100%" : "60%" }}
              alt="moodboard"
              srcSet=""
            />
          </Box>
          <Box sx={{ width: "33%" }}>
            <img src={brand} alt="brand" srcSet="" style={imgStyling} />
          </Box>
          <Box sx={{ width: "33%" }}>
            <img src={spica} alt="spica" srcSet="" style={imgStyling} />
          </Box>
        </Box>
      </Box>
      <Drown />
      <GameFuture />
      <Coin />
      <SpicaCurrency />
      <Blogpost />
    </>
  );
}

export default Main;
