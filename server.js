import app from "./app.js";
import http from 'http';
import { Server } from 'socket.io';

const porta = process.env.PORT || 3000;
const httpserver = http.createServer(app);

const io = new Server(httpserver);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {

        console.log(`Disconnected: ${socket.id}`);
    })
});

httpserver.listen(porta, () => {
    console.log(`Ouvindo na porta ${porta}`)
})

process.on('SIGINT', () => {
    db.close()
    httpserver.close()
    console.log('App finalizado')
})

export default io;