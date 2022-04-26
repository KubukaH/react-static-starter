const db = require('../_helpers/db');
const Message = db.Contactus;

module.exports = {
  sendmessage,
  getAll,
  getById,
  create,
  delete: _delete
}; 

async function sendmessage(params) {
  const contact = new Message(params);

  await contact.save();
}

async function getAll() {
  const messages = await Message.find();
  return messages.filter(x => basicDetails(x));
};

async function getById(id) {
  const message = await getMessage(id);
  return basicDetails(message);
};

async function create(messageParam) {

  const contact = new Message(messageParam);

  // save Message
  await contact.save();
}

async function _delete(id) {
  const message = await getMessage(id);
  await message.remove();
};

// Helper functions

async function getMessage(id) {
  if (!id) throw "Invalid ID!";
  const message = await Message.findById(id);
  if(!message) throw "Message not found";
  return message;
};

function basicDetails(msg) {
  const {id, names, email, message, created } = msg;
  return {id, names, email, message, created };
};