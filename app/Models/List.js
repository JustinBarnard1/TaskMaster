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
  <form onsubmit="app.listController.addBullet(event, '${this.id}')">
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
      template += `<li class="p-1 bg-primary text-light card my-1">${b}</li><a href="#" onclick="app.listController.removeBullet('${this.id}', '${b}')" class="card-link">Delete</a>`
    })
    return template
  }

}
