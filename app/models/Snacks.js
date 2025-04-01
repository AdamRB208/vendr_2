


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
        <img class="item-img" src="${this.imgUrl}"
      alt="image of vending machine items">
        <div class="text-light">${this.name}</div>
        <div class="text-light">$${this.price}</div>
        <div><button class="mt-2 mb-3 p-1 rounded">Buy ${this.name}</button></div>
      </div>
    `
  }
}
