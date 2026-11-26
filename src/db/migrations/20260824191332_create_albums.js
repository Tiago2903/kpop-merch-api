/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('albums', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.date('releaseDate').nullable();
        table.specificType('imageUrl', 'NVARCHAR(MAX)').nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('createdAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updatedAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deletedAt', 'DATETIME2').nullable();
        table.integer('artistId').references('id').inTable('artists').notNullable();
        table.integer('categoryId').references('id').inTable('categories');
        table.index(['artistId'], 'IX_albums_artist_id');
        table.index(['categoryId'], 'IX_albums_category_id');
        table.index(['artistId', 'releaseDate'], 'IX_albums_search');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('albums');
}
