const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  project_author: { type: String, required: true },
  project_title: { type: String, required: true, unique: true },
  project_description: { type: String, required: true },
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

module.exports = mongoose.model('Project', schema);