class NoteSerializer < ActiveModel::Serializer
  attributes :id, :memo, :user_id, :planet_id
end
