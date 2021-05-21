import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        msg:'this is store',
        num:0
    },
    getters:{
        doubleNum(state){
            console.log(11111);
            return state.num * 2;
        }
    },
    mutations:{
        addNum(state){
            state.num += 3;
        },
        reduceNum(state){
            state.num -= 5;
        },
        resetNum(state){
            state.num = 0;
        }
    },
    actions:{
        resetNum(store){
            console.log('actions',arguments);
            setTimeout(()=>{
                store.commit('resetNum');
            },2000)
        }
    },
});
let child = Vue.extend({
    template:'#child',
    created(){

    },
})
let other = Vue.extend({
    template:'#other',
    created(){

    },
})
const app = new Vue({
    store,
    // 视图
    el:'#app',
    data:{
        num:1
    },
    components:{child,other},
    created(){
        console.log('app',this);
    },
    methods:{
        addNum(){
            this.$stors.commit('addNum',[1,2,true]);
        }
    },
})