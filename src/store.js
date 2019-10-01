const bookmarks = [
  {
		id: '7ddr',
		title: 'Title 11',
		rating: 5,
		url: 'http://www.title11.com',
		description: 'lorem ipsum dolor',
		expanded: true
	},
  {
		id: '7ddr',
		title: 'Title 11',
		rating: 5,
		url: 'http://www.title11.com',
		description: 'lorem ipsum dolor',
		expanded: true
	}

];
const adding = false;
const error = null;
const filter = 0;



const addItem = function(newBookmark){
  this.bookmarks.push(newBookemark);
}

const findById = function(id){
  return this.bookmarks.find(currentItem => currentItem.id === id);
}

const findAndDelte = function(id){
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
  filter
}
