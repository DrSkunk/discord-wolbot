const { REST, Routes } = require("discord.js");
const { TOKEN, CLIENT_ID } = require("./config.js");

const commands = [
  {
    name: "wakeserver",
    description: "Wake up the server",
  },
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

async function register() {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

module.exports = register;
