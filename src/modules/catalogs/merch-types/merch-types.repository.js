import { BaseRepository } from '../../../core/BaseRepository.js';

export class MerchTypesRepository extends BaseRepository {
    constructor(knex) {
        super(knex, 'merch_types')
    }
}