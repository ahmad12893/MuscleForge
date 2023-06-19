import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
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
              borderColor: 'white',
              background: 'white',
              borderRadius: '10px',
              width: '600px',
            },
          }}
          value=''
          onChange={(e) => {}}
          placeholder='Search'
          type='text'
        ></TextField>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
