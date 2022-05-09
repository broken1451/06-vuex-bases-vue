//state ya viene por defecto en vuex en el getters
export const squareCount = (state) => {
  return state.cont * state.cont;
};
