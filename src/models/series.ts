import { Schema } from "mongoose";

export const seriesSchema: Schema = new Schema({
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
}, {
    toJSON: {
        transform: function(doc, ret) {
            delete ret._id;
          } 
    }
})

export interface iSeriesModel {
    available: number,
    returned: number,
    items: Array<string>
}