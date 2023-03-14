import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserParam, UpdateUserInput } from 'src/customTypes/types';
import { User } from 'src/typeOrm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  findUsers() {
    return this.userRepository.find();
  }

  CreateUser(createUserDetails: CreateUserParam) {
    const newUser = this.userRepository.create({ ...createUserDetails });
    return this.userRepository.save(newUser);
  }

  upDateUser(id: number, updateUser: UpdateUserInput) {
    return this.userRepository.update({ id }, { ...updateUser });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
