import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/hero-banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#8b0000' fontWeight='600' fontSize='26px'>
        THE CLUB
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb='23px'
        mt='30px'
        color={'#8b0000'}
      >
        FORGED, <br />
        WITH IRON AND STEEL
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        View the best exercises for each muscle group
      </Typography>
      <Button
        variant='outlined'
        color='error'
        href='#exercises'
        sx={{ padding: '10px 30px' }}
      >
        VIEW
      </Button>
      <Typography
        fontWeight={600}
        color='#8b0000'
        sx={{ opacity: 0.4, display: { lg: 'block', xs: 'none' } }}
        fontSize='200px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
