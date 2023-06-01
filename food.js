
//fetching discord.js for building EmbedBuilder
const { EmbedBuilder} = require('discord.js')

//function for minecraft recipe of bread
function GetBread(message) {
    if (message.content === '/bread') {
        const embed = new EmbedBuilder()
            .setTitle("Bread Recipe in Minecraft")
            .setDescription("Any Row: 3 wheat")
            .setColor("Green")
            .setThumbnail("https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/75/Wheat_JE2_BE2.png/revision/latest?cb=20190521034232")
        message.reply({ embeds: [embed] });
    }
}

//function for minecraft recipe of cake
function GetCake(message) {
    if (message.content === '/cake') {
        const embed = new EmbedBuilder()
            .setTitle("Cake Recipe in Minecraft")
            .setDescription("First Row: 3 bucket of milk \n Second Row: 1 sugar, 1 egg, 1 sugar \n Third Row: 3 wheat")
            .setThumbnail("https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/Cake_JE4.png/revision/latest?cb=20200518185831")
            .setColor("Green")
        message.reply({embeds: [embed] });
    }
}

//function for minecraft recipe of cookie
function GetCookie(message) {
    if (message.content === "/cookie") {
        const embed = new EmbedBuilder()
            .setTitle("Cookie Recipe in Minecraft")
            .setDescription("Any Row: 1 cocoa bean, 1 wheat, 1 cocoa bean")
            .setThumbnail("https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b3/Cookie_JE2_BE2.png/revision/latest/thumbnail/width/360/height/360?cb=20190505051355")
            .setColor("Green")
        message.reply({embeds: [embed] });
    }
}

//function for minecraft recipe of golden apple
function GetGoldenApple(message) {
    if (message.content === "/goldenapple") {
        const embed = new EmbedBuilder()
        .setTitle("Golden Apple Recipe in Minecraft")
        .setDescription("Apple in centre, 8 gold ingot all around")
        .setColor("Green")
        .setThumbnail("https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/54/Golden_Apple_JE2_BE2.png/revision/latest/thumbnail/width/360/height/360?cb=20200521041809")
    message.reply({embeds: [embed] });
    }
}

module.exports = { GetBread, GetCake, GetCookie, GetGoldenApple }