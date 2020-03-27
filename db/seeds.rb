# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Bench.delete_all

u1 = User.create!(
    username: 'aaron',
    password: '123456'
);

u2 = User.create!(
    username: 'tony',
    password: '123456'
);

u3 = User.create!(
    username: 'joseph',
    password: '123456'
);

b1 = Bench.create!(
  description: 'alamo square, many dogs',
  lat: 37.775769,
  lng: -122.434960
)

b2 = Bench.create!(
  description: 'UN plaza, food truck access',
  lat: 37.779760,
  lng: -122.413820
)

Bench.create!(
  description: 'Ocean Beach, gnarly breh',
  lat: 37.769996,
  lng: -122.511281
)
