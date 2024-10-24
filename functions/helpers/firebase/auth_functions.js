
// Files/Helpers
const { auth } = require("../../connection/initialize_firebase");
const errorHandling = require("./error_handling");


/**
 * Create User function (firebase authentication).
 */
const createUser = async function (email, password) {
     try {
          const user = await auth.createUser({
               email,
               password
          });

          return {
               success: true,
               user_id: user.uid
          };
     } catch (error) {
          console.log("Error :==>> ", error);
          const message = await errorHandling(error.code);
          return {
               success: false,
               message
          }
     }
};

/**
 * Verify Id Token function (firebase authentication).
 */
const verifyIdToken = async function (token) {
     try {
          const decodedToken = await auth.verifyIdToken(token);
          return {
               success: true,
               data: decodedToken
          };
     } catch (error) {
          console.log("Error :==>> ", error);
          const message = await errorHandling(error.code);
          return {
               success: false,
               message
          }
     }
};

/**
 * Update password function (firebase authentication).
 */
const updatePassword = async function (user_id, password) {
     try {
          await auth.updateUser(user_id, {
               password
          });
          return {
               success: true
          };
     } catch (error) {
          console.log("Error :==>> ", error);
          const message = await errorHandling(error.code);
          return {
               success: false,
               message
          }
     }
};

/**
 * Update Email function (firebase authentication).
 */
const updateEmail = async function (user_id, email, password) {
     try {
          await auth.updateUser(user_id, {
               email,
               password
          });
          return {
               success: true
          };
     } catch (error) {
          console.log("Error :==>> ", error);
          const message = await errorHandling(error.code);
          return {
               success: false,
               message
          }
     }
};

/***
 * Delete user function (firebase authentication).
 */
const deleteUser = async function (user_id) {
     try {
          await auth.deleteUser(user_id);
          return {
               success: true
          };
     } catch (error) {
          console.log("Error :==>> ", error);
          const message = await errorHandling(error.code);
          return {
               success: false,
               message
          }
     }
};


module.exports = {
     createUser,
     verifyIdToken,
     updatePassword,
     updateEmail,
     deleteUser
};