const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type User {
        name: String!
        age: Int!
    }

    type TestType {
        count: Int!
        users: [User!]
    }

    type Todo {
        id: ID!
        title: String!
        done: Boolean!
        createdAt: String
        updatedAt: String
    }

    type Query {
        test: TestType!
        random(min: Int!, max: Int!, count: Int!): [Float!]!
        getTodos: [Todo!]!
    }

    input UserInput {
        name: String!
        age: Int!
    }

    input TodoInput {
        title: String!
    }

    type Mutation {
        addTestUser(user: UserInput!): User!
        createTodo(todo: TodoInput): Todo!
    }
`)