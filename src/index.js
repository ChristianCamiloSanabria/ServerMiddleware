console.clear();
console.log("Servidor Middleware");
import path from "path";
import morgan from "morgan";
import mongoose from "mongoose";
import createExpressServer from "express";
import router  from "./routes/services.js";
import bodyParser from "body-parser";

//Se instancia el servidor para poder configurar
const expressApp = createExpressServer();
expressApp.use(bodyParser.urlencoded({
    extended: true
}));

//connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db connected'))
    .catch(err => console.log('err:' + err.message));

//routes
expressApp.use('/',router);


//settings
expressApp.set('port', process.env.PORT || 3000);
expressApp.set('views', path.join('.', 'views'));
//app.set('view engine', 'ejs'); 



//middlewares
expressApp.use(morgan('dev'));
expressApp.use(createExpressServer.urlencoded({extended: false}));

expressApp.listen(expressApp.get('port'),()=>{
	 console.log(`Server on port ${expressApp.get('port')}`); 
	 expressApp.use(
        createExpressServer.urlencoded({
            extended: true
        })
    );
});

expressApp.use(createExpressServer.json());
