class User < ApplicationRecord
    has_secure_password
    has_many :projects, dependent: :delete_all

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    validates :email, :password, presence: true
    validates :password, length: { minimum: 6 }

end
