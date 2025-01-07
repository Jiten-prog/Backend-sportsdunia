import { CollegePlacementService } from '../services/college-placement.service';
import { CollegePlacement } from '../entities/college-placement.entity';
export declare class CollegePlacementController {
    private readonly collegePlacementService;
    constructor(collegePlacementService: CollegePlacementService);
    getCollegeData(collegeId: number): Promise<{
        averageData: any;
        placements: CollegePlacement[];
        trend: any;
    }>;
}
