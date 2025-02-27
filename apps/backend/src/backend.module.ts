import {Logger, Module, OnModuleInit} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {MongoClient} from "mongodb";
import {BackendController} from "./backend.controller";
import {BackendService} from "./backend.service";
import {ParentsModule} from "../parents/parents.module";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://nightmareahouse:35wkWrxHTfquFBnE@familytreecluster.h5zmv.mongodb.net/familty_tree_db?retryWrites=true&w=majority'),
        ParentsModule,
        UsersModule
    ],
    controllers: [BackendController],
    providers: [BackendService],
    exports: []
})
export class BackendModule implements OnModuleInit {
    private readonly logger = new Logger(BackendModule.name);

    async onModuleInit() {
        const uri = 'mongodb+srv://nightmareahouse:35wkWrxHTfquFBnE@familytreecluster.h5zmv.mongodb.net/family_tree_db?retryWrites=true&w=majority';

        try {
            this.logger.log('Trying to connect to MongoDB...');

            const client = new MongoClient(uri, {serverSelectionTimeoutMS: 5000});
            await client.connect();

            this.logger.log('MongoDB connected successfully!');

            this.logger.log('Databases in the cluster:');

            await client.close();
        } catch (error) {
            this.logger.error('MongoDB connection failed:', error);
        }
    }
}
