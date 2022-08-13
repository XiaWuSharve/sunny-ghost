import Vuex from "vuex";
import Vue from 'vue';
import { tip } from "./message";
import { user } from "./user";

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    tip,
    user,
  },
});
