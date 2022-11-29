class Api::V1::VendorCategoriesController < ApplicationController
    skip_before_action :authorized
    def index
        vendor_categories = VendorCategory.all
        render json: vendor_categories , include: [:event]
    end
    def show
        vendor_category = VendorCategory.find(params[:id])
        render json: vendor_category , include: [:event]
    end

    def create
        vendor_category = VendorCategory.create(vendor_category_params)
        if vendor_category.valid?
            render json: vendor_category
        else
            render json: {error: "Error creating vendor category"}
        end
    end

    def update
        vendor_category = VendorCategory.find(params[:id])
        vendor_category.update(vendor_category_params)
        render json: vendor_category
    end

    def destroy
        vendor_category = VendorCategory.find(params[:id])
        vendor_category.destroy
        render json: vendor_category
    end

    private
    def vendor_category_params
        params.require(:vendor_category).permit(:category, :event_id, :number_of_slots, :cost_per_slot, :vendor_passes_per_slot, :amenities_provided)
    end

end
