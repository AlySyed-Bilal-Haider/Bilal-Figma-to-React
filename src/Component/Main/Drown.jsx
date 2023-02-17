import React from "react";
import { Box, Container, Typography } from "@mui/material";
import drown from "../../images/drown.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
function Drown() {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <>
      <Box
        sx={{
          background: " rgb(223,68,220)",
          background:
            " linear-gradient(90deg, rgba(223,68,220,1) 9%, rgba(0,255,213,1) 16%, rgba(3,7,7,1) 38%)",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            color: "white",
            p: 1,
            ml: 1,
            fontWeight: 700,
          }}
        >
          Sneak Peak
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          py: 2,
          background: "rgb(67,66,67)",
          background:
            "linear-gradient(90deg, rgba(62,62,62,1) 27%, rgba(0,0,0,1) 50%)",
        }}
      >
        <Box sx={{ width: { md: "50%", xs: "99%" }, textAlign: "center" }}>
          <img
            src={drown}
            alt="right image"
            style={{
              width: matches ? "95%" : "85%",
              height: "85%",
              borderRadius: "5px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { md: "50%", xs: "99%" },
            color: "white",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              py: 2,
              px: { md: 0, xs: 3 },
              fontSize: { md: "55px", xs: "30px" },
              wordSpacing: { md: "20px", xs: "14px" },
              letterSpacing: "10px",
              fontWeight: 900,
            }}
          >
            BE YOURSELF IN{" "}
            <Typography
              variant="span"
              sx={{
                background: "linear-gradient(60deg,#0beec5,#f43ed8)",
                backgroundClip: "text",
                textFillColor: " transparent",
              }}
            >
              VR
            </Typography>
          </Typography>
          <Typography
            sx={{
              // fontWeight: 700,
              fontSize: { md: "28px", xs: "18px" },
              pt: 1,
              px: { md: 0, xs: 2 },
            }}
          >
            EZZSTAR offers the most immersive virtual reality experience of its
            kind (both for gaming and for socializing), giving you a chance to
            become your own mini-celebrity in the game, or just have a blast
            exploring new worlds!
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Drown;
