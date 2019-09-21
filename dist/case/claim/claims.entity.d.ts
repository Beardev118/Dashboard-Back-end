import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class Claim extends Model<Claim> {
    initialClaimAmount: Number;
    currentClaimAmount: Number;
    balanceClaimAmount: Number;
    claimDetails: string;
    creationDate: Date;
    caseId: number;
    case: Case;
}
