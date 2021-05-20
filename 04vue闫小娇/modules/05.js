import Vue from 'vue';
const child = Vue.extend({
    props:['demo'],
    template:'#child',
    data(){
        return {
            msg:'child component'
        }
    },
    // 创建完毕
    created(){
        this.demo(this.msg);
    },
    watch:{
        msg(){
            this.demo(this.msg);
        }
    }
});
const other = Vue.extend({
props:['msg'],
template:'#other',
});
const app = new Vue({
    el:'#app',
    data:{
        msg:'hello'
    },
    components:{child,other},
    // 创建方法
    methods:{
        xxoo(msg){
            this.msg = msg;
        }
    }
})