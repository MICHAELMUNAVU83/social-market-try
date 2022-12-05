class AddTimeEventStartsToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :time_event_starts, :string
  end
end
