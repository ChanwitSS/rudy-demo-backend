import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/common/utils/password.util';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  // async create(input: any) {
  //   return await this.userRepository.save({
  //     ...input,
  //     password: await hashPassword(input.password),
  //   });
  // }

  // async update(id: number, input: any) {
  //   return await this.userRepository.update(id, input);
  // }

  // async delete(id: number) {
  //   return await this.userRepository.delete(id);
  // }
}
