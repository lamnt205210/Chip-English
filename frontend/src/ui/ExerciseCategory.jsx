import { Grid, Typography } from "@mui/material";

export default function ExerciseCategory({ exercise }) {
  return (
    <div
      style={{
        border: "2px solid #f0f0f0",
        boxShadow: "0px 2px 2px rgba(83, 83, 123, 0.25)",
        borderRadius: "20px",
        padding: "16px",
        margin: "15px",
        backgroundColor: "white",
      }}
    >
      <Grid container alignItems="center" gridColumn={4}>
        <Grid item xs={1}>
          <img
            src={
              exercise.category === "Từ vựng"
                ? "/images/vocab-icon.png"
                : exercise.category === "Ngữ âm"
                ? "/images/phonetic-icon.png"
                : "/images/grammar-icon.png"
            }
            alt="vocab-icon"
            style={{ maxWidth: "60px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography
            sx={{
              fontWeight: 550,
              fontSize: "20px",
              color: "#292d32",
            }}
          >
            {exercise.category}: {exercise.name}
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            sx={{
              color: "#21BDC6",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "32px",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            390/400 điểm
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            sx={{
              color: "#AAAAAA",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            • 97%
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
