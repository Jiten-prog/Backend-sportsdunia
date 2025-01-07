import { Controller, Get } from '@nestjs/common';
import { CityService } from '../services/city.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { City } from '../entities/city.entity';

@ApiTags('Cities')  // Swagger tag to group the endpoints
@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  // Endpoint to fetch all cities
  @Get()
  @ApiOperation({ summary: 'Get all cities' })  // Operation summary
  @ApiResponse({ status: 200, description: 'List of cities retrieved successfully', type: [City] }) // Success response
  @ApiResponse({ status: 500, description: 'Internal server error' }) // Error response
  async getCities() {
    return this.cityService.getAllCities();
  }
}
