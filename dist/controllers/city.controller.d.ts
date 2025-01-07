import { CityService } from '../services/city.service';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getCities(): Promise<import("../entities/city.entity").City[]>;
}
