import { Schema } from "zod";

export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res
      .status(400)
      .json(error.errors.map((error) => error.message) );
  }
};


// middleware llamado validateSchema. Este middleware se utiliza para validar el cuerpo de la solicitud contra un esquema de Zod dado. Aquí está lo que hace cada parte:

// import { Schema } from "zod";: Esta línea importa la clase Schema de la biblioteca Zod.
// export const validateSchema = (schema) => (req, res, next) => { ... };: Aquí se está definiendo y exportando una función de middleware llamada validateSchema. Esta función toma un esquema de Zod como argumento y devuelve una función de middleware.
// schema.parse(req.body);: Dentro de la función de middleware, se intenta analizar el cuerpo de la solicitud utilizando el esquema de Zod. Si el cuerpo de la solicitud no cumple con el esquema, schema.parse lanzará un error.
// next();: Si el cuerpo de la solicitud cumple con el esquema, se llama a la función next para pasar el control al siguiente middleware o controlador de ruta.
// catch (error) { ... }: Si ocurre un error al analizar el cuerpo de la solicitud (es decir, si el cuerpo de la solicitud no cumple con el esquema), se captura ese error.
// return res.status(400).json(error.errors.map((error) => error.message));: Si ocurre un error, se envía una respuesta con el estado 400 (Solicitud incorrecta) y un array de mensajes de error.