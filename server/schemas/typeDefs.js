const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input UserInput {
        username: String
        email: String
        password: String
    }

    type Query {
        helloWorld: String
        users: [User]
        user(_id: ID!): User

        login(email: String, password: String): User
    }

    type Mutation {
        addUser(input: UserInput!): User
    }
`

module.exports = typeDefs