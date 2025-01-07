import { Repository } from 'typeorm';
import { City } from '../entities/city.entity';
export declare class CityService {
    private readonly cityRepository;
    constructor(cityRepository: Repository<City>);
    getAllCities(): Promise<City[]>;
}
