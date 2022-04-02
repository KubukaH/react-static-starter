import { fetchWrapper } from '../_helpers';

const baseUrl = `blogposts`;

export const blogpostService = {
  makepost,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

function makepost(params) {
  return fetchWrapper.post(`${baseUrl}/makepost`, params);
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
  return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params)
    .then(blog => {
      return blog;
    });
}

// prefixed with underscore because 'delete' is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
    .then(x => {
      return x;
    });
}
