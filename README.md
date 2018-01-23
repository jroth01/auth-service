# Auth Service
An authentication service using Node, Express, PostgreSQL, Sequelize, Passport.

# Purpose
My goals for this project are:
- build a simple and flexible authentication service from scratch
- practice relational db schema design
- safely set up db migration with Sequelize
- become more familiar with JWT vs opaque tokens
- evaluate authentication security

# Features
Support for accounts with many users that can have different roles

# Next Steps
My next steps would be to create permission sets for different roles that
restrict CRUD API operations based on resource

# Install and Usage

1. Clone this repo
2. npm install
3. create a config.json file with PostgreSQL database configuration settings
4. run postgres on your local machine
5. npm start

# Credits & Helpful Links Used

Helpful docs on migrations with Sequelize
http://docs.sequelizejs.com/manual/tutorial/migrations.html
