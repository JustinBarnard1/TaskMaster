import ListService from "../Services/ListService.js";
import STORE from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  STORE.State.lists.forEach(l => template += l.Template)
  document.getElementById("listsHere").innerHTML = template
  STORE.saveState()
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  createList(event) {
    event.preventDefault();
    let form = event.target
    let newList = {
      title: form.title.value,
    }
    ListService.createList(newList)
    form.reset()
    _drawLists()
  }

  deleteList(id) {
    ListService.deleteList(id)
    _drawLists()
  }


  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
