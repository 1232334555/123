import Vue from 'vue';
const sy102 = Vue.extend({
    // 放置的对象和new vue相同，但是不同点在于el变成template和data为函数，数据为函数的返回值
    // 模板
    template:'#tpl',
    data(){
        return {
            title:'斑码教育99',
            name:'child9996'
        }
    },
});
// 3全局注册组件
Vue.component('sy102',sy102);
// 实例化对象
let app = new Vue({
// 视图
el:'#app',
data:{
    msg:'<a>我爱你</a>',
},
components:{
    sy102,
}
})
console.log(app);