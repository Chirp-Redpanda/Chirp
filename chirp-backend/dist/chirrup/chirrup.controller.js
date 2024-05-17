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
exports.ChirrupController = void 0;
const common_1 = require("@nestjs/common");
const chirrup_service_1 = require("./chirrup.service");
const create_chirrup_dto_1 = require("./dto/create-chirrup.dto");
const update_chirrup_dto_1 = require("./dto/update-chirrup.dto");
let ChirrupController = class ChirrupController {
    constructor(chirrupService) {
        this.chirrupService = chirrupService;
    }
    create(createChirrupDto) {
        return this.chirrupService.create(createChirrupDto);
    }
    findAll() {
        return this.chirrupService.findAll();
    }
    findOne(id) {
        return this.chirrupService.findOne(+id);
    }
    update(id, updateChirrupDto) {
        return this.chirrupService.update(+id, updateChirrupDto);
    }
    remove(id) {
        return this.chirrupService.remove(+id);
    }
};
exports.ChirrupController = ChirrupController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chirrup_dto_1.CreateChirrupDto]),
    __metadata("design:returntype", void 0)
], ChirrupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChirrupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChirrupController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chirrup_dto_1.UpdateChirrupDto]),
    __metadata("design:returntype", void 0)
], ChirrupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChirrupController.prototype, "remove", null);
exports.ChirrupController = ChirrupController = __decorate([
    (0, common_1.Controller)('chirrup'),
    __metadata("design:paramtypes", [chirrup_service_1.ChirrupService])
], ChirrupController);
//# sourceMappingURL=chirrup.controller.js.map