import { Controller, Get } from '@nestjs/common';
import { CityService } from '../services/city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  // Endpoint to fetch all cities
  @Get()
  async getCities() {
    return this.cityService.getAllCities();
  }
}
