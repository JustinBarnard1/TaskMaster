import { generateId } from "../utils.js";

export default class List {
  constructor({ title, bullet, id }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id || generateId()
    this.title = title
    this.bullet = bullet || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return `<div class="card m-2" style="width: 20vw;">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <a href="#" class="card-link text-danger" onclick="app.listController.deleteList('${this.id}')">Delete List</a>
  </div>
  <form onsubmit="app.listController.addBullets(event, '${this.id}')">
                <div class="form-group">
                        <label for="bullet">Bullets</label>
                        <input type="bullet" class="form-control" id="bullet" placeholder="New Bullet">
                    </div>
                    <button type="submit" class="btn btn-primary">Add Bullet</button>
                </form>
<div id="bullet" class="card card-text">
<ul >${this.BulletTemplate}</ul>
</div>
</div>`
  }

  get BulletTemplate() {
    let template = ""
    this.bullet.forEach(b => {
      template += `<span class="d-flex justify-self-end"><a href="#" onclick="app.listController.removeComment('${this.id}', '${b}')" class="card-link"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-backspace-reverse-fill text-danger" style="font-size: 24pt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2V3zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8l2.147-2.146z"/>
</svg></a><li class="p-1 bg-primary text-light card my-1">${b}</li></span>`
    })
    return template
  }

}
