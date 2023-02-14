import { createStore } from 'vuex'
const store = createStore({
  state () {
    return {
        name: 'Choi',
        age:31,
        likes: 30,

    }
  },
  mutations:{
    이름변경(state){
        state.name='Gaang';
    },
    agecounter(state){
        state.age++
    },
    likesup(state,payload){
        state.likes+=payload;
    },
  },
})

export default store;