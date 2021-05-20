import Vue from 'vue';
const child = Vue.extend({
    template:`
    <div>
    <input type="text" v-model="msg">
    <h1>子组件</h1>
    <h2>{{msg}}</h2>
    </div>
    `,
    data(){
        return {
            msg:"child msg"
        }
    },
    created(){
        // 触发父组件的自定义事件
        this.$parent.$emit('sy102',this.msg,'我是子组件传递的内容','classxxoo');
    },
    // 数据监测
    watch:{
        msg(value){
            console.log(value);
            this.$parent.$emit('sy102',this.msg);
        }
    }
});
// 实例化对象
let app = new Vue({
    // 视图
    el:"#app",
    data:{
        msg:''
    },
    // 局部注册组件
    components:{
        child,
    },
    createed(){
        console.log(this);
        // 添加自定义事件
        this.$on('sy102',(msg,...args)=>{
            this.msg=msg;
        })
        // 在两秒之后自动触发
        // setTimeout(()=>{
            // this.$emit('sy102',true,123,'woaini');
        // },2000)
    },
    methods:{
        demo(){
            console.log(222222);
            console.log(arguments);
        }
    }
})