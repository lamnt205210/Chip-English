import { Grid, Typography } from "@mui/material";

export default function LineSubject() {
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        {/* First Column */}
        <Grid item container xs={1} spacing={4}>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#00cccc",
              color: "#ffffff",
            }}
          >
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              Unit 1
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Từ vựng
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src="/images/video-icon.png" alt="Video-icon" />
            <Typography
              sx={{ color: "#21bdc6", fontWeight: "bold", fontSize: 16 }}
            >
              100 điểm
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src="/images/exercise-icon.png" alt="Video-icon" />
            <Typography
              sx={{ color: "#21bdc6", fontWeight: "bold", fontSize: 16 }}
            >
              100 điểm
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src="/images/exercise-icon.png" alt="Video-icon" />
            <Typography
              sx={{ color: "#21bdc6", fontWeight: "bold", fontSize: 16 }}
            >
              0 điểm
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src="/images/exercise-icon.png" alt="Video-icon" />
            <Typography
              sx={{ color: "#21bdc6", fontWeight: "bold", fontSize: 16 }}
            >
              0 điểm
            </Typography>
          </Grid>
        </Grid>
        {/* Second Column */}
        <Grid item xs={10}>
          <video controls style={{ width: "100%" }}>
            <source src="/video/video_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
      </Grid>
    </div>
  );
}
