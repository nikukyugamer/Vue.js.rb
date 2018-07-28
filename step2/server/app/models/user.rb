class User < ApplicationRecord
  has_many :groups
  has_many :articles

  before_create :set_avatar, :rehash_access_token

  def set_avatar
    self.image_url = "http://flathash.com/#{name}.png"
  end

  def rehash_access_token
    self.access_token = SecureRandom.hex(64)
  end
end
