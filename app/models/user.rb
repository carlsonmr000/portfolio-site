class User < ApplicationRecord
    # set_primary_key :id
    has_secure_password
    has_many :projects, dependent: :delete_all

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    validates :email, :password, presence: true, allow_blank: true, allow_nil: true
    validates :password, length: { minimum: 6 }, allow_blank: true, allow_nil: true

 

end
