import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class upDateUserDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  web_stack: string;
}
