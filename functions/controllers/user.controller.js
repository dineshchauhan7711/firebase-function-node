// Helpers/Files
const {
     response,
     validator,
} = require('../helpers');




/***
 * Register User
 */
const registerUser = async (req, res) => {
     try {
          response.success(res, 1001);
     } catch (error) {
          console.log('Error :>> ', error);
          response.error(res, 9999);
     }
};


module.exports = {
     registerUser
};