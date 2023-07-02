import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/logo.png';
function Footer() {
  return (
    <Box mt='80px'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography
          variant='h5'
          pb='40px'
          mt='40px'
          color='#8b0000'
          style={{ borderRadius: '50%' }}
        >
          © 2021 MuscleForge
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
