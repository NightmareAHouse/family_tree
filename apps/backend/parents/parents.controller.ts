import {Body, Controller, Get, Post} from '@nestjs/common';
import {ParentsService} from './parents.service';
import {Parent} from './parents.schema';

@Controller('parents')
export class ParentsController {
    constructor(private readonly parentsService: ParentsService) {
    }

    @Get()
    async getAllParents(): Promise<Parent[]> {
        return this.parentsService.getAllParents();
    }

    @Post()
    async addNewParent(@Body() createParentDto: Parent) {
        return this.parentsService.addNewParent(createParentDto);
    }
}
