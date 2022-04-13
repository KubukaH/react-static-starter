const db = require('../db');
const News = db.News;

module.exports = {
  getAllArticles
};

async function getAllArticles() {
  const articles = await News.find();
  return articles.map(x => basicDetails(x));
};

async function getNews(id) {
  if (!db.isValidId(id)) throw 'Invalid ID!';
  const news = await db.News.findById(id);
  if (!news) throw 'Poem not found';
  return news;
}

function basicDetails(news) {
  const { author, article_title, article_content, category, created, updated } = news;
  return { author, article_title, article_content, category, created, updated };
};
