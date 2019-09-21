import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class Exhibit extends Model<Exhibit> {
    description: string;
    creationDate: Date;
    caseId: number;
    case: Case;
}
