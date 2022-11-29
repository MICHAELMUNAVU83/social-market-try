# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
events = Event.create([
    {name: "Event 1", venue: "Venue 1", date: "2021-11-29", average_age: 22 , highest_gender_represented: "male", artists: "Artist 1", event_poster: "https://i.pinimg.com/originals/0d/0d/0d/0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d.jpg"},
    {name: "Event 2", venue: "Venue 2", date: "2021-11-29", average_age: 22 , highest_gender_represented: "female", artists: "Artist 2", event_poster: "https://i.pinimg.com/originals/0d/0d/0d/0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d.jpg"},

]) 