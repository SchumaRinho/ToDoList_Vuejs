export function getAllTodos(state) {
    return function (numList){
        return state.todoList[numList].todos;
    }
}

export function getAllList(state){
        return state.todoList;
}
export function remaining(state) {
    return function (numList){
        let nbr = 0;
        for(let todo in state.todoList[numList].todos){
            if(!state.todoList[numList].todos[todo].completed){
            nbr++;
            }
        }
        return nbr;
    }
}
