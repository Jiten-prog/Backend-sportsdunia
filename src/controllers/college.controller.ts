import { Controller, Get, Query } from '@nestjs/common';
import { CollegeService } from '../services/college.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { College } from '../entities/college.entity';

@ApiTags('Colleges')  // Swagger tag for grouping colleges
@Controller('colleges')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get()
  @ApiOperation({
    summary: 'Filter colleges by cityId and stateId',  // Operation summary
  })
  @ApiResponse({
    status: 200,
    description: 'Colleges retrieved successfully',
    type: [College],  // Returning an array of College
  })
  @ApiResponse({
    status: 404,
    description: 'No colleges found for the given city or state',
  })  // Response for when no colleges match
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })  // Internal server error response
  async getCollegesByCityAndState(
    @Query('cityId') cityId: number,
    @Query('stateId') stateId: number,
  ) {
    return this.collegeService.getCollegesByCityAndState(cityId, stateId);
  }
}
