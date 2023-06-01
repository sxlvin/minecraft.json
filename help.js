
const { EmbedBuilder } = require('discord.js')

//function for all food recipes in minecraft
function GetFood(message) {
    if (message.content === "/food") {
        const embed = new EmbedBuilder()
            .setTitle("All Food Recipes in Minecraft")
            .setDescription("Bread: /bread \n Cake: /cake \n  Cookie: /cookie \n Golden Apple: /goldenapple")
            .setColor("Fuchsia")
            .setThumbnail("https://ender-chest.com/wp-content/uploads/2021/08/minecraft-food-guide.jpg")
        message.reply({embeds: [embed]});
    }
}

module.exports = GetFood;