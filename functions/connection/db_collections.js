const { db } = require('./initialize_firebase');

module.exports = {
     User: db.collection('users')
};