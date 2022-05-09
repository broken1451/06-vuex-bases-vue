import getRandonInt from "../../helpers/getRandonInt";

// son metodos que pueden ser asincronos
export const incrementRandonInt = async (context) => {
  context.commit("setLoading", true);
  // constext viene por defecto y tiene la referencia y la informacion sobre el contexto del store o el modulo donde nos  encuentramos
  const randonInt = await getRandonInt();
  console.log(randonInt);
  context.commit("incrementBy", randonInt);
  context.commit("setLoading", false);
};
