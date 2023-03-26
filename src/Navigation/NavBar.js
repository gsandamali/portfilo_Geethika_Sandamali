import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import logo from './logo.svg';
import { HOME,ABOUT, CONTACT, PROJECTS } from '../constant/constant';

const pages = [HOME, PROJECTS, CONTACT];

function NavBar({handlePageChange}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const styles = {
    paperContainer: {
        // backgroundImage: `url(${background})`
        color: "#195fa9"
    }
};

const theme = createTheme();

theme.typography.h6 = {
    fontSize: '0.1rem',
    fontWeight: 400,
    fontFamily: 'monospace',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};


  return (
    <AppBar position="static" style={styles.paperContainer}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={handlePageChange} value={page} key={page}>
                  <ThemeProvider theme={theme}>
                  <Typography textAlign="center" color="common.black" variant='h6'>{page}</Typography>
                  </ThemeProvider>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                value={page}
                onClick={handlePageChange}
                sx={{ my: 2, color: 'common.black', display: 'block' }}
              >
                <Typography textAlign="center" sx={{fontFamily:"monospace"}}color="common.black" variant='h6'>{page}</Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <img src={logo} style={{ display: 'flex', mr: 1, width: 100 }} alt={"logo"}/>
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;