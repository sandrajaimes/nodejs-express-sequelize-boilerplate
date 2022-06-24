const httpStatus = require('http-status');
const { User } = require('../repository');

const getUsers = async () => {
    return User.queryUsers();
};

const createUser = async (userBody) => {
    return User.createUser(userBody);
};

const searchUserByEmail = async (email) => {
    return await User.findUserByEmail(email)
};

module.exports = {
    createUser,
    getUsers,
    searchUserByEmail
};
