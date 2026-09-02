/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('album_tracks', function (table) {
        table.increments('id');
        table.integer('album_id').references('id').inTable('albums').notNullable();
        table.integer('track_number').notNullable();
        table.string('title', 255).notNullable();
        table.integer('duration_sec').nullable();
        table.boolean('is_title_track').notNullable().defaultTo(false);
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('created_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updated_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deleted_at', 'DATETIME2').nullable();

        table.unique(['album_id', 'track_number'], 'UQ_album_tracks');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('album_tracks');
}
