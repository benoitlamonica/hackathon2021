import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            color: '#f4f2ec'
        }
    },

    mutations: {
        changeBgColor(state, color) {
            state.color = color
        }
    }
})

export default store