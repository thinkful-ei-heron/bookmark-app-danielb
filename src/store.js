const bookmarks = [];
const adding = false;
const error = null;
const filter = 0;



const addItem = function(newBookmark){
  this.bookmarks.push(newBookmark);
}

const findById = function(id){
  return this.bookmarks.find(currentItem => currentItem.id === id);
}

const findAndDelete = function(id){
  this.bookmarks = this.bookmarks.filter(currentItem => currentItem.id !== id);
}

const findAndUpdate = function(id, newData){
  let currentItem = this.findById(id);
  Object.addign(currentItem, newData);
}




export default {
  bookmarks,
  adding,
  error,
  filter,
  findAndDelete,
  addItem
}
