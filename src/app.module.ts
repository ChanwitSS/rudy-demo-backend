import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main,module';
import authConfig from './config/auth.config';
import { loadDbConfig } from './config/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [authConfig, loadDbConfig],
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get<TypeOrmModuleOptions>('db'),
      inject: [ConfigService],
    }),
    MulterModule.register({
      dest: '../public',
    }),
    AuthModule,
    MainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
