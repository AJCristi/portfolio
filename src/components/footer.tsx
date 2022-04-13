import { Icon } from '@iconify/react';
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system"

const useStyles = makeStyles((theme) => ({
    typedContainer: {
        width: "100%",
        padding: "40px 0px",
        background: '#1F1F1F',
        color: 'white',
    },
    centered: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <footer>
            <Box className={classes.typedContainer}>
                <span style={{ fontSize: "24px", fontWeight: '200' }}>
                    Contact
                </span>
                <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box className={classes.centered}>
                        <Icon icon="mdi:gmail" color="white" style={{ fontSize: '28px', marginRight: '5px' }} />
                        <span>ajcristi96@gmail.com</span>
                    </Box>
                    <Box className={classes.centered}>
                        <Icon icon="mdi:cellphone" color="white" style={{ fontSize: '28px', marginRight: '5px' }} />
                        <Icon icon="twemoji:flag-philippines" style={{ fontSize: '28px', marginRight: '5px' }} />
                        <span>(+63)905-268-1007</span>
                    </Box>
                    <Box className={classes.centered}>
                        <Icon icon="bi:github" color="white" style={{ fontSize: '28px', marginRight: '5px' }} />
                        <a href="https://github.com/AJCristi" target="_blank" rel="noreferrer" color='white'>Github</a>
                    </Box>
                    <Box className={classes.centered}>
                        <Icon icon="akar-icons:linkedin-box-fill" color="white" style={{ fontSize: '28px', marginRight: '5px' }} />
                        <a href="https://www.linkedin.com/in/alex-cristi-0bb9bb1a2/" target="_blank" rel="noreferrer" color='white'>Linkedin</a>
                    </Box>
                </Stack>
                <br/>
                <Stack
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <span style={{ fontSize: "14px", fontWeight: '200' }}>
                        Copyright Alex Cristi
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: '200' }}>
                        Inspired by: github.com/Dorota1997/react-frontend-dev-portfolio
                    </span>
                </Stack>

            </Box>
        </footer>
    )
}

export default Footer