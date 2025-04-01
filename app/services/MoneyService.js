import { AppState } from "../AppState.js"

class MoneyService {
  addQuarter() {
    console.log('money has been added!')
    AppState.money = + 0.25
  }
}


export const moneyService = new MoneyService()