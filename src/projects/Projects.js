import { Box } from '@mui/material';
import React from 'react';
import ProjectCard from './ProjectCard';
import tribute_Page from './images/Tribute Page.PNG'
import survey_form from './images/Survey Form.PNG'
import html_documentation from './images/HTML Documentation.PNG'
import personal_portfolio_webpage_1 from './images/Personal Portfolio Webpage  I.PNG'
import random_quote_generator from './images/Random Quote Generator.PNG'
import markdown_previewer from './images/Markdown Previewer.PNG'
import drum_machine from './images/Drum Machine.PNG'
import user_registration_login from './images/User-registration-and-login.PNG'
import mern_CRUD from './images/Mern CRUD.PNG'
import inventory_management_API from './images/Inventory Management API.PNG'
import movie_database from './images/Movie-Database-API-with-React-JS.png'

const topicList = [
    'Movie Database API with ReactJS',
    'Inventory Management API',
    'User registration and login page authentication with integrating JWT',
    'MERN CRUD application to handle user information',
    'Drum Machine',
    'Markdown Previewer',
    'Random Quote Generator',
    'Personal Portfolio Webpage  I',
    'HTML Documentation',
    'Survey Form',
    'Norman Borlaug Tribute Page'
];
const discrriptionList = [
    'Client application allows users to view movie info. Further, it shows most popular movies and supports movie search by full or partial movie title. This is developed using ReactJS and Movie Database API',
    'Inventory Management REST API can be used to record inbound and outbound materials in inventory. Further, users can get a summary of materials entered to the inventory. This is developed using NodeJS and Mongodb. NodeJs service is separated to controller, service, and repository layers.',
    'User Registration and Login Form which allows users to register and login. Username and hashed password is stored while registering. Then JWT will be received while logging. Finally received JWT can be used to access other resources. This is developed using ReactJS, NodeJS, and MySQL.',
    'Create application to handle user information using CRUD operations. This is created using ReactJs frontend and Node Express backend with mongoDb database',
    'Build a online Drum Machine using javaScript, HTML and CSS. Furthermore it has ability to change volume and sound group.',
    'Markdown is a lightweight markup language with plain text formatting syntax. It is a simple way to add formatting like headers, bold, bulleted lists, and so on to a plain text. This is the online markdown editor with live preview and created using javaScript, HTML and CSS.',
    'This is random quote generator create using javaScript, HTML and CSS. It will display the quarto and author. Moreover, It will randomly changed the background color',
    'This is my first Personal Portfolio Webpage and created using HTML and CSS',
    'Build a Technical Documentation including the details about Hyper Text Markup Language (HTML) using HTML and CSS.',
    'A Survey Form created using HTML and CSS. User can input there ideas to survey including Name, Email, Age, role, suggestions ect.',
    'A Tribute Page is a dedicated page celebrating the life and memory of your loved one. This is my first project, create a responsive tribute page induing details of Mr.Norman Ernest Borlaug. For creating the page I Used HTML and CSS technologies.'
];
const imageList = [
    movie_database,
    inventory_management_API,
    user_registration_login,
    mern_CRUD,
    drum_machine,
    markdown_previewer,
    random_quote_generator,
    personal_portfolio_webpage_1,
    html_documentation,
    survey_form,
    tribute_Page
];
const linkList = [
    'https://github.com/gsandamali/Movie-Database-API-with-React-JS',
    'https://github.com/gsandamali/Inventory-Management-System',
    'https://github.com/gsandamali/Part-3-User-registration-and-login-page-authentication-with-integrating-JWT-JSON-Web-Tokens-',
    'https://github.com/gsandamali/MERN-CRUD-App',
    'https://github.com/gsandamali/Build-a-Drum-Machine-freeCodeCamp',
    'https://github.com/gsandamali/Build-a-Markdown-Previewer_freeCodeCamp',
    'https://github.com/gsandamali/Build-a-Random-Quote-Machine_freeCodeCamp',
    'https://github.com/gsandamali/Build-a-Personal-Portfolio-Webpage_freeCodeCamp',
    'https://github.com/gsandamali/Build-a-Technical-Documentation-freeCodeCamp-Page',
    'https://github.com/gsandamali/Survey_Form',
    'https://github.com/gsandamali/Norman-Borlaug-Tribute_Page'
];

function Projects() {
    return (
        <Box>
            {topicList.map((topic, index) => (
                <ProjectCard
                    key={topic}
                    topic={topic}
                    discrription={discrriptionList[index]}
                    image={imageList[index]}
                    link={linkList[index]}
                />
            ))}
        </Box>

    );
}

export default Projects;