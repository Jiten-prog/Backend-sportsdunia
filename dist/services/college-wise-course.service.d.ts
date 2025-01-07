import { Repository } from 'typeorm';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';
export declare class CollegeWiseCourseService {
    private collegeWiseCourseRepository;
    constructor(collegeWiseCourseRepository: Repository<CollegeWiseCourse>);
    getCoursesByCollege(collegeId: number): Promise<CollegeWiseCourse[]>;
}
