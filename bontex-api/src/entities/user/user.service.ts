import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: MongoRepository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findById(id: string) {
    try {
      const objectId = new ObjectId(id);
      const user = this.userRepository.findOne({ where: { _id: objectId } });

      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }

      return user;
    } catch (error) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    
  }

  findByUsername(username: string) {
    const user = this.userRepository.findOne({ where: { username: username } });

    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
