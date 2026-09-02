// run-migrations.js
import Knex from 'knex';
import config from './knexfile.js';
import { envData } from "../config/env.js";

const environment = envData.node_env || 'development';
const knex = Knex(config[environment]);

async function migrate() {
    console.log('Running migrations...');
    try {
        await knex.migrate.latest();
        console.log('Migrations completed successfully!');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await knex.destroy();
    }
}

migrate();
