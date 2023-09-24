import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './controllers';
import { User } from './entities/user.entity';
import { PhotoService } from './services/photo.service';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PhotoController],
  providers: [UserService, PhotoService],
})
export class MainModule {}
