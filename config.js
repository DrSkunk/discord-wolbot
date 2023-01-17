const config = {
  MAC_ADDRESS: process.env.MAC_ADDRESS,
  CLIENT_ID: process.env.CLIENT_ID,
  TOKEN: process.env.TOKEN,
};

// Check if any are empty
for (const key in config) {
  if (config[key] === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
}

module.exports = config;
