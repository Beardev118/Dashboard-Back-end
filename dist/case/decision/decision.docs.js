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
const swagger_1 = require("@nestjs/swagger");
class DecisionDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: true, description: 'decision number' }),
    __metadata("design:type", Number)
], DecisionDto.prototype, "decisionNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: true, description: 'date' }),
    __metadata("design:type", Date)
], DecisionDto.prototype, "date", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: true, description: 'source' }),
    __metadata("design:type", String)
], DecisionDto.prototype, "source", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: true, description: 'decision' }),
    __metadata("design:type", String)
], DecisionDto.prototype, "decision", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: true, description: 'links' }),
    __metadata("design:type", Array)
], DecisionDto.prototype, "links", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: true, description: 'case id' }),
    __metadata("design:type", String)
], DecisionDto.prototype, "caseId", void 0);
exports.DecisionDto = DecisionDto;
//# sourceMappingURL=decision.docs.js.map