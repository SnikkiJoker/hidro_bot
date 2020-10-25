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
   let args =message.content.substring(message.length).split(" "); // splits message with the space to check everything
switch(args[0]){ //checks first arg for the prefix of the bot 
    //args 0
    case "bruh":
     message.react("722459816705917090");   
     break;
     case "bonk":
       message.channel.send(" https://cdn.discordapp.com/attachments/705415539585056810/765336493815627836/ezgif-5-46e99d406d94.gif");
       break;





    case "h!" :      
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
             case "cursedship":

              const characters = [
              "legosi",
              "louis",
              "haru",
              "gouhin",
              "jack",
              "juno",
              "pina",
              "aoba",
              "riz",
              "ibuki",
              "bill",
              "agata",
              "free",
              "collot",
              "miguno",
              "durham",
              "voss",
              "gosha",
              "yafya",
              "kyuu",
              "mizuchi",
              "leano",
              "melon",
              "dope",
              "oguma",
              "zaguan",
              "Kai",
              "Dom",
              "Tao",
              "Sheila",
              "Peach",
              "Dolph (Hippo)",
              "Moro",
              "Mina",
              "Mokichi",
              "Chief Lion",
              "Dolph (Lion)",
              "Miguel",
              "Hino",
              "Rokume",
              "Cosmo",
              "the African Wild Dog from the cafeteria fight",
              "the Fox from the cafeteria fight",
              "Miyagi",
              "Toki",
              "Harus Father",
              "Harus Mother",
              "Melons Leopard Mother",
              "Melons Gazelle Father",
              "Black Lab-chan",
              "Donson",
              "Bogue",
              "Eugen",
              "Ebisu",
              "Fina",
              "Mizuchi",
              "Michiru",
              "Mizuchis Boyfriend~701 Housemother",
              "Sunaga",
              "Mika",
              "Porikokos",
              "Mayor Lion",
              "Legom",
              "Adler",
              "Azuki",
              "Darth",
              "Onion-san",
              "Moth-san",
              "a Huge Whale",
              "Therapy",
              "Happiness",
              "Everyone",
              "the Rest of 701",
              "sebun"];// 73 characters
              var char1= characters[Math.floor(Math.random()*characters.length)]
              var char2 = characters[Math.floor(Math.random()*characters.length)]
                  while(char1 === char2){
                    var char1= characters[Math.floor(Math.random()*characters.length)]
                  }
                  message.channel.send({embed: {
                    color: 3447003,
    
                    title: "so you decided to do this, suffer",
    
                    description: " ** ** ",
                    fields: [{
                        name: "** **",
                        value: "so now  **"+ char1 +"** simps for **"+ char2 +"** see what you created?"
                      },
                    ],
                    timestamp: new Date(),
                    footer: {
                      
                      text: "sick fuck"
                    }
                  }
                });
    
            
            break;
          
       //break for h!   
    break;
           
}

}  

           

  


    //poggers in chat and -skip delete message for the bot
    let argument = message.content.substring(message.length).split(" ");
  
  
  // case for lowercase messages, no parts
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
          message.react("746057582648754296");
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
      case "f":
        message.channel.send("press f to pay respects");
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


      
      //check if the channel is
      if (message.content === "test-nsfw") {
    if (message.channel.nsfw === false) {
       message.channel.send(":warning: This channel isn't marked as NSFW.");}}

   //////////////////////////////////////////////////////////////////




})


bot.login(process.env.token);