import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBenner from "../components/HeroBenner";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <Box>
        <HeroBenner />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises  
        setExercises={setExercises}
          bodyPart={bodyPart}
          exercises={exercises}/>
      </Box>
    </>
  );
};

export default Home;
