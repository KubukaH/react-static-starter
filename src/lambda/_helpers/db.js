const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

//Export Modules
module.exports = {
  Account: require('../models/account.model'),
  RefreshToken: require('../models/refresh-token.model'),
  Blogpost: require('../models/blogpost.model'),
  Contactus: require('../models/contactus.model'),
  Subscribe: require('../models/subscribe.model'),
  News: require('../models/news.model'),
  Like: require('../models/likes.model'),
  Music: require('../models/music.model'),
  Worker: require('../models/workers.model'),
  Project: require('../models/project.model'),
  MailingList: require('../models/mailing.model'),
  isValidId
};

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
};
