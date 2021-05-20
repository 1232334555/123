import Vue from 'vue';
import'../scss/6.scss';
let app = new Vue({
    el:'#app',
    data:{
        color:['black','black','black'],
        corsor:['not-allowed','not-allowed','pointer'],
    },
    methods:{
        // 图片边框
        imgClick(index){
            let arr = ['black','black','black'];
            arr[index] = 'red';
            this.color =arr;
            if(index==0){
                this.corsor = ['pointer','pointer','pointer'];
            }else if(index == 1){
                this.corsor = ['not-allowed','pointer','pointer'];
            }else{
                this.corsor = ['not-allowed','not-allowed','pointer'];
            }
        }
    }
})