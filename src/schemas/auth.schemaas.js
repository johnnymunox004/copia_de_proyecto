import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "username requuiered",
  }),
  email: z
    .string({
      required_error: "email requuiered",
    })
    .email({
      message: "invalid email",
    }),
  password: z
    .string({
      required_error: "password requuiered",
    })
    .min(6, {
      message: "lacontraseña debe tener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "email requuiered",
    })
    .email({
      message: "invalid email",
    }),

  password: z
    .string({
      required_error: "password requuiered",
    })
    .min(6, {
      message: "lacontraseña debe tener al menos 6 caracteres",
    }),
});


// registerSchema y loginSchema. Zod es una biblioteca para la creación y validación de esquemas, que es especialmente útil para validar los datos de entrada del usuario. Aquí está lo que hace cada parte:

// import { z } from "zod";: Esta línea importa el objeto z de la biblioteca Zod.
// export const registerSchema = z.object({ ... });: Aquí se está definiendo y exportando un esquema de Zod llamado registerSchema. Este esquema se utiliza para validar los datos de registro del usuario.
// export const loginSchema = z.object({ ... });: Aquí se está definiendo y exportando un esquema de Zod llamado loginSchema. Este esquema se utiliza para validar los datos de inicio de sesión del usuario.
// Dentro de cada esquema, se definen varios campos:

// username: Este campo es de tipo string y es requerido. Si no se proporciona un nombre de usuario, se devolverá el mensaje de error “username required”.
// email: Este campo es de tipo string, es requerido y debe ser un correo electrónico válido. Si no se proporciona un correo electrónico, se devolverá el mensaje de error “email required”. Si el correo electrónico proporcionado no es válido, se devolverá el mensaje de error “invalid email”.
// password: Este campo es de tipo string, es requerido y debe tener al menos 6 caracteres. Si no se proporciona una contraseña, se devolverá el mensaje de error “password required”. Si la contraseña proporcionada tiene menos de 6 caracteres, se devolverá el mensaje “la contraseña debe tener al menos 6 caracteres”.