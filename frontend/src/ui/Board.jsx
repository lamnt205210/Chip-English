import { Grid, Typography, Box } from "@mui/material";
import ListenAndChoose from "../games/listen_and_choose/ListenAndChoose";
import Memory from "../games/memory/Memory";
export default function Board() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1.5}>
        <Grid
          container
          direction="row"
          spacing={0}
          style={{
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Grid
            item
            sx={{
              backgroundColor: "#00cccc",
              color: "#ffffff",
              height: "100px",
              width: "100%",
              alignContent: "center",
              marginBottom: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 700,
                // justifyContent: "center",
                // display: "flex",
                textAlign: "center" /* Changed to textAlign: center */,
              }}
            >
              Unit 1
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Từ vựng
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              height: "100px",
              marginBottom: "10px",
              width: "100%",
              borderBottom: "2px solid #dcdfe5",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/video-icon.png" alt="Video-icon" />
            </Box>

            <Typography
              sx={{
                color: "#21bdc6",
                fontSize: 18,
                fontWeight: 550,
                textAlign: "center",
                fontFamily: "Ubuntu Mono, monospace",
              }}
            >
              100 điểm
            </Typography>
          </Grid>

          <Grid
            item
            sx={{
              height: "100px",
              marginBottom: "10px",
              width: "100%",
              borderBottom: "2px solid #dcdfe5",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/video-icon.png" alt="Video-icon" />
            </Box>

            <Typography
              sx={{
                color: "#21bdc6",
                fontSize: 18,
                fontWeight: 550,
                textAlign: "center",
                fontFamily: "Ubuntu Mono, monospace",
              }}
            >
              100 điểm
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              height: "100px",
              marginBottom: "10px",
              width: "100%",
              borderBottom: "2px solid #dcdfe5",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/video-icon.png" alt="Video-icon" />
            </Box>

            <Typography
              sx={{
                color: "#21bdc6",
                fontSize: 18,
                fontWeight: 550,
                textAlign: "center",
                fontFamily: "Ubuntu Mono, monospace",
              }}
            >
              100 điểm
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              height: "100px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/video-icon.png" alt="Video-icon" />
            </Box>

            <Typography
              sx={{
                color: "#21bdc6",
                fontSize: 18,
                fontWeight: 550,
                textAlign: "center",
                fontFamily: "Ubuntu Mono, monospace",
              }}
            >
              100 điểm
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10.5} style={{ maxHeight: "550px" }}>
        <Box sx={{ height: "100%" }}>
          {/* <video controls style={{ width: "100%", height: "100%" }}>
            <source src="/video/video_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <Memory />
        </Box>
        {/* <video controls style={{ width: "100%" }}>
    <source src="/video/video_1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video> */}
        {/* <div style={{ width: "100%" }}>
    
  </div> */}
      </Grid>
    </Grid>
  );
}
