# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  name       :string(255)      not null
#  company_id :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  site_url   :string(255)
#

class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :company_id, :site_url
  has_many :categories, serializer: CategorySerializer

  def site_url
    return '' if object.site_url.nil?

    object.site_url
  end
end
