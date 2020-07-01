import { chainsType } from './../types'

export const chains: chainsType = {
  names: {
    '1': 'mainnet',
    '3': 'ropsten',
    '4': 'rinkeby',
    '42': 'kovan',
    '77': 'sokol',
    '6284': 'goerli',
  },
  mainnet: require('./mainnet.json'),
  ropsten: require('./ropsten.json'),
  rinkeby: require('./rinkeby.json'),
  kovan: require('./kovan.json'),
  sokol: require('./sokol.json'),
  goerli: require('./goerli.json'),
}
