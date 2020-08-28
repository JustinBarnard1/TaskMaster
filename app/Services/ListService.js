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
    let listIndex = STORE.State.lists.findIndex(l => l.id == id)
    if (listIndex === -1) {
      console.error("invalid id")
      return
    }
    STORE.State.lists.splice(listIndex, 1)
  }

  createBullet(newBullet, id) {
    let list = STORE.State.lists.find(l => l.id == id)
    list.bullet.push(newBullet)
  }

  removeBullet(id, bullet) {
    let list = STORE.State.lists.find(l => l.id == id)
    let bulletIndex = list.bullet.findIndex(b => b == bullet)
    list.bullet.splice(bulletIndex, 1)
  }





}

const SERVICE = new ListService();
export default SERVICE;
