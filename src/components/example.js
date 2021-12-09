require("isomorphic-fetch");

class UserPanelComponent {
  constructor() {
    this.data = null;
  }

  async sync() {
    const resposne = await fetch("https://fakes.herokuapp.com/videos");
    this.data = await resposne.json();
  }
}

module.exports = { UserPanelComponent };
