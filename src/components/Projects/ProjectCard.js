import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import './ProjectCard.css'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ProjectCard = ({project, setSingleProject, setDisplayMore}) => {
    
    const clickHandler = () => {
        setDisplayMore(true)
        setSingleProject(project)
    }

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}  >
            <div className="ProjectCard">
                <Card className={classes.root} >
                    <CardActionArea onClick={clickHandler}>
                        <CardMedia
                            className={classes.media}
                            image={project.coverImg}
                            title="Click for more info"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                    {project.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.review}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <a href={project.link}>
                            <Button size="small" >
                                Visit Site 
                            </Button>
                        </a> 
                        <a href={project.githubLink}>
                            <Button size="small" >
                                View Code
                            </Button>
                        </a> 
                    </CardActions>
                </Card>
            </div>
        </Grid>
    )
}

export default ProjectCard
