import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, fetchOptions } from '../utilities/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState<string[]>([]);
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const exercisesBody = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        fetchOptions
      );

      setBodyParts(['all', ...exercisesBody]);
    };
    fetchExercises();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercises = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        fetchOptions
      );
      const filteredExercises = exercises.filter(
        (exercise: any) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(filteredExercises);
    }
  };

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        color='whitesmoke'
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='50px'
        textAlign='center'
      >
        VIEW EXERCISES, FORGE THE MONOLITH
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              color: 'gray',
              background: 'white',
              border: 'none',
              borderRadius: '10px',
              width: { lg: '1170px', xs: '350px' },
              backgroundColor: 'smokegray',
            },
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: '#8b0000',
            color: 'black',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            '&:hover': {
              bgcolor: '#8b0000',
              fontWeight: 600,
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} />
      </Box>
    </Stack>
  );
};
export default SearchExercises;
