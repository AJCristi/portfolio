import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Box } from "@mui/system"
import { Icon } from '@iconify/react';

const useStyles = makeStyles((theme) => ({
    typedContainer: {
        width: "100%",
        padding: "40px 0px",
        backgroundColor: "#EFEFEE"
    },
    description: {
        textAlign: "justify",
        padding: "20px 300px"
    },
    descText: {
        fontSize: "24px",
        fontWeight: '300',
        lineHeight: '1.6'
    },
}));

function About() {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <span style={{ fontSize: "40px", fontWeight: '400' }}>
                About
            </span>
            <Box className={classes.description}>
                <span className={classes.descText}>
                    Hi! If you're reading this then you've found my portfolio. I'm Alex, a fullstack software dev from the Philippines.
                </span>
                <br /> <br />
                <span className={classes.descText}>
                    I'm an aviation nerd and tech of course! My main tech stack is using React.js, Javascript, Node.js, Google Cloud Platform/Firebase, and I'm always eager to learn more~!
                </span>
                <br /><br />
                <span className={classes.descText}>
                    Below are the projects I've worked on and my working experience.
                </span>
            </Box>
        </Box>
    )
}

export default About