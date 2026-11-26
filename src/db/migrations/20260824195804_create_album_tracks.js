/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('album_tracks', function (table) {
        table.increments('id');
        table.integer('albumId').references('id').inTable('albums').notNullable();
        table.integer('trackNumber').notNullable();
        table.string('title', 255).notNullable();
        table.integer('durationSec').nullable();
        table.boolean('isTitleTrack').notNullable().defaultTo(false);
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('createdAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updatedAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deletedAt', 'DATETIME2').nullable();

        table.unique(['albumId', 'trackNumber'], 'UQ_album_tracks');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('album_tracks');
}
