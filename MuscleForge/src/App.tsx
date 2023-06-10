import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/home';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <Box width='400px'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
