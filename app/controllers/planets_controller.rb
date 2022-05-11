class PlanetsController < ApplicationController
    skip_before_action :authorize

    def index
        planets = Planet.all 
        render json: planets
    end

    def show
        planet = find_planet
        render json: planet
    end

    private

    def find_planet
        Planet.find(params[:id])
    end
end
