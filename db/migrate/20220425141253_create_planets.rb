class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.string :name 
      t.text :about
      t.text :info
      t.text :fact
      t.string :image
      t.string :imagetwo
      t.string :imagethree
      t.string :imagefour


      t.timestamps
    end
  end
end
