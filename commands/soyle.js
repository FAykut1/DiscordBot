module.exports = {
  name: 'soyle',
  cmd: (_client, _msg, _args) => {

    if(_args.length <= 1) {
      _msg.reply('Lutfen soylememi istediginiz mesaji da giriniz.');
      return;
    }
    
    const message = _args.splice(1,_args.length).join(' ');

    _msg.channel.send(message);
  }
}