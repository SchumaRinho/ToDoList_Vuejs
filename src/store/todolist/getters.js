export function getAllTodos(state) {
    return function (){
        return state.todos;
    }
}