import { Box, Button } from '@mui/material';
import React from 'react';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

const Bottom = () => {
    const { theme } = useContext(ThemeContext);

    const containerStyles = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        padding: '10px',
        backgroundColor: theme === 'dark' ? '#333' : '#fff'
    };

    const buttonStyles = {
        minWidth: '150px'
    };

    return (
        <Box sx={containerStyles}>
            <Button 
                color='success' 
                variant='contained'
                sx={buttonStyles}
            >
                Send Request
            </Button>
            <Button 
                color='info' 
                variant='contained'
                sx={buttonStyles}
            >
                Talk to Chat
            </Button>
        </Box>
    );
};

export default Bottom; 