/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('purchases', function (table) {
        table.increments('id');
        table.integer('store_id').references('id').inTable('stores').notNullable();
        table.integer('platform_id').references('id').inTable('platforms').notNullable();
        table.date('purchase_date').notNullable();
        table.specificType('order_number', 'VARCHAR(100)').notNullable();
        table.decimal('shipping_cost', 10, 2).nullable();
        table.decimal('total_paid_original', 12, 2).notNullable();
        table.specificType('currency_original', 'CHAR(3)').notNullable();
        table.decimal('exchange_rate', 10, 4).nullable();
        table.decimal('total_paid_brl', 12, 2).nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('created_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updated_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deleted_at', 'DATETIME2').nullable();

        table.unique(['order_number'], 'UQ_purchases_order');

        table.index(['store_id'], 'IX_purchases_store_id');
        table.index(['platform_id'], 'IX_purchases_platform_id');
        table.index(['purchase_date'], 'IX_purchases_purchase_date');
        table.index(['order_number'], 'IX_purchases_order_number');
        table.index(['purchase_date', 'store_id'], 'IX_purchases_date');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('purchases');
}
