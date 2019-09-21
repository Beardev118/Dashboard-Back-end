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
class CaseDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case number' }),
    __metadata("design:type", Number)
], CaseDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case number' }),
    __metadata("design:type", String)
], CaseDto.prototype, "caseNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'subject' }),
    __metadata("design:type", String)
], CaseDto.prototype, "subject", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'file location' }),
    __metadata("design:type", String)
], CaseDto.prototype, "fileLocation", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'claimed amount' }),
    __metadata("design:type", Number)
], CaseDto.prototype, "claimedAmount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'submit date' }),
    __metadata("design:type", Date)
], CaseDto.prototype, "submitDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'registration date' }),
    __metadata("design:type", Date)
], CaseDto.prototype, "registrationDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'first session date' }),
    __metadata("design:type", Date)
], CaseDto.prototype, "firstSessionDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case status' }),
    __metadata("design:type", String)
], CaseDto.prototype, "caseStatus", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'next session date' }),
    __metadata("design:type", Date)
], CaseDto.prototype, "nextSessionDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'hall' }),
    __metadata("design:type", String)
], CaseDto.prototype, "hall", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'secretary name' }),
    __metadata("design:type", String)
], CaseDto.prototype, "secretaryName", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'latest session date' }),
    __metadata("design:type", Date)
], CaseDto.prototype, "latestSessionDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'root case number' }),
    __metadata("design:type", String)
], CaseDto.prototype, "rootCaseNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'date of assignation' }),
    __metadata("design:type", Date)
], CaseDto.prototype, "dateOfAssignation", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'meeting date' }),
    __metadata("design:type", Date)
], CaseDto.prototype, "meetingDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'due date' }),
    __metadata("design:type", Date)
], CaseDto.prototype, "dueDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'managed by' }),
    __metadata("design:type", String)
], CaseDto.prototype, "managedBy", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'payment amount' }),
    __metadata("design:type", Number)
], CaseDto.prototype, "paymentAmount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'payment status' }),
    __metadata("design:type", String)
], CaseDto.prototype, "paymentStatus", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'parties addresses' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "partiesAddresses", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'parties names' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "partiesNames", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'notes' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "notes", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'attachements' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "attachments", void 0);

__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'petitionsAttachements' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "petitionsAttachements", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'exhibits' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "exhibits", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'notices' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "notices", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'decisions' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "decisions", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'petitions' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "petitions", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'verdicts' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "verdicts", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'depositVouchers' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "depositVouchers", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'claims' }),
    __metadata("design:type", Array)
], CaseDto.prototype, "claims", void 0);
exports.CaseDto = CaseDto;
class CreateCaseDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case number' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "caseNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'subject' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "subject", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'file location' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "fileLocation", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'claimed amount' }),
    __metadata("design:type", Number)
], CreateCaseDto.prototype, "claimedAmount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'submit date' }),
    __metadata("design:type", Date)
], CreateCaseDto.prototype, "submitDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'registration date' }),
    __metadata("design:type", Date)
], CreateCaseDto.prototype, "registrationDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'first session date' }),
    __metadata("design:type", Date)
], CreateCaseDto.prototype, "firstSessionDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case status' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "caseStatus", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'next session date' }),
    __metadata("design:type", Date)
], CreateCaseDto.prototype, "nextSessionDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'hall' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "hall", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'secretary name' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "secretaryName", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'latest session date' }),
    __metadata("design:type", Date)
], CreateCaseDto.prototype, "latestSessionDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'root case number' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "rootCaseNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'date of assignation' }),
    __metadata("design:type", Date)
], CreateCaseDto.prototype, "dateOfAssignation", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'meeting date' }),
    __metadata("design:type", Date)
], CreateCaseDto.prototype, "meetingDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'due date' }),
    __metadata("design:type", Date)
], CreateCaseDto.prototype, "dueDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'managed by' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "managedBy", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'payment amount' }),
    __metadata("design:type", Number)
], CreateCaseDto.prototype, "paymentAmount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'payment status' }),
    __metadata("design:type", String)
], CreateCaseDto.prototype, "paymentStatus", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'parties addresses' }),
    __metadata("design:type", Array)
], CreateCaseDto.prototype, "partiesAddresses", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'parties names' }),
    __metadata("design:type", Array)
], CreateCaseDto.prototype, "partiesNames", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'notes' }),
    __metadata("design:type", Array)
], CreateCaseDto.prototype, "notes", void 0);
exports.CreateCaseDto = CreateCaseDto;
class FileDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'url' }),
    __metadata("design:type", String)
], FileDto.prototype, "url", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'author' }),
    __metadata("design:type", String)
], FileDto.prototype, "author", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case id' }),
    __metadata("design:type", String)
], FileDto.prototype, "caseId", void 0);
exports.FileDto = FileDto;
class ClaimDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'initial amount' }),
    __metadata("design:type", Number)
], ClaimDto.prototype, "initialClaimAmount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'current claim amount' }),
    __metadata("design:type", Number)
], ClaimDto.prototype, "currentClaimAmount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'balance claim amount' }),
    __metadata("design:type", Number)
], ClaimDto.prototype, "balanceClaimAmount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'claim details' }),
    __metadata("design:type", String)
], ClaimDto.prototype, "claimDetails", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case id' }),
    __metadata("design:type", String)
], ClaimDto.prototype, "caseId", void 0);
exports.ClaimDto = ClaimDto;
class DepositVoucherDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'year' }),
    __metadata("design:type", Number)
], DepositVoucherDto.prototype, "year", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'type' }),
    __metadata("design:type", String)
], DepositVoucherDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'amount' }),
    __metadata("design:type", Number)
], DepositVoucherDto.prototype, "amount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case id' }),
    __metadata("design:type", String)
], DepositVoucherDto.prototype, "caseId", void 0);
exports.DepositVoucherDto = DepositVoucherDto;
class ExhibitDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'description' }),
    __metadata("design:type", String)
], ExhibitDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case id' }),
    __metadata("design:type", String)
], ExhibitDto.prototype, "caseId", void 0);
exports.ExhibitDto = ExhibitDto;
class NoticeDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'notice number' }),
    __metadata("design:type", String)
], NoticeDto.prototype, "noticeNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'type' }),
    __metadata("design:type", String)
], NoticeDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'registration date' }),
    __metadata("design:type", Date)
], NoticeDto.prototype, "registrationDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'links' }),
    __metadata("design:type", Array)
], NoticeDto.prototype, "links", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'parties' }),
    __metadata("design:type", Array)
], NoticeDto.prototype, "parties", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case id' }),
    __metadata("design:type", String)
], NoticeDto.prototype, "caseId", void 0);
exports.NoticeDto = NoticeDto;
class PetitionDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'petition date' }),
    __metadata("design:type", Date)
], PetitionDto.prototype, "petitionDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'subject' }),
    __metadata("design:type", String)
], PetitionDto.prototype, "subject", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'links' }),
    __metadata("design:type", Array)
], PetitionDto.prototype, "links", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'applicant' }),
    __metadata("design:type", String)
], PetitionDto.prototype, "applicant", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'position number' }),
    __metadata("design:type", Number)
], PetitionDto.prototype, "positionNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'decision number' }),
    __metadata("design:type", Number)
], PetitionDto.prototype, "decisionNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'decision abstract' }),
    __metadata("design:type", String)
], PetitionDto.prototype, "decisionAbstract", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'session date' }),
    __metadata("design:type", Date)
], PetitionDto.prototype, "sessionDate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case id' }),
    __metadata("design:type", String)
], PetitionDto.prototype, "caseId", void 0);
exports.PetitionDto = PetitionDto;
class VerdictDto {
}
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: '' }),
    __metadata("design:type", String)
], VerdictDto.prototype, "verdict", void 0);
__decorate([
    swagger_1.ApiModelProperty({ required: false, description: 'case id' }),
    __metadata("design:type", String)
], VerdictDto.prototype, "caseId", void 0);
exports.VerdictDto = VerdictDto;
//# sourceMappingURL=case.docs.js.map