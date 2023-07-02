
import { Stack, Typography, Box } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ equipmentRequired, targetMuscle }: any) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography style={{ color: '#8b0000' }} variant='h3' mb={6}>
        SAME MUSCLE GROUP
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {targetMuscle.length ? (
          <HorizontalScrollbar data={targetMuscle} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography style={{ color: '#8b0000' }} variant='h3' mb={6}>
        SAME EQUIPMENT
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {equipmentRequired.length ? (
          <HorizontalScrollbar data={equipmentRequired} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
