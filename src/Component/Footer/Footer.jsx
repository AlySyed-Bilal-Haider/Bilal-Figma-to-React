import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FaDiscord, FaFacebookF } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { SiTiktok } from "react-icons/si";
import { RiWhatsappLine } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
export const Footer = () => {
  const matches = useMediaQuery("(max-width:700px)");
  const [searchValue, setSearch] = useState(true);
  return (
    <>
      <Box sx={{ pt: 2, backgroundColor: "#000000" }}>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            position: "relative",
            background:
              "linear-gradient(90deg, rgba(50,235,242,0.8046568969384629) 0%, rgba(233,22,104,0.8774860285911239) 57%)",
          }}
        >
          {searchValue && (
            <SearchIcon
              size={30}
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                color: "rgb(50,235,242)",
              }}
            />
          )}

          <input
            onFocus={() => {
              setSearch(false);
            }}
            onBlur={() => {
              setSearch(true);
            }}
            type="text"
            style={{
              padding: "8px",
              width: matches ? "90%" : "50%",
              borderRadius: "20px",
              border: "1px solid white",
              // textAlign: "center",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ py: 3, backgroundColor: "#000000", px: 3 }}>
        <Box
          sx={{
            height: "300px",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url("http://www.bloctechsolutions.com/static/media/img1.b53e405135bfd08fb5ae.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            mt={5}
            mb={5}
            sx={{
              width: "70%",
              height: "60px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{ gap: { md: "3rem", sm: "1rem", xs: "0.5rem" } }}
              direction="row"
            >
              <FaDiscord style={{ color: "white", fontSize: "30px" }} />
              <FaFacebookF style={{ color: "white", fontSize: "30px" }} />
              <ImYoutube style={{ color: "white", fontSize: "30px" }} />
              <AiOutlineInstagram
                style={{ color: "white", fontSize: "30px" }}
              />
              <GrTwitter style={{ color: "white", fontSize: "30px" }} />
              <SiTiktok style={{ color: "white", fontSize: "30px" }} />
              <RiWhatsappLine style={{ color: "white", fontSize: "30px" }} />
            </Stack>
          </Box>

          <Box
            sx={{
              color: "white",

              display: "flex",
              flexDirection: { md: "row", sm: "column", xs: "column" },

              justifyContent: { md: "space-between", sm: "center" },
              alignItems: "center",
              width: "100%",
            }}
          >
            <Stack
              sx={{
                gap: {
                  md: "4rem",
                },
                display: "flex",
                flexDirection: { md: "row", sm: "column", xs: "column" },
              }}
            >
              <Button>
                <Typography color="white">about us</Typography>
              </Button>
              <Button>
                <Typography color="white">white paper</Typography>
              </Button>
              <Button>
                <Typography color="white">rode map</Typography>
              </Button>
            </Stack>
            <Box>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                EZZSTAR & EQUIPVERSE LLC
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
