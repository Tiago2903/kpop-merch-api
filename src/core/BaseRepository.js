export class BaseRepository {
  constructor(knex, tableName) {
    this.knex = knex;
    this.tableName = tableName;
  }

  query(trx) {
    return (trx || this.knex)(this.tableName).whereNull("deletedAt");
  }

  findAll(trx) {
    return this.query(trx);
  }

  findById(id, trx) {
    return this.query(trx).where({ id }).first();
  }

  async create(data, trx) {
    // O insert tem a query explicita para não passar o whereNull() na query.
    const ret = await (trx || this.knex)(this.tableName)
      .insert(data)
      .returning("*");
    return ret[0];
  }

  async update(id, data, trx) {
    const ret = await this.query(trx)
      .where({ id })
      .update({ ...data, updatedAt: this.knex.fn.now() })
      .returning("*");
    return ret[0];
  }

  async softDelete(id, trx) {
    const ret = await this.query(trx)
      .where({ id })
      .update({ deletedAt: this.knex.fn.now() })
      .returning("*");
    return ret[0];
  }
}
