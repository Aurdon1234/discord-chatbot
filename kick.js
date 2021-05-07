const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const client = new Client();

module.exports = {
    name: 'kick',
    description: "says kick!",
    execute(message, args){
        const user = message.mentions.users.first();
        const member = message.guild.member(user);

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You Do not have Permissions to do this Command**")
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**I Don not have permission to Kick Members**")


            if (user) {
                

                if (member) {
                    if(member.id === message.author.id) return message.channel.send("**Why Would You Want to Kick Yourself Nerd**")
                    if(member.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) 
                        return message.channel.send("**I Can't kick this member due to his role being higher than mine.**")
                    member.kick('You were kicked from the server').then(() => {
                        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor(0xFFFF00)
        .setDescription(`**${user} WAS SUCCESSFULLY KICKED FROM THE SERVER**`)

.setImage('https://i.pinimg.com/originals/51/61/56/5161568c3139718e683d5a2f553b2033.gif')
return message.channel.send(embed);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in the guild")
                }
            } else {
                message.reply('**PLEASE PROVIDE A USER TO KICK!**')
            }

    }
}