class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.text :memo
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :planet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
