const newsService = require('./service');

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 405,
      body: 'Method not allowed',
    });
  }
  
  context.callbackWaitsForEmptyEventLoop = false;
  // Get all articles
  try {
    const articles = newsService.getAllArticles();
    
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(articles)
    });
  } catch (error) {
    console.log(error);

    return callback(null, {
      statusCode: 502,
      body: error
    });
  };
};