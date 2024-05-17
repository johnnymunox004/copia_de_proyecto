import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "token no autorizado" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "token invalido" });

    req.user = user;

    next();
  });
};



// middleware de autenticación llamado authRequired. Este middleware se utiliza para verificar si el usuario está autenticado antes de permitirle acceder a ciertas rutas. Aquí está lo que hace cada parte:

// import jwt from "jsonwebtoken";: Esta línea importa la biblioteca jsonwebtoken, que se utiliza para crear y verificar tokens JWT (JSON Web Tokens).
// import { TOKEN_SECRET } from "../config.js";: Aquí se está importando una constante llamada TOKEN_SECRET desde un módulo de configuración. Esta constante se utiliza como la clave secreta para verificar los tokens JWT.
// export const authRequired = (req, res, next) => { ... };: Aquí se está definiendo y exportando una función de middleware llamada authRequired.
// const { token } = req.cookies;: Esta línea extrae el token JWT de las cookies de la solicitud.
// if (!token) return res.status(401).json({ message: "token no autorizado" });: Si no hay token, se envía una respuesta con el estado 401 (No autorizado) y un mensaje de error.
// jwt.verify(token, TOKEN_SECRET, (err, user) => { ... });: Aquí se está verificando el token JWT utilizando la clave secreta. Si el token es válido, se devuelve el payload del token (en este caso, un objeto de usuario).
// if (err) return res.status(403).json({ message: "token invalido" });: Si hay un error al verificar el token (por ejemplo, si el token es inválido o ha expirado), se envía una respuesta con el estado 403 (Prohibido) y un mensaje de error.
// req.user = user;: Si el token es válido, se añade el objeto de usuario al objeto de solicitud. Esto permite que los controladores de ruta posteriores accedan a los datos del usuario.
// next();: Finalmente, se llama a la función next para pasar el control al siguiente middleware o controlador de ruta.