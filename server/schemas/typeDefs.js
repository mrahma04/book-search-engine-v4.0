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

    type Auth {
        token: ID!
        user: User
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

    input BookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        helloWorld: String
        users: [User]
        user(_id: ID!): User
        me: User

        login(email: String, password: String): Auth
    }

    type Mutation {
        addUser(input: UserInput!): Auth
        saveBook(_id: ID!, input: BookInput!): User
        removeBook(_id: ID!, bookId: String!): User
    }
`

module.exports = typeDefs