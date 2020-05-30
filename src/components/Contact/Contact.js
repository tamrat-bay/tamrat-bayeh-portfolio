import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField , TextareaAutosize, Button} from '@material-ui/core';
import './Contact.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Contact = () => {

    const classes = useStyles();
    return (
        <div className="Contact" id="Contact">

            <h1 className="title">Contact</h1>

              <div className="Contact_info">
                    <h4><span>Email:</span>  <span>bayeh.tamrat@gmail.com</span></h4>
                    <h4><span>Linkdin:</span> <a href="https://www.linkedin.com/in/tamrat-bayeh-6b1b53192/">Tamrat Bayeh</a></h4>
                    <h4><span>Facebook:</span> <a href="https://www.facebook.com/tamrat.bayeh">Tamrat Bayeh</a></h4>
                    <h4><span>Github:</span> <a href="https://github.com/tamrat-bay">Tamrat-Bayeh</a></h4>
              </div>

            <form className={classes.root} noValidate autoComplete="off">

                <TextField 
                id="outlined-basic" 
                label="Full Name" 
                variant="outlined" 
                required
                />

                <TextField 
                id="outlined-basic2" 
                label="Email" 
                variant="outlined"
                required
                 />

                <TextareaAutosize  
                  label="Message"
                  placeholder="Message"
                  rowMin={3}
                  rows={5}
                  required
                  aria-label="minimum height"
                  />

                <Button variant="contained" color="primary">
                  SEND
                </Button>
            </form>

        </div>
    )

}

export default Contact