# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Skill.destroy_all
Project.destroy_all
User.destroy_all

flamingo = User.create!(email: "flamingo@ga.edu",
password: "1234567")

pp "#{User.count} users created"

weather_app = Project.create!(name: "Weather App",
image:"https://i.ibb.co/vQb62Lc/weather_app.png", github_url:
"https://github.com/carlsonmr000/Weatherize", deployed_url:
"https://weatherize-app.netlify.app/", description: "Users can look up
a city, state, or country and get the weather for the day. It will
return the current temperature, min-temp, max-temp, sunset/sunrise,
and wind.", user: flamingo)

guitar_app = Project.create!(name: "Guitar Songbook", image:
"https://i.ibb.co/MN2GSSj/guitar-songbook.png", github_url:
"https://github.com/carlsonmr000/Guitar-Songbook", deployed_url:
"https://guitar-songbook.netlify.app/", description: "Guitar Songbook
will let users store the songs they learn on guitar and add new songs
to the app. Built using MERN stack (mongoDB, Express.js, React.js and
Node.js) and heroku and netlify.", user: flamingo)

laugh_out_loud = Project.create!(name: "LaughOutLOUD", image:
"https://i.ibb.co/vZHfT7S/laugh-out-loud.png", github_url:
"https://github.com/carlsonmr000/Laugh-Out-Loud", deployed_url:
"https://laugh-out-loud.netlify.app/", description: "LaughOutLoud is a
building a comedy community through jokes. Users can submit their
jokes on the platform and view fellow user's jokes.", user:
flamingo)

pp "#{Project.count} projects created!"

html = Skill.create(name: "HTML", image_url:"https://i.ibb.co/bXs9xyh/HMTL.png")

css = Skill.create(name:"CSS", image_url: "https://i.ibb.co/3yt48Gs/css.png")

js = Skill.create(name: "JavaScript", image_url:"https://i.ibb.co/hYGwr9N/Javascript.png")

react = Skill.create(name:"React.js",
image_url:"https://i.ibb.co/hYGwr9N/Javascript.png")

node = Skill.create(name: "Node.js", image_url:"https://i.ibb.co/L15wwwd/nodejs.png")

express = Skill.create(name: "Express.js", image_url:"https://i.ibb.co/7W4WQcp/express.png")

mongoDB = Skill.create(name:"mongoDB", image_url:"https://i.ibb.co/PhS8qcS/mongoDB.png")

ruby = Skill.create(name: "Ruby", image_url:"https://i.ibb.co/mN6ysfc/ruby.png")

RoR = Skill.create(name: "Ruby on Rails", image_url:"https://i.ibb.co/pP13Tnk/rails.png")

postgresql = Skill.create(name: "postgresql", image_url:"https://i.ibb.co/RTbWrDQ/postgresql.png")

git = Skill.create(name: "git", image_url: "https://i.ibb.co/b3Vb7ts/git.png")

pp "#{Skill.count} skills created!"