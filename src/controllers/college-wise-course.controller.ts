// src/controllers/college-wise-course.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CollegeWiseCourseService } from '../services/college-wise-course.service'

@Controller('college_courses')
export class CollegeWiseCourseController {
  constructor(private readonly collegeWiseCourseService: CollegeWiseCourseService) {}

  // Get all courses for a specific college, sorted by course fee
  @Get(':college_id')
  async getCollegeCourses(@Param('college_id') collegeId: number) {
    return await this.collegeWiseCourseService.getCoursesByCollege(collegeId);
  }
}
