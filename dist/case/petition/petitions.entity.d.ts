import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class Petition extends Model<Petition> {
    petitionDate: Date;
    subject: string;
    links: string[];
    applicant: string;
    positionNumber: number;
    decisionNumber: number;
    decisionAbstract: string;
    sessionDate: Date;
    creationDate: Date;
    caseId: number;
    case: Case;
}
