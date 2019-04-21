'use strict'

const discord = require('discord.js');
const Client = new discord.Client();

class Bot {
  constructor(token, debug) {
    this.token = token;
    this.debug = debug;
  }

  activate() {
    Client.on('ready', () => {
      console.log(`${Client.user.tag} has logged in @ ${new Date().now()}.`);
      if (this.debug) {
        console.log("[DEBUG]: enabled");
      }
    });
  }
  
  //just in case
  
}

module.exports = Bot;
