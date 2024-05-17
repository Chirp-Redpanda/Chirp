import { IsString, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

class CreateContentDto {
    @IsString()
    image: string;

    @IsString()
    video: string;

    @IsString()
    @IsNotEmpty()
    text: string;
}

class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    publisherName: string;

    @ValidateNested()
    @Type(() => CreateContentDto)
    content: CreateContentDto;

    @IsString()
    @IsNotEmpty()
    publishedTime: string;
}

export class CreateChirrupDto {
    @IsString()
    @IsNotEmpty()
    publisherName: string;

    @ValidateNested()
    @Type(() => CreateContentDto)
    content: CreateContentDto;

    @IsString()
    @IsNotEmpty()
    publishedTime: string;

    @ValidateNested({ each: true })
    @Type(() => CreateCommentDto)
    comment: CreateCommentDto[];

    @IsArray()
    @IsString({ each: true })
    likedIdList: string[];
}
