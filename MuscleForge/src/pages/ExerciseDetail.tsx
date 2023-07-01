import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { fetchData, fetchOptions } from '../utilities/fetchData';

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
