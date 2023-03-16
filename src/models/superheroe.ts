import { Schema, Document, Model, model } from 'mongoose';

import { seriesSchema, iSeriesModel } from './series';
import { comicsSchema, iComicModel } from './comics';
import { storiesSchema, iStorieModel } from './stories';
import { eventsSchema, iEventModel } from './events';


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
}, {
    toJSON: {
        transform: function(doc, ret) {
            delete ret._id;
            delete ret.__v;
          } 
    }
})

export interface iSuperheroeModel extends Document {
    marvelId: Number,
    name: String,
    description: String,
    comics: iComicModel,
    stories: iStorieModel,
    events: iEventModel,
    series: iSeriesModel
}

export const Superheroe: Model<iSuperheroeModel> = model<iSuperheroeModel>('Superheroe', superheroeSchema)