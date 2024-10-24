const MESSAGES = {

  // User Authentication
  "1001": "Sign up successfully",
  "1002": "Sign in successfully",
  "1003": "Get profile successfully",
  "1004": "Already registered with this email !",
  "1005": "Please enter correct email and password",
  "1006": "Logout successfully",
  "1007": "User not found!",
  "1008": "Profile updated successfully!",
  "1009": "Get users successfully.",
  "1010": "User status updated successfully.",
  "1011": "Unauthorized User.",
  "1012": "Your account has been disabled. Please contact admin.",
  "1013": "You have not permission to access this page.",
  "1014": "Error when sending a mail.",
  "1020": "Email is not associated with any account. Please sign up first.",
  "1021": "Please check your email to reset your password.",
  "1022": "Password updated successfully.",
  "1023": "Error while creating token.",
  "1024": "Token expired. Please try again.",
  "1026": "User deleted successfully.",


  // Common
  "9000": "Please Enter Valid data!",
  "9001": "Not found",
  "9999": "Something went wrong!",
};

module.exports.getMessage = function (messageCode) {
  if (isNaN(messageCode)) {
    return messageCode;
  }
  return messageCode ? MESSAGES[messageCode] : "";
};
