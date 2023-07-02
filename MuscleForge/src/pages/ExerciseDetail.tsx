import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { fetchData, fetchOptions, videoOption } from '../utilities/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<any>({});

  const [exerciseVideos, setExerciseVideos] = useState<any>([]);

  const [targetMuscle, setTargetMuscle] = useState<any>([]);

  const [equipmentRequired, setEquipmentRequired] = useState<any>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDBUrl =
        'https://exercisedb.p.rapidapi.com/exercises/exercise';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailInfo = await fetchData(
        `${exerciseDBUrl}/${id}`,
        fetchOptions
      );

      setExerciseDetail(exerciseDetailInfo);

      const exerciseVideos = await fetchData(
        `${youtubeUrl}/search?query=${exerciseDetailInfo.name}`,
        videoOption
      );
      setExerciseVideos(exerciseVideos.contents);

      const targetMuscle = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailInfo.target}`,
        fetchOptions
      );
      setTargetMuscle(targetMuscle);
      const equipmentRequired = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailInfo.equipment}`,
        fetchOptions
      );
      setEquipmentRequired(equipmentRequired);
    };
    fetchExerciseDetail();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={null} />
      <SimilarExercises
        equipmentRequired={equipmentRequired}
        targetMuscle={targetMuscle}
      />
    </Box>
  );
};

export default ExerciseDetail;
