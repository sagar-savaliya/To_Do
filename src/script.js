// import _ from 'lodash';
// import './style.css';

const jtodoNew = document.querySelector('.todo__new');
const jlist = document.querySelector(".todo__list");
const jall = document.querySelector('.todo__all');
const jleft = document.querySelector('.todo__left');
const jclearCompleted = document.querySelector('.todo__completed');
const jactive = document.querySelector('.todo__active');
const jfocus = document.querySelector('.focus');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let mode = "all";
let leftItemCount = JSON.parse(localStorage.getItem('leftItemCount')) || 0;

jtodoNew.addEventListener('keydown',addNewtodo);
jlist.addEventListener('click',toggleToDo);
jlist.addEventListener('click',deleteToDo);
jlist.addEventListener('dblclick',editToDo);
jall.addEventListener('click',switchMode);
jactive.addEventListener('click',switchMode);
jclearCompleted.addEventListener('click',clearCompleted);

function updateCount() {
    jleft.innerHTML = `${leftItemCount} ${leftItemCount>1?'items':'item'} left`;
}

function updateLocalStorage() {
    localStorage.setItem('todos',JSON.stringify(todos));
    localStorage.setItem('leftItemCount',JSON.stringify(leftItemCount));
}

function populateList(){
    jlist.innerHTML = todos.map((todo,i) => {
        var jtodo = jtodo = `
                       <label class="todo__container" data-index=${i}>
                            <span class="checkmark">${todo.done ? '✔️' : '⬜'}</span>
                            <input type="checkbox"><span class="todo__text ${todo.done ? 'strike' : ''}">${todo.text}</span>
                            <span class='todo__delete' data-index=${i}>☓</span>
                       </label>
                      `;
        if(mode==='all') {
            return jtodo;
        }else{
            return (todo.done ? "" : jtodo);
        }
    }).reverse().join('');
}


function updateView() {
    updateCount();
    populateList();
    setFocus();
    updateLocalStorage();
}

updateView();


function clearCompleted(e) {
    todos = todos.filter(todo => !todo.done);
    updateView();
}

function setFocus() {
    const target = mode=='all'?jall:jactive;
    jfocus.style.height = `${target.clientHeight}px`;
    jfocus.style.width = `${target.clientWidth}px`;
    jfocus.style.top = `${target.offsetTop}px`;
    jfocus.style.left = `${target.offsetLeft}px`;
}

function switchMode(e) {
    mode = e.target.dataset.mode;
    updateView();
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
    leftItemCount++;
    todos.push(newtodo);
    updateView();
    this.value = "";
}

function toggleToDo(e) {
    if(e.target.className!='checkmark')
        return;
    const todoIndex = e.target.parentElement.dataset.index;
    todos[todoIndex].done = !todos[todoIndex].done;
    leftItemCount += todos[todoIndex].done?-1:1;
    updateView();
}

function deleteToDo(e) {
    if(e.target.className!='todo__delete')
        return;
    const todoIndex = e.target.dataset.index;
    leftItemCount -= todos[todoIndex].done?0:1;
    todos.splice(todoIndex,1);
    updateView();
}

function editToDo(e) {

    if(!e.target.className.includes('todo__text'))
        return;

    // e.target.contentEditable = 'true';
}


