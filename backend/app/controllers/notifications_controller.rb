class NotificationsController < ApplicationController
    def index
        @notifications = Notification.all

        render json: @notifications
    end
end
