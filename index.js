const discord = require('discord.js');
const bot = new discord.client();

const PREFIX = " ' ";

bot.on('ready', () =>{
    console.log('this bot is online');
})
bot.on('message', msg=>{
    if(msg.content == "HELLO"){
        msg.reply('hello there');
    }    
})


bot.login(process.env.token);