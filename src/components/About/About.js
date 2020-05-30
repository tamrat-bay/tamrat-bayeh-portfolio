import React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import './About.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const About = () => {

    const [imageHover, setImageHover] = useState(false)
    const classes = useStyles();

    return (
        <div className="section_height_display" >
            <h1 className="title">About</h1>
            <div className="About" id="About">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} className="flex_column" >

                  {imageHover ? <h3 className="letsTalk">Let's Talk</h3> : ''}

                    <div 
                    className="About_profileImg" 
                    onMouseOver={() => setImageHover(true)}
                    onMouseOut={() => setImageHover(false)}
                    >
                    </div>
                    <h3>So Who Am I ?</h3>
                </Grid>
                <Grid item xs={12} sm={12} md={8} >
                    <Paper className={classes.paper} id="About_description">
                      <h2>I'm Tamrat Bayeh</h2>
                      <h4>- Full Stack Web Developer -</h4>
                      <p>
                        I'm highly motivated person with great self learning skills.
                        <br />
                        Always strives to get better and further develop in the field.
                        <br/>
                        I specialize in building dynamic and responsive single page applications. 
                      </p>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default About
