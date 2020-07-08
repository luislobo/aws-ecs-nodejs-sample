const Conf = require('conf')

const schema = {
  destiny2apiRootPath: {
    type: 'string'
  }
}
const defaults = {
  destiny2apiRootPath: 'https://www.bungie.net/Platform'
}

module.exports = new Conf({ schema, defaults })
