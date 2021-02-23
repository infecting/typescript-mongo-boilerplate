import {Document, ObjectId} from 'mongoose';

export interface IUser extends Document {
    _id: ObjectId;
    username: string;
    password: string;
}
