import $ from 'jquery'
import 'normalize.css'
import './style.css'
import store from './store'
import bookmarks from './bookmarks'
import api from './api'

const runApp = function(){
  bookmarks.render()
  bookmarks.clickOnNew()
  
//$('.output').html(bookmarks.generateList(store.bookmarks))
}
$(runApp)
