import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class DepositVoucher extends Model<DepositVoucher> {
    year: Number;
    type: string;
    amount: Number;
    creationDate: Date;
    caseId: number;
    case: Case;
}
