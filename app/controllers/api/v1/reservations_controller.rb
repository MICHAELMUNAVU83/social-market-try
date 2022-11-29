class Api::V1::ReservationsController < ApplicationController
    skip_before_action :authorized

    def index
        @reservations = Reservation.all.includes(:user).where(user_id: params[:user_id])
        render json: @reservations , include: [:user , :event]
    end

    def all_reservations
        @reservations = Reservation.all
        render json: @reservations
    end

    def create
        @reservation = Reservation.create(reservation_params)
        render json: @reservation
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render json: @reservation
    end

    private

    def reservation_params
        params.require(:reservation).permit(:name, :email, :phone_number, :user_id, :event_id)
    end

end
