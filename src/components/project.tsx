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
import vista_preview from '../contents/img/vista/vista-preview.png'
import vista_1 from '../contents/img/vista/vista-1.png';
import vista_2 from '../contents/img/vista/vista-2.png';
import vista_3 from '../contents/img/vista/vista-3.png';
import vista_4 from '../contents/img/vista/vista-4.png';
import vista_5 from '../contents/img/vista/vista-5.png';

import rampv_preview from '../contents/img/rampver/rampv-preview.png'
import rampv_1 from '../contents/img/rampver/rampver-1.png';
import rampv_2 from '../contents/img/rampver/rampver-2.png';
import rampv_3 from '../contents/img/rampver/rampver-3.png';
import rampv_4 from '../contents/img/rampver/rampver-4.png';
import rampv_5 from '../contents/img/rampver/rampver-5.png';
import rampv_6 from '../contents/img/rampver/rampver-6.png';
import rampv_7 from '../contents/img/rampver/rampver-7.png';
import rampv_8 from '../contents/img/rampver/rampver-8.png';
import rampv_9 from '../contents/img/rampver/rampver-9.png';
import rampv_10 from '../contents/img/rampver/rampver-10.png';

const useStyles = makeStyles((theme) => ({
    typedContainer: {
        width: "100%",
        padding: "40px 0px",
        background: '#3F3840',
        color: 'white',
    },
    projCard: {
        maxWidth: '345px',
        height: '350px',
        padding: "10px",
    },
    cardIcon: {
        fontSize: '28px'
    },
    mobilePreview: {
        height: '600px',
        width: 'auto !important',
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
                    image={rampv_preview}
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
                    image={vista_preview}
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
                            onClick={() => { setOpenProject(false); setCurProject("") }}
                        >
                            <Icon icon="akar-icons:circle-x" color="white" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Carousel>
                        <div>
                            <img src={rampv_1} alt="preview-1"></img>
                        </div>
                        <div>
                            <img src={rampv_2} alt="preview-2"></img>
                        </div>
                        <div>
                            <img src={rampv_3} alt="preview-3"></img>
                        </div>
                        <div>
                            <img src={rampv_4} alt="preview-4"></img>
                        </div>
                        <div>
                            <img src={rampv_5} alt="preview-5"></img>
                        </div>
                        <div>
                            <img src={rampv_6} alt="preview-6"></img>
                        </div>
                        <div>
                            <img src={rampv_7} alt="preview-7"></img>
                        </div>
                        <div>
                            <img src={rampv_8} alt="preview-8"></img>
                        </div>
                        <div>
                            <img src={rampv_9} alt="preview-9"></img>
                        </div>
                        <div>
                            <img src={rampv_10} alt="preview-10"></img>
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
                                    The site is also hosted using Google Firebase and Google Cloud Platform. Application is configured as well to be a Progressive Web App (PWA).
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
                            onClick={() => { setOpenProject(false); setCurProject("") }}
                        >
                            <Icon icon="akar-icons:circle-x" color="white" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Carousel
                        showThumbs={false}
                    >
                        <div>
                            <img src={vista_1} alt="preview-1" className={classes.mobilePreview}></img>
                        </div>
                        <div>
                            <img src={vista_2} alt="preview-2" className={classes.mobilePreview}></img>
                        </div>
                        <div>
                            <img src={vista_3} alt="preview-3" className={classes.mobilePreview}></img>
                        </div>
                        <div>
                            <img src={vista_4} alt="preview-4" className={classes.mobilePreview}></img>
                        </div>
                        <div>
                            <img src={vista_5} alt="preview-5" className={classes.mobilePreview}></img>
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