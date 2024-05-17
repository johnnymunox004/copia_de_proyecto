import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);

// const taskSchema = new mongoose.Schema({ ... }, { timestamps: true }): Aquí se está definiendo un nuevo esquema de Mongoose llamado taskSchema. Un esquema de Mongoose define la estructura de los documentos dentro de una colección de MongoDB.
// Dentro del esquema, se definen varios campos:
// title: Este campo es de tipo String y es requerido (require: true).
// description: Este campo también es de tipo String y es requerido.
// date: Este campo es de tipo Date. Si no se proporciona una fecha, se usará la fecha y hora actuales como valor predeterminado (default: Date.now).
// user: Este campo es de tipo ObjectId, que es un tipo especial utilizado por MongoDB para identificadores únicos. Se hace referencia a otro modelo llamado “User” (ref: "User"). Este campo también es requerido.
// { timestamps: true }: Esta opción le dice a Mongoose que automáticamente agregue campos createdAt y updatedAt a tu esquema. Estos campos serán automáticamente gestionados por Mongoose; se establecerán cuando crees un nuevo documento y se actualizarán cada vez que actualices el documento.
// export default mongoose.model("Task", taskSchema): Finalmente, se crea un modelo de Mongoose a partir del esquema y se exporta. Un modelo de Mongoose representa una colección de documentos en la base de datos que puedes buscar, mientras que un esquema de Mongoose define la forma de los documentos dentro de esa colección.
