
const config = require('../connection/config');

/***
 * Get File URL
 */
function getFileURL(folderName, fileName) {
    return config.project_path + `/${folderName}/` + fileName;
};

module.exports = {
    getFileURL,
};
