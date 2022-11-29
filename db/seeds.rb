# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create(username: "admin", password: "admin", email: "admin@gmail.com")
user2 = User.create(username: "user", password: "user", email: "user2@gmail.com")


events = Event.create([
    {name: "Event 1", venue: "Venue 1", date: "2021-11-29", average_age: 22 , highest_gender_represented: "male", artists: "Artist 1", event_poster: "https://i.pinimg.com/originals/0d/0d/0d/0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d.jpg" , number_of_atendees: 100},
    {name: "Event 2", venue: "Venue 2", date: "2021-11-29", average_age: 22 , highest_gender_represented: "female", artists: "Artist 2", event_poster: "https://i.pinimg.com/originals/0d/0d/0d/0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d.jpg" , number_of_atendees: 100},

]) 


vendor_categories = VendorCategory.create([
    {category: "Food", number_of_slots: 10, cost_per_slot: 100, vendor_passes_per_slot: 10, amenities_provided: "Food", event_id: 1},
    {category: "Food", number_of_slots: 10, cost_per_slot: 100, vendor_passes_per_slot: 10, amenities_provided: "Food", event_id: 2},
    {category: "Food", number_of_slots: 10, cost_per_slot: 100, vendor_passes_per_slot: 10, amenities_provided: "Food", event_id: 3},

])

reservations = Reservation.create([
    {name: "Reservation 1", email: "josh#gbn" , phone_number: "1234567890", user_id: 1, event_id: 1},
    {name: "Reservation 2", email: "josh#gbn" , phone_number: "1234567890", user_id: 2, event_id: 2},
    {name: "Reservation 3", email: "josh#gbn" , phone_number: "1234567890", user_id: 1, event_id: 1},
    {name: "Reservation 4", email: "josh#gbn" , phone_number: "1234567890", user_id: 2, event_id: 2},

]) 