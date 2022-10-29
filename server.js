//chamar o express
const express = require('express');
//instanciar express
const app = express();
//informar express que estamos usando ejs
app.set("view engine", "ejs")
//criar rotas
app.get("/", function (req, res){
    const itens = [
        {
            title:"E",
            message: "JS Desenvolve aplicações de forma fácil"
        },
        {
            title:"J",
            message:"avascript é usado para renderizar"
        },
        {
            title:"S",
            message:"intaxe simples"
        },
    ];
    res.render("pages/index", {qualidades: itens,
});
})
app.get("/sobre", function (req, res){
    res.render("pages/about");
})
//escuta a porta 8080 para rodar
app.listen(8080);