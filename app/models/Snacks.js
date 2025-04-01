


export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }


  get cardTemplate() {
    return /*html*/ `
    <div class="col 4">
      <div></div>
        <img class="item-img" src=""
      alt="image of vending machine items">
        <span>item name</span>
        <div><button class="mt-2 mb-3 p-1">$.25</button></div>
      </div>
    `
  }
}
