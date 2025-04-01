import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  snacks = [
    new Snack({
      name: 'Candy',
      price: 2.00,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82_145lD-szriFjAc5YkdDFzpDVb1uNQFOQ&s'
    }),

    new Snack({
      name: 'Chips',
      price: 1.75,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGIuA2mnczTIfqxaT-xEB_FArlVZEDC1NaQ&s'
    }),

    new Snack({
      name: 'Jerky',
      price: 3.00,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbT2vu3WatDT1KLdO-Vr4vRUd68h-Sou68Gw&s'
    }),

    new Snack({
      name: 'Pretzels',
      price: 2.00,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0N92qaepMSrVW3swMBk845fTZL7o4ddu9Q&s'
    }),

    new Snack({
      name: 'Gum',
      price: 1.00,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7m84lJ-Q8cb8zIPNm_s8qjJ1USivnfIY9Q&s'
    }),

    new Snack({
      name: 'TrailMix',
      price: 2.50,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NnYYrFaGS2Iwp8oNEn_jhHTYJ35TlHRSmQ&s'
    }),
  ]

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())