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
            console.log(1111);
            return state.num * 2;
        }
    },
    mutations:{
         // +3
         addNum(state) {
            // console.log('addNum',arguments);
            state.num += 3;
        },
        // -5
        addNum(state){
            state.num-= 5;
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
// 声明两个子组件
let child = Vue.extend({
    template:'#child',
    // 创建完毕
    created(){},
})
let other = Vue.extend({
    template:"#other",
    created(){

    },
})

const app = new Vue({
    store,
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
            this.$store.commit('addNum',[1,2,3,true]);
        }
    }
})