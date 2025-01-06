// src/controllers/college-placement.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CollegePlacementService } from '../services/college-placement.service';

@Controller('college_data')
export class CollegePlacementController {
  constructor(
    private readonly collegePlacementService: CollegePlacementService,
  ) {}

  @Get(':collegeId')
  async getCollegeData(@Param('collegeId') collegeId: number) {
    const collegeData = await this.collegePlacementService.getCollegeData(collegeId);
    return collegeData;
  }
}
