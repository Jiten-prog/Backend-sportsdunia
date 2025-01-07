import { Controller, Get, Param } from '@nestjs/common';
import { CollegeWiseCourseService } from '../services/college-wise-course.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';

@ApiTags('College Courses')  // Swagger tag for grouping college courses
@Controller('college_courses')
export class CollegeWiseCourseController {
  constructor(private readonly collegeWiseCourseService: CollegeWiseCourseService) {}

  @Get(':college_id')
  @ApiOperation({ summary: 'Get all courses for a specific college, sorted by course fee' })  // Operation summary
  @ApiResponse({
    status: 200,
    description: 'Courses retrieved successfully',
    type: [CollegeWiseCourse],  // Returning an array of CollegeWiseCourse
  })
  @ApiResponse({
    status: 404,
    description: 'College not found',
  })  // College not found response
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })  // Internal server error response
  async getCollegeCourses(@Param('college_id') collegeId: number) {
    return await this.collegeWiseCourseService.getCoursesByCollege(collegeId);
  }
}
