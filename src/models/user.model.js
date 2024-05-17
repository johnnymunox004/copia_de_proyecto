import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    }
},{
    timestamps:true
})


export default mongoose.model('User', userSchema)


// const userSchema = new mongoose.Schema({ ... }, { timestamps: true }): Aquí se está definiendo un nuevo esquema de Mongoose llamado userSchema. Un esquema de Mongoose define la estructura de los documentos dentro de una colección de MongoDB.
// Dentro del esquema, se definen varios campos:
// username: Este campo es de tipo String, es requerido (required: true), y se eliminarán los espacios en blanco al principio y al final (trim: true).
// email: Este campo también es de tipo String, es requerido, se eliminarán los espacios en blanco al principio y al final, y debe ser único en la base de datos (unique: true).
// password: Este campo es de tipo String y es requerido.
// { timestamps: true }: Esta opción le dice a Mongoose que automáticamente agregue campos createdAt y updatedAt a tu esquema. Estos campos serán automáticamente gestionados por Mongoose; se establecerán cuando crees un nuevo documento y se actualizarán cada vez que actualices el documento.
// export default mongoose.model('User', userSchema): Finalmente, se crea un modelo de Mongoose a partir del esquema y se exporta. Un modelo de Mongoose representa una colección de documentos en la base de datos que puedes buscar, mientras que un esquema de Mongoose define la forma de los documentos dentro de esa colección.


// En la línea export default mongoose.model('User', userSchema), ‘User’ es el nombre que se le da al modelo en Mongoose. Este nombre es importante por varias razones:

// Identificación en la base de datos: Mongoose utiliza el nombre del modelo para identificar la colección correspondiente en la base de datos MongoDB. Por defecto, Mongoose toma el nombre del modelo, lo convierte a minúsculas y lo pluraliza. Por ejemplo, si el nombre del modelo es ‘User’, Mongoose buscará una colección llamada ‘users’ en la base de datos.
// Referencia en otros esquemas: Si tienes otros esquemas que hacen referencia a documentos en la colección ‘User’, necesitarás usar el nombre del modelo. Por ejemplo, en tu esquema taskSchema, tienes un campo ‘user’ que hace referencia al modelo ‘User’.