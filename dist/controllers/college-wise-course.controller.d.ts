import { CollegeWiseCourseService } from '../services/college-wise-course.service';
export declare class CollegeWiseCourseController {
    private readonly collegeWiseCourseService;
    constructor(collegeWiseCourseService: CollegeWiseCourseService);
    getCollegeCourses(collegeId: number): Promise<import("../entities/college-wise-course.entity").CollegeWiseCourse[]>;
}
