import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from './entities/college.entity';
import { CollegePlacement } from './entities/college-placement.entity';
import { CollegeWiseCourse } from './entities/college-wise-course.entity';
import { City } from './entities/city.entity';
import { State } from './entities/state.entity';
import { CollegeController } from './controllers/college.controller';
import { CollegePlacementController } from './controllers/college-placement.controller';
import { CollegeWiseCourseController } from './controllers/college-wise-course.controller';
import { CollegeService } from './services/college.service';
import { CollegePlacementService } from './services/college-placement.service';
import { CollegeWiseCourseService } from './services/college-wise-course.service';
import * as dotenv from 'dotenv';
dotenv.config();  // Load the environment variables from .env file

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,  // Your DATABASE_URL from .env
      ssl: true,  // Always enable SSL
      entities: [College, CollegePlacement, CollegeWiseCourse, City, State],
      synchronize: false,  // Be careful with synchronize, don't use it in production
    }),
    TypeOrmModule.forFeature([College, CollegePlacement, CollegeWiseCourse, City, State]),
  ],
  controllers: [
    CollegeController,
    CollegePlacementController,
    CollegeWiseCourseController,
  ],
  providers: [
    CollegeService,
    CollegePlacementService,
    CollegeWiseCourseService,
  ],
})
export class AppModule {
  constructor() {
    console.log('Database URL:', process.env.DATABASE_URL);  // Log to verify the database URL
  }
}
