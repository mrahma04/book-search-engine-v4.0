const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello world!";
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({})
          .select("-__v -password")
          .populate("savedBooks");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("ADDUSER RESOLVER", username, email, password);
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { user, token };
    },
    saveBook: async (parent, args, context) => {
      console.log("CHECK USER ID FROM CONTEXT", context.user._id);
      console.log("CHECK BOOK OBJECT INPUT FROM ARGS", args.input);

      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: args.input } },
          { new: true }
        );
        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeBook: async (parent, args, context) => {
      console.log("CHECK USER ID FROM CONTEXT", context.user._id);
      console.log("CHECK BOOK ID FROM ARGS", args.bookId);

      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: args.bookId } } },
          { new: true }
        );
        return updatedUser;
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return { user, token };
    },
  },
};

module.exports = resolvers;
