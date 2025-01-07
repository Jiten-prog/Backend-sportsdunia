import { Repository } from 'typeorm';
import { State } from '../entities/state.entity';
export declare class StateService {
    private readonly stateRepository;
    constructor(stateRepository: Repository<State>);
    getAllStates(): Promise<State[]>;
}
