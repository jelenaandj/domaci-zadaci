export class UserInput {
    constructor() {
        this.inputField = document.createElement('input');
        this.inputField.type = 'text';

        this.buttonUser = document.createElement('button');
        this.buttonUser.type = 'submit';
        this.buttonUser.innerHTML = 'log in';

        this.node = document.createElement('div');

        this.node.appendChild(this.inputField);
        this.node.appendChild(this.buttonUser);
        this.username = '';


        this.inputField.addEventListener('input', () => {
            this.username = this.inputField.value;
        })

    }
    setButtonUserOnClick(onClick) {
        this.buttonUser.addEventListener('click', onClick);
    }

    getNode() {
        return this.node;
    }


}