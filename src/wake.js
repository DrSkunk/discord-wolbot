const wol = require("wol");
const { MAC_ADDRESS } = require("./config.js");

function wake() {
  // Promisify
  return new Promise((resolve, reject) => {
    console.log("Waking up computer...");
    console.log("Sending magic packet to " + MAC_ADDRESS);
    wol.wake(MAC_ADDRESS, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = wake;
