class Api::V1::VendorCategoriesController < ApplicationController
    skip_before_action :authorized
    def index
        vendor_categories = VendorCategory.all
        render json: vendor_categories
    end
end
