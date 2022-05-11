class Note < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :user
    belongs_to :planet
end
