import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
        token
        user {
        _id
        username
        email
        }
    }
}
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        user {
            _id
        }
        token
    }
}
`

export const ADD_DREAM = gql`
mutation addDream($title: String!, $date: String!, $dreamContent: String!) {
        addDream(title: $title, date: $date, dreamContent: $dreamContent) {
        username
        savedDreams {
            title
            date
            dreamContent
    }
}
}
`