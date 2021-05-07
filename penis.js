const Discord = require('discord.js');
const client = new Discord.Client();
const random = require('random-puppy');
const moment = require('moment');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const penisresponses = [
    `**8=D**`,
    `**8==D**`,
    `**8===D**`,
    `**8====D**`,
    `**8=====D**`,
    `**8======D**`,
    `**8=======D**`,
    `**8========D**`,
    `**8=========D**`,
    `**8==========D**`,
    `**8===========D**`,
    `**8============D**`,
    `**8=============D**`,
    `**8D**`
]
module.exports = {
    name: 'penis',
    description: "says penis",
    execute(message, args){
        const user = message.mentions.users.first();
        if (user) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`**${user.username}\'s Penis**`)
                .setDescription( penisresponses[Math.floor(Math.random() * penisresponses.length)])
                .setColor(1752220)
                message.channel.send(embed);
            }
    
            else {
                if (args.length === 0) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`**${message.author.username}\'s Penis**`)
                .setDescription( penisresponses[Math.floor(Math.random() * penisresponses.length)])
                .setColor(1752220)
                message.channel.send(embed);
                }
                else {
                message.reply("**Please Mention A User Or Just type The Command to Measure your PP xD**")
                }
            } 
}
}