console.clear()
console.log("Starting plchatv2....")
const Discord = require("discord.js");
const DiscordBotToken = "ODMzNDEzNzU0NTYxMzYzOTc4.YHx_Cw.6JF4bHBuKHQQce4j_IgWED0TDD0";
const colors = require("colors");
const io = require('console-read-write');
const bot = new Discord.Client();
var printmessagerequest = false;
var username = ""

bot.login(DiscordBotToken);

var sendedmessage = "";

bot.on("ready", async (ready) =>{
    console.clear()
    console.log(ready)
    console.log("pl.chat.v2")
    username = await io.ask("New username: ")
    console.clear()
    bot.users.fetch("703219730064080936").then( (user) => {
        user.send("User joined: " + username)
    })
});

bot.on("message", async (message) => {
    if(message.author.id = bot.user.id)
    {
        sendedmessage += message.content + "\n"
    }
    while(true)
    {
        console.clear()
        console.log(sendedmessage)
        console.log("Message: \r".green)
        var newmessage = await io.ask("")
        if(newmessage == "$$exit")
        {
            process.exit(0)
        }
        bot.users.fetch("703219730064080936").then( (user) => {
            user.send(username + ": " + newmessage)
        })
        printmessagerequest = false
    }
})

function stop()
{
    console.log("Closing....")
    bot.destroy()
}
