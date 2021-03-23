/*import axios from 'axios';

export function add({name,numList}) {
        axios.post("http://138.68.74.39/api/todo?name=" + name + "&completed=" + 0 + "&todolist_id=" + numList)
            .then(function() {
                commit("add",{name: name, numList: numList} );
            })
}

export function remove({id,numList}) {
    axios.delete("http://138.68.74.39/api/todo?name=" + id + "&completed=" + 0 + "&todolist_id=" + numList)
            .then(function() {
                commit("remove",{id: id, numList: numList} );
            })
}

export function doneSwitch(state,{id,name,numList}) {
    axios.patch("http://138.68.74.39/api/todo" + id + "?name=" + name + "&completed=" + state.todoList[numList].todos[id-1].completed + "&todolist_id=" + numList)
    .then(function() {
        commit("doneSwitch",{id: id,name: name,numList: numList} );
    })
}

export function addList({name}){
    axios.post("http://138.68.74.39/api/todolist?name=" + name + "&completed=" + 0 + "&todolist_id=" + numList)
            .then(function() {
                commit("add",{name: name, numList: numList} );
            })
}*/