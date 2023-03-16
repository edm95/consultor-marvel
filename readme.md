# Marvel Superheroes API

This project is an API that provides information about Marvel superheroes. You can access the information using the following routes:

- `/superheroe/id/:marvelId`
- `/superheroe/name/:name`

## Technologies used

The project uses the following technologies:

- TypeScript
- Mongoose
- MongoDB
- Docker

## Prerequisites

Before you begin, make sure you have the following requirements:

- Node.js
- npm
- Docker

## Installation

To use the project, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Create a `.env` file with the necessary environment variables (see Environment Variables section below).
4. Build the project with `npm run build`.
5. Create the container with the Dockerfile using the following console commands:

    docker build . -t marvel-api
    docker run -p 49160:8080 -d marvel-api


6. Access the API using the routes `/superheroe/id/:marvelId` and `/superheroe/name/:name`.

## Environment Variables

The project requires the following environment variables:

- `MONGO_URI`: the URI of the MongoDB database.
- `MARVEL_API_KEY`: the Marvel API key.

## Contributing

Contributions are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a branch with the name of your contribution (`git checkout -b my-contribution`).
3. Make your changes.
4. Commit your changes (`git commit -am "my contribution"`).
5. Push your changes to your fork (`git push origin my-contribution`).
6. Create a pull request in the original repository.

## License

This project is licensed under the MIT license.
