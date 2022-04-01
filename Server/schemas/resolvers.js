const {User} = require("../models")
const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select("-__v -password")
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },  
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addDream: async (parent, {title, date, dreamContent, id}) => {
            return await User.findOneAndUpdate(
                {_id: id},
                {$addToSet: {savedDreams: {title: title, date: date, dreamContent: dreamContent}}},
                {new: true, runValidators: true}
            )
        },
        updateDream: async (parent, {title, date, dreamContent, id, dreamId}) => {
            const user = await User.findById(id)
            const dream = await user.savedDreams.id(dreamId)
            dream.set(title, date, dreamContent)
            return user
            // console.log(dreams.savedDreams)
            // return dreams
        }
    }
}

module.exports = resolvers;