import { ApiProperty } from '@nestjs/swagger';

export default class MoviesInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  bannerURL: string;

}
