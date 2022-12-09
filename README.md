# Social Market VMS Backend

![ERD](https://user-images.githubusercontent.com/86654131/206779736-dc9cc21e-1714-4d67-a170-ae81b9884b01.png)




This is the backend for the Social Market VMS project. It is a Ruby on Rails API that serves JSON data to the frontend with jwt authentication.

### Live demo: [Backend Live Link app](https://social-market-vms-backend.herokuapp.com/)

## Frontend Repository: [Frontend Repository](https://github.com/MICHAELMUNAVU83/social-market-vms-frontend)

## FULL STACK WESBITE LIVE DEMO: [Full Stack Website](https://social-market-vms.netlify.app/)

## Built With

- Ruby
- Ruby on Rails
- JWT
- PostgreSQL

## Getting Started

To get a local copy up and running follow these simple example steps.

## Usage

In your terminal, navigate to your current directory and run this code

`git clone https://github.com/MICHAELMUNAVU83/social-market-vms-backend.git`

Then run

`cd social-market-vms-backend`
Then run

- Use the command `bundle install` to install all project dependencies.

- Run `rails db:create db:migrate` to create the database and run migrations.

- You might need to supply a username and `password for your PostgreSQL database if you run into an error with the previous step.
- Simply navigate to `config/database.yml` and add your username and password to the `username` and `password` fields.
- Type in the terminal `rails s` to start the server then click on `http://127.0.0.1:3000`

### ROUTES

## EVENT ROUTES

#### GET /events

- This route returns all events in the database.

#### GET /events/:id

- This route returns a specific event by id.

#### SHOW /events/:id

- This route returns a specific event by id.

#### POST /events

- This route creates a new event.

#### PATCH /events/:id

- This route updates an event.

#### DELETE /events/:id

- This route deletes an event.

## VENDOR CATEGORY ROUTES

#### GET /vendor_categories

- This route returns all vendor categories in the database.

#### GET /vendor_categories/:id

- This route returns a specific event by id.

#### SHOW /vendor_categories/:id

- This route returns a specific event by id.

#### POST /vendor_categories

- This route creates a new event.

#### PATCH /vendor_categories/:id

- This route updates an event.

#### DELETE /events/:id

- This route deletes an event.

## RESERVATION ROUTES

#### GET /reservations/:id

- This route returns all reservations in the database for a specific user

#### GET /reservations

- This route returns all reservations in the database.

#### POST /reservations

- This route creates a new reservation.

#### DELETE /reservations/:id

- This route deletes an reservation.


## SPECIAL EVENT ROUTES

#### GET /female_events

- This routes get events where the highest gender representation is female/

#### GET /male_events

- - This routes get events where the highest gender representation is male.

#### GET /oldest_events

- - This routes get events where the  average age is more than 30


#### GET /youngest_events

- - This routes get events where the  average age is less 
than 30

#### GET /day_events

- - This routes get events that starts during the day

#### GET /night_events
- - This routes get events that starts during the night
## Author

👤 **MICHAELMUNAVU83**

- GitHub: [@MICHAELMUNAVU83](https://github.com/MICHAELMUNAVU83)
- Twitter: [@twitterhandle](https://twitter.com/MichealTrance1)
- LinkedIn: [Micheal-munavu](https://www.linkedin.com/in/michael-munavu/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/deyemiobaa/budgit/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Design idea by [Gregoire Vella](https://www.behance.net/gallery/19759151/Snapscan-iOs-design-and-branding) on Behance

## 📝 License

This project is [MIT](LICENSE) licensed.
