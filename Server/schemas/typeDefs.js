const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        me: User
        savedDreams: [User]
        dream: Dream
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        addDream(title: String!, date: String!, dreamContent: String!): User
        updateDream(title: String, date: String, dreamContent: String, dreamId: ID!, id: ID): User
        deleteDream(id: ID!): User
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        savedDreams: [Dream]
    }

    type Dream {
        title: String!
        date: String!
        dreamContent: String!
        id: ID
    }

    type Auth {
    token: ID!
    user: User
    }
`;



module.exports = typeDefs