// Helpers/Files
const {
  response,
  validator,
  firebase_auth: { verifyIdToken },
} = require("../helpers");

// Models/Collections
const {
  User,
} = require("../connection/db_collections");


/**
 *  Firebase verify id token middleware
 */
const auth = async (req, res, next) => {
  try {
    const validation = new validator(req.headers, {
      authorization: "required|string",
    }, {
      "required.authorization": "Unauthorized Users.",
      "string.authorization": "Unauthorized Users.",
      "min.authorization": "Unauthorized Users.",
    });
    if (validation.fails()) {
      const firstMessage = Object.keys(validation.errors.all())[0];
      return response.error(res, validation.errors.first(firstMessage), 401);
    }

    const headerToken = req.headers.authorization;

    // Verify Id Token
    const decodedToken = await verifyIdToken(headerToken);
    if (!decodedToken.success) {
      return response.error(res, decodedToken.message, 401);
    };

    // Check if user exists
    const user = await User.doc(decodedToken.data.user_id).get();
    if (!user.exists) {
      return response.error(res, 1011, 401);
    };

    // Check if user is active
    const userData = user.data();

    // Check if user is deleted
    if (userData.is_deleted == true) {
      return response.error(res, 1012, 401);
    };

    // Check if user is active
    if (userData.status != "Active") {
      return response.error(res, 1012, 401);
    };

    req.user = {
      user_id: decodedToken.data.user_id,
      role: userData.role,
      access: userData.access,
    };
    return next();
  } catch (error) {
    console.log("Error :==>> ", error);
    return response.error(res, 9999);
  }
};

/**
 * Middleware function that checks if the user has the required permission role.
 */
const routePermission = (permissionRoles) => {
  return async function (req, res, next) {
    try {
      const { user: { role } } = req;

      if (!permissionRoles.includes(role)) {
        return response.error(res, 1013, 401);
      };

      next();
    } catch (error) {
      console.log("error in permission middleware :>> ", error);
      return response.error(res, 9999);
    }
  };
};


module.exports = {
  auth,
  routePermission
}

