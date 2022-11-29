class Api::V1::EventsController < ApplicationController
    skip_before_action :authorized
    def index
        events = Event.all
        render json: events
    end

    def create
        event = Event.create(event_params)
        if event.valid?
            render json: event
        else
            render json: {error: "Error creating event"}
        end
    end

    private
    def event_params
        params.require(:event).permit(:name, :venue, :date, :average_age, :highest_gender_represented, :artists, :event_poster)
    end
end
