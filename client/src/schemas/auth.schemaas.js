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
