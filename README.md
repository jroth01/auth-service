# JWT Auth Service for REST API
A JWT based authentication service using NodeJS, Express, PostgreSQL, Sequelize,
and Bcrypt. Also includes REST API for user management.

# Purpose
My goals for this project are:
- build a simple and flexible JWT based authentication service from scratch
- use stateless authentication to safeguard API resources
- practice relational db schema design and set up db migration & seed data with Sequelize
- become more familiar with password hashing strategies, JWT vs opaque tokens
- create a sensible Express project structure that cleanly separates concerns
- expose a user management REST API to manage accounts, roles, permissions, users,
  memberships, logins

# Features
Support for users with or without logins
Support for roles with resource based API permissions
Support for group memberships

# Install and Usage

1. Clone this repo
2. npm install
3. create a config.json file with PostgreSQL database configuration settings
4. run postgres on your local machine
5. create postgres database matching the name on your config.json under development
6. run migration script
7. run seed script

# Seeded data
Admin - by default can perform CRUD operations on accounts, roles, users, logins,
        permissions, memberships

User - by default have no permissions. Admins can create permission schemes via
       API. See API section below

Admin login:
  admin@test.com
  testadmin18

User login:
  user@test.com
  testuser18

By default, login username must be an email. However, the schema is flexible
such that logins could support a separate username from a user's email.

(Note that if you decide to alter the methods for password salt/hashing
in bcryptController.js, the seeded salt and password hash for these default
logins will no longer work)

# REST API

/register
/login
/users
/roles
/permissions
/memberships

# Credits & Helpful Links Used

Helpful docs on migrations with Sequelize
http://docs.sequelizejs.com/manual/tutorial/migrations.html
