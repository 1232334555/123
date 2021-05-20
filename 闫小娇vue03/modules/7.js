import Vue from 'vue';
const sy102 = Vue.extend({
    // 模板
    tempate:'tpl',
    data(){
        return {
            title:'斑码教育99',
            name:'child9996'
        }
    }
});
const sy103 = Vue.extend({
    template:`
    <h1>sy103</h1>
    `,
})
// 实例化对象
let app = new Vue({
    el:'#app',
    data:{
        msg:'<a>我爱你</a>',
        com:'sy102'
    },
    // 局部祖册组件
    components:{
        sy102,
        sy103
    },
    methods:{
        toggle(){
            this.com = this.com == 'sy102'?'sy103':'sy102';
        }
    }
})