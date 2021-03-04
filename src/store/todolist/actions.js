import axios from 'axios';

export function load({ commit }){
    axios.get('json/account.json')
            .then(response => {
                commit("load", response.data);
            })

}