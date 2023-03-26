import { Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h4 = {
    fontSize: '1.2rem',
    fontFamily: 'monospace',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

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

function ProjectCard({ topic, discrription, image, link }) {
    return (
        <Card sx={{ display: 'flex', m: 5, ml: 20, mr: 20, paddingRight: 5 }} >
            <ThemeProvider theme={theme}>
                <Grid container spacing={1} sx={{ m: 1 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4">{topic}</Typography>
                    </Grid>
                    <Grid item xs={window.innerWidth > 1300 ? 4 : 12} width={'100vw'}>
                        <img src={image} style={{ mr: 1, marginTop: '18px', width: '300px', paddingLeft: (window.innerWidth > 1300 ? 0 : "35%") }} alt={topic}/>
                    </Grid>
                    <Grid item xs={window.innerWidth > 1300 ? 8 : 12}>
                        {console.log(window.innerWidth)}
                        <Grid item xs={12} sx={{marginTop: '18px'}}>
                            <Typography variant="h6" sx={{ mr: "2px" }}>{discrription}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mr: '10px', mt: '15px' }} container justifyContent="flex-end">
                            <Button
                                variant="contained"
                                size="medium"
                                target="_blank"
                                style={{ backgroundColor: '#195fa9' }}
                                href={link}>
                                View GitHub Repo
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Card>

    );
}

export default ProjectCard;