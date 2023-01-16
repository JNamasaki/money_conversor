import app from "./app.js";
import e from "express";

const porta = e.env.PORT || 3000;

app.listen(porta, () => {
    console.log(`Ouvindo na porta ${porta}`)
})