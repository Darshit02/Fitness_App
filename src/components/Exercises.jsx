import React, { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import { Box, Typography, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

   // Pagination
   const indexOfLastExercise = currentPage * exercisesPerPage;
   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
   const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
 
   const paginate = (e, value) => {
     setCurrentPage(value);
 
     window.scrollTo({ top: 1800, behavior: 'smooth' });
   };
 

  useEffect(()=>{
    const fetchExedrcisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData)
    }
    fetchExedrcisesData()
  },[bodyPart])

 
  console.log(exercises);
  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Resultes
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
      {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            variant="outlined"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
