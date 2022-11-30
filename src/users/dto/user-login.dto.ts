import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'email is wrong' })
	email: string;
	@IsString({ message: 'password is not provided' })
	password: string;
}
