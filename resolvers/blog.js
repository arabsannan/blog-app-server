const { Blog } = require("../models/blog");
const { Comment } = require("../models/comment");

const resolvers = {
  Query: {
    //  Using mongodb find({}) queries all the objects
    blogs: async () => Blog.find({}),
    blog: async (parent, args) =>
      Blog.findOne({ id: args.id, title: args.title }),
    comments: async (parent, args) => Comment.find({blog: args.blog }),
    comment: async (parent, args) =>
      Comment.findOne({ id: args.id, blog: args.blog }),
  },

  Mutation: {
    // Mutation for Blog
    createBlog: async (_, args) => {
      let post = new Blog(args);
      post.save();
      return post;
    },
    deleteBlog: async (_, args) => {
      const { title } = args;
      console.log(title);
      await Blog.findOneAndDelete({ title: title });
      return `Blog with title: '${title}' is deleted`;
    },
    updateBlog: async (_parent, args, _context, _info) => {
      const { id } = args;
      const { title, body } = args.blog;
      let update = {};
      if (title !== undefined) {
        update.title = title;
      }

      if (body !== undefined) {
        update.body = body;
      }
      const post = await Blog.findByIdAndUpdate(id, update, { updated: true });
      return post;
    },

    //Mutation for Comments
    addComment: async (_, args) => {
      let comment = new Comment(args);
      comment.save();
      return comment;
    },
    deleteComment: async (_, args) => {
      const { id, blog } = args;
      await Comment.findOneAndDelete({ id: id, blog: blog });
      return `Comment with: '${id}' is deleted`;
    },
  },
};

module.exports = resolvers;
