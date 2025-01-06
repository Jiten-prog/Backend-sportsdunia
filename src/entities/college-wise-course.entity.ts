// src/entities/college-wise-course.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, college => college.collegeWiseCourses)
  college: College;

  @Column()
  course_name: string;

  @Column()
  course_fee: number;

  // other fields if any
}
