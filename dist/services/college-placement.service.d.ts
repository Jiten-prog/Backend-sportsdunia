import { Repository } from 'typeorm';
import { CollegePlacement } from '../entities/college-placement.entity';
export declare class CollegePlacementService {
    private collegePlacementRepository;
    getAvgPlacementDataByCollege(collegeId: number): void;
    getCollegePlacementsWithTrend(collegeId: number): void;
    constructor(collegePlacementRepository: Repository<CollegePlacement>);
    getAverageData(collegeId: number): Promise<any>;
    getPlacements(collegeId: number): Promise<CollegePlacement[]>;
    calculatePlacementTrend(placements: any): any;
    getCollegeData(collegeId: number): Promise<{
        averageData: any;
        placements: CollegePlacement[];
        trend: any;
    }>;
}
