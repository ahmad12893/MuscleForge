import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { fetchOptions, fetchData } from '../utilities/fetchData';

import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexLastExercise = currentPage * exercisesPerPage;

  const indexFirstExercise = indexLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexFirstExercise,
    indexLastExercise
  );

  const paginate = (_event: any, value: React.SetStateAction<number>) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercises = async () => {
      let dataOfExercises = [];
      if (bodyPart === 'all') {
        dataOfExercises = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          fetchOptions
        );
      } else {
        dataOfExercises = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          fetchOptions
        );
      }
      setExercises(dataOfExercises);
    };
    fetchExercises();
  }, [bodyPart]);

  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46pxs'>
        Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise: any, index: any) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            style={{ backgroundColor: '#8b0000' }}
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
