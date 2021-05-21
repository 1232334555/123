export default function(store){
    store.subscribe((...arg)=>{
        console.log(arg);
    })
}