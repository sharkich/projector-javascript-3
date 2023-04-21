export function Messages(parentElement) {
    this.parentElement = parentElement;
}

Messages.prototype.renderDiv = function (className, message) {
    const div = document.createElement('div');
    div.classList.add('alert');
    div.classList.add(className);
    div.innerText = message;
    this.parentElement.prepend(div);
    return div;
}

Messages.prototype.addSuccess = function (message) {
    return this.renderDiv('success', message);
}

Messages.prototype.addFail = function (message) {
    return this.renderDiv('failure', message);
}

Messages.prototype.delete = function (messageElement) {
    messageElement.remove();
}
