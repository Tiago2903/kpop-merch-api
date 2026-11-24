import { BaseRepository } from '../../../core/BaseRepository.js';

export class CategoriesRepository extends BaseRepository {
    constructor(knex) {
        super(knex, 'categories')
    }
}