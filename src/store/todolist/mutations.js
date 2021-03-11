export function add(state,{name}) {

    state.todos.push({
        id: (state.todos.length+1),
        name: name,
        completed: false
    });
    console.log(state.todos);
}

export function remove(state,{id}) {
    state.todos.splice(id-1,1)
    for(id;id<=state.todos.length;id++){
        state.todos[id-1].id--;
    }
    console.log(state.todos);
}

export function doneSwitch(state,{id}) {
    state.todos[id-1].completed = !state.todos[id-1].completed;
    console.log(state.todos);
}

export function affiche(state) {
    console.log(state.todos);
    for(let todo in state.todos){
      console.log(state.todos[todo]);
    }
}
/*export function filter(state,{filter}){

}*/