import store from './store'
import $ from 'jquery'

const addNewItemSnippit = function(){
  return `
<form action="">
  <label for="title">Title:</label>
  <input type="text" name:"title" id="id-bookmark-title" required>
  <label for="url">URL:</label>
  <input type="url" name:"url" id="bookmark-url" required>
  <label for="desc">Description:</label>
  <input type="text" name:"desc" id="bookmark-desc">
  <label for="rating">Rating</label>
  <select id="bookmark-rating" name="rating">
    <option value="5">5</option>
    <option value="4">4</option>
    <option value="3">3</option>
    <option value="2">2</option>
    <option value="1">1</option>
  </select>
  <button>Submit</button>
</form>
  `
}

const generateBookmarkItem = function(object) {
  return `
    <ul>
      <li class="js-bookmark" data-bookmark-id="${object.id}">
      <h3>${object.title}</h3>
      <p>RATING: ${object.rating}</p>
      <p>URL: ${object.url}</p>
      <p>DESCRIPTION: ${object.desc}</p>
      </li>
    </ul>
  `
}

const generateList = function(bookmarkArray){
  const buttons = `
      <div>
      <button id="js-new-bookmark">New</button>
      <select id="" name="">
        <option value="something"></option>
      </select>
    </div>
  `
  const items = bookmarkArray.map((item) => generateBookmarkItem(item));
  return buttons + items.join('');
}


const renderList = function(){
  $('.output').html(generateList(store.bookmarks))
}

const getIdFromElement = function(item){
  return $(item)
    .closest('.js-bookmark')
    .data('js-bookmark-id')
}

const clickOnNew = function(){
  $('.output').on('click', '#js-new-bookmark', function(event){
    event.preventDefault()
    store.adding = true;
    $('.output').html(addNewItemSnippit())
    console.log(event)
    console.log(store.adding)
  })
}



export default {
	generateList,
  renderList,
  addNewItemSnippit,
  clickOnNew
}
