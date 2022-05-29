const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    id: String
    username: String
}

type Query {
    users: [User]
}
`


module.exports = typeDefs