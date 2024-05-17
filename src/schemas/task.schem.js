import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "titulo requerido",
  }),
  description: z.string({
    required_error: "desripcion requerida ",
  }),
  date: z.string().datetime().optional(),
});


// createTaskSchema. Zod es una biblioteca para la creación y validación de esquemas, que es especialmente útil para validar los datos de entrada del usuario. Aquí está lo que hace cada parte:

// import { z } from "zod";: Esta línea importa el objeto z de la biblioteca Zod.
// export const createTaskSchema = z.object({ ... });: Aquí se está definiendo y exportando un esquema de Zod llamado createTaskSchema. Este esquema se utiliza para validar los datos de entrada cuando se crea una nueva tarea.
// Dentro del esquema, se definen varios campos:

// title: Este campo es de tipo string y es requerido. Si no se proporciona un título, se devolverá el mensaje de error “titulo requerido”.
// description: Este campo también es de tipo string y es requerido. Si no se proporciona una descripción, se devolverá el mensaje de error “desripcion requerida”.
// date: Este campo es de tipo string y debe ser una fecha y hora válidas (datetime). Sin embargo, este campo es opcional (optional), lo que significa que si no se proporciona una fecha, no se devolverá un error.