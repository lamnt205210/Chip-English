import React, { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import ListenAndChoose from "../games/listen_and_choose/ListenAndChoose";
import Memory from "../games/memory/Memory";
import Dictation from "../games/dictation/Dictation";
import SortSentence from "../games/sort_sentence/SortSentence";
import SentenceMonkey from "../games/sentence_monkey/SentenceMonkey";
import ChooseWord from "../games/choose_word/ChooseWord";

const ComingSoon = () => (
  <Box sx={{ textAlign: "center", padding: "20px", color: "#aaa" }}>
    <Typography variant="h5">Coming Soon</Typography>
  </Box>
);

export default function Board({ videoURL, games, lessonId, unitId }) {
  const [selectedExercise, setSelectedExercise] = useState(0); // Default to video

  const renderGameComponent = (game) => {
    switch (game.gameName) {
      case "ListenAndChoose":
        return <ListenAndChoose key={game.materialId} game={game} />;
      case "Memory":
        return <Memory key={game.materialId} game={game} />;
      case "Dictation":
        return <Dictation key={game.materialId} game={game} />;
      case "SortSentence":
        return <SortSentence key={game.materialId} game={game} />;
      case "SentenceMonkey":
        return <SentenceMonkey key={game.materialId} game={game} />;
      case "ChooseWord":
        return <ChooseWord key={game.materialId} game={game} />;
      default:
        return null;
    }
  };

  const handleGridClick = (index) => {
    setSelectedExercise(index + 1); // Update to the correct game index
  };

  const renderSelectedContent = () => {
    return games[selectedExercise - 1] ? (
      renderGameComponent(games[selectedExercise - 1])
    ) : (
      <ComingSoon />
    );
    // }
  };

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
                textAlign: "center",
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
              transition: "transform 0.3s ease", // Smooth transition for hover effect
              "&:hover": {
                transform: "scale(1.05)", // Slightly enlarge the element on hover
              },
              cursor: "pointer",
            }}
            onClick={() => setSelectedExercise(0)} // Click handler for video
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
          {[0, 1, 2].map((index) => (
            <Grid
              item
              key={index}
              sx={{
                height: "100px",
                marginBottom: "10px",
                width: "100%",
                borderBottom: index !== 2 ? "2px solid #dcdfe5" : "none",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                cursor: "pointer",
              }}
              onClick={() => handleGridClick(index)} // Click handler for games
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img src="/images/exercise.png" alt="Exercise-icon" />
                <p
                  style={{
                    position: "absolute",
                    top: "43%",
                    left: "63%",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {index + 1}
                </p>
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
          ))}
        </Grid>
      </Grid>

      <Grid item xs={10.5} style={{ maxHeight: "550px" }}>
        <Box sx={{ height: "100%" }}>
          {selectedExercise === 0 ? (
            <video controls style={{ width: "100%", height: "100%" }}>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            renderSelectedContent()
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
