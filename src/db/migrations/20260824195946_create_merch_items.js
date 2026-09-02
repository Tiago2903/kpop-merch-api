/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('merch_items', function (table) {
        table.increments('id');
        table.integer('artist_id').references('id').inTable('artists').notNullable();
        table.integer('merch_type_id').references('id').inTable('merch_types').notNullable();
        table.string('name', 255).notNullable();
        table.specificType('description', 'NVARCHAR(MAX)').nullable();
        table.specificType('image_url', 'NVARCHAR(MAX)').nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('created_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updated_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deleted_at', 'DATETIME2').nullable();

        table.index(['artist_id'], 'IX_merch_items_artist_id');
        table.index(['merch_type_id'], 'IX_merch_items_merch_type_id');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('merch_items');
}
