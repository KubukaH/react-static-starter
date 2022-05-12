const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  liked: Boolean,
  liked_by: { type: String },
  like_to: { type: String },
  created: { type: Date, default: Date.now }
});

schema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
    delete ret._id;
  }
});

module.exports = mongoose.model('Like', schema);