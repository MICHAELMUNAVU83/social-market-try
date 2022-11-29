class AddNumberOfAtendeesToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :number_of_atendees, :integer
  end
end
