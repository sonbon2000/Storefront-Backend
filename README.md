# Storefront Backend

This project is the backend API for a storefront application. It provides the necessary endpoints to manage products, orders, and users.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js (version 12 or higher)
- PostgreSQL database

### Installation

1. Clone the repository: `git clone https://github.com/your-username/storefront-backend.git`
2. Navigate to the project directory: `cd storefront-backend`
3. Install the dependencies: `npm install`

## Environmental Variables Set up

Bellow are the environmental variables that needs to be set in a `.env` file. This is the default setting that I used for development, but you can change it to what works for you.

**NB:** The given values are used in development and testing but not in production.

```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=shopping
POSTGRES_TEST_DB=shopping_test
POSTGRES_USER=shopping_user
POSTGRES_PASSWORD=password123
ENV=dev
BCRYPT_PASSWORD=speak-friend-and-enter
SALT_ROUNDS=10
JWT_SECRET=1a2b3c4d5e6f7g8h9j

```

### Database Setup

1. Create a PostgreSQL database for the project.
2. `db-migrate up` to set up the database and get access via http://127.0.0.1:5432
3. `npm run build` to build the app
4. Update the database configuration in the `.env` file with your database credentials.

### Running the Server

1. Start the server: `npm start`
2. The server will run on `http://localhost:3000`.

### Running Ports

After start up, the server will start on port `3000` and the database on port `5432`

## API Documentation

The API endpoints and their usage are documented in the [REQUIREMENTS.md](REQUIREMENTS.md) file. Please refer to it for detailed information on how to interact with the API.

## Testing

Run test with

`npm run test`

It sets the environment to `test`, migrates up tables for the test database, run the test then migrate down all the tables for the test database.
