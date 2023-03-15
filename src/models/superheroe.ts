import { Schema, Document, Model, model } from 'mongoose';

const comicsSchema: Schema = new Schema({
    available: {
        type: Number,
        required: true
    },
    returned: {
        type: Number,
        required: true
    },
    items: {
        type: [String]
    }
})

const storiesSchema: Schema = new Schema({
    available: {
        type: Number,
        required: true
    },
    returned: {
        type: Number,
        required: true
    },
    items: {
        type: [String]
    }
})

const eventsSchema: Schema = new Schema({
    available: {
        type: Number,
        required: true
    },
    returned: {
        type: Number,
        required: true
    },
    items: {
        type: [String]
    }
})

const seriesSchema: Schema = new Schema({
    available: {
        type: Number,
        required: true
    },
    returned: {
        type: Number,
        required: true
    },
    items: {
        type: [String]
    }
})


const superheroeSchema: Schema = new Schema({
    marvelId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    comics: {
        type: comicsSchema,
        required: true
    },
    stories: {
        type: storiesSchema,
        required: true
    },
    events: {
        type: eventsSchema,
        required: true
    },
    series: {
        type: seriesSchema,
        required: true
    }
})

export interface iSuperheroeModel extends Document {
    marvelId: Number,
    name: String,
    description: String,
    comics: typeof comicsSchema,
    stories: typeof storiesSchema,
    events: typeof eventsSchema,
    series: typeof seriesSchema
}

export const Superheroe: Model<iSuperheroeModel> = model<iSuperheroeModel>('superheroeCollection', superheroeSchema)