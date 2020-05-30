import React,{ useState } from 'react';
import ProjectCard from './ProjectCard'
import MoreDetails from './MoreDetails'
import { Grid } from '@material-ui/core';
import './Projects.css'

const projectsList = [
    {
        name : 'Job-applies-status',
        coverImg: '/images/JasMain.jpg',
        gif: '/images/gifs/jasGif.gif',
        mobileImg: '/images/jasMobile.png',
        review: `Simple and efficiant job applies status manger board.
                  User can CRUD applies and there is option to
                   search applies by status or name `,
        description: `It is a long established fact that a reader will be 
                      distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content
                    here', making it look like readable English. Many desktop publishing
                    packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    Various versions have evolved over the years, sometimes by accident, 
                    sometimes on purpose (injected humour and the like).`,
        technologies:'React, Express, Node.js, CSS, MongoDB, AWS-EC2,',
        link: 'https://jas.cloudns.cl/',
        githubLink: 'https://github.com/tamrat-bay/JAS-job-apply-status-'
    },
    {
        name : 'Zoom-Be-Keif',
        coverImg: '/images/ZoombekeifMain.jpg',
        // gif: '/images/gifs/zoombekeifGif.gif',
        review: `Zoom meetings and virtual classes organizer.
                  Instructors can register and offer their classes.
                  Admin can manage which classes to broadcast.`,
        description: '',
        technologies:'React, Express, Node.js, CSS, MongoDB, Auth0',
        link: 'https://zoombekeif.herokuapp.com/',
        githubLink: 'https://github.com/tamrat-bay/zoom-in-gezer'
    },
    {
        name : 'FUN-Sports',
        coverImg: '/images/FunsportMain.jpg',
        gif: '/images/gifs/funsportsGif.gif',
        review: `Sports website that covers Football UFC and NBA. 
                 The site include discussion forum highlight videos and games scheduale`,
        description: '',
        technologies:'React, Express, Node.js, CSS, MongoDB',
        link: 'https://lit-badlands-87508.herokuapp.com/',
        githubLink: 'https://github.com/tamrat-bay/FUN-Sports'
    },
    {
        name : 'Budget-App',
        coverImg: '/images/BudgetMain.jpg',
        gif: '/images/gifs/budgetGif.gif',
        review: `App for managing budget.
                 User can enter income/expense and current blance is displayd
                 The app includes budget history and statistics`,
        description: '',
        technologies:'Vanilla JavaScript, HTML, CSS',
        link: 'https://budget-calculator-tb.herokuapp.com/',
        githubLink: 'https://github.com/tamrat-bay/Budget-Calculator-App'
    },
    {
        name : 'Songs-Lyrics',
        coverImg: '/images/SonglyricsMain.jpg',
        gif: '/images/gifs/songlyricsGif.gif',
        review: `App for getting songs lyrics.
                    User can search artist or song name 
                    and see the lyrics for that song. listen to song`,
        description: '',
        technologies:'Vanilla JavaScript, HTML, CSS',
        link: 'https://tamrat-bay.github.io/Top_ten_songs_lyrics/index',
        githubLink: 'https://github.com/tamrat-bay/Top_ten_songs_lyrics'
    },
    {
        name : 'Riskifide-Challenge',
        coverImg: '/images/JasMain.jpg',
        gif: '/images/gifs/riskiGif.gif',
        review: '',
        description: '',
        technologies:'Angular, TypeScript, SCSS',
        link: '',
        githubLink: 'https://github.com/tamrat-bay/riskifide-challenge'
    }
]

const Projects = () => {

    const [displayMore, setDisplayMore] = useState(false)
    const [singleProject, setSingleProject] = useState({})

    return (
        <div className="Projects section_height_display" id="Projects">

            {displayMore ? <MoreDetails singleProject={singleProject} setDisplayMore={setDisplayMore} /> : null}

            <h1 className="title">Projects</h1>
            <Grid container spacing={3} >
              { projectsList.map((p,i) => <ProjectCard 
                      key={i} 
                      project={p}
                      setSingleProject={setSingleProject}
                      setDisplayMore={setDisplayMore}
                      />) }
             </Grid>
        </div>
    )
}

export default Projects
