import { RepeatRounded } from '@material-ui/icons';
import React from 'react';
import './Components.css';
import { IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {
    return (
        <div className="Contact" id="contact">
            <h1 className="Project">Contact Info</h1>
            <h3>If you have any questions or thoughts, please feel free to Email me at poucheongchong@gmail.com. I would
            be happy to answer any questions regarding anything on this website.
            </h3>
            <div className="Contact_icons">
                <IconButton color='inherit' size='large' target="_blank" href="https://github.com/pochong" ><GitHubIcon fontSize="large" /></IconButton>
                <IconButton color='inherit' size='large' target="_blank" href="https://www.linkedin.com/in/poucheong/" ><LinkedInIcon fontSize="large" /></IconButton>
            </div>
        </div>
    )
}

export default Contact;