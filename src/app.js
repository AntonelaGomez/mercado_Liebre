const path = require ("path");
const express = require("express");
const app = express();

app.use(express.static('public'))

const port = process.env.PORT || 3440
app.listen(port, ()=> console.log(`Servidor corriendo en el puerto: http://localhost:${port}`)
);

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})


  app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

app.post("/login", (req, res) => {
    res.send('Recibido el formulario de login');
})


app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.post("/register", (req, res) => {
    res.send('Recibido correctamente el formulario de registro');
})