import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            name: 'Type in input to change store'
        }
    },

    mutations: {
        changeName(state, name) {
            state.name = name
        }
    }
})

export default store