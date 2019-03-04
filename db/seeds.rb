# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Photo.destroy_all

user = User.create!({
  fname: "demo", 
  lname: "demo", 
  username: "demo", 
  email: "demo@demo.com", 
  password: "password"
})

photo1 = Photo.new({
  title: "dullahan",
  description: "headless horseman",
  user: user,
})

photo1.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/dullahan.jpg'), filename: 'dullahan.jpg')
photo1.save!