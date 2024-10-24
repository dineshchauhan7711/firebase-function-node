/**
 * Return custom error messages
 */
const ErrorHandling = async (error) => {
  let message = "Something went wrong!";
  switch (error) {
    case "auth/email-already-exists":
      message = "The provided email is already in use. Please use sign in instead of creating new account";
      break;

    case "auth/email-already-in-use":
      message = "The provided email is already in use. Please use sign in instead of creating new account";
      break;

    case "auth/invalid-credential":
      message = "Your email or password is wrong";
      break;

    case "auth/invalid-email":
      message = "Your email is invalid";
      break;

    case "auth/invalid-password":
      message = "Password must be at least six characters";
      break;

    case "auth/weak-password":
      message = "Password must be at least six characters";
      break;

    case "auth/user-not-found":
      message = "User not found in our records";
      break;

    case "auth/wrong-password":
      message = "Your password is wrong";
      break;

    case "auth/too-many-requests":
      message = "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
      break;

    case "auth/argument-error":
      message = "Unauthorized";
      break;

    case "auth/id-token-expired":
      message = "Token has expired.";
      break;

    case "auth/id-token-revoked":
      message = "Token has been revoked.";
      break;

    case "auth/invalid-id-token":
      message = "Invalid token.";
      break;

    default:
      message = "Something went wrong!";
      break;
  }
  return message;
};


module.exports = ErrorHandling;
