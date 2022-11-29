class AddEventPosterToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :event_poster, :string
  end
end
