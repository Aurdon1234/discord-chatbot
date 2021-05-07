const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'

const got = require('got')

const fs = require('fs');

client.commands = new Discord.Collection();

setInterval(() => {
    const statuses = [
        ` -help`,
        
    ]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setActivity(status, { type: "WATCHING"})


}, 5000)

const { Client, Intents } = require('discord.js'); 
const Cleint = new Client({ ws: { intents: Intents.ALL } });

client.once('ready', () => {
    console.log('DiGo is now Online!');
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (message.content === `${prefix}server`){
        message.channel.send(message.guild.name);
    }else if (message.content === `${prefix}members`){
        message.channel.send(`There Are **${message.guild.memberCount} Members** In The Server`)
    }else if (message.content === `${prefix}me`){
        message.channel.send(`Username: ${message.author.username}`)
    }
})


const thisWord = "randi";
      const thatWord = "rundi";
      const whatWord = "Randi";
client.on("message", message => {
    if (message.author.bot) return
    if(message.content.includes(thisWord) || message.content.includes(thatWord) || message.content.includes(whatWord)) {
      message.channel.send(`Dont Use That Word! ${message.author}`)
      message.delete()
    }
})

client.on('guildMemberAdd', async member => { 
    

    const channel = member.guild.channels.cache.find(channel => channel.name === "〖👋〗welcome");
    if (!channel) return;

    channel.send(`Hey There ${member}\n  Welcome to Salwan Nibba's Server, Please make sure to check out <#745837499720663223>`)
});
client.on('guildMemberRemove',  member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "〖👋〗welcome");
    if (!channel) return;

    channel.send(`Oh no... ${member} just left the server.\n Maybe it wasn't meant to be....`)
});

client.on('message', (message) => {
    let args = message.content.substring(prefix.length).split(" ");
            if(message.content.substring(0, prefix.length) == prefix)
    if (message.content.startsWith(prefix)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(prefix.length)
        .split(/\s+/);
        console.log(CMD_NAME);
        console.log(args);

    if (CMD_NAME === 'help') {
        client.commands.get('help').execute(message, args);
    }
    else if (CMD_NAME === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    else if(CMD_NAME === 'ban') {
        client.commands.get('ban').execute(message, args);
    }
    else if(CMD_NAME === 'av') {
        client.commands.get('av').execute(message, args);
    }
    else if(CMD_NAME === 'meme') {
        client.commands.get('meme').execute(message, args);
    }
    else if(CMD_NAME === 'purge') {
        client.commands.get('purge').execute(message, args);
    }
    else if(CMD_NAME === '8ball') {
        client.commands.get('8ball').execute(message, args);
    }
    else if(CMD_NAME === 'howgay') {
        client.commands.get('howgay').execute(message, args);
    }
    else if(CMD_NAME === 'penis') {
        client.commands.get('penis').execute(message, args);
    }
    else if(CMD_NAME === 'maths') {
        client.commands.get('maths').execute(message, args);
    }
    else if(CMD_NAME === 'english') {
        client.commands.get('english').execute(message, args);
    }
    else if(CMD_NAME === 'chem') {
        client.commands.get('chem').execute(message, args);
    }
    else if(CMD_NAME === 'bio') {
        client.commands.get('bio').execute(message, args);
    }
    else if(CMD_NAME === 'physics') {
        client.commands.get('physics').execute(message, args);
    }
    else if(CMD_NAME === 'joke') {
        client.commands.get('joke').execute(message, args);
    }
    else if(CMD_NAME === 'calc') {
        client.commands.get('calc').execute(message, args);
    }
    else if(CMD_NAME === 'weather') {
        client.commands.get('weather').execute(message, args);
    }
    else if(CMD_NAME === 'covid') {
        client.commands.get('covid').execute(message, args);
    }
    else if(CMD_NAME === 'history') {
        client.commands.get('history').execute(message, args);
    }
    else if(CMD_NAME === 'polsci') {
        client.commands.get('polsci').execute(message, args);
    }
    else if(CMD_NAME === 'eco') {
        client.commands.get('eco').execute(message, args);
    }
    else if(CMD_NAME === 'bst') {
        client.commands.get('bst').execute(message, args);
    }
    else if(CMD_NAME === 'accounts') {
        client.commands.get('accounts').execute(message, args);
    }
}});

client.login("Njk5ODI4Nzc1NDYxOTc4MTUz.XpaEVg.ebOKwSI5MFaJIQzyQsNz1KUQ5BE");
