export class Messages {

    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    #renderDiv(className, message) {
        const div = document.createElement('div');
        div.classList.add('alert');
        div.classList.add(className);
        div.innerText = message;
        this.parentElement.prepend(div);
        return div;
    }

    addSuccess(message) {
        return this.#renderDiv('success', message);
    }

    addFail(message) {
        return this.#renderDiv('failure', message);
    }

    delete(messageElement) {
        messageElement.remove();
    }

}
