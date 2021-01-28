import React from 'react';
import './Components.css';
import { Card, CardActions, CardContent, Button, Typography, makeStyles, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: 'white',
        height: 'fit-content',
        width: '100vh',
        marginLeft: '100px',
        paddingLeft: 50,
        paddingTop: '20px',
        flex: 50
    },
    img: {
        height: '125mm',
        width: '125mm'
    },
    content: {
        flex: '1 0 auto',
        marginLeft: '25px'
    },
    body: {
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


function RenderCardProject() {
    const classes = useStyles();
    return (
        <div>
            <Card raised="true" className={classes.root} variant="outlined">
                <div className={classes.body}>
                    <Typography variant="h3">
                        Automatic Litter Box
                    </Typography>
                    <CardMedia className={classes.img} component='img' title="Automatic Litter Box" image="/pika.jpg" />
                </div>
                <CardContent className={classes.content}>
                    <Typography variant='h4'>
                        <ul>
                            <li>FirstPoint</li>
                            <li>SecondPoint</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
            <p></p>
            <Card raised="true" className={classes.root}>
                <Typography variant="h3">
                    CampusFoodBuddy
                </Typography>
                <CardMedia className={classes.img} component='img' title="Automatic Litter Box" image="/pika.jpg" />
            </Card>
        </div>

    )
}

export default Project;