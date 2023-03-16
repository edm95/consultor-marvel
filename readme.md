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

## Installation

To use the project, follow these steps:

1. Clone the repository.
2. Go to the work directory.
3. Create the container with the Dockerfile using the following console commands:

    docker build . -t marvel-api
    docker run -p 3000:3000 -d marvel-api


4. Access the API using the routes `localhost:3000/superheroe/id/:marvelId` and `localhost:3000/superheroe/name/:name`.

