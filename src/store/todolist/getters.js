export function getAllTodos(state) {
    return function (){
        return state.todoList[0].todos;
    }
}

export function getAllList(state){
    return function (){
        return state.todoList;
    }
}
export function remaining(state) {
    return function (){
        let nbr = 0;
        for(let todo in state.todoList[0].todos){
            if(!state.todoList[0].todos[todo].completed){
            nbr++;
            }
        }
        return nbr;
    }
}
