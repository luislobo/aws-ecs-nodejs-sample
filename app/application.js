const Destiny2 = require('./loboDestiny2api')

class Application {
  #d2api
  constructor () {
    this.#d2api = new Destiny2()

  }
}

module.exports = Application
