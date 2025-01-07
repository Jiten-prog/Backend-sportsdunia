import { Repository } from 'typeorm';
import { College } from '../entities/college.entity';
import { City } from '../entities/city.entity';
import { State } from '../entities/state.entity';
export declare class CollegeService {
    private readonly collegeRepository;
    private readonly cityRepository;
    private readonly stateRepository;
    constructor(collegeRepository: Repository<College>, cityRepository: Repository<City>, stateRepository: Repository<State>);
    getCollegesByCityAndState(cityId: number, stateId: number): Promise<College[]>;
}
