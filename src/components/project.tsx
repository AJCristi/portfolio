import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Slide,
    Stack
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Icon } from '@iconify/react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'

import testimg from '../contents/img/testimg.png'

const useStyles = makeStyles((theme) => ({
    typedContainer: {
        width: "100%",
        padding: "40px 0px",
        background: '#1F1F1F',
        color: 'white',
    },
    projCard: {
        maxWidth: '345px',
        height: '350px',
        padding: "5px",
    },
    cardIcon: {
        fontSize: '28px'
    }
}));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="left" ref={ref} {...props} />;
});


function Projects() {
    const classes = useStyles();
    const [rampvModal, setRampvModal] = useState(false);
    const [openProject, setOpenProject] = useState(false);
    const [curProject, setCurProject] = useState("");

    const rampverCard = (
        <Card className={classes.projCard}>
            <CardActionArea style={{ fontFamily: 'Ubuntu' }}
                onClick={
                    () => {
                        setOpenProject(true);
                        setCurProject("rampver")
                    }
                }
            >
                <span style={{ fontSize: "28px", fontWeight: '400', fontFamily: 'Ubuntu' }}>
                    Rampver Online
                </span>
                <CardMedia
                    component="img"
                    height="194"
                    image={testimg}
                    alt="project image"
                />
                <CardContent>
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Icon icon="cib:javascript" className={classes.cardIcon} />
                        <Icon icon="cib:firebase" className={classes.cardIcon} />
                        <Icon icon="fa-brands:node" className={classes.cardIcon} />
                        <Icon icon="ri:reactjs-fill" className={classes.cardIcon} />
                        <Icon icon="cib:google-cloud" className={classes.cardIcon} />
                    </Stack>
                    <br />
                    <span>
                        Fully end-to-end digital investment platform, built with React.js, Javascript, and Node.js.
                        Deployed using Firebase and Google Cloud Platform.
                    </span>
                </CardContent>
            </CardActionArea>
        </Card>
    )

    const vistaScanner = (
        <Card className={classes.projCard}>
            <CardActionArea style={{ fontFamily: 'Ubuntu' }}
                onClick={
                    () => {
                        setOpenProject(true);
                        setCurProject("vistascan")
                    }
                }
            >
                <span style={{ fontSize: "24px", fontWeight: '400', fontFamily: 'Ubuntu' }}>
                    Cinema Porter Ticket Validator
                </span>
                <CardMedia
                    component="img"
                    height="194"
                    image={testimg}
                    alt="project image"
                />
                <CardContent>
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Icon icon="cib:javascript" className={classes.cardIcon} />
                        <Icon icon="fa-brands:node" className={classes.cardIcon} />
                        <Icon icon="ri:reactjs-fill" className={classes.cardIcon} />
                        <Icon icon="cib:windows" className={classes.cardIcon} />
                    </Stack>
                    <br />
                    <span>
                        A full-stack Ticket Validator app for cinema porters to assist in serving moviegoers. Created with React.js, Javascript, and Node.js. Deployed using Microsoft IIS.
                    </span>
                </CardContent>
            </CardActionArea>
        </Card>
    )

    const rampverDescription = (
        <Box style={{ margin: "0px 100px" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justifyContent="flex-end">
                        <IconButton
                            aria-label="Back"
                            onClick={() => {setOpenProject(false); setCurProject("")}}
                        >
                            <Icon icon="akar-icons:circle-x" color="white" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Carousel>
                        <div>
                            <ReactPlayer url='https://www.youtube.com/watch?v=0jG8cE2A7R8' />

                        </div>
                        <div>
                            <img src={testimg} alt="preview-1"></img>
                            <p className="legend">Legend 1</p>
                        </div>
                    </Carousel>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="flex-start" sx={{ marginLeft: "20px" }}>
                        <Grid item xs={12}>
                            <h3 style={{ width: '100%' }}> Rampver Online - Digital Investment Platform </h3>
                        </Grid>
                        <Grid item xs={12}>
                            <span style={{ fontWeight: '200', fontStyle: 'italic' }}>app.rampver.com</span>
                        </Grid>
                        <Grid item xs={12} sx={{ paddingTop: '10px' }}>
                            <Grid container justifyContent="flex-start" sx={{ marginLeft: "20px" }}>
                                <span style={{ textAlign: "justify" }}>
                                    A digital investment platform, made up of 3 separate modules, namely:
                                </span>
                                <ul style={{ marginTop: '10px', textAlign: "left" }}>
                                    <li>
                                        Client-facing application where users can signup and invest with mutual funds and others, provided by our financial partner.
                                        Users can view and watch their investment grow and redeem those funds.
                                    </li>
                                    <li>
                                        Manager application where financial managers from the financial partner can view their clients' investments and suggest accordingly.
                                    </li>
                                    <li>
                                        Content management system where site admins can approve new clients by viewing their KYC applications, add/edit/delete new funds, approve and decline user investments and redemptions.
                                    </li>
                                </ul>
                                <span style={{ marginTop: '10px', textAlign: "justify" }}>
                                    This is backed up with the backend APIs built with Node.js, and deployed using Google Firebase Cloud Functions with Pubsub support provided by Google Cloud Platform.
                                    The database is a NoSQL database using Google Firestore connected using said cloud functions.
                                </span>
                                <span style={{ marginTop: '10px', textAlign: "justify" }}>
                                    The site is also hosted using Google Firebase and Google Cloud Platform.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Box>
    )

    const vistaDescription = (
        <Box style={{ margin: "0px 100px" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justifyContent="flex-end">
                        <IconButton
                            aria-label="Back"
                            onClick={() => {setOpenProject(false); setCurProject("")}}
                        >
                            <Icon icon="akar-icons:circle-x" color="white" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Carousel>
                        <div>
                            <ReactPlayer url='https://www.youtube.com/watch?v=0jG8cE2A7R8' />
                        </div>
                        <div>
                            <img src={testimg} alt="preview-1"></img>
                            <p className="legend">Legend 1</p>
                        </div>
                    </Carousel>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="flex-start" sx={{ marginLeft: "20px" }}>
                        <Grid item xs={12}>
                            <h3 style={{ width: '100%' }}>Ticket Scanner</h3>
                        </Grid>                        
                        <Grid item xs={12} sx={{ paddingTop: '10px' }}>
                            <Grid container justifyContent="flex-start" sx={{ marginLeft: "20px" }}>
                                <span style={{ textAlign: "justify" }}>
                                    Web-based ticket scanner to assist movie employees to scan and validate tickets for cinema entry. 
                                    Main features are:
                                </span>
                                <ul style={{ marginTop: '10px', textAlign: "left" }}>
                                    <li>
                                        Scanner which uses a mobile phone camera in verifying tickets using QR codes. User is able to validate ticket numbers using a ticket number or a QR code.
                                    </li>
                                    <li>
                                        Front-end is build React.js and Javascript. Back-end is built with Node.js. 
                                    </li>
                                </ul>                                
                                <span style={{ marginTop: '10px', textAlign: "justify" }}>
                                    App is deployed and hosted with Microsoft IIS on the cinema partner's internal servers for employees.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )

    return (
        <Box className={classes.typedContainer}>
            <span style={{ fontSize: "40px", fontWeight: '400' }}>
                Projects
            </span>
            <br /><br />
            {!openProject ?
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {rampverCard}
                        {vistaScanner}
                    </Stack>
                </Slide>
                :
                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                    {curProject === 'rampver' ? rampverDescription : vistaDescription}
                </Slide>
            }
        </Box>
    )
}

export default Projects;