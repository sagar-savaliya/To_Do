import _ from 'lodash';
import './style.css';
const newtodo = document.querySelector('.newtodo');
const submitbtn = newtodo.querySelector('#submitbtn');
const list = document.querySelector(".todos");
let todos = JSON.parse(localStorage.getItem('todos')) || [];
function addNewtodo(e){
    e.preventDefault();
    const text = this.querySelector('[name="todo"]').value;
    const todo = {
        text: text ,
        done: false,
    }
    if(text){
        todos.push(todo);
        populateList();
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    this.reset();
}

function populateList(){
    list.innerHTML = todos.map((todo,i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="todo${i}" ${todo.done ? 'checked' : ''}/>
            <label for="todo${i}"><span class='strike'>${todo.text}</span></label>
        </li>
         <span class='delete' data-index=${i}>❌</span>
        `
    }).reverse().join('');
    localStorage.setItem('todos',JSON.stringify(todos));
}

function toggleDone(e){
    if(e.target.className=='delete')
    {   
        deleteTodo(e);
        return;
    }
    else if(!e.target.matches('input'))
        return;
    todos[e.target.dataset.index].done = !todos[e.target.dataset.index].done
    populateList();
}

function deleteTodo(e){
    todos.splice(e.target.dataset.index,1);
    populateList();
}


newtodo.addEventListener('submit',addNewtodo);
list.addEventListener('click',toggleDone);
populateList();
