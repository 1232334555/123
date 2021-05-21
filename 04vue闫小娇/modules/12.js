import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import bm from './bm';
Vue.use(Vuex);
let store = new Vuex.Store({
    plugins:[logger(),bm],
    state:{
        num:0
    },
    getters:{
        doubleNum(state){
            return state.num * 2;
        }
    },
    mutationa:{
        setNum(state,v){
            state.num = v;
        }
    },
})
let child = Vue.extend({
    template:"#child",
})
const app = new Vue({
    store,
    el:'#app',
    data:{},
    components:{child},
    computed:{
        num:{
            get(){
                return this.$store.state.num;
            },
            set(v){
                this.$store.commit('setNum',v);
            }
        }
    }
})