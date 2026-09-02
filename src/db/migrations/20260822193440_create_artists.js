/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('artists', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('slug', 255).notNullable();
        table.specificType('image_url', 'NVARCHAR(MAX)').nullable();
        table.date('debut_date').nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('created_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updated_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deleted_at', 'DATETIME2').nullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('artists');
}
