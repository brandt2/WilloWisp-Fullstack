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

photo2 = Photo.new({
  title: "Cherry Blossoms",
  description: "Trip to Japan",
  user: user,
})

photo2.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/cherry_blossoms.jpg'), filename: 'cherry_blossoms.jpg')
photo2.save!

photo3 = Photo.new({
  title: "Eagle",
  description: "Eagle looking for prey",
  user: user,
})

photo3.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/eagle.jpg'), filename: 'eagle.jpg')
photo3.save!

photo4 = Photo.new({
  title: "Orange moon",
  description: "Very pretty moon",
  user: user,
})

photo4.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/orange_moon.jpg'), filename: 'orange_moon.jpg')
photo4.save!

photo5 = Photo.new({
  title: "Waterfall into pool",
  description: "The water has a nice color",
  user: user,
})

photo5.image.attach(io: open('https://s3-us-west-1.amazonaws.com/will-o-wisp-seeding/pool.jpg'), filename: 'pool.jpg')
photo5.save!