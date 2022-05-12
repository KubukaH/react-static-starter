const db = require('../_helpers/db');
const MailingList = db.MailingList;

module.exports = {
  saveList,
  getAll,
  getById,
  delete: _delete
}; 

async function saveList(params) {
  // validate
  if (await db.MailingList.findOne({ email: params.email })) {
    throw 'Email "' + params.email + '" is already subscribed.';
  };

  const mail = new MailingList(params);

  await mail.save();
};

async function getAll() {
  const mlists = await MailingList.find();
  return mlists.map(x => basicDetails(x));
};

async function getById(id) {
  const mail = await getArticle(id);
  return basicDetails(mail);
};

async function _delete(id) {
  const mail = await getArticle(id);
  await mail.remove();
};

// Helper functions
async function getArticle(id) {
  if (!db.isValidId(id)) throw 'Invalid ID';
  const mail = await MailingList.findById(id);
  if (!mail) throw 'Mailing List not found';
  return mail;
}

function basicDetails(mail){
  const { id, names, email, termsOfUse, created, updated } = mail;
  return {id, names, email, termsOfUse, created, updated  };
};