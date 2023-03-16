import { Schema } from "mongoose";

export const storiesSchema: Schema = new Schema({
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
},{
    toJSON: {
        transform: function(doc, ret) {
            delete ret._id;
          } 
    }
})

export interface iStorieModel {
    available: number,
    returned: number,
    items: Array<string>
}