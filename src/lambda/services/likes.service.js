const db = require('../_helpers/db');

module.exports = {
  getAll,
  getById,
  create, 
  getLikedBy
}; 

async function getAll() {
  const likes = await db.Like.find();
  return likes.map(x => basicDetails(x));
};

async function getLikedBy(id){
  const like = await db.Like.findOne({ like_to: id });
  return basicDetails(like);
};

async function getById(id) {
  const like = await getLike(id);
  return basicDetails(like);
};

async function create(id, params) {

  const like = new db.Like(params);
  like.like_to = id;

  // save Message
  await like.save();

  return basicDetails(like);
};

// Helper Functions
async function getLike(id) {
  if (!db.isValidId(id)) throw "Invalid ID";
  const like = await db.Like.findById(id);
  if (!like) throw "Not Valid Item";
  return like;
};

function basicDetails(like) {
  const { id, liked, liked_by, like_to, created } = like;
  return { id, liked, liked_by, like_to, created };
};
