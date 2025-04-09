import { ThemeContext } from './ThemeContext';
import { Paper, Box, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import React, { useContext, useState, useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import DeleteIcon from '@mui/icons-material/Delete';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ClearIcon from '@mui/icons-material/Clear';

const Sketch = () => {
    const { theme } = useContext(ThemeContext);
    const [strokeColor, setStrokeColor] = useState('#000000');
    const [isEraser, setIsEraser] = useState(false);
    const [showClearDialog, setShowClearDialog] = useState(false);
    const [showColorPalette, setShowColorPalette] = useState(false);
    const canvasRef = useRef();

    const colors = [
        '#000000', // Black
        '#FF0000', // Red
        '#00FF00', // Green
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
        '#FFFFFF'  // White
    ];

    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
        width: '100%',
        height: '100%'
    };

    const paperStyles = {
        height: '70%',
        width: '100%',
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        position: 'relative'
    };

    const controlsStyles = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        display: 'flex',
        gap: '5px',
        zIndex: 1
    };

    const colorPaletteStyles = {
        position: 'absolute',
        top: '50px',
        right: '10px',
        display: showColorPalette ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '5px',
        backgroundColor: theme === 'dark' ? '#444' : '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    };

    const colorButtonStyles = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '2px solid #ccc',
        cursor: 'pointer'
    };

    const handleColorSelect = (color) => {
        setStrokeColor(color);
        setIsEraser(false);
        setShowColorPalette(false);
    };

    const handleEraserClick = () => {
        setIsEraser(!isEraser);
        setStrokeColor(theme === 'dark' ? '#333' : '#fff');
        setShowColorPalette(false);
    };

    const handleClearCanvas = () => {
        if (canvasRef.current) {
            canvasRef.current.clearCanvas();
        }
        setShowClearDialog(false);
    };

    const handleColorPaletteClick = () => {
        setShowColorPalette(!showColorPalette);
        setIsEraser(false);
    };

    return (
        <Paper elevation={5} sx={paperStyles}>
            <Box sx={controlsStyles}>
                <Tooltip title="Eraser">
                    <IconButton 
                        onClick={handleEraserClick}
                        sx={{ 
                            backgroundColor: isEraser ? '#ccc' : 'transparent',
                            '&:hover': { backgroundColor: '#eee' }
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Color Palette">
                    <IconButton 
                        onClick={handleColorPaletteClick}
                        sx={{ 
                            backgroundColor: showColorPalette ? '#ccc' : 'transparent',
                            '&:hover': { backgroundColor: '#eee' }
                        }}
                    >
                        <ColorLensIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Clear Canvas">
                    <IconButton 
                        onClick={() => setShowClearDialog(true)}
                        sx={{ 
                            '&:hover': { backgroundColor: '#eee' }
                        }}
                    >
                        <ClearIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={colorPaletteStyles}>
                {colors.map((color) => (
                    <Box
                        key={color}
                        sx={{
                            ...colorButtonStyles,
                            backgroundColor: color,
                            border: strokeColor === color ? '2px solid #000' : '2px solid #ccc'
                        }}
                        onClick={() => handleColorSelect(color)}
                    />
                ))}
            </Box>
            <ReactSketchCanvas
                ref={canvasRef}
                style={styles}
                width="100%"
                height="100%"
                strokeWidth={4}
                strokeColor={strokeColor}
                eraserWidth={isEraser ? 20 : 0}
            />
            <Dialog
                open={showClearDialog}
                onClose={() => setShowClearDialog(false)}
                aria-labelledby="clear-dialog-title"
            >
                <DialogTitle id="clear-dialog-title">Clear Canvas</DialogTitle>
                <DialogContent>
                    Are you sure you want to clear the canvas? This action cannot be undone.
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowClearDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClearCanvas} color="error" variant="contained">
                        Clear
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default Sketch; 