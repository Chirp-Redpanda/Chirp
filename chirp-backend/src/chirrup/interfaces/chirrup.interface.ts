// do not need this file
export interface Chirrup {
    publisherName: string;
    content: {
        image: string;
        video: string;
        text: string;
    };
    publishedTime: string;
    comment: {
        publisherName: string;
        content: {
            image: string;
            video: string;
            text: string;
        };
        publishedTime: string;
    };
    likedIdList: string[];
}
