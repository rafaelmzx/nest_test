import { Injectable } from '@nestjs/common';

import MoviesEntity from '../entities/movies.entity';
import MoviesInput from '../dto/input/movies.input';
import MoviesOutput from '../dto/output/movies.output';


@Injectable()
export default class MoviesConverter {
  inputToEntity(input: MoviesInput, entity: MoviesEntity) {
    entity.id = input.id;
    entity.name = input.name;
    entity.bannerURL = input.bannerURL;

    return entity;
  }

  entityToOutput(entity: MoviesEntity): MoviesOutput {
    const output = new MoviesOutput();

    output.id = entity.id;
    output.name = entity.name;
    output.bannerURL = entity.bannerURL;

    return output;
  }
}
