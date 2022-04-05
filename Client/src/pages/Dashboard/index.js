import React from "react"
import Dream from "../../components/Dream"
import { makeStyles } from '@mui/styles';
import { useQuery } from '@apollo/client';
import { GET_ME } from "../../utils/queries";
import Auth from "../../utils/auth"

const styles = makeStyles({
    title: {
        textAlign: "center"
    }
})



export default function Dashboard() {
    const classes = styles()
    const {loading, data, error} = useQuery(GET_ME)

    const userData = data?.me 
    const dreams = userData?.savedDreams

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1 className={classes.title}>{data.me.username}`s dreams</h1>
            {dreams && dreams.map((dream) => {
                return <Dream key={dream.id} dream={dream} id={dream.id}/>
            })}
        </div>
    )
}