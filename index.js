'use strict';

class UI {
    constructor(searchUserInputElement, formElement) {
        this.searchUserInputElement = searchUserInputElement;
        this.formElement = formElement;
        this.searchUserInput = '';
    }

    onInputChange(callback) {
        this.searchUserInputElement.addEventListener('keyup', (event) => {
            this.searchUserInput = event.target.value;
            if (callback) {
                callback(this.searchUserInput);
            }
        });
    }

    onFormSubmit(callback) {
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
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
    document.getElementById('form'),
);
const api = new API();

const run = () => {
    console.log('start');

    const searchUser = async (input) => {
        try {
            console.log('input ->', input);
            const userData = await api.getUserData();
            console.log('userData ->', userData);
            ui.renderUserData(userData);
        } catch (error) {
            ui.renderError(error);
        }
    };

    ui.onInputChange();
    ui.onFormSubmit(searchUser);
};

run();
