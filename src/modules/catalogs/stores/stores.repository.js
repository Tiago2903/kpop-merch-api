import { BaseRepository } from '../../../core/BaseRepository.js';

export class StoresRepository extends BaseRepository {
    constructor(knex) {
        super(knex, 'stores')
    }
}
