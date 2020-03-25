class Api::SessionController < ApplicationController

    def create
        @user = User.find_by_credentials( 
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show.json.jbuilder'
        else
            render :json => @user.errors.full_messages, status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show.json.jbuilder"
        else
            render :json => ["Nobody signed in"], status: 404
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
