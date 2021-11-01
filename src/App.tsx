import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './pages/Products';
import Home from './pages/Home';
import Other from './pages/Other';

function App() {
  return (

    <Router>

      <Box sx={{ bgcolor: 'secondary.main', height: '100%' }}>

        <Header />

        {/* <Header1 title="React App" />

        <h1 >
              Check One, Check Check
        </h1> */}

        <Switch>
          <Route exact path="/">
            <Home title="Home" />
          </Route>
          <Route path="/other">
            <Other title="Other Page" />
          </Route>
          <Route path="/products">
            <Products title="Products" />
          </Route>
        </Switch>

      </Box>

    </Router>

  );
}

export default App;
