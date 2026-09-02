import { z } from "zod";

const schema = z.object({
  server_port: z.coerce.number().min(1, "server_port é obrigatória"),
  db_port: z.coerce.number().min(1, "db_port  é obrigatória"),
  db_password: z.string().nonempty("db_password é obrigatória"),
  db_name: z.string().nonempty("db_name é obrigatória"),
  db_user: z.string().nonempty("db_user é obrigatória"),
  db_host: z.string().nonempty("db_host é obrigatória"),
  node_env: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export { schema };
