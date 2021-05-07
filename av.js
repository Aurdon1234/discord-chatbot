const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

module.exports = {
    name: 'av',
    description: "says av!",
    execute: async(message, args)=> {
        const user = message.mentions.users.first();
    if (user) {
    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
    const embed = new Discord.MessageEmbed()
        
   .setTitle(`${user.tag} Avatar`)
  .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
  .setColor('RANDOM')
  .setImage(avatar)
  
    message.channel.send(embed);
} else { 
    
    
    const embed = new Discord.MessageEmbed() 
  .setTitle(`Avatar`)
  .setDescription(message.author.username, 'Avatar')
  .setColor('RANDOM')
  .setImage(message.author.displayAvatarURL({size: 4096, dynamic: true}))
 
   message.channel.send(embed);
}
    }
}
