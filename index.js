'use strict';

class UI {
    constructor(searchUserInputElement, formElement, profileElement) {
        this.searchUserInputElement = searchUserInputElement;
        this.formElement = formElement;
        this.profileElement = profileElement;
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

    renderUserData(user) {
        this.profileElement.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div class="repos"></div>
    `;
    }

    renderError(error) {
    }
}

class API {
    async getUserData(input) {
        const response = await fetch(`https://api.github.com/users/${input}`);
        return await response.json();
    }
}

const ui = new UI(
    document.querySelector('.searchUser'),
    document.getElementById('form'),
    document.getElementById('profile'),
);
const api = new API();

const run = () => {
    console.log('start');

    const searchUser = async (input) => {
        try {
            console.log('input ->', input);
            const userData = await api.getUserData(input);
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
