import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
  ) {}

  async uploadPhoto(photo: Buffer) {
    // upload to cloud ???
    return photo;
  }
}