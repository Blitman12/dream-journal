import React from "react"
import Dream from "../../components/Dream"
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    title: {
        textAlign: "center"
    }
})

const dreams = [1, 2, 3]

export default function Dashboard() {
    const classes = styles()
    return (
        <div>
            <h1 className={classes.title}>"User`s" Dreams</h1>
            {dreams && dreams.map((dream, index) => {
                return <Dream key={index} index={index}/>
            })}
        </div> 
    )
}