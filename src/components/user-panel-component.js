const axios = require('axios');

class UserPanelComponent {

    constructor() {
        this.data = null;
    }

    async sync() {
        const { data } = await axios.get('http://www.example.com/');
        this.data = data;
    }

}

module.exports = { UserPanelComponent };
