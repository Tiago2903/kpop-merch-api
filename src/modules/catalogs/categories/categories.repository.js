import { BaseRepository } from '../../../core/BaseRepository.js';
import Knex from 'knex';
import config from './knexfile.js';
import { envData } from "../config/env.js";

const environment = envData.node_env || 'development';
const knex = Knex(config[environment]);

export class CategoriesRepository extends BaseRepository {
    constructor(knex) {
        super(knex, 'categories')
    }
}