class EventSerializer < ActiveModel::Serializer
  attributes :id , :name ,:venue , :date ,:highest_gender_represented, :artists , :event_poster , :average_age , :number_of_atendees
end
