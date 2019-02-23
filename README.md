## Websocket implementation with custom reconnect timer class

If you have to handle reconnection of a websocket in case network disconnection or retry connecting if your app is initialised and websocket connection gets a error. We can handle such cases to provide a seamless websocket experience to the user by implementing a `Timer` class which automatically tried to reconnect the websocket on specified time intervals untill our websocket connection is alive.

What we aim to achieve is that we should be able to

1. Decide the time interval of reconnection based on number of tries. i.e. we will increasae the time to try reconnecting the socket with every try, lets say we will try to connect after 1 sec on first failed connection then after 2 sec, 5 sec and then after every 10 second.

2. Take a callback function in which we can define how to handle closing previous connection and try creating a new one after the specified time interval which is based on number of tries.

Blog link : https://www.codewhoop.com/blog/javascript/websocket-implementation-with-custom-reconnect-timer-class.html

## Build Project

```
npm install
```

```
npm run build
```