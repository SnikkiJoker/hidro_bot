const discord = require('discord.js');
const bot = new discord.client();

var bruh = 150 
var f_moment= 33
const PREFIX = '!';


bot.on('ready',  () =>{
    console.log("this bot is online");
})

bot.on('message', message=>{
    
    
    //sees "hello there" replies "general kenobi, you are a bold one" 
    if(message.content ===  "hello there"){
         message.reply('general kenobi, you are a bold one');
    }

    // F/ bruh / bruh moment counter
    ////////////////////////////////////////////////////////////////
    switch (args[0]){
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
            return;

    }
   if(message.content === "bruh moment"){
        var bruh_send =("this is a bruh moment nº  "+bruh );
            message.reply(bruh_send);
            bruh = bruh +1
   }
    //////////////////////////////////////////////////////////////////

    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'no':
            message.reply('u lmao')
            break;
            
    }    
})


bot.login(process.env.token);









