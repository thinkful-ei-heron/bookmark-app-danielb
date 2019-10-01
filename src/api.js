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

const createItem = function(){
  return apiFetch(`${BASE_URL}/bookmarks`, 'POST', JSON.stringify({
    'title': 'something',
    'url': 'https://www.thinkful.com'
  }))
}


export default {
  getItems,
  createItem
}
