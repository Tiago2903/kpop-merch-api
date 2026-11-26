import { z } from "zod";

const createMerchTypeSchema = z.object({
  name: z.string().trim().nonempty("Nome é obrigatório"),
  description: z
    .string()
    .trim()
    .nullish()
    .transform((val) => val || null),
});

export { createMerchTypeSchema };
