import { SnacksController } from "./controllers/SnacksController.js"
import { VendingController } from "./controllers/VendingController.js"


class App {

  SnacksController = new SnacksController()

  VendingController = new VendingController()

}

window['app'] = new App()


