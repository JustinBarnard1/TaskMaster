import { generateId } from "../utils.js";

export default class List {
  constructor({ title, bullet, id, color }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id || generateId()
    this.title = title
    this.bullet = bullet || []
    this.color = color || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return `<div class="col-3 d-flex justify-content-center flex-wrap p-3" >
          <div class="card m-2">
            <div class="card card-title ${this.color}">
              <h2 >${this.title}</h2>
          <a href="#" class="card-link text-danger d-flex justify-content-end"
                  onclick="app.listController.deleteList('${this.id}')">Delete</a>
            </div>
            <form onsubmit="app.listController.addBullet(event, '${this.id}')">
              <div class="form-group">
                <input type="bullet" class="form" id="bullet" placeholder="New Bullet">
                <button type="submit" class="btn btn-primary">Add</button>
              </div>
            </form>
            <div id="bullet" class="">
              <ul>${this.BulletTemplate}</ul>
            </div>
          </div>
        </div>`
  }

  get BulletTemplate() {
    let template = ""
    this.bullet.forEach(b => {
      template += `<li class="p-1 my-1">${b}<div class="d-flex justify-content-end"><a href="#" onclick="app.listController.removeBullet('${this.id}', '${b}')" class="card-link">Delete</a></div></li>`
    })
    return template
  }

}
