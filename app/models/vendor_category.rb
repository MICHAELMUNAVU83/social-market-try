class VendorCategory < ApplicationRecord
  belongs_to :event
  has_many :reservations, dependent: :destroy
end
