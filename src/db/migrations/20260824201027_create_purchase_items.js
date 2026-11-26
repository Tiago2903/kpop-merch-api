/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('purchase_items', function (table) {
        table.increments('id');
        table.integer('purchaseId').references('id').inTable('purchases').notNullable();
        table.specificType('itemType', 'VARCHAR(20)').notNullable().checkIn(['album', 'merch'], 'CK_purchase_items_item_type');
        table.integer('albumId').references('id').inTable('albums').nullable();
        table.integer('albumVersionId').references('id').inTable('album_versions').nullable();
        table.integer('merchItemId').references('id').inTable('merch_items').nullable();
        table.integer('quantity').notNullable().defaultTo(1);
        table.decimal('unitPriceOriginal', 12, 2).notNullable();
        table.decimal('unitPriceBrl', 12, 2).nullable();
        table.boolean('isRandomItem').notNullable().defaultTo(false);
        table.string('randomItemActual', 255).nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('createdAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updatedAt', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deletedAt', 'DATETIME2').nullable();

        table.check(
            "(itemType = 'album' AND albumId IS NOT NULL AND albumVersionId IS NOT NULL AND merchItemId IS NULL) OR (itemType = 'merch' AND merchItemId IS NOT NULL AND albumId IS NULL AND albumVersionId IS NULL)",
            [],
            'CK_purchase_items_type_consistency'
        );

        table.index(['purchaseId'], 'IX_purchase_items_purchase_id');
        table.index(['albumId'], 'IX_purchase_items_album_id');
        table.index(['merchItemId'], 'IX_purchase_items_merch_item_id');
        table.index(['purchaseId', 'itemType'], 'IX_purchase_items_lookup');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('purchase_items');
}
