import Vue from 'vue';
const child = Vue.extend({
    template:`
    <div>
    <h1>child part</h1>
    <h2>{{msg}}</h2>
    </div>
    `,
    data(){
        return {
            msg:'child component'
        }
    },
    // 创建完毕
    created(){
        this.$parent.$emit('demo',this.msg);
    },
});
// 实例化对象
const app = new Vue({
    // 视图
    el:'#app',
    data:{
        msg:'hello'
    },
    // 注册子组件
    components:{child},
    // 创建完毕
    created(){
        console.log(this);
        // 订阅一个消息
        this.$on('demo',(msg,...args)=>{
            console.log('$on',args);
            this.msg = msg;
        })
    },
})