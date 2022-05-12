const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  blog_title: { type: String, required: true },
  blog_message: { type: String },
  created: { type: Date, default: Date.now },
  updated: Date
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      // remove these props when object is serialized
      delete ret._id;
    }
});

module.exports = mongoose.model('Blogpost', schema);