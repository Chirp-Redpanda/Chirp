import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    userNamecontent: string;

    @Prop()
    userEmail: string;

    @Prop()
    password: string;

    @Prop()
    userRole: string;

    @Prop()
    age: number;

    @Prop()
    gender: string;

    @Prop()
    phone: number;

}

// create the actual MongoDB ChirrupSchema and define the document structure
export const UserSchema = SchemaFactory.createForClass(User);

// TypeScript type combining the Chirrup class with Mongoose's Document type
export type UserDocument = HydratedDocument<User>;