import React from "react";
import ContactForm from "./ContactForm";
import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import myGif from './me.png';
import email from './email.png';
import "./Contact.css";

const theme = createTheme();

theme.typography.h4 = {
  stroke: "black",
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

const Contact = () => {

  return (
    <div>
    <Grid container sx={{ mt: "10vh" , display:"flex",  minHeight:"50vh"}}>
      <Grid xs={8}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" sx={{ textAlign: "center", mb: "5vh" }}>Feel Free To Contact Me</Typography>
        </ThemeProvider>
        <ContactForm />
      </Grid>
      <Grid xs={4} id="fade_out">
        <img class="bottom" src={email} style={{ width: '20vw', paddingLeft: "5vw", paddingTop: "50px" }} alt="email" />
        <img class="top" src={myGif} style={{ width: '30vw' }} alt="contact" />
      </Grid>
    </Grid>
          <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <p>&copy;2023 Geethika Sandamali | 😀 </p>
      </footer>
      </div>
  );
};

export default Contact;