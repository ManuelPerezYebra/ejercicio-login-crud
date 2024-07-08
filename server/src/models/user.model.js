const mongoose = require('mongoose');
const UserScheme = require('../schemes/user.scheme');
const UserModel = mongoose.model('Users', UserScheme, 'users');
module.exports = UserModel;
