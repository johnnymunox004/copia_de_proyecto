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
