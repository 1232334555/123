import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let first = {
    template: `
    <div>
        <h1>first</h1>
        <h2>name: {{$route.fullPath}}</h2> 
    </div>
    `,
}
let second = {
    template:`
    <div>
        <h1>second</h1>
        <h2>id:{{id}}</h2>
    </div>
    `,
    props:['id'],
}
let three = {
    template:`
        <div>
            <h1>three</h1>
            <h2>fullPath:{{fullPath}}----name:{{name}}</h2>
        </div>
    `,
    props:['fullPath','name'],
}
const routes = [
    { path: '/first', component: first, name:'first' },
    { 
        path: '/second/:id', component: second, name:'second',
        // 设置props
        props: true, 
    },
    {
        path: '/three', component: three, name:'three',
        // props方法，返回值为对象
        props(route) {
            // console.log(arguments);
            // return {

            // }
            let {fullPath, name} = route;
            return {fullPath, name}
        }
    },
    // 重定向
    { path: '/second', redirect: '/second/xxoo' }, 
    // 定义一个默认路由
    {path: '*', component: {template: '<h1>默认路由</h1>', name: 'default'}}
    
];
const router = new Router({
    routes,
})
const app = new Vue({
    el:'#app',
    data:{

    },
    router,
})
