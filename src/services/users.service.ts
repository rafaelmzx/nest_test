import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from '../models/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';


import UsersOutput from '../models/dto/output/users.output';
import UsersConverter from '../models/converters/users.converter';
import UsersInput from '../models/dto/input/users.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly usersConverter: UsersConverter,
  ) {}

 findAll() {
    return this.userRepo.find();
 }

 async save(input: UsersInput){
  const entity = new UserEntity();

  const convertedEntity = this.usersConverter.inputToNewEntity(input, entity);

  const savedEntity = await this.userRepo.clear(convertedEntity);


 }

 async findOne(id: number){
    const userEntity = await this.userRepo.findOne({where: { id } });

    const output =  this.usersConverter.entityToOutput(userEntity);

    return output;
 }

 async updateName(id: number, name: string) {
    const userEntity = await this.userRepo.findOne({where: { id } });

    userEntity.name = name;

    const userSaved = await this.userRepo.save(userEntity);

    const output =  this.usersConverter.entityToOutput(userSaved);

    return output;
 }

remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
