import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/hero-banner.jpg';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='10px'
      display={'flex'}
      flexDirection={'column'}
      alignItems={'start'}
    >
      <Typography
        color='#8b0000'
        fontWeight='600'
        fontSize='26px'
        display='flex'
        className='club'
      >
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
      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={4}
        color={'whitesmoke'}
        justifyContent='center'
        textAlign='center'
      >
        View the best exercises for each muscle group
      </Typography>
      <Button
        variant='outlined'
        href='#exercises'
        sx={{
          padding: '10px 30px',
        }}
        style={{
          width: '300px',
          backgroundColor: '#FFFFFF',
          opacity: 0.6,
          color: '#8b0000',
          border: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#E60000';
          e.currentTarget.style.color = '#FFFFFF';
          e.currentTarget.style.boxShadow = '0px 0px 5px 5px #FFFFFF';
          e.currentTarget.style.transition = '0.5s';
          e.currentTarget.style.fontWeight = '600';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#FFFFFF';
          e.currentTarget.style.color = '#8b0000';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.fontWeight = '200';
        }}
      >
        VIEW
      </Button>
      <Typography
        fontWeight={600}
        color='#8b0000'
        sx={{ opacity: 0.4, display: { lg: 'block', xs: 'none' } }}
        fontSize='150px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
