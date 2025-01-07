import { CollegePlacement } from './college-placement.entity';
import { State } from './state.entity';
import { CollegeWiseCourse } from './college-wise-course.entity';
import { City } from './city.entity';
export declare class College {
    id: number;
    name: string;
    collegePlacements: CollegePlacement[];
    state: State;
    city: City;
    collegeWiseCourses: CollegeWiseCourse[];
}
