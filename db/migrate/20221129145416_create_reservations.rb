class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :name
      t.string :phone_number
      t.string :email
      t.references :user, null: false, foreign_key: true
      t.references :vendor_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
