class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :vendor_category
 has_one :event, through: :vendor_category
 before_create :reduce_slots

 def reduce_slots
   self.vendor_category.number_of_slots -= 1
   self.vendor_category.save
 end


 
end
