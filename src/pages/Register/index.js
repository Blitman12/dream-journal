import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Register() {
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Register</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "75px"
                }}
                noValidate
                autoComplete="off"
            >

                <TextField id="username" label="Username" variant="outlined" type="username" />
                <TextField id="email" label="Email" variant="outlined" type="email" />
                <TextField id="password" label="Password" variant="outlined" type="password" />
                <Button color="inherit" sx={{ background: "#322d31", width: "20px" }} type="submit">Register</Button>
            </Box>
        </>
    )
}