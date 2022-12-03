class Event < ApplicationRecord
    has_many :vendor_categories , dependent: :destroy
    has_many :reservations, through: :vendor_categories
    
   
end
