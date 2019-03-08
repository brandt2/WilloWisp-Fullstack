# == Schema Information
#
# Table name: tags
#
#  id         :bigint(8)        not null, primary key
#  tag_name   :string           not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :tag_name, :photo_id, presence: true

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: "Photo"

end
