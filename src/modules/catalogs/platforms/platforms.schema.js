import { z } from "zod";

const createPlatformSchema = z.object({
  name: z.string().trim().nonempty("Nome é obrigatório").max(255, "Nome deve ter no máximo 255 caracteres"),
  website: z
    .string()
    .trim()
    .max(255, "Website deve ter no máximo 255 caracteres")
    .nullish()
    .transform((val) => val || null),
  notes: z
    .string()
    .trim()
    .nullish()
    .transform((val) => val || null),
});

export { createPlatformSchema };
