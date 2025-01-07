import { CollegeService } from '../services/college.service';
export declare class CollegeController {
    private readonly collegeService;
    constructor(collegeService: CollegeService);
    getCollegesByCityAndState(cityId: number, stateId: number): Promise<import("../entities/college.entity").College[]>;
}
