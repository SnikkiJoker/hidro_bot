const discord = require('discord.js');
const bot = new discord.Client();

const PREFIX = " ' ";

bot.on('ready', () =>{
    console.log('this bot is online');
})
bot.on('message', msg=>{
    if(msg.content == "HELLO"){
        msg.client.channel('hello there');
    }    
})


bot.login(process.env.token);