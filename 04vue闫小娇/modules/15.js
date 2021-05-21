import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let first = {
    template:"#first",
    created(){
        console.log("first",this);
    },
};
let second = {
    props:['name','id','fullPath','sex','hash'],
    template:"#second",
    created(){
        console.log(999999);
        console.log(this.$route);
    }
};
let three = {template:"<h1>footer</h1>"};
const routes = [
    {path:'/first',component:first,name:'first1'},
    {
        path:"/second/:id",
        component:second,
        name:'second',
        props(route){
            return {
                name:route.name,
                id:route.params.id,
                fullPath:route.fullPath,
                sex:route.query.sex,
                hash:route.hash
            }
        }
    },
    {path:'/three',component:three,name:'three'},
    {path:'/second',redirect:'/second/demo?name=zhangsan&age=18#top'},
    {path:"*",component:{template:'<h1>index</h1>'}}
];
const router = new Router({routes});
const app = new Vue({
    router,
    el:"#app",
    data:{},
    created(){
        console.log('app',this)
    },
})