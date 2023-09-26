// import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDate, IsDateString, IsEmail, IsString, Length, Matches } from 'class-validator';

export class LoginDto {
  email: string;
  password: string;
}

export class RegisterDto {
  @IsEmail()
  email: string;
  @Matches('[a-z0-9\-]+')
  password: string;
  @IsString()
  firstname: string;
  @IsString()
  lastname: string;
  @IsDateString()
  birthDate: Date;
  @IsString()
  @Length(13, 13)
  idNo: string;
  @Length(10, 10)
  telNo: string;
}
