class VendorCategorySerializer < ActiveModel::Serializer
  attributes :id , :category , :event_id, :number_of_slots , :cost_per_slot , :vendor_passes_per_slot , :amenities_provided
  belongs_to :event
end
