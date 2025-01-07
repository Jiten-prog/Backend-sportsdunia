import { StateService } from 'src/services/state.service';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    getStates(): Promise<import("../entities/state.entity").State[]>;
}
