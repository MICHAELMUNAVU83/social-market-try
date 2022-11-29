class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :venue
      t.date :date
      t.integer :average_age
      t.string :highest_gender_represented

      t.timestamps
    end
  end
end
