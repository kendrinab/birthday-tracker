# Birthday Tracker Coding Challenge

Read the instructions thoroughly before starting your project.

This app is a simple birthday tracker written using the MERN stack. Users should be able to view a list of all birthdays created, add a birthday to the list, edit a birthday from the list, and delete a birthday from the list.

## Setup

- Click the 'Use this template` button on this repo
- `cd` into it.
- `yarn install`
- `touch .env && touch .gitignore`

Update your `.env` file so that it contains your unique MongoDB Atlas URI with the key `ATLAS_URI`.

- `yarn server` to run your server

# Coding Challenge Instructions

You are creating a simple app that will help Wyncode keep track of the birthdays of its students and staff using the MERN stack. The project structure has been generated for you, packages that you will need have been installed, and Express boilerplate has been written within `server.js`.

Your task is the following:

Create a server directory and, within it, configure a connection to MongoDB, create a models directory and, within that, a `birthday.model.js` file.

- Within `/server/models/birthday.model.js`:
- Your app will need to keep track of four pieces of data:
  - `username` (string)
  - `cohort_number` (string)
  - `month` (string)
  - `date` (string).
- All of these fields should be required in order for a birthday to save to the database.
- You should create a model and schema for your birthday object that reflects this.

Within your server directory, create a routes directory and, within that, a `/birthdays.js` file.
Within `/birthdays.js`:

##### Make sure to use POSTMAN to test all the routes

- Create a route to a `/birthdays` endpoint that will accept a `GET` request.
  - This `/birthdays` endpoint should query your database for all of the birthdays that currently exist, and return them as JSON.
  - Include a `.catch` to display any error messages.
- Create a route to a `/birthdays` endpoint that will accept a `POST` request.
  - This `/birthdays` endpoint should allow for the creation of a new Birthday, which should then be saved to your database.
  - Include a `.catch` to display any error messages.
- Create a route to a `/birthdays/:id` endpoint that will accept a `GET` request.
  - This `/birthdays/:id` endpoint should query the database for the birthday with that particular id, and return it as JSON.
  - Include a `.catch` to display any error messages.
- Create a route to a `/birthdays/:id` endpoint that will accept a `PUT` request.
  - This `/birthdays/:id` endpoint will query the database for the birthday with that particular id, then should allow user changes into any of the database fields for a birthday to save to your database.
  - Include a `.catch` to display any error messages.
- Create a route to a `/birthdays/:id` endpoint that will accept a `DELETE` request.
  - This `/birthdays/:id` endpoint will search for a birthday by its id and delete it from your database.
  - Include a `.catch` to display any error messages.

#### Milestone 1

- [ ] Create a server directory
- [ ] Configure connection to MongoDB Atlas

#### Milestone 2

- [ ] Create a server directory
- [ ] Configure connection to MongoDB Atlas
- [ ] Create birthday model
- [ ] Add the correct birthday schema.

#### Milestone 3

- [ ] Create a server directory
- [ ] Configure connection to MongoDB Atlas
- [ ] Create birthday model
- [ ] Add the correct birthday schema.
- [ ] Create routes directory
- [ ] Create a route to `GET` all the birthdays from the database.

#### Milestone 4

- [ ] Create a server directory
- [ ] Configure connection to MongoDB Atlas
- [ ] Create birthday model
- [ ] Add the correct birthday schema.
- [ ] Create routes directory
- [ ] Create a route to `GET` all the birthdays from the database.
- [ ] Create a route to `POST` a new birthday to the database.
- [ ] Create a route to `GET` a specific birthday from the database.

#### Milestone 5

- [ ] Complete all the requirements.
