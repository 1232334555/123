import Vue from 'vue';
const child = Vue.extend({
    props:['demo'],
    template:`
    <div>
        <h1>child part </h1>
        <h2>{{msg}}</h2>
    </div>
    `,
    // 模型
    data(){
        return {
            msg:'child component'
        }
    },
    created(){
        this.demo(this.msg);
    },
});
//实例化对象
const app = new Vue({
    el:'#app',
    data:{
        msg:'hello'
    },
    components:{child},
    methods:{
        xxoo(msg){
            console.log('xxoo',arguments);
            this.msg = msg;
        }
    }
})