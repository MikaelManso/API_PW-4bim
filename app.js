const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // carrega as variáveis de ambiente
const app = express();
app.use(cors()); // Middleware CORS 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// rota inicial
app.get("/", (req, res) => {
    res.send("API de CRUD de usuários");
});

//Importa e usa as rotas de usuários
const userRoutes = require("./routes/usuarios");
app.use("/api", userRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log (`Servidor rodano na porta ${PORT}`);
});