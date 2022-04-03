import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from '@mui/styles';
import { useMutation } from "@apollo/client";
import { ADD_DREAM } from "../../utils/mutations";

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
    const formatDate = (date) => {
        let newDate = date.toString().split(" ").slice(1, 4)
        // const months = { "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5, "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11 }
        // let monthNum = 0;
        // if (months[newDate[0]]) {
        //     monthNum = months[newDate[0]]
        // }
        // let year = newDate[2]
        // let month = monthNum
        // let day = newDate[1]
        // let correctDate = new Date(year, month, day)
        // setStartDate(correctDate)
        return newDate.join(" ")
    }
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState({
        title: "",
        date: formatDate(startDate),
        dreamContent: ""
    })
    const [addDream, { error: dreamError }] = useMutation(ADD_DREAM);

    const handleFormData = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let customDate = formatDate(startDate)
        setFormData({ ...formData, date: customDate })
        try {
            await addDream({
                variables: formData
            })
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <div>
            <h1 className={classes.title}>Your Dream</h1>
            <div className={classes.dreamContainer}>
                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    type="text"
                    name="title"
                    value={formData.title}
                    className={classes.dreamTitle}
                    onChange={handleFormData}
                />
                <TextField
                    className={classes.dreamContent}
                    size="medium"
                    name="dreamContent"
                    onChange={handleFormData}
                    id="content"
                    label="Content"
                    variant="outlined"
                    value={formData.dreamContent}
                    type="text"
                    multiline
                    rowsMax={Infinity}
                />
                <DatePicker
                    selected={startDate}
                    name="date"
                    onChange={(Date) => setStartDate(Date)}
                    className={classes.dreamDate}
                    maxDate={new Date()}
                />
                <Button
                    className={classes.dreamItem}
                    color="inherit"
                    sx={{ background: "#322d31", width: "20px" }}
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}