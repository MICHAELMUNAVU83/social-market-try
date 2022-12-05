# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_05_110704) do
  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "venue"
    t.date "date"
    t.integer "average_age"
    t.string "highest_gender_represented"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "artists"
    t.string "event_poster"
    t.integer "number_of_atendees"
    t.string "time_event_starts"
  end

  create_table "reservations", force: :cascade do |t|
    t.string "name"
    t.string "phone_number"
    t.string "email"
    t.integer "user_id", null: false
    t.integer "vendor_category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reservations_on_user_id"
    t.index ["vendor_category_id"], name: "index_reservations_on_vendor_category_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "vendor_categories", force: :cascade do |t|
    t.string "category"
    t.integer "number_of_slots"
    t.integer "cost_per_slot"
    t.integer "vendor_passes_per_slot"
    t.string "amenities_provided"
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_vendor_categories_on_event_id"
  end

  add_foreign_key "reservations", "users"
  add_foreign_key "reservations", "vendor_categories"
  add_foreign_key "vendor_categories", "events"
end
