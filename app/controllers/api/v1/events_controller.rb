class Api::V1::EventsController < ApplicationController
    skip_before_action :authorized
    def index
        events = Event.all
        render json: events , include: [:vendor_categories]
    end

    def create
        event = Event.create(event_params)
        if event.valid?
            render json: event
        else
            render json: {error: "Error creating event"}
        end
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end

    def update
        event = Event.find(params[:id])
        event.update(event_params)
        render json: event
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        render json: event
    end

    private
    def event_params
        params.require(:event).permit(:name, :venue, :date, :average_age, :highest_gender_represented, :artists, :event_poster)
    end
end
