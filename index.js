'use strict';

class UI {
    constructor(searchUserInputElement) {
        this.searchUserInputElement = searchUserInputElement;
        this.searchUserInput = '';
    }

    onInputChange(callback) {
        this.searchUserInputElement.addEventListener('keyup', (event) => {
            this.searchUserInput = event.target.value;
            callback(this.searchUserInput);
        });
    }

    renderUserData(data) {
    }

    renderError(error) {
    }
}

class API {
    async getUserData() {
    }
}

const ui = new UI(
    document.querySelector('.searchUser'),
);
const api = new API();

const run = () => {
    console.log('start');
    ui.onInputChange(async (input) => {
        console.log('try', input);
        try {
            const userData = await api.getUserData();
            ui.renderUserData(userData);
        } catch (error) {
            ui.renderError(error);
        }
    });
};

run();
