class PlanetSerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :info, :fact, :image, :imagetwo, :imagethree, :imagefour
end
