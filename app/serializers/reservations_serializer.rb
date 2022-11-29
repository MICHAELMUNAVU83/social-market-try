class ReservationsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :user_id, :vendor_category_id
  belongs_to :user
  belongs_to :vendor_category
  belongs_to :event , through: :vendor_category
end
