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
import { ApiTags, ApiCreatedResponse, ApiProperty } from '@nestjs/swagger';
import { MoviesService } from '../services/movies.service';
import MoviesInput from '../models/dto/input/movies.input';
import MoviesOutput from '../models/dto/output/movies.output';
  
  @ApiTags('Movies')
  @Controller('movies')
  export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
  
    @Get()
    @ApiCreatedResponse({ type: MoviesOutput, isArray: true })
    findAll(): Promise<MoviesOutput[]> {
      return this.moviesService.findAll();
    }
  
    @Post()
    @ApiProperty()
    save(@Body() input: MoviesInput) {
      return this.moviesService.save(input); 
    }
  
    @Get(':id')
    @ApiCreatedResponse({ type: MoviesOutput })
    findOne(@Param('id') id: string) {
      return this.moviesService.findOne(+id);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: MoviesOutput })
    updateName(@Param('id') id: string, @Query('name') name: string) {
      return this.moviesService.updateName(+id, name);
    }
  
    @Put(':id')
    @ApiCreatedResponse({ type: MoviesOutput })
    update(
      @Param('id') id: string,
      @Body() input: MoviesInput,
    ): Promise<MoviesOutput> {
      return this.moviesService.update(+id, input);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.moviesService.remove(+id);
    }
  }
  