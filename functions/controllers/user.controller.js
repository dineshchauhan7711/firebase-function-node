// Helpers/Files
const {
     response,
     validator,
     firebase_auth,
     firebase_storage: { generateFileUrl }
} = require('../helpers');

// Models/Collections
const {
     User
} = require('../connection/db_collections');



/**
 * Register User
 */
const registerUser = async (req, res) => {
     try {
          const validation = new validator(req.body, {
               name: "required|string",
               phone_number: "required|string",
               email: "required|email|lowercase",
               password: "required|string|min:8|max:30",
               profile_image: "string",
          });
          if (validation.fails()) {
               const firstMessage = Object.keys(validation.errors.all())[0];
               return response.error(res, validation.errors.first(firstMessage));
          };

          const {
               body: {
                    name,
                    phone_number,
                    email,
                    password
               }
          } = req;

          // Check email already exists
          const user = await User.where("email", "==", email).get();
          if (user.docs.length > 0) {
               return response.error(res, 1004);
          };

          // Create User
          const userAuth = await firebase_auth.createUser(email, password);
          if (!userAuth.success) {
               return response.error(res, userAuth.message);
          };

          // Add User
          await User.doc(userAuth.user_id).set({
               name,
               phone_number,
               email,
               profile_image: null,
               role: "user",
               status: "Active",
               is_deleted: false,
               created_at: new Date(),
               updated_at: new Date()
          });

          // Success Response
          return response.success(res, 1001, null, 201);
     } catch (error) {
          console.log('error', error)
          return response.error(res, 9999);
     }
};

/**
 * Get profile
 */
const getProfile = async (req, res) => {
     try {
          const { user_id, role } = req.user;

          const user = await User.doc(user_id).get();
          const userData = user.data();

          // Response Data
          let responseData = {
               id: user.id,
               name: userData.name,
               email: userData.email,
               phone_number: userData.phone_number || null,
               role: userData.role,
               profile_image: null
          };

          // If Profile Image exists then generate url
          if (userData.profile_image) {
               responseData.profile_image = await generateFileUrl(userData.profile_image);
          };
          return response.success(res, 1003, responseData);
     } catch (error) {
          console.log('error ::>>', error)
          return response.error(res, 9999);
     }
};

/**
 * Edit profile
 */
const editProfile = async (req, res) => {
     try {
          const validation = new validator(req.body, {
               name: "string",
               phone_number: "string",
               profile_image: "string",
          });
          if (validation.fails()) {
               const firstMessage = Object.keys(validation.errors.all())[0];
               return response.error(res, validation.errors.first(firstMessage));
          };

          const {
               body: {
                    name,
                    phone_number
               },
               files,
          } = req;
          

     } catch (error) {
          console.log('error ::>>', error)
          return response.error(res, 9999);
     }
};


module.exports = {
     registerUser,
     getProfile
};