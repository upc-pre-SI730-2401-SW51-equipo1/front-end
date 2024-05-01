import { createStore } from 'vuex'
import Cookies from 'js-cookie';

export default createStore({
    state: {
        isAuthenticated: Cookies.get('isAuthenticated') === 'true' || false,
    },
    mutations: {
        setAuthenticated(state, value) {
            state.isAuthenticated = value;
            Cookies.set('isAuthenticated', value.toString());
        },
    },
    actions: {
        authenticate({ commit }, value) {
            commit('setAuthenticated', value);
        },
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
    },
});