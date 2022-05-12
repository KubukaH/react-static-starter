import { fetchWrapper } from '@/_helpers';

const baseUrl = `http://localhost:9000/mailing`;

export const mailingService = {
  save,
  getAll,
  getById,
  delete: _delete,
};

function save(params) {
  return fetchWrapper.post(`${baseUrl}/save`, params);
};

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

// prefixed with underscore because 'delete' is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
    .then(x => {
      return x;
    });
}
