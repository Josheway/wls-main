import React from 'react';
import Header1 from './components/Header1';
import Header from './components/Header';
import { Box } from '@mui/system';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import Other from './pages/Other';

function App() {
  return (
    
    <Router>
    
      <Box sx={{ bgcolor: 'secondary.main', height: '100vh' }}>

        <Header />

        <Header1 title="React App" />

        <h1 >
              Check One, Check Check
        </h1>

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
