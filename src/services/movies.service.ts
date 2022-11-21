import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import MoviesEntity from '../models/entities/movies.entity';
import MoviesInput from '../models/dto/input/movies.input';
import MoviesOutput from '../models/dto/output/movies.output';
import MoviesConverter from '../models/converters/movies.converter';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly userRepo: Repository<MoviesEntity>,
    private readonly moviesConverter: MoviesConverter,
  ) {}

  async findAll(): Promise<MoviesOutput[]> {
    const movieEntities = await this.userRepo.find();

    const outputList = movieEntities.map((entity) => {
      return this.moviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: MoviesInput) {
    const entity = new MoviesEntity();

    const convertedEntity = this.moviesConverter.inputToEntity(input, entity);

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.moviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async update(id: number, input: MoviesInput): Promise<MoviesOutput> {
    const movieEntity = await this.userRepo.findOne({ where: { id: id } });

    const convertedEntity = this.moviesConverter.inputToEntity(
      input,
      movieEntity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.moviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async findOne(id: number) {
    const movieEntity = await this.userRepo.findOne({ where: { id } });

    const output = this.moviesConverter.entityToOutput(movieEntity);

    return output;
  }

  async updateName(id: number, name: string) {
    const movieEntity = await this.userRepo.findOne({ where: { id } });

    movieEntity.name = name;

    const movieSaved = await this.userRepo.save(movieEntity);

    const output = this.moviesConverter.entityToOutput(movieSaved);

    return output;
  }


  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}
