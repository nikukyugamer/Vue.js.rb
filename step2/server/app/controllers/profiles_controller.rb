class ProfilesController < ApplicationController
  def update
    if @current_user.update(params.require(:profile).permit(:biography))
      render json: @current_user
    else
      render json: @current_user.errors, status: :unprocessable_entity
    end
  end
end
