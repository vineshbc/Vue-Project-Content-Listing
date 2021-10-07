/* eslint-disable*/
import { createStore } from 'vuex'
import { Content } from './content.js'
const store = createStore({
    state() {
        return {
            info: "Welcome!",

            loading: true
        }
    },
    getters: {
        getInfo(state) {
            return state.info
        },
        getLoading(state) {
            return state.loading
        }
    },
    mutations: {
        setInfo(state, payload) {
            state.info = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        }
    },
    actions:{
        init(){
            console.log("Index module")
        }
    },
    modules: {
        'content':Content
    }
})

export default store