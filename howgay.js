const Discord = require('discord.js');
const client = new Discord.Client();
const random = require('random-puppy');
const moment = require('moment');
const howgayballresponses = [
    `**is 1% Gay**`,
    `**is 3% Gay**`,
    `**is 7% Gay**`,
    `**is 12% Gay**`,
    `**is 15% Gay**`,
    `**is 21% Gay**`,
    `**is 26% Gay**`,
    `**is 33% Gay**`,
    `**is 46% Gay**`,
    `**is 6% Gay**`,
    `**is 41% Gay**`,
    `**is 50% Gay**`,
    `**is 53% Gay**`,
    `**is 67% Gay**`,
    `**is 64% Gay**`,
    `**is 69% Gay**`,
    `**is 70% Gay**`,
    `**is 75% Gay**`,
    `**is 73% Gay**`,
    `**is 82% Gay**`,
    `**is 87% Gay**`,
    `**is 91% Gay**`,
    `**is 99% Gay**`,
    `**is 94% Gay**`,
    `**is 100% Gay**`
]
module.exports = {
    name: 'howgay',
    description: "says howgay",
    execute(message, args){
        const user = message.mentions.users.first();
        if (args.length === 0) return message.reply('**Please Tag A Member!**');
        else {
            const embed = new Discord.MessageEmbed()
            .setTitle(`**${user.tag}**`)
            .setDescription(howgayballresponses[Math.floor(Math.random() * howgayballresponses.length)])
            .setThumbnail('http://www.clipartbest.com/cliparts/bTy/LL9/bTyLL9zXc.png')
            message.channel.send(embed);

            
    }
}
}