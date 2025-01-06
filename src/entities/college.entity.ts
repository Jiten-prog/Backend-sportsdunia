// src/entities/college.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { CollegePlacement } from './college-placement.entity';
import { State } from './state.entity';
import { CollegeWiseCourse } from './college-wise-course.entity';
import { City } from './city.entity';

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => CollegePlacement, (collegePlacement) => collegePlacement.college)
  collegePlacements: CollegePlacement[]; // Reverse relationship, one college has many placements
  @ManyToOne(() => State, (state) => state.colleges, { nullable: true })
  state: State; 
  @ManyToOne(() => City, (city) => city.colleges, { nullable: true })
  city: City;
  @OneToMany(() => CollegeWiseCourse, (collegeWiseCourse) => collegeWiseCourse.college)
  collegeWiseCourses: CollegeWiseCourse[];

}
