import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { fetchData, fetchOptions } from '../utilities/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<any>({});

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailInfo = await fetchData(
        `${exerciseDBUrl}/exercise/${id}`,
        fetchOptions
      );

      setExerciseDetail(exerciseDetail);
    };
    fetchExerciseDetail();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
