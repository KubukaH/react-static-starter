const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  author: { type: String, required: true },
  article_title: { type: String, required: true },
  article_content: { type: String, required: true },
  category: { type: String, required: true },
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

module.exports = mongoose.model('News', schema);