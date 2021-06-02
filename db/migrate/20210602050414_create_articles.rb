class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :tweet, null: false
      t.timestamps
    end
  end
end
