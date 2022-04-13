const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

//Export Modules
module.exports = {
  News: require('./news/model'),
  isValidId
};

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}
