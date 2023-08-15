import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions,fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVedio from '../components/ExerciseVedio'
import SimilarExerCises from '../components/SimilarExerCises'


const ExercisesDetail = () => {
    const [exerciseDetail , setExerciseDetail] = useState({})
    const [exerciseVedios , setExerciseVedios] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

      
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVedioData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,youtubeOptions)
       setExerciseVedios(exerciseVedioData)
    }

        fetchExercisesData()
    },[id])
  return (
    <Box>
        <Detail exerciseDetail = {exerciseDetail}/>
      <ExerciseVedio exerciseVedios={exerciseVedios} name={exerciseVedios.name}/>
      <SimilarExerCises/>
    </Box>
  )
}

export default ExercisesDetail