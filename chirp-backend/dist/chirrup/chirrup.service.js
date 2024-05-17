"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChirrupService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const chirrup_entity_1 = require("./entities/chirrup.entity");
let ChirrupService = class ChirrupService {
    constructor(chirrupModel) {
        this.chirrupModel = chirrupModel;
    }
    async create(createChirrupDto) {
        const createdChirrup = new this.chirrupModel(createChirrupDto);
        return createdChirrup.save();
    }
    findAll() {
        return this.chirrupModel.find();
    }
    findOne(id) {
        return this.chirrupModel.findById(id);
    }
    update(id, updateChirrupDto) {
        return this.chirrupModel.findByIdAndUpdate(id, updateChirrupDto);
    }
    remove(id) {
        return this.chirrupModel.findByIdAndDelete(id);
    }
};
exports.ChirrupService = ChirrupService;
exports.ChirrupService = ChirrupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(chirrup_entity_1.Chirrup.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ChirrupService);
//# sourceMappingURL=chirrup.service.js.map