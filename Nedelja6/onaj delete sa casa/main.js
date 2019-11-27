import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo } from "../utilities/todo-service";
import { addToDo } from "../utilities/todo-service";
import { UserInput } from "../components/userInput";
import { deleteToDo } from "../utilities/todo-service";


class Main {
    constructor() {
        let inputForm = new InputForm();
        let taskList = new TaskList();
        let userInput = new UserInput();


        this.node = document.createElement('main');
        this.node.appendChild(userInput.getNode());
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(taskList.getNode());
        inputForm.setBtnAddOnClick(function() {
            let text = inputForm.txtTitle.value;
            text = text.trim();

            if (text == '') return;

            let task = new Task(text);
            task.setBtnDeleteClickEvent(() => {
                task.deleteItem();
            });
            taskList.addTask(task);
        });



        userInput.setButtonUserOnClick(function() {
            let text = userInput.username;
            text = text.trim();
            if (text == '') return;
            taskList.emptyList()
            getToDo(text).then(data => { //response od backenda
                let items = data.items //svi ajtemi koji su stigli da se dodaju
                items.forEach(item => {
                    let task = new Task(item.title)
                    task.setBtnDeleteClickEvent(() => {
                        deleteToDo(userInput.username, task.title).then(data => console.log(data));
                        task.deleteItem();
                    });
                    taskList.addTask(task) //sa bekenda povuceni taskovi
                });
            })
        })

        // getToDo('username').then(data => {
        //     let items = data.items;
        //     items.forEach(item => {
        //         let task = new Task(item.title);
        //         task.setBtnDeleteClickEvent( () => {
        //             task.deleteItem();
        //         });
        //         taskList.addTask(task);
        //     })
        // })

    }
    getNode() {
        return this.node;
    }

}

export {
    Main
}