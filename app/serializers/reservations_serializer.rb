class ReservationsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :user_id, :event_id
  belongs_to :user
  belongs_to :event
end
