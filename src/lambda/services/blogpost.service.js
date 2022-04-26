const db = require('../_helpers/db');
const Message = db.Blogpost;

module.exports = {
  makepost,
  getAll,
  getById,
  getCount,
  create,
  update,
  delete: _delete
}; 

async function makepost(params) {
  const blog = new Message(params);

  await blog.save();
}

async function getAll() {
  return await Message.find();
}

async function getCount() {
  return await Message.countDocuments({});
}

async function getById(id) {
  return await Message.findById(id);
}

async function create(messageParam) {

  const blog = new Message(messageParam);

  // save Message
  await blog.save();
}

async function update(id, params) {
  const blog = await Message.findById(id);

  // copy params to blog and save
  Object.assign(blog, params);
  blog.updated = Date.now();

  await blog.save();

  return blog;
}

async function _delete(id) {
  await Message.findByIdAndRemove(id);
}