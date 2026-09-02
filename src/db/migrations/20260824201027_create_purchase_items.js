/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('purchase_items', function (table) {
        table.increments('id');
        table.integer('purchase_id').references('id').inTable('purchases').notNullable();
        table.specificType('item_type', 'VARCHAR(20)').notNullable().checkIn(['album', 'merch'], 'CK_purchase_items_item_type');
        table.integer('album_id').references('id').inTable('albums').nullable();
        table.integer('album_version_id').references('id').inTable('album_versions').nullable();
        table.integer('merch_item_id').references('id').inTable('merch_items').nullable();
        table.integer('quantity').notNullable().defaultTo(1);
        table.decimal('unit_price_original', 12, 2).notNullable();
        table.decimal('unit_price_brl', 12, 2).nullable();
        table.boolean('is_random_item').notNullable().defaultTo(false);
        table.string('random_item_actual', 255).nullable();
        table.specificType('notes', 'NVARCHAR(MAX)').nullable();
        table.specificType('created_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('updated_at', 'DATETIME2').notNullable().defaultTo(knex.raw('GETDATE()'));
        table.specificType('deleted_at', 'DATETIME2').nullable();

        table.check(
            "(item_type = 'album' AND album_id IS NOT NULL AND album_version_id IS NOT NULL AND merch_item_id IS NULL) OR (item_type = 'merch' AND merch_item_id IS NOT NULL AND album_id IS NULL AND album_version_id IS NULL)",
            [],
            'CK_purchase_items_type_consistency'
        );

        table.index(['purchase_id'], 'IX_purchase_items_purchase_id');
        table.index(['album_id'], 'IX_purchase_items_album_id');
        table.index(['merch_item_id'], 'IX_purchase_items_merch_item_id');
        table.index(['purchase_id', 'item_type'], 'IX_purchase_items_lookup');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('purchase_items');
}
