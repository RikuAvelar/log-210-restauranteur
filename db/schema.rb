# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140329151009) do

  create_table "addresses", force: true do |t|
    t.string   "street_address"
    t.string   "country"
    t.string   "province"
    t.string   "city"
    t.boolean  "is_default"
    t.integer  "located_id"
    t.string   "located_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clients", force: true do |t|
    t.string   "name"
    t.datetime "birth_date"
    t.string   "telephone"
  end

  create_table "commande_lines", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "commandes", force: true do |t|
    t.string   "statut"
    t.integer  "livraison_id"
    t.integer  "quantite"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "entrepreneurs", force: true do |t|
    t.string "name"
  end

  create_table "menus", force: true do |t|
    t.string   "nom"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "repas", force: true do |t|
    t.string   "nom"
    t.decimal  "prix"
    t.text     "description"
    t.integer  "menu_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "restaurants", force: true do |t|
    t.string   "name"
    t.integer  "restaurateur_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "restaurateurs", force: true do |t|
    t.string "name"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "account_id"
    t.string   "account_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "authentication_token"
  end

  add_index "users", ["authentication_token"], name: "index_users_on_authentication_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
