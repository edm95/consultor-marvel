import { Schema } from "mongoose";

export const comicsSchema: Schema = new Schema({
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

export interface iComicModel {
    available: number,
    returned: number,
    items: Array<string>
}

