import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }: any) => {
  if (!exerciseVideos) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p='20px'>
      <Typography
        variant='h3'
        mb='33px'
        style={{ color: '#8b0000' }}
        textAlign='center'
      >
        {name} Videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row', xs: 'column' },
          gap: { lg: '110px', xs: '0' },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item: any, index: any) => (
          <a
            key={index}
            className='video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h5' color='#8b0000'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='#8b0000'>
                {item.video.channleName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
