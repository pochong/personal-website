import React from 'react';
import './Components.css';
import { PROJECTS } from '../shared/projects'
import { Card, CardActions, CardContent, Button, Typography, makeStyles, CardMedia, IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: 'white',
        height: 'fit-content',
        width: 'fit-content',
        minWidth: '150vh',
        maxWidth: '175vh',
        marginLeft: '10vh',
        maxHeight: 650,
        paddingLeft: 50,
        paddingTop: '20px',
        borderRadius: '25px',
        flexDirection: 'column'
    },
    img: {
        height: 125,
        width: '60vh',
        paddingTop: '56.25%',
        objectFit: 'cover',
    },
    content: {
        flex: '1 0 auto',
        marginLeft: '25px',
        width: '50vh',
        flexDirection: 'column'
    },
    body: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        marginLeft: 'auto',
    },
    body_col: {
        flexDirection: 'column'
    }
})

function Project() {
    return (
        <div className="Project-header" id="project">
            <p></p>
            <div className="Project">
                <h1>My Projects</h1>
            </div>
            <div>
                <RenderCardProject />
            </div>
        </div>

    )
}

function RenderDescription({ project }) {
    const description = Object.values(project).map((des) => {
        return (
            <li>{des}</li>
        )
    })

    return (
        description
    )
}

function RenderButton({link}) {
    if(link != "") {
        return (
            <IconButton color='inherit' size='large' target="_blank" href={link}><GitHubIcon fontSize="large" /></IconButton>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function RenderCardProject() {
    const classes = useStyles();

    const projects = PROJECTS.map((project) => {
        return (
            <div key={project.id}>
                <Card raised="true" className={classes.root} variant="outlined" key={project.id}>
                    <div className={classes.body}>
                        <div className={classes.body_col}>
                            <Typography variant="h3">
                                {project.name}
                            </Typography>
                            <CardMedia className={classes.img} src="img" title={project.name} image={project.image} />
                        </div>
                        <CardContent className={classes.content}>
                            <Typography variant='h4' >
                                <ul>
                                    <RenderDescription project={project.description} />
                                </ul>
                            </Typography>
                        </CardContent>
                        <div className={classes.button}>
                            {/* <IconButton color='inherit' size='large' target="_blank" href={project.github}><GitHubIcon fontSize="large" /></IconButton> */}
                            <RenderButton link={project.github} />
                        </div>
                    </div>
                </Card>
                <p></p>
            </div >
        )
    });

    return (
        <div>
            {projects}
        </div>
    )
}



export default Project;