// las mutaciones son las que cambian directamente el state, tienen q ser sincrionas no puede ser asincronas, son sincronas
// son como los metodos, son parecidos -->> son para hacer los cambios en el state
export const increment = (state) => {
  //state ya viene por defecto en vuezx en el mutation
  // state.cont++;
  state.cont = state.cont + 1;
  state.lastMutation = "increment";
};

export const incrementBy = (state, val) => {
  console.log({ val });
  state.cont = state.cont + val;
  state.lastMutation = "incrementBy" + val;
  state.lastRandonInt = val;
};

export const setLoading = (state, val) => {
  console.log({ state, val });
  state.isLoading = val;
  state.lastMutation = "setloading" + val;
};
