import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../images/WLS.png'

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>          
          <Box sx= {{ display: 'flex',
                      flexDirection: 'column',
                      // justifyContent: 'space-between',
                      // alignItems: 'middle',
                      // width: '75%'
                    }}>
                <RouterLink to={'/'}>
                  <Box
                    component="img"
                    sx={{
                      height: 50,                                         
                    }}
                    alt="WLS Logo - Williams Lawn Seed"
                    src={Logo}
                  />
                </RouterLink>
                <Typography variant="h6">
                   Williams Lawn Seed
                </Typography>
          </Box>
          {/* <Typography variant="h6">
            1-800-555-5555
          </Typography>
          <Button component={RouterLink} to={'/Other'} color="inherit">Other</Button>
          <Button component={RouterLink} to={'/products'} color="inherit">Products</Button>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={RouterLink} to={'/Other'}>Other</MenuItem>
        <MenuItem onClick={handleClose} component={RouterLink} to={'/products'}>Products</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
      </Menu>
    </Box>
  );
}