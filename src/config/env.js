import { schema } from './env.schema.js';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, `../../.env.${process?.env?.NODE_ENV || "development"}`)
});

const config = {
    server_port: process.env.SERVER_PORT || undefined,
    db_port: process.env.DB_PORT || undefined,
    db_password: process.env.DB_PASSWORD || undefined,
    db_name: process.env.DB_NAME || undefined,
    db_user: process.env.DB_USER || undefined,
    db_host: process.env.DB_HOST || undefined,
    node_env: process.env.NODE_ENV || undefined,
};

function validateEnv(schema) {
    const result = schema.safeParse(config);

    if (!result.success) {
        const errors = result.error.errors.map(err =>
            `${err.path.join('.')}: ${err.message}`
        );
        throw new Error(`Configuração inválida:\n${errors.join('\n')}`);
    }

    return result.data;
}

const envData = validateEnv(schema);

export { envData };