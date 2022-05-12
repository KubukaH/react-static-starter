const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    trackName: { type: String, unique: true, required: true },
    created: { type: Date, default: Date.now },
    updated: Date
});

schema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
     delete ret._id;
  }
});

module.exports = mongoose.model('Music', schema);