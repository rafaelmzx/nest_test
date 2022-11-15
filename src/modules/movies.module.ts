import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MoviesService } from '../services/movies.service';
import MoviesEntity from '../models/entities/movies.entity';
import MoviesConverter from '../models/converters/movies.converter';
import { MoviesController } from '../controllers/movies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesEntity])],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesConverter],
})
export class MoviesModule {}
