class Api::BenchesController < ApplicationController

    def index
        # @benches = Bench.all
        # @benches = Bench.in_bounds(params[:filter][:bounds])
        benches = Bench.in_bounds(bounds)
        if params[:minSeating] && params[:maxSeating]
            benches = benches.where(seating: seating_range)
        end
        @benches = benches
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render :show
        else
            render json: @bench.errors.full_messages, status: 422
        end
    end
    
    def show
        @bench = Bench.find(params[:id])
    end

    private

    def bench_params
        params.require(:bench).permit(
            :description, 
            :lat, 
            :lng, 
            :seating,
            :picture_url
        )
    end

    def seating_range
        (params[:minSeating]..params[:maxSeating])
    end

    def bounds
        params[:bounds]
    end 

end
