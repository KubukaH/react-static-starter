import { fetchWrapper } from '../_helpers';

const baseUrl = `http://localhost:9000/subscribe`;

export const subscribeService = {
  saveEmail,
  getAll,
  getById,
  create,
  delete: _delete,
};

function saveEmail(params) {
  return fetchWrapper.post(`${baseUrl}/saveemail`, params);
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

// prefixed with underscore because 'delete' is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
    .then(x => {
      return x;
    });
}
