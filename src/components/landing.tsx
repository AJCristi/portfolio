import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TypeIt from "typeit-react";
import { Icon } from '@iconify/react';

import { Box, Grid, Stack } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    typedContainer: {
        height: "100vh",
        width: "100%",
        backgroundColor: "#e9d5a1",
        display: 'flex',
        flexDirection: 'column',
    },
    displayIcon: {
        fontSize: '120px'
    }
}));


function Landing() {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Stack
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: '20vh' }}
            >
                <Icon icon="bi:code" className={classes.displayIcon} />
                <Icon icon="ant-design:code-sandbox-outlined" className={classes.displayIcon} />
                <Icon icon="bi:code-slash" className={classes.displayIcon} />
            </Stack>
            <Stack
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: '20px' }}
            >
                <span style={{ fontSize: "76px", fontWeight: '300' }}>
                    <TypeIt
                        options={{ cursor: false }}
                        getBeforeInit={(instance) => {
                            instance.type("Alex").pause(750).type(" ").pause(400).type("Cristi");
                            return instance;
                        }}
                    />
                </span>
                <h3 style={{ fontSize: "60px", fontWeight: '300' }}>
                    <TypeIt
                        options={{ cursor: false }}
                        getBeforeInit={(instance) => {
                            instance.pause(1000).type("Full-stack").pause(750).type(" ").pause(400).type("Engineer");
                            return instance;
                        }}
                    />
                </h3>
            </Stack>
            <div style={{ height: '100%', paddingTop: "400px" }}>
                <Icon icon="bi:chevron-down" style={{ fontSize: '30px' }} />
            </div>
        </Box >

    )
}

export default Landing;