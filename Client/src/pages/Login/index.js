import React, {useState} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

export default function Login() {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [login, { error: loginError }] = useMutation(LOGIN_USER);


    const handleLogin = (event) => {
        const { name, value } = event.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...loginForm },
            });
            Auth.login(data.loginUser.token);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <h2 style={{ textAlign: "center" }}>Login</h2>
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

                <TextField id="email" label="Email" variant="outlined" type="email" onChange={handleLogin} value={loginForm.email} name="email"/>
                <TextField id="password" label="Password" variant="outlined" type="password" onChange={handleLogin} value={loginForm.password} name="password" />
                <Button color="inherit" sx={{ background: "#322d31", width: "20px" }} type="submit" onClick={handleLoginSubmit}>Login</Button>
            </Box>
        </>
    )
}