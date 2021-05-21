import Vue from 'vue';
import Vuex from 'vuex';
// 引入安装
Vue.use(Vuex);
// 创建store对象
let store = new Vuex.Store({
    // 创建数据
    state:{
        msg:"this is store",
        num:0
    },
    // 计算属性数据
    getters:{
        doubleNum(state){
            return state.num * 2;
        }
    },
    mutations:{
        addNum(state){
            state.num -= 0;
        }
    },
    actions:{
        resetNum(store){
            console.log('actions',arguments);
            setTimeout(() => {
                store.commit('resetNum');
            },2000)
        }
    },
    modules:{
        child:{
            state:{
                num:100
            },
            mutations:{
                addNum(state){
                    state.num += 3;
                },
                reduceNum(state){
                    state.num -= 5;
                },
                // 重置
                resetNum(state){
                    state.num = 0;
                }
            },
            resetNum(state){
                state.num = 0;
            }
        },
        getters:{
            bmDoubleNum(state){
                return state.num * 2;
            } 
        }
    },
});
// /声明两个子组件
let child = Vue.extend({
    template:"#child",
    // 创建完毕
    created(){

    },
})
let other = Vue.extend({
    template:"#other",
    created(){

    },
});
// 构建应用
const app = new Vue({
    store,
    el:"#app",
    data:{
        num:1
    },
    components:{child,other},
    // 创建完毕
    created(){
        console.log('app',this);
    }
})