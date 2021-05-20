import Vue from 'vue';
const sy102 = Vue.extend({
    template:'#tpl',
    data(){
        return {
            title:"斑码教育99",
            name:'child9996'
        }
    },
    // 创建
    beforeCreate(){
        console.log(111,'beforCreate');
    },
    created(){
        console.log(222,'created');
    },
    beforeMount(){
        console.log(333,'beforMount');
    },
    mounted(){
        console.log(444,'mouted');
    },
    // 2、存在
    beforeUpdate(){
        console.log(555,'beforeUpdate');
    },
    updated(){
        console.log(666,'updated');
    },
    // 销毁
    beforeDestroy(){
        console.log(777,'beforeDestroy');
    },
    destroyed(){
        console.log(888,'destroyed');
    },
    activated(){
        console.log('zzz','deactivated');
    }
});
const sy103 = Vue.extend({
    // 模板
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
    // 3局部注册组件
    components:{
        sy102,
        sy103
    },
    // 方法
    methods:{
        // 组件的切
        toggle(){
            this.com = this.com == 'sy102'?'sy103':'sy102';
        }
    }
})