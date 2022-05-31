const { User } = require("../models");

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
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args.input);
      return user;
    },
  },
};

module.exports = resolvers;
