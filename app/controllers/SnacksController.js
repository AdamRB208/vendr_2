import { AppState } from "../AppState.js";



export class SnacksController {
  constructor() {
    console.log('Snacks Controller loaded!');
    this.drawSnacks()
  }

  drawSnacks() {
    const snacks = AppState.snacks
    let snacksContent = ''
    snacks.forEach(snack => snacksContent += snack.cardTemplate)
    const cardListElem = document.getElementById('cards-list')
    cardListElem.innerHTML = snacksContent
  }
}