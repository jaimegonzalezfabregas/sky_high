let keys = [];

let ws_url = "ws://" + location.host + "" + 1;
console.log(ws_url)
const ws = new WebSocket(ws_url)

ws.onmessage = (msg) => {
    keys = JSON.parse(msg.data)
};


export default () => {
    return keys;
};