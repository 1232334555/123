import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import bm from './bm';
// 引入安装
Vue.use(Vuex);
// 创建store对象
let store = new Vuex.Store({
    // 配置
    plugins:[logger(),bm],
    // 创建数据
    state:{
        msg:'this is store',
        num:0
    },
    // 计算属性数据
    getters:{
        doubleNum(state){
            return state.num * 2;
        }
    },
    // 同步消息
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
    // 异步加载
    actions:{
        resetNum(store){
            console.log('actions',arguments);
            setTimeout(()=>{
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
                resetNum(state){
                    state.num = 0;
                }
            }
        },
    }
});
let child = Vue.extend({
    template:"#child",
    // 创建完毕
    created(){},
});
let other = Vue.extend({
    template:"#other",
    created(){

    },
})
const app = new Vue({
    store,
    el:"#app",
    data:{
        num:1
    },
    components:{child,other},
    created(){
        console.log('app',this);
    }
})