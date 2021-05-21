let express = require('express');
let ejs = require('ejs');
let app = new express();
app.engine('.html',ejs._express);
app.use('/dist/',express.static('./dist'));
app.get('*',(req,res)=>{
    res.render('../4 路由策略.html');
})
app.listen(80,() =>{
    res.render('server is start');
})