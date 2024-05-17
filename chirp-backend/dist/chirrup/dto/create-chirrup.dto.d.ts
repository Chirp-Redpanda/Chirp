declare class CreateContentDto {
    image: string;
    video: string;
    text: string;
}
declare class CreateCommentDto {
    publisherName: string;
    content: CreateContentDto;
    publishedTime: string;
}
export declare class CreateChirrupDto {
    publisherName: string;
    content: CreateContentDto;
    publishedTime: string;
    comment: CreateCommentDto[];
    likedIdList: string[];
}
export {};
