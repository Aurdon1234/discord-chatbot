const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const client = new Client();
module.exports = {
    name: 'ban',
    description: "says ban!",
    execute(message, args){
        const user = message.mentions.users.first();
        const member = message.guild.member(user);

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Do not have Permissions to do this Command**")
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Don not have permission to Kick Members**")
        
        if(user){
            
        
        
             if (member) {
                if(member.id === message.author.id) return message.channel.send("**Why Would You Want to Ban Yourself Nerd**")
                if(member.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id)
                return message.channel.send("**I Can't ban this member due to his role being higher than mine.**")

                 member.ban({ression: 'you were bad!'}).then(() =>{
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setColor(0xFFFF00)
                    
                    .setDescription(`**${user} WAS BANNED FROM THE SERVER**`)
                    
            
            .setImage('https://thumbs.gfycat.com/HairyVelvetyHornbill-size_restricted.gif')
            .setFooter('Good Job')
            
            
            return message.channel.send(embed);
            

                  })
            }else {
               message.reply("That user isn\'t in the guild")
            }
        } else {
            message.reply('**PLEASE PROVIDE A USER TO BAN!**')
        }

        
    }
}