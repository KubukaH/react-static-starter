import { fetchWrapper } from '@/_helpers';

const baseUrl = `http://localhost:9000/likes`;

export const likeService = {
  create,
  getAll,
  getById,
  getLikedBy
};

function create(id, params) {
  return fetchWrapper.post(`${baseUrl}/${id}/like`, params);
};

function getAll() {
  return fetchWrapper.get(baseUrl).then(
    (likes) => {
      return likes;
    }
  );
};

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function getLikedBy(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}
