import React from 'react';
import Header1 from './components/Header1';
import Header from './components/Header';
import { Box } from '@mui/system';

function App() {
  return (    
    <Box sx={{ bgcolor: 'secondary.main', height: '100vh' }}>

      <Header />

      <Header1 title="React App" />

      <h1 >
            Check One, Check Check
      </h1>

    </Box>

    
  );
}

export default App;
