import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ApiTags, ApiCreatedResponse, ApiProperty } from '@nestjs/swagger';
import UsersOutput from '../models/dto/output/users.output';
import UsersInput from '../models/dto/input/users.input';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiCreatedResponse({ type: UsersOutput, isArray: true })
  findAll(): Promise<UsersOutput[]> {
    return this.usersService.findAll();
  }

  @Post()
  @ApiProperty()
  save(@Body() input: UsersInput) {
    return this.usersService.save(input);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: UsersOutput })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: UsersOutput })
  updateName(@Param('id') id: string, @Query('name') name: string) {
    return this.usersService.updateName(+id, name);
  }

  @Put(':id')
  @ApiCreatedResponse({ type: UsersOutput })
  update(
    @Param('id') id: string,
    @Body() input: UsersInput,
  ): Promise<UsersOutput> {
    return this.usersService.update(+id, input);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
