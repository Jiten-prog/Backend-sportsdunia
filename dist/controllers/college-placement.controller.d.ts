import { CollegePlacementService } from '../services/college-placement.service';
export declare class CollegePlacementController {
    private readonly collegePlacementService;
    constructor(collegePlacementService: CollegePlacementService);
    getCollegeData(collegeId: number): Promise<{
        averageData: any;
        placements: import("../entities/college-placement.entity").CollegePlacement[];
        trend: any;
    }>;
}
