import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    title: {
        textAlign: "center"
    },
    dreamContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "20px",
        marginTop: "50px"
    },
    innerDreamContainer: {
        display: "flex",
        justifyContent: "center"
    },
    dreamTitle: {
        width: "90%",
        margin: "10px"
    },
    dreamItem: {
        margin: "10px"
    },
    dreamContent: {
        margin: "10px",
        width: "90%"
    },

    dreamDate: {
        margin: "10px",
        width: "80px",
    }
})

export default function NewDream() {
    const classes = styles()
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <h1 className={classes.title}>Your Dream</h1>
            <div className={classes.dreamContainer}>
                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    type="text"
                    className={classes.dreamTitle}
                />
                <TextField
                    className={classes.dreamContent}
                    size="medium"
                    id="content"
                    label="Content"
                    variant="outlined"
                    type="text"
                    multiline
                    rowsMax={Infinity}
                />
                <DatePicker
                    selected={startDate}
                    onChange={(Date) => setStartDate(Date)}
                    className={classes.dreamDate}
                    maxDate={new Date()}
                />
                <Button
                    className={classes.dreamItem}
                    color="inherit"
                    sx={{ background: "#322d31", width: "20px" }}
                    type="submit">
                    Submit
                </Button>
            </div>
        </div>
    )
}