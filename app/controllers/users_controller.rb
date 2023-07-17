class UsersController < ApplicationController
  def new
  end

  def edit
    @user = current_user
  end

  def updated_at
    @user = current_user
    if @user.update(user_params)
      redirect_to user_path, notice: 'ユーザー情報を更新しました'
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
