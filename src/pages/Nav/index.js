import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Nav() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>Dream Journal</Link>
                    </Typography>
                    <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
                        <Button color="inherit">Register</Button>
                    </Link>
                    <Button color="inherit">Logout</Button>
                    <Link to="/newdream" style={{ textDecoration: "none", color: "white" }}>
                        <Button color="inherit">New Dream</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}