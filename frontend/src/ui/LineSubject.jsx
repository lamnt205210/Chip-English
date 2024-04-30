import { Grid, Typography } from "@mui/material";

export default function LineSubject() {
  return (
    <div
      style={{
        border: "2px solid #f0f0f0",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "32px",
        padding: "16px",
        margin: "0px 200px",
      }}
    >
      <Grid container alignItems="center" gridColumn={4}>
        <Grid item xs={1}>
          <img
            src="/images/vocab-icon.png"
            alt="vocab-icon"
            style={{ maxWidth: "60px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            Từ vựng: Các đồ vật xuất hiện tại sân trường
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            sx={{
              color: "#21BDC6",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "Quicksand, sans-serif",
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
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            97%
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
