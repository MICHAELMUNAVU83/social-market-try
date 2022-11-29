class Api::V1::EventsController < ApplicationController
    skip_before_action :authorized
    def index
        events = Event.all
        render json: events
    end
end
