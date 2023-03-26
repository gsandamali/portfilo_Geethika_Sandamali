import React, { useState } from 'react';
import { Grid, Card } from '@mui/material';
import NavBar from './Navigation/NavBar';
import Home from './home/Home';
import { ABOUT, PROJECTS, CONTACT, HOME } from './constant/constant';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import About from './about/About';

function App() {
  const [pageValue, setPageValue] = useState(HOME);

  const handlePageChange = (event => {
    event.preventDefault()
    var pageValueEvent = event.nativeEvent.target.outerText;
    setPageValue(pageValueEvent.toLowerCase());
  });

  const loadPage = (pageValue => {
    if (pageValue === PROJECTS.toLowerCase()) {
      return <Projects />
    } else if (pageValue === CONTACT.toLowerCase()) {
      return <Contact />
    } else {
      return <Home />
    }
  });

  return (
    <Card style={{boxShadow:'none'}}> 
      <Grid>
        <NavBar handlePageChange={handlePageChange} />
      </Grid>
      {loadPage(pageValue)}
    </Card>

  );
}

export default App;
