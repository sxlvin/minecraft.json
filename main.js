
//const's for fetching discord.js
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { GetBread, GetCake, GetCookie, GetGoldenApple } = require('./food.js')
const GetFood = require("./help.js")
const config = require("./config.json")

//functions for reading messages and etc
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ]
});

//used to acknowledge server is active by sending "Ready!"
client.once(Events.ClientReady, () => {
    console.log('Ready!')
});

//used to read the messages sent on the server
client.on('messageCreate', message => {
    console.log(message.content);
});

//used to refer to the GetBread function from "food.js" file
client.on("messageCreate", (message) => {
    GetBread(message)
})

//used to refer to the GetCake function from "food.js" file
client.on("messageCreate", (message) => {
    GetCake(message)
})

//used to refer to the GetCookie function from "food.js" file
client.on("messageCreate", (message) => {
    GetCookie(message)
})

//used to refer to the GetGoldenApple function from "food.js" file
client.on("messageCreate", (message) => {
    GetGoldenApple(message)
})

//used to provide a guide for food commands from "help.js" file
client.on("messageCreate", (message) => {
    GetFood(message)
})

//used to connect the code to to the bot
client.login(config.token);

