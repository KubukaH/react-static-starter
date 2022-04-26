const db = require('../_helpers/db');
const News = db.News;

module.exports = {
  saveNews,
  getAll,
  getById,
  create,
  update,
  delete: _delete
}; 

async function saveNews(params) {
  const article = new News(params);

  await article.save();
};

async function getAll() {
  const articles = await News.find();
  return articles.map(x => basicDetails(x));
};

async function getById(id) {
  const article = await getArticle(id);
  return basicDetails(article);
};

async function create(newsParam) {

  const article = new News(newsParam);

  // save News
  await article.save();

  return basicDetails(article);
}

async function update(id, params) {
  const article = await getArticle(id);

  // copy params to article and save
  Object.assign(article, params);
  article.updated = Date.now();

  await article.save();

  return basicDetails(article);
}

async function _delete(id) {
  const article = await getArticle(id);
  await article.remove();
};

// Helper functions
async function getArticle(id) {
  if (!db.isValidId(id)) throw 'Invalid ID';
  const article = await News.findById(id);
  if (!article) throw 'Article not found';
  return article;
}

function basicDetails(article){
  const { id, author, article_title, article_content, category, created, updated } = article;
  return {id, author, article_title, article_content, category, created, updated  };
};