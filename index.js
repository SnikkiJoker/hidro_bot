const discord = require('discord.js');
var bot = new discord.Client();


bot.on('ready', () =>{
    console.log('this bot is online');
    bot.user.setActivity("type !h help ");      
    
});



const func = () => {
    message.channel.send ("yee");
    setTimeout(func, 4 * 1000);
  };
  



var bruh = 166 
var f_moment= 37
const PREFIX = '!h';
bot.on('message', message=>{        //send direct messages said by the user

    // let args- responds to !halo uses cases to determine get "alo"
   let args = message.content.substring(PREFIX.length).split(" ");
   switch (args[1]) {
    
   case "info":
    const ayy =("305818615712579584");
    message.reply("version:1.1.0. Now on a cloud server, to be used 24/7, not much is going on, im trying my best "+"<:bf_horny_jail:704797959325483040>");
            break;

   case "help":
        message.reply("!h info gives you info about the bot. For now it also as a bruh/bruh moment counter and a  f counter" )
           break;

    case "ping":
        message.channel.send("pong")
             break;


   }
    //sees "hello there" replies "general kenobi, you are a bold one" 
    if(message.content ===  "hello there"){

        message.channel.send('general kenobi, you are a bold one');
   }


   // grovvy extra commands
   if (message.content==="-s/s"){
     message.delete(1000);
     message.channel.send("shuffle").then(d_msg =>{d_msg.delete(1000);  });
     
    //message.channel.send("-skip") 
  }


   // F/ bruh / bruh moment counter
   ////////////////////////////////////////////////////////////////
    if(message.content === "bruh moment"){
       var bruh_send =("this is a bruh moment nº  "+bruh );
           mmessage.channel.send(bruh_send);
           bruh = bruh +1
    }
    if(message.content === "bruh"){
        var bruh_send =("this is a bruh moment nº  "+bruh );
        message.channel.send(bruh_send);
            bruh = bruh +1
     }
     if(message.content === "f"){
            var F_send =("f to pay respects nº" + f_moment );
            message.channel.send(F_send);
           f_moment = f_moment +1
     }
   //////////////////////////////////////////////////////////////////

})


bot.login(process.env.token);