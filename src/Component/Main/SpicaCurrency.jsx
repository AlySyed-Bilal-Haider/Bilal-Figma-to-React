import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import spicaEyes from "../../images/spicaEyes.png";
import zzstar from "../../images/zzstar.png";
function SpicaCurrency() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          flexDirection: { md: "row", xs: "column" },
          width: "100%",
          backgroundColor: "#000000",
          py: { md: 2, xs: 1 },
        }}
      >
        <Box sx={{ width: { md: "25%", xs: "95%" } }}>
          <img src={spicaEyes} alt="spicaEyes" style={{ width: "100%" }} />
        </Box>
        <Box sx={{ width: { md: "50%", xs: "90%" } }}>
          <Typography
            sx={{
              display: "block",
              fontSize: { md: "26px", xs: "17px" },
              color: "white",
              fontWeight: 900,
              py: 2,
              px: 3,
            }}
          >
            THE SPICA CRYPTOCURRENCY IS THE MAIN CURRENCY OF OUR WORLD. WITH IT,
            YOU CAN BUY WEAPONS, LANDS, AND OTHER ASSETS TO SHOW OFF YOUR WEALTH
            AND POWER.
          </Typography>
          <br />
          <Button
            sx={{
              border: "1px solid white",
              borderRadius: "5px",
              color: "white",
              padding: "5px 18px",
              fontWeight: 700,
              fontSize: "22px",
              position: "none",
              background: `linear-gradient(90deg, rgba(0,104,68,0.8046568969384629) 0%, rgba(75,6,84,0.6646008745294993) 57%)`,
              "&:hover": {
                background: `linear-gradient(90deg, rgba(75,6,84,0.6646008745294993) 0%,rgba(0,104,68,0.8046568969384629) 57%)`,
              },
            }}
          >
            WALLETS
          </Button>
        </Box>
        <Box sx={{ width: { md: "25%", xs: "95%" } }}>
          <img src={zzstar} alt="zzstar" style={{ width: "65%" }} />
        </Box>
      </Box>

      <Box
        sx={{
          background: "#000000",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexDirection: { md: "row", xs: "column" },
          color: "white",
          textAlign: "center",
          py: 3,
          px: { md: 0, xs: 6 },
        }}
      >
        <Box sx={{ width: { md: "41%", xs: "95%" } }}>
          <Typography
            sx={{
              color: "#3ef4ec",
              fontSize: { md: "34px", xs: "28px" },
              pb: 1,
              fontWeight: 900,
            }}
          >
            Earn while you play
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "17px" },
              textAlign: { md: "left", xs: "center" },
            }}
          >
            Earn SPICA while completing quests that are available to all
            players. You can invest your earnings to get more powerful weapons
            and vehicles!
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "41%", xs: "95%" },
            mt: { md: 0, xs: 2 },
          }}
        >
          <Typography
            sx={{
              color: "#b9047c",
              fontSize: { md: "34px", xs: "28px" },
              pb: 1,
              fontWeight: 900,
            }}
          >
            Invest your savings wisely
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "17px" },
              textAlign: { md: "left", xs: "center" },
            }}
          >
            SPICA can be withdrawn anytime in the form of cash - just invest
            wisely to get the best value for your money!
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SpicaCurrency;
