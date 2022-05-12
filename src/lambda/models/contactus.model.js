const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  names: { type: String },
  email: { type: String },
  message: { type: String, required: true },
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

module.exports = mongoose.model('Contactus', schema);