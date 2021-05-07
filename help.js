const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'

const {Client, Attachment, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'help',
    description: 'gives a list of commands',
    execute (message, args) {
            const embed = new Discord.MessageEmbed()
                .setTitle('DiGo Help')
                .setColor('BLUE')
                .setDescription('**The client Prefix is** `-` \n **Commands:** \n\n **:man_technologist_tone2: Moderation:** \n `kick` `ban` `purge` `me` `server` `members`\n\n **:joy: Fun:** \n `8ball` `penis` `howgay` `av` `meme` `joke` \n `weather` `calc` `covid` \n\n **:school_satchel: School:** \n `maths` `english` `bio` `chem` `physics` \n `history` `polsci` `eco` `bst` `accounts`')
                
        
                 message.channel.send(embed);
         }}


         