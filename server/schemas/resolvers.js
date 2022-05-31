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
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({})
        .select('-__v -password')
        .populate('savedBooks')
      
      return userData
      }
      throw new AuthenticationError('Not logged in')
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args.input);
      const token = signToken(user);
      return { user, token };
    },
    saveBook: async (parent, args) => {
      console.log("CHECK USER ID FROM ARGS", args._id);
      console.log("CHECK BOOK OBJECT INPUT FROM ARGS", args.input);
      const user = await User.findByIdAndUpdate(
        { _id: args._id },
        { $addToSet: { savedBooks: args.input } },
        { new: true }
      );
      return user;
    },
    removeBook: async (parent, args) => {
      console.log("CHECK USER ID FROM ARGS", args._id);
      console.log("CHECK BOOK ID FROM ARGS", args.bookId);
      const updatedUser = await User.findByIdAndUpdate(
        { _id: args._id },
        { $pull: { savedBooks: { bookId: args.bookId } } },
        { new: true }
      );
      return updatedUser;
    },
  },
};

module.exports = resolvers;
