import React from 'react';
import { CardActions,  Button} from '@material-ui/core';

import './MoreDetails.css'

const MoreDetails = ({setDisplayMore , singleProject}) => {
    return (
        <div className="MoreDetails">

            <div className="MoreDetails_exit" onClick={()=> setDisplayMore(false)}> 
                <h2>Exit</h2>
            </div>

            <h1>{singleProject.name}</h1>

            <a href={singleProject.link}>
                <div className="MoreDetails_images"> 
                    <div className="bigScreen"> <img src={singleProject.gif} alt='img' /></div>
                    <div className="mobile"><img src={singleProject.mobileImg} alt='img' /></div>
                </div>
            </a>

            <div className="description">
                <p>{singleProject.description}</p>
            </div>
            
            <CardActions>
                <a href={singleProject.link}>
                    <Button size="large" >
                        Visit Site 
                    </Button>
                </a> 
                <a href={singleProject.githubLink}>
                    <Button size="large" >
                        View Code
                    </Button>
                </a> 
            </CardActions>
        </div>
    )
}

export default MoreDetails
