import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Item from "@mui/material/Grid";

export default function ClassCard() {
  return (
    <Card sx={{ maxWidth: 312, borderRadius: 2 }}>
      <CardMedia
        sx={{
          height: 192,
          borderRadius: 2,
        }}
        image="/images/lop-1-ngang.png"
        title="Lop 1"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Typography
            gutterBottom
            component="div"
            align="center"
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              color: "#21BDC6",
              fontFamily: "Cabin, sans-serif",
            }}
          >
            Tiếng Anh Lớp 1
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: 14,
              fontFamily: "Cabin, sans-serif",
              color: "#515e5f",
              marginBottom: "10px",
            }}
          >
            Khóa học bám sát khung chương trình tiếng Anh lớp 1. Mỗi buổi học
            bao gồm 01 video bài giảng hoặc bài hát
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 12,
              color: "#21BDC6",
              fontFamily: "Cabin, sans-serif",
              marginBottom: "10px",
            }}
          >
            Giáo viên giảng dạy
          </Typography>
          <Grid container xs={12} spacing={0.5}>
            <Grid item xs={1} sx={{ alignContent: "center" }}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="images/exercise-icon.png"
              />
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 11,
                    fontFamily: "Cabin, sans-serif",
                    paddingLeft: "10px",
                  }}
                >
                  Adam Lewis
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={1} sx={{ alignContent: "center" }}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="images/exercise-icon.png"
              />
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 11,
                    fontFamily: "Cabin, sans-serif",
                    paddingLeft: "10px",
                  }}
                >
                  Adam Lewis
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={1} sx={{ alignContent: "center" }}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src="images/exercise-icon.png"
              />
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 11,
                    fontFamily: "Cabin, sans-serif",
                    paddingLeft: "10px",
                  }}
                >
                  Adam Lewis
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFA800",
              fontFamily: "SVN-Poppins, sans-serif",
              fontWeight: "bold",
              borderRadius: "12px",
              fontSize: "20px",
              marginRight: "10px",
              marginTop: "10px",
              color: "white",
              flex: 1,
            }}
          >
            Học ngay
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
