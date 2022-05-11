class NotesController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Note.all
    end
    def show
        render json: Note.find(params[:id])
    end
    def create
        render json: Note.create(note_params), status: :created
    end
    def update
        note = Note.find(params[:id])
        note.update!(note_params)
        render json: note
    end
    def destroy
        Note.find(params[:id]).destroy
        head :no_content
    end
    private
    def note_params
        params.permit(:memo, :user_id, :planet_id)
    end
end
