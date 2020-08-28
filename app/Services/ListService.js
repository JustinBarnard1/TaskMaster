import List from "../Models/List.js";
import STORE from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  createList(newList) {
    let list = new List(newList)
    STORE.State.lists.push(list)
  }

  deleteList(id) {
    let listIndex = STORE.State.list.findIndex(l => l.id == id)
    if (postIndex === -1) {
      console.error("invalid id")
      return
    }
    STORE.State.list.splice(listIndex, 1)
  }





}

const SERVICE = new ListService();
export default SERVICE;
