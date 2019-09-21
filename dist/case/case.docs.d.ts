import { DecisionDto } from './decision/decision.docs';
export declare class CaseDto {
    id: number;
    caseNumber: string;
    subject: string;
    fileLocation: string;
    claimedAmount: number;
    submitDate: Date;
    registrationDate: Date;
    firstSessionDate: Date;
    caseStatus: string;
    nextSessionDate: Date;
    hall: string;
    secretaryName: string;
    latestSessionDate: Date;
    rootCaseNumber: string;
    dateOfAssignation: Date;
    meetingDate: Date;
    dueDate: Date;
    managedBy: string;
    paymentAmount: number;
    paymentStatus: string;
    partiesAddresses: string[];
    partiesNames: string[];
    notes: string[];
    attachments: FileDto[];
    petitionsAttachments: FileDto[];
    exhibits: ExhibitDto[];
    notices: NoticeDto[];
    decisions: DecisionDto[];
    petitions: PetitionDto[];
    verdicts: VerdictDto[];
    depositVouchers: DepositVoucherDto[];
    claims: ClaimDto[];
}
export declare class CreateCaseDto {
    caseNumber: string;
    subject: string;
    fileLocation: string;
    claimedAmount: number;
    submitDate: Date;
    registrationDate: Date;
    firstSessionDate: Date;
    caseStatus: string;
    nextSessionDate: Date;
    hall: string;
    secretaryName: string;
    latestSessionDate: Date;
    rootCaseNumber: string;
    dateOfAssignation: Date;
    meetingDate: Date;
    dueDate: Date;
    managedBy: string;
    paymentAmount: number;
    paymentStatus: string;
    partiesAddresses: string[];
    partiesNames: string[];
    notes: string[];
}
export declare class FileDto {
    url: string;
    author: string;
    caseId: string;
}
export declare class ClaimDto {
    initialClaimAmount: Number;
    currentClaimAmount: Number;
    balanceClaimAmount: Number;
    claimDetails: string;
    caseId: string;
}
export declare class DepositVoucherDto {
    year: Number;
    type: string;
    amount: Number;
    caseId: string;
}
export declare class ExhibitDto {
    description: string;
    caseId: string;
}
export declare class NoticeDto {
    noticeNumber: string;
    type: string;
    registrationDate: Date;
    links: string[];
    parties: string[];
    caseId: string;
}
export declare class PetitionDto {
    petitionDate: Date;
    subject: string;
    links: string[];
    applicant: string;
    positionNumber: number;
    decisionNumber: number;
    decisionAbstract: string;
    sessionDate: Date;
    caseId: string;
}
export declare class VerdictDto {
    verdict: string;
    caseId: string;
}
