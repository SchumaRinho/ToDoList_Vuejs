import axios from 'axios';

export function load({ commit }){
    axios.get('json/todolist.json')
            .then(response => {
                commit("load", response.data);
            })

}