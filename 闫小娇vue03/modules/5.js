import Vue from 'vue';
// 定义组件类
const sy102 = Vue.extend({
    template:`
    <div>
    <!--组件只能有一个根元素-->
    <h1>child</h1>
    <h2>{{title}}-----{{name}}</h2>
    </div>
    `,
    data(){
        return{
            title:'斑码教育',
            name:'child'
        }
    }
})
// 全局注册组件
Vue.component('sy102',sy102);
// 实例化对象
let app = new Vue({
    el:'#app',
    data:{
        msg:'<a>我爱你</a>',
    }
})
console.log(app);