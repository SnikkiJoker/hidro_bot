const discord = require('discord.js');
var bot = new discord.Client();


bot.on('ready', () =>{
    console.log('this bot is online');
    bot.user.setActivity("type !h help ");      
    
});


const PREFIX = '!h';
bot.on('message', message=>{        //send direct messages said by the user 

  //any message is made into a lowercase message( for easy commands)
var message_lowercase = message.content.toLowerCase();

var random01 = Math.random();



    // let args- responds to !halo uses cases to determine get "alo"
   let args = message.content.substring(PREFIX.length).split(" ");
   switch(args[1]) {
    
   case "info":
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

   if(message_lowercase ===  "so is nb and slushie dating?"){

    message.channel.send("https://cdn.discordapp.com/attachments/753722766074708068/754322279722254396/sluschie.png");
}
   
    //poggers in chat and -skip delete message for the bot
    let argument = message.content.substring(message.length).split(" ");
    switch(message_lowercase){

      


    case "poggers":
      if (message.channel.nsfw === false) {
        if(random01<0.5){
              //second random pog
               message.channel.send("<:louispog:713515823532343377> it do be a  poggers  moment " +
               "https://media.discordapp.net/attachments/704687081020063777/715302919662075924/pog.gif");
       
        }else{ //original pog
               message.channel.send("<:louispog:713515823532343377> it do be a  poggers  moment "+
              "https://tenor.com/view/gh-poggers-spin-xqc-fortnite-gif-17316982");
        }
         
      }else{ //pogs for nsfw
              message.channel.send("<:louispog:713515823532343377> it do be a  poggers  moment "+
              "https://media.discordapp.net/attachments/704687081020063777/751800084521287710/ezgif-7-f1cdf3368972.gif");

        }
    break;
    
    case "pog":
          message.channel.send("<:slushie_pog:746057582648754296>");
    break;
      case "poggers in chat":
        if (message.channel.nsfw === false) {
          if(random01<0.5){
                //second random pog
                 message.channel.send("<:louispog:713515823532343377> it do be a  poggers  moment " +
                 "https://media.discordapp.net/attachments/704687081020063777/715302919662075924/pog.gif");
         
          }else{ //original pog
                 message.channel.send("<:louispog:713515823532343377> it do be a  poggers  moment "+
                "https://tenor.com/view/gh-poggers-spin-xqc-fortnite-gif-17316982");
          }
           
          }else{ //nsfw pog
                message.channel.send("<:louispog:713515823532343377> it do be a  poggers  moment "+
                "https://media.discordapp.net/attachments/704687081020063777/751800084521287710/ezgif-7-f1cdf3368972.gif");}
                
        
      break;
      case "-skip":
        message.delete({setTimeout:10000})
      break;
      case "!skip":
        message.delete({setTimeout:10000})
      break;
    }

   // F/ bruh / bruh moment counter
   ////////////////////////////////////////////////////////////////
    if(message.content === "bruh moment"){
       var bruh_send =("<:bruhsnikki:722459816705917090>");
           message.channel.send(bruh_send);
     
    }
  //  if (message.user. == "701504036217684098"){
        
    //    }
     //else if(message.content === "<:bruhsnikki:722459816705917090>"){
      //var bruh_send =("<:bruhsnikki:722459816705917090>");
        //  message.channel.send(bruh_send);
    //}

    if(message_lowercase === "bruh"){
      var bruh_send=("<:bruhsnikki:722459816705917090>");

        message.channel.send(bruh_send);     
     }

     if(message.content === "f"){
            var F_send =("f to pay respects " );
            message.channel.send(F_send);
         
     } 
      //check if the channel is
      if (message.content === "test-nsfw") {
    if (message.channel.nsfw === false) {
       message.channel.send(":warning: This channel isn't marked as NSFW.");}}

   //////////////////////////////////////////////////////////////////
  
      if(message.content === "cum"){
        message.channel.send("cum.")
        message.channel.send("https://cdn.discordapp.com/attachments/753722766074708068/756777356948930610/cumin.gif");
      }




})


bot.login(process.env.token);