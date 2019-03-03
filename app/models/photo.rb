# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :title, :owner_id, presence: true
  validate :ensure_photo

  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"

  has_one_attached :image

  def ensure_photo
    unless self.image.attached?
      errors[:image] << "must be attached"
    end
  end

end
