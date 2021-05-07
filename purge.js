module.exports = {
    name : 'purge',
    description : 'this is a command for deleting mass amounts of messages',
    args: true ,
    guildOnly: true,
    execute(message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("you cannot use this command");
        if (!args[0])
        return message.reply('*please state a number of messages to be deleted')
        if (parseInt(args[0]) > 50)
        return message.reply("you cannot delete that many messages at a time");
        
        message.channel.bulkDelete(parseInt(args[0]) + 1 ,true).catch((err) => {
            return message.reply("*an error has occured*");

        })
    }
}