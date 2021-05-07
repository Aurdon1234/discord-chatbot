const Discord = require('discord.js');
const client = new Discord.Client();
const random = require('random-puppy');
const moment = require('moment');
const eightballresponses = [
	"**It is certain**",
	"**It is decidedly so**",
	"**Without a doubt**",
	"**Yes, definitely**",
	"**You may rely on it**",
	"**As I see it, yes**",
	"**Most likely**",
	"**Outlook good**",
	"**Yes**",
	"**Signs point to yes**",
	"**Ask again later**",
	"**Better not tell you now**",
	"**Maybe**",
	"**Don't count on it**",
	"**My reply is no**",
	"**My sources say no**",
	"**Outlook not so good**",
	"**Very doubtful**",
]
module.exports = {
    name: '8ball',
    description: "says 8ball",
    execute(message, args){
        if (args.length === 0) return message.reply('**Please Ask A Question!**');
        else (
            message.reply(eightballresponses[Math.floor(Math.random() * eightballresponses.length)]))
    }
}