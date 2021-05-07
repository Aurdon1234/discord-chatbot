const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'

const {Client, Attachment, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'accounts',
    description: 'says accounts!',
    execute (message, args) {
        message.channel.send('**Ms Suman Yadav:** \n **ID:** 2256028051 \n **Password:** 141184 ')
    }}