import store from './store'
import api from './api'
import $ from 'jquery'

const render = function(){
  if(store.adding === true) {
    addNewItemSnippit()
  }
  else if(store.adding === false) {
    renderList();
//		api.getItems()
//			.then((item) => {
//				item.forEach((item) => {
//					store.bookmarks.push(item)
//				})
//				renderList();
//			})
  }
}

const addNewItemSnippit = function(){
  return `
<form id="js-form" name="js-form">
  <div>
    <label for="title">Title:</label>
    <input type="text" name:"title" id="title" required>
  </div>
  <div>
    <label for="url">URL:</label>
    <input type="url" name:"url" id="url" required>
  </div>
  <div>
    <label for="desc">Description:</label>
    <input type="body" name:"desc" id="desc">
  </div>
  <div>
    <label for="rating">Rating</label>
    <select id="rating" name="rating">
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
  </div>
  <button id="js-add-new">Submit</button>
</form>
  `
}

const generateBookmarkItem = function(object) {
  let itemExpanded = `
        <div>
          <p class="js-bookmark-rating">RATING: ${object.rating}</p>
          <p class="js-bookmark-desc">DESCRIPTION: ${object.desc}</p>
          <a href src="${object.url}" class="js-bookmark-url">LINK</a>
        </div>
        <button id='js-delete-bookmark'>Delete</button>
  `
  if(object.expanded) {
    return  `
        <section class="js-bookmark" data-bookmark-id="${object.id}">
          <div>
            <h3 class="js-bookmark-title">${object.title}</h3>
          </div>
          ${itemExpanded}
        </section>
      `
	}
  else{
    return  `
        <section class="js-bookmark" data-bookmark-id="${object.id}">
          <div>
            <h3 class="js-bookmark-title">${object.title}</h3>
          </div>
        </section>
      `
  }
}

const generateList = function(bookmarkArray){
  const buttons = `
      <div>
      <button id="js-new-bookmark">New</button>
      <label for="js-rating-filter">Filter Ratings</label>
      <select id="js-filter-ratings" name="js-rating-filter">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
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
    .data('bookmark-id')
}

const clickOnNew = function(){
  $('.output').on('click', '#js-new-bookmark', function(event){
    event.preventDefault()
    store.adding = true;
    $('.output').html(addNewItemSnippit())
//    console.log(event)
//    console.log(store.adding)
  })
}

const serializer = function(formData) {
  const title = formData[0].value
  const url = formData[1].value
  const desc = formData[2].value
  const rating = formData[3].value
//  console.log(`${title} ${url} ${desc} ${rating}`)
  return {
    title,
    url,
    desc,
    rating
  }
}

const clickOnSubmit = function(){
  $('.output').on('submit', '#js-form', event => {
    event.preventDefault()
    let myForm = document.querySelector('#js-form')
    let serObj = serializer(myForm)
    api.createItem(serObj)
      .then(res => {
        store.addItem(res)
//        console.log(thing)
        store.adding = false;
        render();
      })
//    serializer(newData);
//    render()
  })
}

const clickOnDelete = function(){
  $('.output').on('click', '#js-delete-bookmark', event => {
    event.preventDefault()
    let id = getIdFromElement(event.currentTarget)
    api.deleteItem(id)
      .then(()=> {
        store.findAndDelete(id)
        render()
      })
//    console.log(event)
  })
}


export default {
	generateList,
  renderList,
  addNewItemSnippit,
  clickOnNew,
	render,
  clickOnSubmit,
  clickOnDelete
}
