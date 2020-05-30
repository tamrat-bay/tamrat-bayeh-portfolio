import React from 'react';
import { Grid } from '@material-ui/core';
import './SkillsCard.css'

const SkillsCard = ({skills}) => {
    return (
         <Grid item xs={6} sm={6} md={3} >
             <div className="SkillsCard" >
              {skills.icon}
             <h3>{skills.title}</h3>
               {skills.skills.map((s,i) => <p key={i}>{s}</p>)}
             </div>
          </Grid>
    )
}

export default SkillsCard
