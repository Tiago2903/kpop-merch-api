import { envData } from "../config/env.js";

const baseConfig = {
    client: "mssql",
    connection: {
        host: envData.db_host,
        port: envData.db_port,
        user: envData.db_user,
        password: envData.db_password,
        database: envData.db_name
    },
    migrations: {
        directory: './migrations',    // caminho da pasta de migrations, conforme o architecture.md
        loadExtensions: ['.js'], // knex will search for 'mjs' file by default
    },
    seeds: {
        directory: './seeds'
    }
};

export default {
    development: {
        ...baseConfig
    },
    production: {
        ...baseConfig
    },
    test: {
        ...baseConfig
    }
}