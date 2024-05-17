import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Content {
    @Prop()
    image: string;

    @Prop()
    video: string;

    @Prop()
    text: string;
}

export const ContentSchema = SchemaFactory.createForClass(Content);

@Schema()
export class Comment {
    @Prop()
    publisherName: string;

    @Prop({ type: ContentSchema })
    content: Content;

    @Prop()
    publishedTime: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
// define the schema structure
@Schema()
export class Chirrup {
    @Prop()
    publisherName: string;

    @Prop({ type: ContentSchema })
    content: Content;

    @Prop()
    publishedTime: string;

    @Prop({ type: [CommentSchema], default: [] })
    comment: Comment[];

    @Prop({ type: [String], default: [] })
    likedIdList: string[];
}

// create the actual MongoDB ChirrupSchema and define the document structure
export const ChirrupSchema = SchemaFactory.createForClass(Chirrup);

// TypeScript type combining the Chirrup class with Mongoose's Document type
export type ChirrupDocument = HydratedDocument<Chirrup>;
