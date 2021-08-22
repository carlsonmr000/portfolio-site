class SkillsController < ApplicationController
    def index
        render json: Skill.all
      end

      def show
        render json: @project
      end
end
