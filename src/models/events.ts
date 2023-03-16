import { Schema } from "mongoose";

export const eventsSchema: Schema = new Schema({
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

export interface iEventModel {
    available: number,
    returned: number,
    items: Array<string>
}