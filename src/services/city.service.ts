import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/city.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger'; // Import Swagger decorators

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  // Fetch all cities from the database
  @ApiOperation({
    summary: 'Fetch all cities',
    description: 'Returns a list of all cities in the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of cities retrieved successfully.',
    type: [City], // Specify the return type, which is an array of City entities
  })
  async getAllCities() {
    return this.cityRepository.find();
  }
}
