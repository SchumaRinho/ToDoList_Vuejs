import { createStore } from 'vuex'

import todolist from './todolist';
import account from './account';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todolist, 
    account
  }
})
