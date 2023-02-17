import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import drown from "../../images/drown.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
function Blogpost() {
  const matches = useMediaQuery("(max-width:700px)");
  const textStyle = {
    color: "white",
    fontSize: matches ? "17px" : "22px",
    padding: "10px",
    textAlign: "left",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    backgroundColor: "rgba(0,0,0,0.4)",
  };
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
          Blog Posts
        </Typography>
      </Box>
      {[1, 2].map((index) => {
        console.log(index, "index");
        return (
          <>
            <Grid
              key={index}
              container
              spacing={3}
              sx={{
                background: "rgb(79,80,80)",
                background:
                  "linear-gradient(90deg, rgba(79,80,80,1) 0%, rgba(10,6,10,0.9587185215883228) 25%)",
                zIndex: -1,
                mt: 0,
                px: 2,
                py: index == 2 ? -2 : 2,
              }}
            >
              <Grid item md={8} xs={12} textAlign="center">
                <Box
                  sx={{
                    zIndex: 1,
                    backgroundImage: `url(${drown})`,
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "self-end",
                    borderRadius: "8px",
                    height: "500px",
                  }}
                >
                  <Typography style={textStyle}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12} textAlign="center">
                <Box
                  sx={{
                    zIndex: 1,
                    backgroundImage: `url(${drown})`,
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "self-end",
                    borderRadius: "8px",
                    height: "500px",
                    ml: { md: 2, xs: 0 },
                  }}
                >
                  <Typography style={textStyle}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </>
        );
      })}
    </>
  );
}

export default Blogpost;
