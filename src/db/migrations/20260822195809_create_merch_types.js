/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('merch_types', function (table) {
        table.increments('id');
        table.string('name', 100).notNullable();
        table.specificType('description', 'NVARCHAR(MAX)').nullable();
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
    return knex.schema.dropTable('merch_types');
}
