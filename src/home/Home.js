import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HI, GEETHIKA, DEVELOPER, BIO } from '../constant/constant';
import medium from './images/medium.png';
import "./Home.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MediumIcon = (props) => (
    <img src={medium} style={{ width: 40, color: '#fff' }} fill={props.fill} className={props.class} alt="medium"/>
)

const theme = createTheme();

theme.typography.h4 = {
    fontSize: '1.2rem',
    color: 'black',
    fontFamily: '"Segoe UI Emoji"',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

theme.typography.h6 = {
    fontSize: '12px',
    color: 'black',
    fontWeight: 400,
    fontFamily: '"Segoe UI Emoji"',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',
    },
};

function Home() {
    return (
        <Grid container spacing={2} sx={{ display: 'flex', height: "84.5vh", m: "10px", overflowX: "hidden" }}>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="words">
                <Grid class="words-1">
                    <span>W</span>
                    <span>E</span>
                    <span>L</span>
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                </Grid>
            </div>
            <ThemeProvider theme={theme}>
                <Grid item xs={12} textAlign="center" sx={{ mt: -10 }}>
                    <Typography variant="h4" sx={{
                        display: 'contents'
                    }}>{HI}</Typography>
                    <Typography variant="h4" style={{
                        textShadow: '1px 1px 2px #bec8be, 0 0 1em #909aa9, 0 0 0.2em #c7c7d3',
                        display: 'contents'
                    }}>{GEETHIKA}</Typography>
                    <Typography variant="h4">{DEVELOPER}</Typography>
                    <Typography variant="h6" sx={{ ml: 40, mr: 40, mt: '1%' }}>{BIO}</Typography>
                </Grid>
            </ThemeProvider>
            <Grid item xs={12} sx={{ display: 'flex', ml: 40, mr: 40, position: 'relative' }}>
                <Grid item xs={4} textAlign="center">
                    <IconButton target="_blank"
                        href="https://www.linkedin.com/in/geethikasandamali/">
                        <LinkedInIcon style={{ width: 40, height: 40, color: 'black' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={4} textAlign="center">
                    <IconButton target="_blank"
                        href="https://github.com/gsandamali">
                        <GitHubIcon style={{ width: 40, height: 40, color: 'black' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={4} textAlign="center">
                    <IconButton target="_blank"
                        href="https://medium.com/@gsandamali30">
                        <MediumIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;