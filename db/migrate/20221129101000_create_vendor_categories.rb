class CreateVendorCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :vendor_categories do |t|
      t.string :category
      t.integer :number_of_slots
      t.integer :cost_per_slot
      t.integer :vendor_passes_per_slot
      t.string :amenities_provided
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
