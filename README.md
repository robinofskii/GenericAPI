# GenericAPI
A generic REST API built on Express and Mongoose, used for testing some of my own smaller project. Feel free to Fork and use it for yourself, or maybe make your own variations on it. I don't know what is going to be in here yet and when I'll deem it "finished", but take this as-is without any promises.

## Installation
1. Clone or Fork this repo.
2. Run `npm install` to get all dependencies.
3. Create a `.env` file in the root folder and add the variables listed below.

### Variables
* `PORT` Here you can provide a port on which the server will run.
* `DB_CONNECTION` This is where you can provide a [MongoDB connection string](https://cloud.mongodb.com/), you will need to create your own account and cluster first.

## Usage
After installing all dependencies you can start the server with `npm start` and send requests to the different routes. I personally use [Insomnia](https://insomnia.rest/) for sending requests.

## License
[MIT](https://choosealicense.com/licenses/mit/)