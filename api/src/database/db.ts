import mongoose from "mongoose";

const connectionString: string =
  "mongodb+srv://milenediasdasilva2002:18092002@cluster0.3udpoyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDatabase = (): void => {
  console.log("Espere! Estamos conectando o banco de dados.");

  mongoose
    .connect(connectionString, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    })
    .then(() => console.log("Banco de dados Conectado!"))
    .catch((error: Error) => console.log(error));
};

export default connectDatabase;
