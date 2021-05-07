const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'

const {Client, Attachment, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'bio',
    description: 'says bio!',
    execute (message, args) {
        message.channel.send('**Dr Sunita Jakhar:** \n **ID:** 2183282537 \n **Password:** 152679 ')
    }}