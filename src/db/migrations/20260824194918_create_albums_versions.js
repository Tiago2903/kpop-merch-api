/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('album_versions', function (table) {
        table.increments('id');
        table.integer('albumId').references('id').inTable('albums').notNullable();
        table.string('versionName', 100).notNullable();
        table.specificType('barcode', 'VARCHAR(50)').nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('createdAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updatedAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deletedAt', 'DATETIME2').nullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('album_versions');
}
