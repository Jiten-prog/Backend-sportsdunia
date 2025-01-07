import { StateService } from 'src/services/state.service';
import { State } from 'src/entities/state.entity';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    getStates(): Promise<State[]>;
}
