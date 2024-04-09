const mongoose = require("mongoose");

const connectionString =
 "mongodb+srv://milenediasdasilva2002:18092002@cluster0.3udpoyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDatabase = () => {
  console.log("Espere! Estamos conectando o banco de dados.");

  mongoose
    .connect(connectionString, {
      //useNewUrlParser: true,
      //useUnifieldTopology: true,
    })
    .then(() => console.log("Banco de dados Conectado!"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
