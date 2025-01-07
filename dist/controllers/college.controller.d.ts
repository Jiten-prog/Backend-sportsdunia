import { CollegeService } from '../services/college.service';
import { College } from '../entities/college.entity';
export declare class CollegeController {
    private readonly collegeService;
    constructor(collegeService: CollegeService);
    getCollegesByCityAndState(cityId: number, stateId: number): Promise<College[]>;
}
