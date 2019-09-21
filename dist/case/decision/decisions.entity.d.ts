import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class Decision extends Model<Decision> {
    decisionNumber: number;
    date: Date;
    source: string;
    decision: string;
    links: string[];
    creationDate: Date;
    caseId: number;
    case: Case;
}
