import { BaseRepository } from '../../../core/BaseRepository.js';

export class PlatformsRepository extends BaseRepository {
    constructor(knex) {
        super(knex, 'platforms')
    }
}
