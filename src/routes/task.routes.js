import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

import {
  getTask,
  getTasks,
  deleteTasks,
  createTasks,
  updatetasks,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.midellware.js";
import { createTaskSchema } from "../schemas/task.schem.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTask);

router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTasks
);

router.delete("/tasks/:id", authRequired, deleteTasks);

router.put("/tasks/:id", authRequired, updatetasks);

export default router;



// import { Router } from "express";: Esta línea importa la función Router de la biblioteca Express.js. Router es una función que crea un nuevo objeto de enrutador.
// Se importan varias funciones de controlador y middleware de otros módulos.
// const router = Router();: Aquí se está creando un nuevo objeto de enrutador.
// router.get("/tasks", authRequired, getTasks);: Esta línea define una ruta GET en “/tasks”. Cuando se hace una solicitud GET a “/tasks”, primero se verifica si el usuario está autenticado utilizando el middleware authRequired, y luego se maneja la solicitud con la función de controlador getTasks.
// router.get("/tasks/:id", authRequired, getTask);: Similar a la ruta “/tasks”, esta línea define una ruta GET en “/tasks/:id”.
// router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTasks);: Esta línea define una ruta POST en “/tasks”. Cuando se hace una solicitud POST a “/tasks”, primero se verifica si el usuario está autenticado, luego se valida el cuerpo de la solicitud utilizando el middleware validateSchema(createTaskSchema), y finalmente se maneja la solicitud con la función de controlador createTasks.
// router.delete("/tasks/:id", authRequired, deleteTasks);: Esta línea define una ruta DELETE en “/tasks/:id” que maneja la solicitud con la función de controlador deleteTasks.
// router.put("/tasks/:id", authRequired, updatetasks);: Esta línea define una ruta PUT en “/tasks/:id”. Cuando se hace una solicitud PUT a “/tasks/:id”, primero se verifica si el usuario está autenticado, y luego se maneja la solicitud con la función de controlador updatetasks.
// export default router;: Finalmente, se exporta el objeto de enrutador.