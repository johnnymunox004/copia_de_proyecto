import Task from "../models/task.models.js";

//////////////////////////////////////////////////////
export const getTasks = async (req, res) => {
try {
  const tasks = await Task.find({
    user: req.user.id
  }).populate('user')
  res.json(tasks);
} catch (error) {
  return res.status(500).json({ message:" algo paso muy mal"})
}
};

/////////////////////////////////////////////////////////
export const createTasks = async (req, res) => {
try {
  const { title, description, date } = req.body;

  console.log(req.user);
  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id

  });
  const saveTask = await newTask.save();
  res.json(saveTask);
} catch (error) {
  return res.status(500).json({ message:" algo paso mal"})
}
};
/////////////////////////////////////////////////////////
export const getTask = async (req, res) => {
try {
  const task = await Task.findById(req.params.id).populate('user')
  if (!task) return res.status(404).json({ message: "tarea no encontrada" });
  res.json(task);
} catch (error) {
  return res.status(404).json({message:"tarea no encontradaaa"})
}
};

//////////////////////////////////////////////////////

export const deleteTasks = async (req, res) => {
try {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "tarea no encontrada" });
   return res.sendStatus(204);

} catch (error) {
return res.status(404).json({ message: "tarea no encontrada" });
 

}
};

////////////////////////////////////////////
export const updatetasks = async (req, res) => {
try {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "tarea no encontrada" });
  res.json(task);
} catch (error) {
return res.status(404).json({ message: "tarea no encontrada" });
}
};



// Función para obtener todas las tareas (getTasks):

// const tasks = await Task.find({ user: req.user.id }).populate('user'): Busca en la base de datos todas las tareas que pertenecen al usuario autenticado. El método populate('user') reemplaza el campo user (que es el ID del usuario) con los detalles completos del usuario.
// res.json(tasks);: Envía una respuesta con todas las tareas encontradas.
// catch (error) { ... }: Captura cualquier error que pueda ocurrir durante la búsqueda de tareas.
// return res.status(500).json({ message:" algo paso muy mal"}): Si ocurre un error, se envía una respuesta con el estado 500 (Error interno del servidor) y un mensaje de error.
// Función para crear una tarea (createTasks):

// const { title, description, date } = req.body;: Extrae el título, la descripción y la fecha del cuerpo de la solicitud.
// const newTask = new Task({ ... });: Crea una nueva tarea con el título, la descripción, la fecha y el ID del usuario proporcionados.
// const saveTask = await newTask.save();: Guarda la nueva tarea en la base de datos.
// res.json(saveTask);: Envía una respuesta con los detalles de la tarea guardada.
// Función para obtener una tarea (getTask):

// const task = await Task.findById(req.params.id).populate('user'): Busca en la base de datos una tarea con el ID proporcionado.
// res.json(task);: Envía una respuesta con los detalles de la tarea encontrada.
// Función para eliminar una tarea (deleteTasks):

// const task = await Task.findByIdAndDelete(req.params.id);: Busca en la base de datos una tarea con el ID proporcionado y la elimina.
// return res.sendStatus(204);: Envía una respuesta con el estado 204 (No Content), que indica que la tarea se eliminó con éxito.
// Función para actualizar una tarea (updatetasks):

// const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, });: Busca en la base de datos una tarea con el ID proporcionado y actualiza sus detalles con los datos proporcionados en el cuerpo de la solicitud. La opción { new: true } asegura que la función devuelva la versión actualizada de la tarea.
// res.json(task);: Envía una respuesta con los detalles de la tarea actualizada.
// Espero que esto te ayude a entender mejor el código. Si tienes más preguntas, no dudes en preguntar. 😊 user import jwt from “jsonwebtoken”; import { TOKEN_SECRET } from “…/config.js”;

// export const createAccesToken = (user) => { return jwt.sign({ id: user.id }, TOKEN_SECRET, { expiresIn: “1d”, }); }; [assistant]=(#message|) Este es un código en JavaScript que define una función llamada createAccesToken. Esta función se utiliza para crear un token de acceso JWT (JSON Web Token) para un usuario. Aquí está lo que hace cada parte:

// import jwt from "jsonwebtoken";: Esta línea importa la biblioteca jsonwebtoken, que se utiliza para crear y verificar tokens JWT.
// import { TOKEN_SECRET } from "../config.js";: Aquí se está importando una constante llamada TOKEN_SECRET desde un archivo de configuración. Esta constante se utiliza como la clave secreta para firmar los tokens JWT.
// export const createAccesToken = (user) => { ... };: Aquí se está definiendo y exportando una función llamada createAccesToken. Esta función toma un objeto de usuario como argumento.
// return jwt.sign({ id: user.id }, TOKEN_SECRET, { expiresIn: "1d" });: Dentro de la función, se está firmando un nuevo token JWT. El payload del token es un objeto que contiene el ID del usuario. La clave secreta para firmar el token es TOKEN_SECRET. El token expirará en 1 día (expiresIn: "1d").
// Espero que esto te ayude a entender mejor el código. Si tienes más preguntas, no dudes en preguntar. 😊 [user]=(#message|) import { z } from “zod”;

// export const createTaskSchema = z.object({ title: z.string({ required_error: “titulo requerido”, }), description: z.string({ required_error: "desripcion requerida ", }), date: z.string().datetime().optional(), }); [assistant]=(#message|) Este es un código en JavaScript que utiliza la biblioteca Zod para definir un esquema de validación llamado createTaskSchema. Zod es una biblioteca para la creación y validación de esquemas, que es especialmente útil para validar los datos de entrada del usuario. Aquí está lo que hace cada parte:

// import { z } from "zod";: Esta línea importa el objeto z de la biblioteca Zod.
// export const createTaskSchema = z.object({ ... });: Aquí se está definiendo y exportando un esquema de Zod llamado createTaskSchema. Este esquema se utiliza para validar los datos de entrada cuando se crea una nueva tarea.
// Dentro del esquema, se definen varios campos:

// title: Este campo es de tipo string y es requerido. Si no se proporciona un título, se devolverá el mensaje de error “titulo requerido”.
// description: Este campo también es de tipo string y es requerido. Si no se proporciona una descripción, se devolverá el mensaje de error “desripcion requerida”.
// date: Este campo es de tipo string y debe ser una fecha y hora válidas (datetime). Sin embargo, este campo es opcional (optional), lo que significa que si no se proporciona una fecha, no se devolverá un error.