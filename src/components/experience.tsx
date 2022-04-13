import React from "react"
import { makeStyles } from '@mui/styles';
import { Chrono } from "react-chrono";
import { Box, Stack } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    typedContainer: {
        width: "100%",
        backgroundColor: "#e9d5a1",
        display: 'flex',
        flexDirection: 'column',
    },
}));


function Experience() {
    const classes = useStyles();

    const items = [{
        title: "2020 - Present",
        cardTitle: "",
    }, {
        title: "- Grad. 2019",
        cardTitle: "",
    }];

    return (
        <Box className={classes.typedContainer}>
            <Stack
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: '20px' }}
            >
                <span style={{ fontSize: "40px", fontWeight: '400' }}>
                    Experience
                </span>

                <Chrono
                    items={items}
                    hideControls
                    mode="VERTICAL"
                    theme={{
                        primary: "black",
                        secondary: "'",
                        cardBgColor: "white",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}
                >
                    <div style={{ width: '100%' }}>
                        <h2>MobileGroup Inc.</h2>
                        <h4>Fullstack web software developer</h4>
                        <span style={{ textAlign: "justify" }}>
                            Hired initially as a backend developer, transitioned into fullstack, accomplishments include:
                        </span>
                        <ul style={{ marginTop: '10px', textAlign: "left" }}>
                            <li>
                                Maintained and upgraded a present POS-CMS system for existing clientele with C# and SQL
                            </li>
                            <li>
                                Collaborated in planning Rampver Online's database and API structure.
                            </li>
                            <li>
                                Created Front and Backend systems for Rampver Online with React and Javascript, Node.js for backend systems.
                            </li>
                            <li>
                                Tasked with developing the Ticket Validator, using React and Javascript, Node.js for the backend systems.
                            </li>
                        </ul>
                        <span style={{ textAlign: "justify" }}>
                            Current tech stack: React.js, Javascript, Node.js, Google Firebase, Google Cloud Platform, but as always willing to learn more~!
                        </span>
                    </div>
                    <div style={{ width: '100%' }}>
                        <h2>De La Salle - College of St. Benilde</h2>
                        <h4>BS Information Technology (with specialization in Game Design and Development)</h4>
                        <span style={{ textAlign: "justify" }}>
                            Learned C# and Javascript in conjunction with learning best software development practices. Created 2 games as capstone/thesis projects.
                        </span>                        
                    </div>
                </Chrono>

            </Stack>
        </Box>

    )

}

export default Experience   