const http = require('http');
const Discord = require('discord.js');
const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]});
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

require('dotenv').config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
  })
  
  client.on("message", msg => {
    if(msg.content == "ping") {
      msg.reply("pong");
    } else if (msg.content == "hi") {
      msg.reply("Wazzzapppp");
    }
  })
  
  const mySecret = process.env.TOKEN;
  client.login(mySecret);
});