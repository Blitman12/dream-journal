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
    return (
        <Card sx={{ minWidth: 275, maxWidth: 600, margin: "0 auto", marginBottom: "30px" }}>
            <CardContent>
                <Typography variant="h5" component="div" className={classes.dreamTitle}>
                    Dream Title 
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Dreamt on 3/22/2022
                </Typography>
                <Typography variant="body2">
                I'm baby seitan kombucha literally PBR&B echo park keffiyeh pug irony schlitz retro vaporware sartorial. Pork belly lyft vinyl, readymade stumptown bespoke gentrify umami franzen tofu ethical tumblr plaid brunch food truck. Hashtag pinterest vice tilde typewriter brunch shoreditch affogato snackwave. Brunch seitan lumbersexual umami letterpress banjo palo santo vice yuccie post-ironic. Schlitz live-edge tumeric chartreuse.
                Irony whatever everyday carry, cornhole pour-over ugh keffiyeh cold-pressed fam roof party food truck umami live-edge. Forage normcore pok pok, +1 hashtag venmo cray street art selvage shabby chic. Flannel iceland tumeric stumptown vexillologist skateboard forage pour-over bicycle rights thundercats small batch edison bulb. Seitan truffaut salvia vexillologist schlitz, VHS small batch lyft next level tofu la croix letterpress. Salvia chia vape freegan, whatever poutine stumptown. Deep v forage blog, occupy farm-to-table cray activated charcoal succulents neutra.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    )
}