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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChirrupSchema = exports.Chirrup = exports.CommentSchema = exports.Comment = exports.ContentSchema = exports.Content = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Content = class Content {
};
exports.Content = Content;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Content.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Content.prototype, "video", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Content.prototype, "text", void 0);
exports.Content = Content = __decorate([
    (0, mongoose_1.Schema)()
], Content);
exports.ContentSchema = mongoose_1.SchemaFactory.createForClass(Content);
let Comment = class Comment {
};
exports.Comment = Comment;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Comment.prototype, "publisherName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.ContentSchema }),
    __metadata("design:type", Content)
], Comment.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Comment.prototype, "publishedTime", void 0);
exports.Comment = Comment = __decorate([
    (0, mongoose_1.Schema)()
], Comment);
exports.CommentSchema = mongoose_1.SchemaFactory.createForClass(Comment);
let Chirrup = class Chirrup {
};
exports.Chirrup = Chirrup;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chirrup.prototype, "publisherName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.ContentSchema }),
    __metadata("design:type", Content)
], Chirrup.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chirrup.prototype, "publishedTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.CommentSchema], default: [] }),
    __metadata("design:type", Array)
], Chirrup.prototype, "comment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Chirrup.prototype, "likedIdList", void 0);
exports.Chirrup = Chirrup = __decorate([
    (0, mongoose_1.Schema)()
], Chirrup);
exports.ChirrupSchema = mongoose_1.SchemaFactory.createForClass(Chirrup);
//# sourceMappingURL=chirrup.entity.js.map