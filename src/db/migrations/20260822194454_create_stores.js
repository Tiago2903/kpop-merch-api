/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('stores', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('website', 255).nullable();
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
    return knex.schema.dropTable('stores');
}
