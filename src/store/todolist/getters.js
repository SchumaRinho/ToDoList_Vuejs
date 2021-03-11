export function getAllTodos(state) {
    return function (){
        return state.todos;
    }
}

export function remaining(state) {
    return function (){
        let nbr = 0;
        for(let todo in state.todos){
            if(!state.todos[todo].completed){
            nbr++;
            }
        }
        return nbr;
    }
}
