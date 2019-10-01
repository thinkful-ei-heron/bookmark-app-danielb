import store from './store'
import $ from 'jquery'

const generateBookmarkItem = function(object) {
  return `
    <ul>
      <li>
      <h3>${object.title}</h3>
      <p>RATING: ${object.rating}</p>
      <p>URL: ${object.url}</p>
      <p>DESCRIPTION: ${object.description}</p>
      </li>
    </ul>
  `
}

const generateList = function(bookmarkArray){
  const items = bookmarkArray.map((item) => generateBookmarkItem(item));
  return items.join('');
}


const renderList = function(){
  $('.output').html(generateList(store.bookmarks))
}

export default {
	generateList,
  renderList
}
