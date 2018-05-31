// import _ from 'lodash';
import './style.css';
import * as localstorage from "./localstorage";

const jtodoNew = document.querySelector('.todo__new');
const jlist = document.querySelector(".todo__list");
const jall = document.querySelector('.todo__all');
const jleft = document.querySelector('.todo__left');
const jcompleted = document.querySelector('.todo__completed');
const jactive = document.querySelector('.todo__active');
const jclearCompleted = document.querySelector('.todo__clearcompleted');

jtodoNew.addEventListener('keydown',addNewtodo);
jlist.addEventListener('click',toggleToDo);
jlist.addEventListener('keydown',editToDo);
jlist.addEventListener('dblclick',makeToDoEditable);

jall.addEventListener('click',switchMode);
jactive.addEventListener('click',switchMode);
jcompleted.addEventListener('click',switchMode);

jclearCompleted.addEventListener('click',clearCompleted);


let mode = "all";
let jmode = jall;
let todos = localstorage.getFromLocalStorage("todos") || [];
let activeToDoCount = localstorage.getFromLocalStorage("activeToDoCount") || 0;

function updateActiveToDoCount() {
    jleft.innerHTML = `${activeToDoCount} ${activeToDoCount>1?'items':'item'} left`;
}

function populateList(){
    jlist.innerHTML = todos.map((todo,i) => {
        var jtodo = jtodo = `
                       <label class="todo__container" data-index=${i}>
                            <span class="checkmark">${todo.done ? '✔️' : '⬜'}</span>
                            <span class="todo__text ${todo.done ? 'strike' : ''}">${todo.text}</span>
                            <span class='todo__delete' data-index=${i}>☓</span>
                       </label>
                      `;
        if(mode==='all') {
            return jtodo;
        }else if(mode=='active'){
            return (todo.done ? "" : jtodo);
        }else{
            return (!todo.done ? "" : jtodo);
        }
    }).reverse().join('');
}

function update() {
    updateActiveToDoCount();
    populateList();
    localstorage.updateLocalStorage(todos,activeToDoCount);
}

update();

function clearCompleted(e) {
    todos = todos.filter(todo => !todo.done);
    update();
}

function updateFocus() {
    jmode.classList.add('focus');
}

function switchMode(e) {
    jmode.classList.remove('focus');
    mode = e.target.dataset.mode;
    jmode = e.target;
    updateFocus();
    populateList();
}

function addNewtodo(e){
    if(e.key!='Enter')
        return;

    const text = jtodoNew.value;
    if(!text) return;

    const newtodo = {
        text: text,
        done: false,
    }
    activeToDoCount++;
    todos.push(newtodo);
    this.value = "";
    update();
}

function toggleToDo(e) {
    if(e.target.className!='checkmark')
        return;
    const todoIndex = e.target.parentElement.dataset.index;
    todos[todoIndex].done = !todos[todoIndex].done;
    activeToDoCount += todos[todoIndex].done?-1:1;
    update();
}

jlist.addEventListener('click',(e) => {
    if(e.target.className=='todo__delete')
        deleteToDo(e.target.dataset.index);
});

function deleteToDo(index) {
    activeToDoCount -= todos[index].done?0:1;
    todos.splice(index,1);
    update();
}

function makeToDoEditable(e) {
    if(!e.target.className.includes('todo__text'))
        return;
    e.target.contentEditable = 'true';
}

function editToDo(e) {
    if(e.key!='Enter')
        return;
    e.target.contentEditable = 'false';
    const indexOfToDo = e.target.parentElement.dataset.index;
    if(e.target.innerText){
        todos[indexOfToDo].text = e.target.innerText;
    }else{
        deleteToDo(indexOfToDo);
    }
    update();
}

