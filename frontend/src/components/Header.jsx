import { Box, Paper, IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { ThemeContext } from './ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const headerStyles = {
        container: {
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        paper: {
            width: "500px",
            height: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: theme === 'dark' ? '#333' : '#fff'
        }
    };

    return (
        <Box sx={headerStyles.container}>
            <Paper elevation={5} sx={headerStyles.paper}>
                <Tooltip title="Toggle Theme">
                    <IconButton onClick={toggleTheme}>
                        <CreateIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Forward">
                    <IconButton>
                        <ArrowForwardIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Auto">
                    <IconButton>
                        <HdrAutoIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Fix">
                    <IconButton>
                        <AutoFixNormalIcon />
                    </IconButton>
                </Tooltip>
            </Paper>
        </Box>
    );
};

export default Header; 