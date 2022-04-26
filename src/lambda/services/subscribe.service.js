const db = require('../_helpers/db');
const Subscribe = db.Subscribe;

module.exports = {
  saveEmail,
  getAll,
  getById,
  getCount,
  create,
  delete: _delete
}; 

async function saveEmail(params) {
  //validate email first
  if (await Subscribe.findOne({ email: params.email })) {
    //send already exists email to avoid email duplication or enumeration
    throw 'Subscriber email "' + params.email + '" is already registered';
  }

  const email = new Subscribe(params);

  await email.save();
}

async function getAll() {
  return await Subscribe.find();
}

async function getCount() {
  return await Subscribe.countDocuments({});
}

async function getById(id) {
  return await Subscribe.findById(id);
}

async function create(subscribeParam) {
  // validate
  if (await Subscribe.findOne({ email: subscribeParam.email })) {
    throw 'Subscribe email "' + subscribeParam.email + '" is already registered';
  }

  const email = new Subscribe(subscribeParam);

  // save subscribe
  await email.save();
}

async function _delete(id) {
  await Subscribe.findByIdAndRemove(id);
}