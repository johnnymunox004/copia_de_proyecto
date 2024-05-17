import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log(">>>> conectado a mongodb");
  } catch (error) {
    console.log(error);
  }
};

// import mongoose from "mongoose";: Esta línea importa la biblioteca Mongoose, que proporciona una solución directa basada en esquemas para modelar los datos de tu aplicación. Incluye conversión de tipos incorporada, validación, creación de consultas, ganchos de lógica de negocios y más, listos para usar.
// export const connectDB = async () => { ... };: Aquí se está definiendo y exportando una función asíncrona llamada connectDB. La palabra clave async significa que la función devuelve una promesa, o equivalente, y puede ser usada en combinación con la palabra clave await.
// await mongoose.connect("mongodb://localhost/merndb");: Dentro de la función connectDB, se intenta conectar a una base de datos MongoDB local llamada ‘merndb’ utilizando Mongoose. La palabra clave await se utiliza para esperar a que se complete la Promesa devuelta por mongoose.connect antes de continuar.
// console.log(">>>> conectado a mongodb"): Si la conexión es exitosa, se imprimirá un mensaje en la consola que dice “>>>> conectado a mongodb”.
// } catch (error) { console.log(error); }: Si ocurre algún error durante la conexión a la base de datos, se capturará ese error y se imprimirá en la consola.
