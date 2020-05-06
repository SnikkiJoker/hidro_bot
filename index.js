const discord = require('discord.js');
const bot = new discord.Client();


bot.on('ready', () =>{
    console.log('this bot is online');
})
var bruh = 150 
var f_moment= 33
const PREFIX = '!h';


bot.on('message', message=>{
    // let args- responds to !halo uses cases to determine get "alo"
   let args = message.content.substring(PREFIX.length).split(" ");
   switch (args[0]) {

   case "":

            break;

   case "f":

           break;

   }
    //sees "hello there" replies "general kenobi, you are a bold one" 
    if(message.content ===  "hello there"){
        client.channels.get("bot-spam").send("general kenobi, you are a bold one");
        // message.reply('general kenobi, you are a bold one');
   }

   // F/ bruh / bruh moment counter
   ////////////////////////////////////////////////////////////////
    if(message.content === "bruh moment"){
       var bruh_send =("this is a bruh moment nº  "+bruh );
           message.reply(bruh_send);
           bruh = bruh +1
    }
    if(message.content === "bruh"){
        var bruh_send =("this is a bruh moment nº  "+bruh );
            message.reply(bruh_send);
            bruh = bruh +1
     }
     if(message.content === "f"){
            var F_send =("f to pay respeccts(nº "+f_momenth+")" );
           message.reply(F_send);
           f_moment = f_moment +1
     }
   //////////////////////////////////////////////////////////////////
})


bot.login(process.env.token);