import { Grid, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";

export const Games = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "white",
          minHeight: "100vh",
          p: { md: 8, xs: 5 },
        }}
      >
        <Grid container spacing={6} mt={5}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontSize: { md: "22px", xs: "17px" } }}
              textAlign="justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              aperiam? Placeat repellendus reprehenderit molestias sit nostrum
              amet sequi aperiam impedit incidunt iste? Molestias obcaecati
              magnam qui illo eveniet et nostrum. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Consequuntur ea repellendus vitae
              non molestiae labore eum consectetur quisquam soluta neque, autem
              quam nobis perferendis corporis quod deleniti nostrum totam
              aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Culpa rem dignissimos quod itaque, quos quaerat voluptatibus nobis
              delectus maiores similique perspiciatis impedit eius aut pariatur
              tempora sint assumenda nam aliquid. Lorem ipsum dolor sit amet
              consectetur ad
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container mt={2} spacing={2}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
                <Grid
                  item
                  key={index}
                  spacing={2}
                  rowSpacing={4}
                  borderRadius={16}
                  xs={12}
                  sm={6}
                  md={3}
                  textAlign="center"
                >
                  <img
                    src={`https://www.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg`}
                    // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt="rendom img"
                    loading="lazy"
                    width="200px"
                    style={{ borderRadius: "16px" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
