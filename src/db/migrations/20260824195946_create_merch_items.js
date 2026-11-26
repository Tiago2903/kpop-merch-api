/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('merch_items', function (table) {
        table.increments('id');
        table.integer('artistId').references('id').inTable('artists').notNullable();
        table.integer('merchTypeId').references('id').inTable('merch_types').notNullable();
        table.string('name', 255).notNullable();
        table.specificType('description', 'NVARCHAR(MAX)').nullable();
        table.specificType('imageUrl', 'NVARCHAR(MAX)').nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('createdAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updatedAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deletedAt', 'DATETIME2').nullable();

        table.index(['artistId'], 'IX_merch_items_artist_id');
        table.index(['merchTypeId'], 'IX_merch_items_merch_type_id');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('merch_items');
}
