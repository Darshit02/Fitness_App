import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVedio from '../components/ExerciseVedio'
import SimilarExerCises from '../components/SimilarExerCises'


const ExercisesDetail = () => {
    const [exerciseDetail , setExerciseDetail] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D"
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

      
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)
        }

        fetchExercisesData()
    },[id])
  return (
    <Box>
        <Details exerciseDetail = {exerciseDetail}/>
        <ExerciseVedio/>
        <SimilarExerCises/>
    </Box>
  )
}

export default ExercisesDetail