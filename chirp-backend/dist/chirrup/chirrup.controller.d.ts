/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ChirrupService } from './chirrup.service';
import { CreateChirrupDto } from './dto/create-chirrup.dto';
import { UpdateChirrupDto } from './dto/update-chirrup.dto';
export declare class ChirrupController {
    private readonly chirrupService;
    constructor(chirrupService: ChirrupService);
    create(createChirrupDto: CreateChirrupDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }, "findOne">;
    update(id: string, updateChirrupDto: UpdateChirrupDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }, "findOneAndUpdate">;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./entities/chirrup.entity").Chirrup> & import("./entities/chirrup.entity").Chirrup & {
        _id: import("mongoose").Types.ObjectId;
    }, "findOneAndDelete">;
}
