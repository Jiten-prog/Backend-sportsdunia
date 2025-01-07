import { CityService } from '../services/city.service';
import { City } from '../entities/city.entity';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getCities(): Promise<City[]>;
}
