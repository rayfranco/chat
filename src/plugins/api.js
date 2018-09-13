import io from 'socket.io-client'

const socket = io.connect('https://.......')

const api = {
  get connected () {
    return socket.connected
  },

  // Methods
  userRegister (username) {
    emitProxy()
  },
  messageSend (message) {
    emitProxy()
  },
  commandSend (command, value = '') {
    this.messageSend(`/${command} ${value}`)
  }
}

function emitProxy (event, ...args) {
  if (socket.connected) {
    socket.emit(event, ...args)
  } else {
    console.log('Socket disconected... Waiting for connect.')
    socket.on('connect', () => {
      console.log('Socket reconnected. Emmitting.')
      socket.emit(event, ...args)
    })
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.$api = Vue.$api = api
  }
}
