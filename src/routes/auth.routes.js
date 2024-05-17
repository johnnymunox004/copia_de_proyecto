import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.midellware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schemaas.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/verify", verifyToken );

router.get("/profile", authRequired, profile);

export default router;



// import { Router } from "express";: Esta línea importa la función Router de la biblioteca Express.js. Router es una función que crea un nuevo objeto de enrutador.
// Se importan varias funciones de controlador y middleware de otros módulos.
// const router = Router();: Aquí se está creando un nuevo objeto de enrutador.
// router.post("/register", validateSchema(registerSchema), register);: Esta línea define una ruta POST en “/register”. Cuando se hace una solicitud POST a “/register”, primero se valida el cuerpo de la solicitud utilizando el middleware validateSchema(registerSchema), y luego se maneja la solicitud con la función de controlador register.
// router.post("/login", validateSchema(loginSchema), login);: Similar a la ruta “/register”, esta línea define una ruta POST en “/login”.
// router.post("/logout", logout);: Esta línea define una ruta POST en “/logout” que maneja la solicitud con la función de controlador logout.
// router.get("/verify", verifyToken );: Esta línea define una ruta GET en “/verify” que maneja la solicitud con la función de controlador verifyToken.
// router.get("/profile", authRequired, profile);: Esta línea define una ruta GET en “/profile”. Cuando se hace una solicitud GET a “/profile”, primero se verifica si el usuario está autenticado utilizando el middleware authRequired, y luego se maneja la solicitud con la función de controlador profile.
// export default router;: Finalmente, se exporta el objeto de enrutador.