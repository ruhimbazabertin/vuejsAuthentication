import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null,
    },
    mutations: {

    },
    actions: {
     signup({commit}, authData) {

     },
     login({commit}, authData) {

     },
    },
    getters: {

    }
});