export function add(state,{name}) {

    state.todoList[0].todos.push({
        id: (state.todoList[0].todos.length+1),
        name: name,
        completed: false
    });
    console.log(state.todoList[0].todos);
}

export function remove(state,{id}) {
    state.todoList[0].todos.splice(id-1,1)
    for(id;id<=state.todoList[0].todos.length;id++){
        state.todoList[0].todos[id-1].id--;
    }
    console.log(state.todoList[0].todos);
}

export function doneSwitch(state,{id}) {
    state.todoList[0].todos[id-1].completed = !state.todoList[0].todos[id-1].completed;
    console.log(state.todoList[0].todos);
}

export function affiche(state) {
    console.log(state.todoList[0].todos);
    for(let todo in state.todoList[0].todos){
      console.log(state.todoList[0].todos[todo]);
    }
}

export function addList(state,{name}){
    state.todoList.push({
        name: name,
        todos:[]
    });
    console.log(state.todoList);
}

/*export function filter(state,{filter}){

}*/