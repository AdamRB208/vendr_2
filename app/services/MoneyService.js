import { AppState } from "../AppState.js"

class MoneyService {
  addQuarter() {
    console.log('money has been added!')
    AppState.money += 0.25
  }

  buySnack(snackName) {
    console.log('buying snack', snackName)
    const snackToBuy = AppState.snacks.find(snack => snack.name == snackName)
    if (AppState.money < snackToBuy.price) {
      return
    }
    AppState.money -= snackToBuy.price
    snackToBuy.quantity++

  }
}


export const moneyService = new MoneyService()