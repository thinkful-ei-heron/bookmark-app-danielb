const BASE_URL = 'https://thinkful-list-api.herokuapp.com/brahyt'

const apiFetch = function(url, method, newData){
  let error = false;
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: newData
  })
    .then(res => {
      if(!res.ok) {
        error = {code: res.status};
        store.error = error
      }
      return res.json();
    })
    .then( data => {
      if (error){
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};

const getItems = function() {
  return apiFetch(`${BASE_URL}/bookmarks`)
}

const createItem = function(newObject){
  return apiFetch(`${BASE_URL}/bookmarks`, 'POST', JSON.stringify(newObject))
}

const updateItem = function(id){
  return apiFetch(`${BASE_URL}/bookmarks/${id}`, 'PATCH', updateObject)
}

const deleteItem = function(id){
  return apiFetch(`${BASE_URL}/bookmarks/${id}`, 'DELETE')
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
}
