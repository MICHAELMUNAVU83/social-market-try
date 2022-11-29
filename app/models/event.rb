class Event < ApplicationRecord
    has_many :vendor_categories
    has_many :reservations
   
end
