import { Typography, Stack, Button } from '@mui/material';
import BodyPartImg from '../assets/body-part.png';
import TargetImg from '../assets/target.png';
import EquipmentImg from '../assets/equipment.png';

const Detail = ({ exerciseDetail }: any) => {
  const { name, target, equipment, bodyPart, gifUrl }: any = exerciseDetail;

  const detailArray = [
    { icon: BodyPartImg, name: bodyPart },
    { icon: TargetImg, name: target },
    { icon: EquipmentImg, name: equipment },
  ];
  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center',
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading='lazy'
        className='detail-image'
        style={{ borderRadius: '60px' }}
      />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography
          variant='h3'
          style={{ color: '#8b0000' }}
          textAlign='center'
        >
          {name}
        </Typography>
        <Typography
          style={{ color: '#8b0000' }}
          textAlign='center'
          variant='h6'
        >
          Hard work will always overcome natural talent when natural talent does
          not work hard enough.
          {name} {` `} is a great exercise for {target}, and works the{' '}
          {bodyPart}.
        </Typography>
        {detailArray.map((item) => (
          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button>
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: '50px', height: '50px' }}
              />
            </Button>
            <Typography
              variant='h6'
              style={{ color: '#8b0000' }}
              sx={{ textTransform: 'uppercase' }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
