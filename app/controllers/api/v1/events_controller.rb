class Api::V1::EventsController < ApplicationController
    skip_before_action :authorized
    def index
        events = Event.all
        render json: events , include: [:vendor_categories]
    end

    def create
        event = Event.create(event_params)
        events = Event.all
        if event.valid?
            render json: events , include: [:vendor_categories]
        else
            render json: {error: "Error creating event"}
        end
    end

    def show
        event = Event.find(params[:id])
        render json: event , serializer: ShoweventSerializer
    end

    def update
        event = Event.find(params[:id])
        event.update(event_params)
        render json: event
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        events = Event.all
        render json: events , include: [:vendor_categories]
    end

    def female_events
        events = Event.where(highest_gender_represented:"Female")
        render json: events , include: [:vendor_categories]
    end

    def male_events
        events = Event.where(highest_gender_represented:"Male")
        render json: events , include: [:vendor_categories]
    end
    

    def oldest_events
        events = Event.where(:average_age => 30..100)
        render json: events , include: [:vendor_categories]
    end

    def youngest_events
        events = Event.where(:average_age => 0..29)
        render json: events , include: [:vendor_categories]
    end

    def day_events
        events = Event.where(:time_event_starts => 0..18)
        render json: events , include: [:vendor_categories]
    end

    def night_events
        events = Event.where(:time_event_starts => 19..24)
        render json: events , include: [:vendor_categories]
    end
    



    private
    def event_params
        params.require(:event).permit(:name, :venue, :date, :average_age, :highest_gender_represented, :artists, :event_poster,:time_event_starts, :number_of_atendees)
    end
end
