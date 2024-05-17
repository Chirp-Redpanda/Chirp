"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChirrupModule = void 0;
const common_1 = require("@nestjs/common");
const chirrup_service_1 = require("./chirrup.service");
const chirrup_controller_1 = require("./chirrup.controller");
const mongoose_1 = require("@nestjs/mongoose");
const chirrup_entity_1 = require("./entities/chirrup.entity");
let ChirrupModule = class ChirrupModule {
};
exports.ChirrupModule = ChirrupModule;
exports.ChirrupModule = ChirrupModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: chirrup_entity_1.Chirrup.name, schema: chirrup_entity_1.ChirrupSchema }])
        ],
        controllers: [chirrup_controller_1.ChirrupController],
        providers: [chirrup_service_1.ChirrupService],
    })
], ChirrupModule);
//# sourceMappingURL=chirrup.module.js.map