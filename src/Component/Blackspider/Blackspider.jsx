import React from "react";
import { Grid, Box, Typography } from "@mui/material";
function Blackspider() {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Grid container spacing={12} mt={0.001}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: { md: 2, xs: 1 } }} color="white">
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "40px", md: "65px" } }}
              align="center"
            >
              The Big Bloack Spider
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "17px", md: "27px" }, p: { md: 5, xs: 2 } }}
              textAlign="justify"
              mt={3}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: { md: 2, xs: 1 },
              display: "flex",
              justifyContent: "center",
              mt: { md: 5, xs: 0 },
            }}
          >
            <img
              src={`https://wallpaperaccess.com/full/959352.jpg`}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="rendom img"
              loading="lazy"
              width="95%"
              style={{ borderRadius: "16px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Blackspider;
