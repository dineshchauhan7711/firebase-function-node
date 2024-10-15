require("dotenv").config();


module.exports = {

  firebase: {
    DATABASE_URL: process.env.DATABASE_URL || "firestore database url",
    STORAGE_BUCKET: process.env.STORAGE_BUCKET || "storage bucket"
  },
  email_service: {
    email: process.env.EMAIL || "email",
    password: process.env.PASSWORD || "password",
    support_center_email: process.env.SUPPORT_CENTER_EMAIL || "support@example.com"
  },
  jwt: {
    secret: process.env.JWT_SECRET || "ezezxrdctgvuhnijminivtfcrxetvyn",
    forgot_link_expiry: process.env.FORGOT_LINK_EXPIRE_TIME || "10m"
  },
  frontend_base_url: process.env.FRONTEND_BASE_URL || "http://localhost:3000",
};

