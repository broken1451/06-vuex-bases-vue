import { createStore } from "vuex";
import counterStore from "./counter";

export default createStore({
  // sin modulos, state global de la app
  // state: {
  //   cont: 1,
  //   lastMutation: "none",
  //   isLoading: false,
  //   lastRandonInt: 0,
  // },
  // mutations: {
  //   // las mutaciones son las que cambian directamente el state, tienen q ser sincrionas no puede ser asincronas, son sincronas
  //   // son como los metodos, son parecidos -->> son para hacer los cambios en el state
  //   increment(state) {
  //     //state ya viene por defecto en vuezx en el mutation
  //     // state.cont++;
  //     state.cont = state.cont + 1;
  //     state.lastMutation = "increment";
  //   },
  //   incrementBy(state, val) {
  //     console.log({ val });
  //     state.cont = state.cont + val;
  //     state.lastMutation = "incrementBy" + val;
  //     state.lastRandonInt = val;
  //   },
  //   setLoading(state, val) {
  //     console.log({ state, val });
  //     state.isLoading = val;
  //     state.lastMutation = "setloading" + val;
  //   },
  // },
  // actions: {
  //   // son metodos que pueden ser asincronos
  //   async incrementRandonInt(context) {
  //     context.commit("setLoading", true);
  //     // constext viene por defecto y tiene la referencia y la informacion sobre el contexto del store o el modulo donde nos  encuentramos
  //     const randonInt = await getRandonInt();
  //     console.log(randonInt);
  //     context.commit("incrementBy", randonInt);
  //     context.commit("setLoading", false);
  //   },
  // },

  // getters: {
  //   //state ya viene por defecto en vuex en el getters
  //   squareCount(state) {
  //     return state.cont * state.cont
  //   },
  // },

  // con modulos
  modules: {
    counter: counterStore
  },
});
