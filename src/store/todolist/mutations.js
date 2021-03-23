export function add(state,{name,numList}) {

    state.todoList[numList].todos.push({
        id: (state.todoList[numList].todos.length+1),
        name: name,
        completed: false
    });
    console.log(state.todoList[numList].todos);
}

export function remove(state,{id,numList}) {
    state.todoList[numList].todos.splice(id-1,1)
    for(id;id<=state.todoList[numList].todos.length;id++){
        state.todoList[numList].todos[id-1].id--;
    }
    console.log(state.todoList[numList].todos);
}

export function modify(state,{id,numList,name}) {
    state.todoList[numList].todos[id-1].name = name;
}

export function doneSwitch(state,{id,numList}) {
    console.log(numList);
    state.todoList[numList].todos[id-1].completed = !state.todoList[numList].todos[id-1].completed;
    console.log(state.todoList[numList].todos);
}

export function affiche(state,{numList}) {
    console.log(state.todoList[numList].todos);
    for(let todo in state.todoList[numList].todos){
      console.log(state.todoList[numList].todos[todo]);
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