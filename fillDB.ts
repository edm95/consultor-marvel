import md5 from 'md5'
import dotenv from 'dotenv'

import { iSuperheroeModel, Superheroe } from './src/models/superheroe'
import startDatabase from './src/connection'

const PUBLIC_API_KEY = '065813b001507c8881791f771bece0b3'
const TIMESTAMP_API = '1000'
const LIMIT: number = 100

const superheroes: Array<iSuperheroeModel> = []
let data: any

dotenv.config()

const filterSuperheroe = (superheroe: iSuperheroeModel) => {
  return {
    marvelId: superheroe.id,
    name: superheroe.name,
    description: superheroe.description,
    comics: filterComics(superheroe.comics),
    stories: filterStories(superheroe.stories),
    events: filterEvents(superheroe.events),
    series: filterSeries(superheroe.series)
  }
}

const filterComics = (comic: any) => {
  return {
    available: comic.available,
    returned: comic.returned,
    items: comic.items.map((comic: any) => comic.name)
  }
}

const filterStories = (stories: any) => {
  return {
    available: stories.available,
    returned: stories.returned,
    items: stories.items.map((stories: any) => stories.name)
  }
}

const filterEvents = (events: any) => {
  return {
    available: events.available,
    returned: events.returned,
    items: events.items.map((events: any) => events.name)
  }
}

const filterSeries = (series: any) => {
  return {
    available: series.available,
    returned: series.returned,
    items: series.items.map((series: any) => series.name)
  }
}

const marvelCall = async () => {
  try {
    for (let i = 0; i <= 16; i++) {
      data = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${TIMESTAMP_API}&limit=${LIMIT}&offset=${LIMIT * i}&apikey=${PUBLIC_API_KEY}&hash=${md5(TIMESTAMP_API + process.env.PRIVATE_API_KEY + PUBLIC_API_KEY)}`)
      data = await data.json()

      const filteredHeroes = data.data.results.map(filterSuperheroe)
      superheroes.push(...filteredHeroes)
    }
  } catch (error) {
    console.log(error)
  }
}


marvelCall().then(() => startDatabase())
  .then(() => {return Superheroe.insertMany(superheroes)})
  .then((docs) => {console.log(`${docs.length} items inserted into the database`)})
  .catch((error) => {console.log(error)})


