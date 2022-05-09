<template >
  <div>
    <h1>Counter en vuex</h1>
    <h2>Direct access: {{ $store.state.counter.cont }}</h2>
    <h2>computed access: {{ contComputed }}</h2>
    <h2>mapstate access: {{ cont }}</h2>
    <h2>mapstate access: {{ cont }}</h2>
    <h2>mapstate lastMutation: {{ lastMutation }}</h2>
    <h2>mapstate lastMutation2: {{ lastMutation }}</h2>
    <button @click="increment()">+1</button>
    <!-- <button @click="incrementBy(5)">+5</button>  -->
    <!-- <h1>Direct getters: {{$store.getters.squareCount}}</h1> -->
    <h1>Direct getters: {{$store.getters['counter/squareCount']}}</h1>

    <button @click="incrementBy()">+5</button>
    <button @click="randonInt()" :disabled="isLoading">Randon</button>
  </div>
</template>
<script>
// mapGetters
import { mapState, mapActions,  } from "vuex";

export default {
  // computed: mapState(['cont'])
  computed: {
    contComputed() {
      return this.$store.state.counter.cont;
    },
    // ...mapState('counter',["cont", "lastMutation",'isLoading']),
    ...mapState({
      cont: (state) => state.counter.cont,
      lastMutation: (state) => state.counter.lastMutation,
      isLoading: (state) => state.counter.isLoading,
      //   lastMutation: 'lastMutation',
    }),
  },
  methods: {
    increment() {
      // this.$store.commit("counter/increment"); // commit de una mutacion, llama al metodo en la mutation con modulos 
      this.$store.commit("counter/increment"); // commit de una mutacion, llama al metodo en la mutation
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
      // this.randonInt()
      // this.$store.commit("incrementBy", {name:'adrian', age: 30});
    },
    // incrementBy(e) {
    //   this.$store.commit("incrementBy", e);
    // },
    // incrementByRandon() {
    //   this.$store.dispatch("incrementRandonInt");
    // },
    // ...mapActions('modulename',['incrementRandonInt'])
    // ...mapActions('counter',['incrementRandonInt'])
    // ...mapActions({
    //   // randonInt: "modulename/incrementRandonInt",
    //   randonInt: "counter/incrementRandonInt",
    // }),
    // ...mapActions('modulename',{
    //   // randonInt: "modulename/incrementRandonInt",
    //   randonInt: "incrementRandonInt",
    // }),
    ...mapActions('counter',{
      // randonInt: "modulename/incrementRandonInt",
      randonInt: "incrementRandonInt",
    }),
  },
};
</script>
<style >
</style>