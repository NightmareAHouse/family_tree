import {Controller, Get} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('parents')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    async getUserData() {
        return this.usersService.getUserData();
    }
}
