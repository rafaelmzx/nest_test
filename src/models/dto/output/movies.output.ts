import {ApiProperty} from '@nestjs/swagger'

export default class MoviesOutput{
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    bannerURL: string;
}