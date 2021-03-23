export function add(state,{name,numList}) {

    state.todoList[numList].todos.push({
        id: (state.todoList[numList].todos.length+1),
        name: name,
        completed: false
    });
}

export function remove(state,{id,numList}) {
    state.todoList[numList].todos.splice(id-1,1)
    for(id;id<=state.todoList[numList].todos.length;id++){
        state.todoList[numList].todos[id-1].id--;
    }
}

export function modify(state,{id,numList,name}) {
    state.todoList[numList].todos[id-1].name = name;
}

export function doneSwitch(state,{id,numList}) {
    state.todoList[numList].todos[id-1].completed = !state.todoList[numList].todos[id-1].completed;
}

export function addList(state,{name}){
    state.todoList.push({
        name: name,
        todos:[]
    });
}

/*export function filter(state,{filter}){

}*/