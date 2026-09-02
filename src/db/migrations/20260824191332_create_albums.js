/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('albums', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.date('release_date').nullable();
        table.specificType('image_url', 'NVARCHAR(MAX)').nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('created_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updated_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deleted_at', 'DATETIME2').nullable();
        table.integer('artist_id').references('id').inTable('artists').notNullable();
        table.integer('category_id').references('id').inTable('categories');
        table.index(['artist_id'], 'IX_albums_artist_id');
        table.index(['category_id'], 'IX_albums_category_id');
        table.index(['artist_id', 'release_date'], 'IX_albums_search');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('albums');
}
