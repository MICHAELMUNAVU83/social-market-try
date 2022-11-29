class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :vendor_category
 has_one :event, through: :vendor_category
end
