import mongoose from "mongoose";
import supertest from "supertest";

import { app, server } from "../../app"
import { iSuperheroeModel, Superheroe } from "../models/superheroe";
import { superheroeMock } from "../models/superheroeMock";

const api = supertest(app)

//const superheroesMocked = [superheroeMock]

beforeAll(async() => {
    await Superheroe.deleteMany({})
    await superheroeMock.save()
})

// beforeEach(async () => {
//     await Superheroe.deleteMany({})
// })


//getById
test('if the url is correct, should return a 200 status code', async () => {
    await api
        .get(`/superheroe/id/${superheroeMock.marvelId}`)
        .expect(200)
})

test('if the url is not correct, should return a 404 status code', async () => {
    await api
        .get("/superheroe/idid/1235486")
        .expect(404)
})

test('if id param is missing, shoud return a 404 status code', async () => {
    await api
        .get("/superheroe/id/")
        .expect(404)
})

test('superheroe is returned as json', async () => {
    await api
        .get(`/superheroe/id/${superheroeMock.marvelId}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('if the id is not a number shoud return a 400 status code', async () => {
    await api
        .get("/superheroe/id/albert")
        .expect(400)
})

test('if the id is out of range, should return a 204 status code', async () => {
    console.log("Esntra aqui")
    await api
        .get("/superheroe/id/2")
        .expect(204)
})



//getByName
test('superheroe is returned as json by name', async () => {
    await api
        .get("/superheroe/name/Anihhilus")
        .expect(200)
        .expect('Content-Type', /application\/json/)
})


test('if the url is correct, should return a 200 status code', async () => {
    await api
    .get(`/superheroe/name/${superheroeMock.marvelId}`)
    .expect(200)
})

test('if the url is not correct, should return a 404 status code', async () => {
    await api
    .get("/superheroe/nameas/alber")
    .expect(404)
})

test('if id param is missing, shoud return a 404 status code', async () => {
    await api
    .get("/superheroe/name/")
    .expect(404)
})

test('superheroe is returned as json', async () => {
    await api
    .get(`/superheroe/id/${superheroeMock.marvelId}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('if the id is not a number shoud return a 400 status code', async () => {
    await api
    .get("/superheroe/id/albert")
    .expect(400)
})

test('if the id is out of range, should return a 204 status code', async () => {
    console.log("Esntra aqui")
    await api
    .get("/superheroe/id/2")
    .expect(204)
})

afterAll(() => {
    server.close()
    mongoose.connection.close()
})
