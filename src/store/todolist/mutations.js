export function add(state,{name}) {

    state.todos.push({
        id: (state.todos.length+1),
        name: name,
        completed: false
    });
    
}
