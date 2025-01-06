// src/services/college-wise-course.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegeWiseCourse } from '../entities/college-wise-course.entity';

@Injectable()
export class CollegeWiseCourseService {
  constructor(
    @InjectRepository(CollegeWiseCourse)
    private collegeWiseCourseRepository: Repository<CollegeWiseCourse>,
  ) {}

  // Get all courses for a specific college, sorted by course fee in descending order
  async getCoursesByCollege(collegeId: number) {
    return this.collegeWiseCourseRepository.find({
      where: { college: { id: collegeId } }, // Filter by collegeId
      order: { course_fee: 'DESC' }, // Sort by course fee in descending order
    });
  }
}
