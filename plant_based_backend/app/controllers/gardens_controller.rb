class GardensController < ApplicationController
   

    def index
        garden = current_user.gardens
        render json: garden
    end

    def show
        garden = Garden.find_by(id: params[:id])
        if garden 
            render json: current_user.garden
        else 
            render json: {error: "Garden not found"}, status: :not_found
        end
    end

    def create
        garden = Garden.create(garden_params)
        if garden.valid? 
            render json: garden, status: :created
        else 
            render json: { error: garden.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        garden = Garden.find_by(id: params[:id])
        if garden 
            garden.destroy
            head :no_content
        else  
            render json: { error: "Garden not found"}, status: :not_found
        end
    end

    private

    def garden_params
        params.permit(:name, :location, :user_id)

    end

    def is_authorized
        permitted = current_user.admin? || @item.seller == current_user
        render json: "Accessibility is not permitted", status: :forbidden unless permitted
      end
      
end
