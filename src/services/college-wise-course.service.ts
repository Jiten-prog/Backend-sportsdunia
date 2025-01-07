import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger'; // Import Swagger decorators

@Injectable()
export class CollegeWiseCourseService {
  constructor(
    @InjectRepository(CollegeWiseCourse)
    private collegeWiseCourseRepository: Repository<CollegeWiseCourse>,
  ) {}

  // Get all courses for a specific college, sorted by course fee in descending order
  @ApiOperation({
    summary: 'Get courses offered by a specific college',
    description: 'Fetch all courses for a college, sorted by course fee in descending order.',
  })
  @ApiParam({ name: 'collegeId', description: 'The ID of the college for which courses are being fetched' })
  @ApiResponse({
    status: 200,
    description: 'Courses retrieved successfully.',
    type: [CollegeWiseCourse], // Return type as an array of CollegeWiseCourse entities
  })
  async getCoursesByCollege(collegeId: number) {
    return this.collegeWiseCourseRepository.find({
      where: { college: { id: collegeId } }, // Filter by collegeId
      order: { course_fee: 'DESC' }, // Sort by course fee in descending order
    });
  }
}
