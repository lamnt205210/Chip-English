import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function SubjectCard() {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
      <CardMedia
        sx={{
          height: 300,
          borderRadius: 2,
          margin: "30px",
        }}
        image="/images/g1u1_thumb_in-the-school-playground.png"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: 18,
            marginTop: "-10px",
          }}
        >
          Unit 1: In the school playground
        </Typography>
        <Typography
          color="text.secondary"
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: 14,
            fontFamily: "Cabin, sans-serif",
          }}
        >
          Bài 1: Trong sân trường
        </Typography>
      </CardContent>
      <Box sx={{ margin: "20px" }} color="#21BDC6">
        <Typography align="left" sx={{ fontWeight: "bold" }}>
          50%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={50}
          sx={{
            borderRadius: 2,
            height: 7,
            backgroundColor: "#e0e0e0", // Background color
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#21BDC6", // Progress color
            },
          }}
        />
      </Box>
    </Card>
  );
}
