class AddArtistsToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :artists, :string
  end
end
