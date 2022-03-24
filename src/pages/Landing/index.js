import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import {motion} from "framer-motion"
import LandingPhoto from "../../assets/landingPhoto.jpg"

const useStyles = makeStyles({
    landingImage: {
        background: `url(${LandingPhoto}) no-repeat center center fixed`,
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        backgroundSize: "cover"
    },
    landingBio: {
        textAlign: "center",
        fontSize: "1.3em",
        "& p": {
            fontSize: "0.8em",
            fontStyle: "italic"
        }
    },
    landingInfoContainer: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "100px",
        flexWrap: "wrap"
    },
    landingButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }
})

export default function Landing() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.landingBio}>
                <h1>Welcome to Dream Journal <span><HotelIcon sx={{ fontSize: "30px" }} /></span></h1>
                <p>A safe and secure place to store your dreams</p>
            </div>
            <div className={classes.landingInfoContainer}>
                <div>
                    <h2>Why Record Your Dreams?</h2>
                    <ul>
                        <motion.li whileHover={{scale: 1.1}}>Process emotions</motion.li>
                        <motion.li whileHover={{scale: 1.1}}>Reveals dream patterns</motion.li>
                        <motion.li whileHover={{scale: 1.1}}>Increase creativity</motion.li>
                        <motion.li whileHover={{scale: 1.1}}>Solve problems</motion.li>
                        <motion.li whileHover={{scale: 1.1}}>Increase self-awareness</motion.li>
                        <motion.li whileHover={{scale: 1.1}}>Helps <strong>Lucid Dreaming</strong></motion.li>
                    </ul>
                </div>
                <div className={classes.landingButtons}>
                    <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                        <Button color="inherit" sx={{ background: "#322d31", width: "100%" }}>Login</Button>
                    </Link>
                    <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
                        <Button color="inherit" sx={{ background: "#322d31" }}>Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}