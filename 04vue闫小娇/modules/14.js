import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let first = {template:'<h1>header</h1>'}
let second = {template:'<h1>main</h1>'}
let three = {template:'<h1>footer</h1>'}
const routes = [
    {path:'/first', component: first, name:'first'},
    {path:'/second/:id', component: second, name:'second'},
    {path:'/three', component: three, name:'three'},
]
const router = new Router({routes});
const app = new Vue({
    router,
    el:'#app',
    data:{}
})