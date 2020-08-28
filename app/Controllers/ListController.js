import ListService from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  STORE.State.lists.forEach(p => template += p.Template)
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
    ListsService.createList(newList)
    form.reset()
    _drawLists()
  }


  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
