const discord = require('discord.js');
const bot = new discord.Client();


bot.on('ready', () =>{
    console.log('this bot is online');
})
var bruh = 150 
var f_moment= 33
const PREFIX = '!';


bot.on('message', message=>{

    //sees "hello there" replies "general kenobi, you are a bold one" 
    if(message.content ===  "hello there"){
        message.reply('general kenobi, you are a bold one');
   }

   // F/ bruh / bruh moment counter
   ////////////////////////////////////////////////////////////////
   switch(agruments[0]){
   // bruh counter 
   case "bruh": 
       var bruh_send =("this is a bruh moment nº  " +bruh);
       message.reply(bruh_send);
       bruh = bruh +1
       break;

   case "f":
       // F counter
       var F_send =("f to pay respeccts(nº "+bruh+")" );
           message.reply(F_send);
           f_moment = f_moment +1
           break;

   }
  if(message.content === "bruh moment"){
       var bruh_send =("this is a bruh moment nº  "+bruh );
           message.reply(bruh_send);
           bruh = bruh +1
    }
   //////////////////////////////////////////////////////////////////

})


bot.login(process.env.token);