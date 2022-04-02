import { fetchWrapper } from '../_helpers';

const baseUrl = `projects`;

export const projectService = {
  saveProject,
  getAll,
  getById,
  update,
  delete: _delete,
};

function saveProject(params) {
  return fetchWrapper.post(`${baseUrl}/saveproject`, params);
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params)
    .then(project => {
      return project;
    });
}

// prefixed with underscore because 'delete' is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
    .then(x => {
      return x;
    });
}
