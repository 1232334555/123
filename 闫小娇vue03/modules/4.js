import Vue from 'vue';
let app = new Vue({
    el:'#app',
    data:{
        msg:"<a>我爱你</a>",
        title:'斑码教育',
        flag:true,
    },
    methods:{
        toggle(){
            this.flag =!this.flag;
        }
    },
    directives:{
        bmShow(el,binding,vnode){
            if(binding.value){
                el.style.display = '';
            }else{
                el.style.display = 'none'
            }
        }
    }
})