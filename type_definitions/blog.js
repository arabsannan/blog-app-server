const { gql } = require("apollo-server-express");

//added the id in here its best to query by id not title to be able to delete
const typeDefs = gql`
  type Comment {
    id: ID
    text: String
    date: String
  }

  type Blog {
    id: ID!
    title: String!
    body: String!
    author: String
    comments: [String]
  }

  input BlogInput {
    title: String
    body: String
  }

  type Query {
    blogs: [Blog]!
    blog(title: String!): Blog
  }

  type Mutation {
    createBlog(title: String!, body: String!, author: String): Blog
    deleteBlog(title: String): String
    updateBlog(id: ID, blog: BlogInput): Blog
    addComment(text: String): Comment
  }
`;

module.exports = typeDefs;
