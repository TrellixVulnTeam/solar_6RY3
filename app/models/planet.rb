class Planet < ApplicationRecord
    validates :name, :about, :image, presence: true


    has_many :notes
    has_many :users, through: :notes
end
