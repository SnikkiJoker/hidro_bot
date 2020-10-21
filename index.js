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
        case "curseship":

             

  
    this.vars.char = [
      "legosi",
      "louis",
      "haru",
      "gouhin",
      "jack",
      "juno",
      "bill",
      "pina",
      "aoba",
      "riz",
      "ibuki",
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
      "sebun"
    ];
          this.vars.char = [];
          this.vars.char.push("legosi");
          this.vars.char.push("louis");
          this.vars.char.push("haru");
          this.vars.char.push("gouhin");
          this.vars.char.push("jack");
          this.vars.char.push("juno");
          this.vars.char.push("pina");
          this.vars.char.push("aoba");
          this.vars.char.push("riz");
          this.vars.char.push("ibuki");
          this.vars.char.push("agata");
          this.vars.char.push("free");
          this.vars.char.push("collot");
          this.vars.char.push("miguno");
          this.vars.char.push("durham");
          this.vars.char.push("voss");
          this.vars.char.push("gosha");
          this.vars.char.push("yafya");
          this.vars.char.push("bill");
          this.vars.char.push("kyuu");
          this.vars.char.push("mizuchi");
          this.vars.char.push("leano");
          this.vars.char.push("melon");
          this.vars.char.push("dope");
          this.vars.char.push("oguma");
          this.vars.char.push("zaguan");
          this.vars.char.push("sebun");
          this.vars.char1 = this.random(1, 27);
          this.vars.char2 = this.random(1, 27);


          while (this.vars.char1 == this.vars.char2) {
              this.vars.char2 = this.random(1, 27);
            yield;
          }
            message.channel.send(this.vars.char1 +" is now shipped with  "+this.vars.char2);         

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