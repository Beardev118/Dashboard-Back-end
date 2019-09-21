import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class Verdict extends Model<Verdict> {
    verdict: string;
    creationDate: Date;
    caseId: number;
    case: Case;
}
