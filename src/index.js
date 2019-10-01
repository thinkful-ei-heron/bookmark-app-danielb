import $ from 'jquery'
import 'normalize.css'
import './style.css'
import store from './store'
import bookmarks from './bookmarks'
import api from './api'

const runApp = function(){
  api.createItem()
  api.getItems()
    .then((item) => {
      item.forEach((item) => {
        store.bookmarks.push(item)
      })
      bookmarks.renderList();
    })

  
//$('.output').html(bookmarks.generateList(store.bookmarks))
}
$(runApp)
