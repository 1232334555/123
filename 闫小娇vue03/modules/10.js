import Vue from 'vue';
const child = Vue.extend({
    props:['name','msg','parentMsg'],
    // 模板
    template:`
    <div>
    <h1>子组件</h1>
    <h2>{{$parent.msg}}</h2>
    <h3>{{title}}</h3>
    </div>
    `,
    data(){
        return{

        }
    },
    created(){
        this.title = this.$parent.msg.toUpperCase();
    },
   
});
 // 实例化对象
 let app = new Vue({
    el:'#app',
    data:{
        msg:'<a>我爱你</a>',
    },
    components:{
        child,
    },
})