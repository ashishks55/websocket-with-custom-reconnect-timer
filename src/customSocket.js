class Timer {
  constructor(callback, timerCalc){
    this.callback  = callback;
    this.timerCalc = timerCalc;
    this.timer     = null;
    this.tries     = 0;
  }

  reset(){
    this.tries = 0
    clearTimeout(this.timer)
  }

  scheduleTimeout(){
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1
      this.callback()
    }, this.timerCalc(this.tries + 1))
  }
}



export default class CustomSocket {
  constructor(url) {
      this.customSocket = null
      this.socketUrl = url
      this.reconnectTimer = new Timer(() => {
          this.disconnect()
          this.connect()
      }, this.reconnectAfterMs)
  }

  reconnectAfterMs(tries){
      return [1000, 2000, 5000, 10000][tries - 1] || 10000
  }

  connect(){

      this.customSocket = new WebSocket(this.socketUrl)

      this.customSocket.onopen = (event) => {
          this.customSocket.send('Socket Test Message')
      }

      this.customSocket.onclose = (event) => {
          this.reconnectTimer.scheduleTimeout()
      }

      this.customSocket.onerror = (event) => {
      }

      this.customSocket.onmessage = (event) => {
          alert(event.data)
      }
  }

  disconnect() {
      this.customSocket.onclose = function(){}
      this.customSocket.close()
  }
}

window.CustomSocket = new CustomSocket('wss://echo.websocket.org');