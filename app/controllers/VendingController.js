import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneyService.js"

export class VendingController {
  constructor() {
    console.log('Vending Controller Loaded!')
    AppState.on('money', this.drawMoney)
  }

  addQuarter() {
    console.log('added quarter!')
    moneyService.addQuarter()
    console.log(AppState.money)

  }

  drawMoney() {
    const coins = AppState.money
    const totalMoneyElem = document.getElementById('total-money')
    totalMoneyElem.innerHTML = `money: $${AppState.money.toFixed(2)}`
  }
}