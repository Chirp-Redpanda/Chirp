import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    userEmail: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    userRole: string;

    @IsNumber()
    age: number;

    @IsString()
    gender: string;

    @IsNumber()
    phone: number;

}
