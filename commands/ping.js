module.exports = { 
  name: "ping",
  cmd: (_client, _msg, _args) => {
    _msg.reply('Pong!!! ' + _args[1]);
  }
}