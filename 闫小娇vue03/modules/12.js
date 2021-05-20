import Vue from 'vue';
// 定义组件类
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
            msg:'child msg'
        }
    },
    // 创建完毕
    created(){
        this.$on('sy102',(...args)=>{
            console.log(1111,args);
        })
        // 触发父组件的自定义事件
        this.$emit('sy102',this.msg,'我是子组件','classxxoo');
    },
    // 数据监测
    watch:{
        msg(value){
            console.log(value);
            this.$emit('sy102',this.msg);
        }
    }
});
// 实例化对象
let app = new Vue({
    el:'#app',
    data:{
        msg:''
    },
    components:{
        child,
    },
    created(){
          // console.log(this);
        // 添加自定义事件
        // this.$on('sy102Class', (...args) => {
        //     // console.log(11111, args);
        //     // this.msg = msg;
        //     this.demo(...args);
        // })

        // // 在2秒中之后自动触发
        // setTimeout(() => {
        //    this.$emit('sy102', true, 123, 'woaini'); 
        // }, 2000) 
    },
    methods:{
        demo(msg){
            this.msg = msg; 
        }
    }
})
console.log(app);