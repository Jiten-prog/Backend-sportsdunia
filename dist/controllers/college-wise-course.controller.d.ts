import { CollegeWiseCourseService } from '../services/college-wise-course.service';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';
export declare class CollegeWiseCourseController {
    private readonly collegeWiseCourseService;
    constructor(collegeWiseCourseService: CollegeWiseCourseService);
    getCollegeCourses(collegeId: number): Promise<CollegeWiseCourse[]>;
}
