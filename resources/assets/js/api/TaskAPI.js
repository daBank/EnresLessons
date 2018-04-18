import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = '/api';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'Authorization': 'Bearer ' + window.Laravel.apiToken
}

let TaskAPI = {
  fetchTasks() {
    return fetch(`${API_URL}/tasks`,
    {
      credentials: 'same-origin',
      headers: API_HEADERS
    })
    .then((response) => response.json())
  },
  addTask(name) {
    return fetch(`${API_URL}/tasks`, {
      method: 'post',
      credentials: 'same-origin',
      headers: API_HEADERS,
      body: JSON.stringify({name})
    })
    .then((response) => response.json())
  },
  deleteTask(id) {
    console.log("api deleteing"+id);
    return fetch(`${API_URL}/tasks/${id}`, {
      method: 'delete',
      credentials: 'same-origin',
      headers: API_HEADERS,
      body: JSON.stringify({id})
    })
    .then((response) => response.json())
  },
  editTask(id, newName) {
    return fetch(`${API_URL}/tasks/${id}`, {
        method: 'put',
        credentials: 'same-origin',
        headers: API_HEADERS,
        body: JSON.stringify({name: newName})
    })
    .then((response) => response.json())
  },
  updateUserPassword(user, draftUser) {
    return fetch(`${API_URL}/user_password/${user.id}`, {
        method: 'put',
        credentials: 'same-origin',
        headers: API_HEADERS,
        body: JSON.stringify(draftUser)
    })
  }
};
export default TaskAPI;