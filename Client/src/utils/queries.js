import { gql } from '@apollo/client';


export const GET_ME = gql`
    query findUser {
        me {
            _id
            username
            email
            savedDreams {
                id
                date 
                dreamContent
                title
            }
        }
    }
`