import React from 'react';
import './Components.css';
import { PROJECTS } from '../shared/projects'
import { Card, CardActions, CardContent, Button, Typography, makeStyles, CardMedia } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: 'white',
        height: 'fit-content',
        width: 'fit-content',
        minWidth: '100vh',
        maxWidth: '150vh',
        marginLeft: '30vh',
        paddingLeft: 50,
        paddingTop: '20px',
        borderRadius: '25px',
        flexDirection: 'column'
    },
    img: {
        height: '125mm',
        width: '125mm'
    },
    content: {
        display: 'block',
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
        marginLeft: 'auto'
    },
    body_col: {
        display: 'flex',
        flexDirection: 'column'
    }
})

function Project() {
    return (
        <div className="Project-header">
            <div className="Project" >
                <h2>My Projects</h2>
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
                            <CardMedia className={classes.img} component='img' title="Automatic Litter Box" image={project.image} />
                        </div>
                        <CardContent className={classes.content}>
                            <Typography variant='h4' >
                                <ul>
                                    <RenderDescription project={project.description} />
                                </ul>
                            </Typography>
                            <div className={classes.button}>
                                <Button startIcon={<GitHubIcon />} size='large' href={project.github}></Button>
                                <Button startIcon={<GitHubIcon />} size='large' href={project.github}></Button>
                                <Button startIcon={<GitHubIcon />} size='large' href={project.github}></Button>
                            </div>
                        </CardContent>

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