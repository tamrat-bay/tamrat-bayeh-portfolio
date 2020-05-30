import React from 'react'
import SkillsCard from './SkillsCard';
import { Grid } from '@material-ui/core';
import './Skillset.css'

const SkillsList = [
    {   
        icon:<i className="fas fa-desktop"></i>,
        title:'Frontend',
        skills:['React', 'JavaScript','HTML 5 / CSS 3', 'Angular / TypeScript Basics', 'jQuery', 'Bootstrap / M-UI' ]
    },
    {   
        icon: <i className="fas fa-server"></i>,
        title:'Backend',
        skills:['Node.js','Express' ]
    },
    {   icon: <i className="fas fa-database"></i>,
        title:'Database',
        skills:['MongoDB' ]
    },
    {   
        icon: <i className="fas fa-code"></i>,
        title:'Other',
        skills:['Git','AWS Ec2 - S3','Microsoft Certification 70-480' ]
    }
]

const Skillset = () => {
    return (
        <div className="Skillset section_height_display" >
            <div className="Skillset_overlay"></div>
            <h1 className="title">Skillset</h1>
            <Grid container spacing={4}>
                {SkillsList.map((s,i) => <SkillsCard key={i} skills={s} /> )}
            </Grid>
        </div>
    )
}

export default Skillset
