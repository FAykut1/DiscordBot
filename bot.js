const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const config = require('./config.js');


const prefix = '!';

client.commands = [];

fs.readdirSync('./commands/').forEach(file => {
  const pkg = require('./commands/' + file);
  client.commands.push(pkg);
});


client.on('ready', () => {
  console.log(`Bot calisiyor : ${client.user.tag}`);
});

client.on('message',  msg => {
  if(msg === null) return;
  if(msg.guild === null) return;
  if(msg.channel === null) return;

  const content = msg.content;

  if(!content.startsWith(prefix)) return;

  const args = content.substring(1,content.length).split(' ');
  
  client.commands.forEach(command => {
    if(command.name === args[0])  command.cmd(client,msg,args);
  });

});

client.login(config.token);