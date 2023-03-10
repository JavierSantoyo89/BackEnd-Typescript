console.log("Jala el typescript");
// ------- Variables de rutas ------- //
import express from "express"
const app = express()
import path from "path"
app.use(express.static(path.dirname + '/public'));

//* ------- Template engine ------- //
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './views/'));
app.set('views','./src/views/');

//* const routes = require('./routers/main')
import routes from "./routers/main"
app.use('/',routes);

// ------- Cadena de ruta para error 404 ------- //
app.use((_req,res,_next)=>{
    res.status(404).render('not-found')
})

//* ------- levantar servidor ------- //
const port = process.env.PORT || 1689
app.listen(port,()=>{
    console.log('Servidor funcionando en http://localhost:'+port);
});
