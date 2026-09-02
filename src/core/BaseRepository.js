export class BaseRepository {
    constructor(knex, tableName) {
        this.knex = knex;
        this.tableName = tableName;
    }

    query(trx) {
        return (trx || this.knex)(this.tableName).whereNull('deleted_at');
    }

    findAll(trx) {
        return this.query(trx);
    }

    findById(id, trx) {
        return this.query(trx).where('id', id).first();
    }

    create(data, trx) {
        return this.query(trx).insert(data);
    }

    update(id, data, trx) {
        return this.query(trx).where({ id }).update(data);
    }

    softDelete(id, trx) {
        return this.query(trx).where({ id }).update({ deleted_at: new Date() });
    }
}