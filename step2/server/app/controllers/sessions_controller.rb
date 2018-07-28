class SessionsController < ApplicationController
  def create
    @user = User.find_by(name: params[:name])
    if @user.present?
      @user.rehash_access_token
      @user.save!
    end

    @user = User.create(name: params[:name])

    render json: @user
  end
end
