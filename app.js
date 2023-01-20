import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import morganBody from 'morgan-body';
import fs from 'fs';
import db from './configs/dbConfig.js';

import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = path.dirname(__filename);

var app = express();

// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json());

const log = fs.createWriteStream(
    path.join(__dirname, "./logs", "transacoes.log"), { flags: 'a' }
)

morganBody(app, {
    noColors: true,
    stream: log
})
routes(app)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({
        message: {
            erro: err.status
        }
    })
});

export default app;