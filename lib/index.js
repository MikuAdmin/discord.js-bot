'use strict'

class BotUser {
  constructor(token, debug=true) {
    this.User = new Bot(token, debug);
  }
  
  login() {
    this.User.activate();
  }
}

module.exports = BotUser;
