const { Client, GatewayIntentBits } = require("discord.js");
const { TOKEN } = require("./config.js");
const register = require("./register.js");
const wake = require("./wake.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "wakeserver") {
    await wake();
    await interaction.reply("Waking up the server!");
  }
});

client.login(TOKEN);
register(client);
