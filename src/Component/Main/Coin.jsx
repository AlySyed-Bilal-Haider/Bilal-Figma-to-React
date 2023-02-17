import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Coin_Scene from "../../images/Coin_Scene.png";
function Coin() {
  return (
    <>
      <Box
        sx={{
          p: 3,
          backgroundColor: "#000000",
          zIndex: -999,
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundImage: `url(${Coin_Scene})`,
            backgroundSize: "cover",
            height: "730px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "self-start",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
              flexDirection: { md: "row", xs: "column" },
              color: "white",
              textAlign: "center",
              py: 2,
            }}
          >
            <Box sx={{ width: { md: "41%", xs: "99%" } }}>
              <Typography
                sx={{
                  color: "#f4bd3e",
                  fontSize: "32px",
                  fontWeight: 900,
                  pb: 1,
                }}
              >
                Fully customizable
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "23px", xs: "17px" },
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                Choose your own avatar, style your hair, clothing, car and
                weapon as you wish - even buy planets! With Ezzstar's vast
                universe waiting for you to explore, there's always something
                new happening every day.
              </Typography>
            </Box>
            <Box sx={{ width: { md: "41%", xs: "99%" }, mt: { md: 0, xs: 6 } }}>
              <Typography
                sx={{
                  color: "#f4bd3e",
                  fontSize: "32px",
                  fontWeight: 900,
                  pb: 1,
                }}
              >
                Multiplayer mode
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "23px", xs: "17px" },
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                EZZSTAR is the world's first multiplayer VR Cross platform game
                which lets users play together in the same space in real time.
                Experience intense battles with friends and show off your skills
                in this futuristic environment.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Coin;
