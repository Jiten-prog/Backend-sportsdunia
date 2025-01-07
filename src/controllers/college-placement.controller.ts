import { Controller, Get, Param } from '@nestjs/common';
import { CollegePlacementService } from '../services/college-placement.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CollegePlacement } from '../entities/college-placement.entity';

@ApiTags('College Placements')  // Swagger tag to group the endpoints
@Controller('college_data')
export class CollegePlacementController {
  constructor(
    private readonly collegePlacementService: CollegePlacementService,
  ) {}

  @Get(':collegeId')
  @ApiOperation({ summary: 'Get college placement data by college ID' })  // Operation summary
  @ApiResponse({
    status: 200,
    description: 'College placement data retrieved successfully',
    type: CollegePlacement,
  })  // Success response
  @ApiResponse({
    status: 404,
    description: 'College not found',
  })  // 404 response if college not found
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })  // Error response
  async getCollegeData(@Param('collegeId') collegeId: number) {
    const collegeData = await this.collegePlacementService.getCollegeData(collegeId);
    return collegeData;
  }
}
