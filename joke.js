const Discord = require('discord.js');
const giveMeAJoke = require('discord-jokes');
module.exports = {
    name: 'joke',
    execute(message, args){
        giveMeAJoke.getRandomDadJoke (function(joke) {
            const embed = new Discord.MessageEmbed()
                    embed.setColor('RANDOM')
                    embed.setTitle(joke)
                    message.channel.send(embed);
          });
    }
}