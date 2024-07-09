import React from "react";
import ExerciseCatergory from "../ui/ExerciseCategory";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import * as CourseService from "../services/CourseService";
import { useNavigate } from "react-router-dom";
import ComingSoon from "../ui/ComingSoon";
const UnitDetail = ({ courseId, semesterId, unitId }) => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["units", unitId],
    queryFn: () => CourseService.getUnitDetails(unitId),
  });

  const unitName = data?.lessons[0]?.unitId.englishName;
  // Define the desired order of categories
  const categoryOrder = ["Từ vựng", "Ngữ âm", "Mẫu câu"];

  // Sorting function
  const lessons = data?.lessons;
  console.log(lessons);
  const sortLessonsByCategory = (lessons) => {
    if (!lessons) return [];
    return lessons.sort((a, b) => {
      return (
        categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
      );
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#f5fcff",
        margin: 0,
        padding: 0,
        paddingTop: "28px",
        paddingBottom: "200px",
      }}
    >
      <Box
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#21bdc6",
          color: "#ffffff",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          cursor: "pointer",
          margin: "0 0 20px 98px",
          position: "fixed",
        }}
        onClick={() => navigate(`/course/${courseId}/semester/${semesterId}`)}
      >
        <ArrowBackIcon style={{ fontSize: "35px" }} />
      </Box>

      <Box
        sx={{
          border: "2px solid #f0f0f0",
          boxShadow: "0px 2px 2px rgba(198, 180, 180, 0.25)",
          borderRadius: "32px",
          margin: "70px 200px 0px 200px",
          paddingBottom: "30px",
          backgroundColor: "#d2e8f1",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "26px",
            fontFamily: "Cabin, sans-serif",
            padding: "16px 16px 30px 70px",
            color: "#292d32",
          }}
        >
          {unitName}
        </Typography>
        {lessons?.length > 0 &&
          sortLessonsByCategory(lessons).map((exercise) => (
            <ExerciseCatergory
              key={exercise._id}
              exercise={exercise}
              courseId={courseId}
              semesterId={semesterId}
              unitId={unitId}
            />
          ))}
        {lessons?.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              color: "#076895",
              fontSize: 45,
              backgroundColor: "#d2e8f1",
              fontWeight: 600,
              width: "100%",
              height: "100%",
              paddingBottom: "100px",
            }}
          >
            <ComingSoon />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default UnitDetail;
