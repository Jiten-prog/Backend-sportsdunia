// src/controllers/college.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { CollegeService } from '../services/college.service';

@Controller('colleges')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  // Endpoint to filter colleges by cityId and stateId
  @Get()
  async getCollegesByCityAndState(
    @Query('cityId') cityId: number,
    @Query('stateId') stateId: number,
  ) {
    return this.collegeService.getCollegesByCityAndState(cityId, stateId);
  }
}
