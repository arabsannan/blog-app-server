const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Comment {
    id: ID!
    text: String
    blog: ID!
  }

  type Blog {
    id: ID!
    title: String!
    body: String!
    author: String
    comments: [ID]
  }

  input BlogInput {
    title: String
    body: String
  }

  input AuthorInput {
    name: String!
    description: String
  }

  type Query {
    blogs: [Blog]!
    blog(id: ID!, title: String!): Blog
    comments(blog: ID!): [Comment]
    comment(id: ID!, blog: ID!): Comment
  }

  type Mutation {
    createBlog(title: String!, body: String!, author: AuthorInput): Blog
    deleteBlog(title: String): String
    updateBlog(id: ID, blog: BlogInput): Blog
    addComment(blog: ID!, text: String!): Comment
    deleteComment(id: ID!, blog: ID!): String
  }
`;

module.exports = typeDefs;
