import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ParentDocument = Parent & Document;

@Schema({collection: 'familty_tree'})
export class Parent {
    @Prop({required: true})
    id: number;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    lastName: string;

    @Prop({required: true})
    gender: string

    @Prop({required: true})
    parent: number[]
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
