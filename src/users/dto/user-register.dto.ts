import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'email is wrong' })
	email: string;

	@IsString({ message: 'password is not provided' })
	password: string;
	@IsString({ message: 'password is not provided' })
	name: string;
}
