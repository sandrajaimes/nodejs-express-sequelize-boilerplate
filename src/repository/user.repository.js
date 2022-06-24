const models = require('../data/models/index')
const clientModel = models.Client;

const createUser = (userBody) => {
    console.log('birthdate', userBody.birthdate)
    return clientModel.create({
        firstName: userBody.firstName,
        lastName: userBody.lastName,
        email: userBody.email,
        birthdate: userBody.birthdate
    })
};

const findUserByEmail = (email) => {
    return clientModel.findOne({
        where: {
            email
        }
    })
};

const queryUsers = () => {
    return clientModel.findAll();
};

module.exports = {
    createUser,
    queryUsers,
    findUserByEmail
};
