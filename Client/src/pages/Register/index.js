import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

export default function Register() {
    const [registerForm, setRegisterForm] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [addUser, { error: registerError }] = useMutation(ADD_USER);

    const handleRegister = (event) => {
        const { name, value } = event.target;
        setRegisterForm({
            ...registerForm,
            [name]: value,
        });
    };


    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...registerForm },
            });
            Auth.login(data.addUser.token);
        } catch (error) {
            console.error(error);
        }
    };


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

                <TextField id="username" label="Username" variant="outlined" type="username" name="username" onChange={handleRegister} value={registerForm.username}/>
                <TextField id="email" label="Email" variant="outlined" type="email" name="email" onChange={handleRegister} value={registerForm.email}/>
                <TextField id="password" label="Password" variant="outlined" type="password" name="password" onChange={handleRegister} value={registerForm.password}/>
                <Button color="inherit" sx={{ background: "#322d31", width: "20px" }} type="submit" onClick={handleRegisterSubmit}>Register</Button>
            </Box>
        </>
    )
}