
function getFromLocalStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    }catch (e) {
        console.log('An error has occurred:' + e.message);
    }
    return false;
}

function updateLocalStorage(todos,activeToDoCount) {
    localStorage.setItem('todos',JSON.stringify(todos));
    localStorage.setItem('activeToDoCount',JSON.stringify(activeToDoCount));
}

export {getFromLocalStorage,updateLocalStorage}