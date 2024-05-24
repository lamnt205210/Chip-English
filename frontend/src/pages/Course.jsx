import React, { useEffect, useState } from "react";
import SemesterTab from "../ui/SemesterTab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UnitCard from "../ui/UnitCard";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import * as CourseService from "../services/CourseService";
const Course = ({ courseId, semesterId }) => {
  const navigate = useNavigate();
  const [semester, setSemester] = useState(semesterId);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["units", courseId, semester],
    queryFn: () => CourseService.getUnits(courseId, semester),
  });
  const units = data?.units || [];
  // const [units, setUnits] = useState([]);

  // useEffect(() => {
  //   const fetchUnits = async () => {
  //     try {
  //       const res = await CourseService.getUnits(courseId, semesterId);
  //       setUnits(res.units); // Assuming the response has a 'units' field
  //     } catch (err) {}
  //   };
  //   fetchUnits();
  // }, [courseId, semesterId]);
  // console.log("units", units);
  return (
    <div style={{ margin: "30px 48px 100px" }}>
      <Box display="flex" gap={3} sx={{ marginBottom: "20px" }}>
        <Box
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#21bdc6",
            color: "#ffffff",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <ArrowBackIcon
            style={{ fontSize: "32px" }}
            onClick={() => navigate("/dashboard")}
          />
        </Box>
        <Box sx={{ alignContent: "center" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Cabin, sans-serif",
              fontWeight: "bold",
            }}
          >
            Tiếng Anh Lớp 1
          </Typography>
        </Box>
      </Box>

      <SemesterTab semester={semester} setSemester={setSemester} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {units.map((unit) => (
          <div key={unit._id} style={{ width: "25%", padding: "0 10px" }}>
            <UnitCard units={unit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
