const bcrypt = require('bcrypt');

const helpers = {};

helpers.encryptPassword = async (contrasena) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(contrasena, salt);
    return hash;
  };

  helpers.matchPassword = async (password, savedPassword) => {
    try {
      return await bcrypt.compare(password, savedPassword);
    } catch (e) {
      console.log(e)
    }
  };



module.exports = helpers;