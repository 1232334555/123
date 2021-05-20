import Vue from 'vue';
const child = Vue.extend({
    template:'#child',
    data(){
        return {
            msg:'love',
            title:'miss'
        }
    },
});
const app = new Vue({
el:'#app',
data:{
    msg:'hello'
},
components:{child},
})