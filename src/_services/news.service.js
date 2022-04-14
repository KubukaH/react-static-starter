import { fetchWrapper } from '@/_helpers';
// import { server } from "../constants";

const baseUrl = `/.netlify/functions/news/controller`;

export const newsService = {
  saveNews,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

function saveNews(params) {
  return fetchWrapper.post(`${baseUrl}/savenews`, params);
}

function getAll() {
  return fetchWrapper.get(baseUrl).then(
    (items) => {
      return items;
    }
  );
};

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
  return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params)
    .then(article => {
      return article;
    });
}

// prefixed with underscore because 'delete' is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
    .then(x => {
      return x;
    });
}
