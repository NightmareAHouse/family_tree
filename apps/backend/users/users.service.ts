import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User, UsersDocument} from './parents.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private usersDocumentModel: Model<UsersDocument>) {
        console.log(`Using collection: ${this.usersDocumentModel.collection.name}`);
    }

    async getUserData() {
        console.log('test')
    }
}
