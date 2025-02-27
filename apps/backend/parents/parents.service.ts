import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Parent, ParentDocument} from './parents.schema';

@Injectable()
export class ParentsService {
    constructor(@InjectModel(Parent.name) private parentModel: Model<ParentDocument>) {
        console.log(`Using collection: ${this.parentModel.collection.name}`);
    }

    async getAllParents(): Promise<Parent[]> {
        const response = []

        const allParents = await this.parentModel.find().exec();

        allParents.forEach((parent) => {
            response.push({
                id: parent.id,
                name: parent.name,
                lastName: parent.lastName,
                gender: parent.gender,
                parent: parent.parent,
            })
        })

        return response;
    }

    async addNewParent(parent: Parent) {
        const newParent = new this.parentModel(parent);
        return newParent.save();
    }
}
