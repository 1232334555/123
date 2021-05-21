import Vue from 'vue';
let header1 = Vue.extend({
    template:"#header",
});
let main1 = Vue.extend({
    template:"#main",
});
let footer1 = Vue.extend({
    template:"#footer",
});
const app = new Vue({
    components:{header1,main1,footer1},
    el:'#app',
    data:{
        child:'header1'
    }
})
let router = () => {
    app.child = location.hash.slice(2);
}
window.addEventListener('hashchange',router);
router();