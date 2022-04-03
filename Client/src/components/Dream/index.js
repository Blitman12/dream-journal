import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    dreamTitle: {
        textAlign: "center"
    },
})

export default function Dream(props) {
    const classes = styles()
    const dream = props.dream
    console.log(dream)
    return (
        <Card sx={{ minWidth: 275, maxWidth: 600, margin: "0 auto", marginBottom: "30px" }}>
            <CardContent>
                <Typography variant="h5" component="div" className={classes.dreamTitle}>
                    {dream.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Dreamt on {dream.date}
                </Typography>
                <Typography variant="body2">
                {dream.dreamContent}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    )
}