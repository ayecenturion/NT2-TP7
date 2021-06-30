import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cuadrados : []
    },
    actions:{
        /* async getDifficulty({commit}){
            try {
                let cuadrados = state.cuadrados
                commit('getDifficulty',cuadrados)
            } catch (err) {
                commit('getDifficulty',6)
            }
        } */
    },
    //The only way to actually change state in a Vuex store is by committing a mutation.
    mutations:{
        //In Vuex, mutations are synchronous transactions:
        //To handle asynchronous operations, let's introduce Actions.
        changeDifficulty(state,cuadrados){
            state.cuadrados = cuadrados
        }
    }
})    