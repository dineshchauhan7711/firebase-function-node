const { bucket } = require("../../connection/initialize_firebase");



/**
 * Generate file url
 */
const generateFileUrl = async (file) => {
     try {
          const options = {
               version: 'v4',
               action: 'read',
               expires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
          };

          // Check file exists
          const fileSnapshot = await bucket.file(file).exists();
          if (!fileSnapshot[0]) {
               return null;
          };

          //Get signed url
          const [url] = await bucket.file(file).getSignedUrl(options);

          return url;
     } catch (error) {
          console.error("Error in generateFileUrl :: ===>> ", error);
          return null;
     }
};

/**
 * Delete file from storage
 */
const deleteFile = async (file) => {
     try {
          // check file exists
          const fileSnapshot = await bucket.file(file).exists();
          if (!fileSnapshot[0]) {
               return;
          };

          // delete file
          await bucket.file(file).delete();
     } catch (error) {
          console.error("Error ===>> ", error);
     };
};


module.exports = {
     generateFileUrl,
     deleteFile
}