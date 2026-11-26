/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('purchases', function (table) {
        table.increments('id');
        table.integer('storeId').references('id').inTable('stores').notNullable();
        table.integer('platformId').references('id').inTable('platforms').notNullable();
        table.date('purchaseDate').notNullable();
        table.specificType('orderNumber', 'VARCHAR(100)').notNullable();
        table.decimal('shippingCost', 10, 2).nullable();
        table.decimal('totalPaidOriginal', 12, 2).notNullable();
        table.specificType('currencyOriginal', 'CHAR(3)').notNullable();
        table.decimal('exchangeRate', 10, 4).nullable();
        table.decimal('totalPaidBrl', 12, 2).nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('createdAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updatedAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deletedAt', 'DATETIME2').nullable();

        table.unique(['orderNumber'], 'UQ_purchases_order');

        table.index(['storeId'], 'IX_purchases_store_id');
        table.index(['platformId'], 'IX_purchases_platform_id');
        table.index(['purchaseDate'], 'IX_purchases_purchase_date');
        table.index(['orderNumber'], 'IX_purchases_order_number');
        table.index(['purchaseDate', 'storeId'], 'IX_purchases_date');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('purchases');
}
