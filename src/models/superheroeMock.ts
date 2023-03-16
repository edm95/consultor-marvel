import { iSuperheroeModel, Superheroe } from "./superheroe";
import { iComicModel } from "./comics";
import { iEventModel } from "./events";
import { iSeriesModel } from "./series";
import { iStorieModel } from "./stories";

const comics: iComicModel = {
    available: 12,
    returned: 12,
    items: ["Comic 1", "Comic 2"]
}

const events: iEventModel = {
    available: 5,
    returned: 5,
    items: ["event 1", "event 2"]
}

const stories: iStorieModel = {
    available: 7,
    returned: 7,
    items: ["story 1", "story 2"]
}

const series: iSeriesModel = {
    available: 2,
    returned: 2,
    items: ["serie 1", "serie 2"]
}

export const superheroeMock: iSuperheroeModel = new Superheroe({
    marvelId: 1009521,
    name: "Spiderman",
    description: "A human with spider superpowers",
    comics,
    stories,
    events,
    series
})

