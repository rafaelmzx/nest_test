import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../models/dto/create-user.dto';
import { UpdateUserDto } from '../models/dto/update-user.dto';
import { Repository } from 'typeorm';
import UserEntity from '../models/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import UsersOutput from 'src/models/dto/output/users.output';
import { serialize } from 'v8';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number){
    const userEntity = await this.userRepo.findOne({where: { id } });

    const userOutput = new UsersOutput();
    userOutput.id = userEntity.id;
    userOutput.name = userEntity.name;
    userOutput.active = userEntity.active;
    userOutput.createdAt = userEntity.createdAt;
    userOutput.updatedAt = userEntity.updateAt;

    return userOutput;
  }

 async updateName(id: number, name: string) {
    const userEntity = await this.userRepo.findOne({where: { id } });

    userEntity.name = name;

    const userSaved = await this.userRepo.save(userEntity);

    const userOutput = new UsersOutput();

    userOutput.id = userEntity.id;
    userOutput.name = userEntity.name;
    userOutput.active = userEntity.active;
    userOutput.createdAt = userEntity.createdAt;
    userOutput.updatedAt = userEntity.updateAt;

    return userOutput
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
