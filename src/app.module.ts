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
import { CityController } from './controllers/city.controller';  // Add CityController
import { StateController } from './controllers/state.controller';  // Add StateController
import { CollegeService } from './services/college.service';
import { CollegePlacementService } from './services/college-placement.service';
import { CollegeWiseCourseService } from './services/college-wise-course.service';
import { CityService } from './services/city.service';  // Add CityService
import { StateService } from './services/state.service';  // Add StateService

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Postgrepass@123',
      database: 'college_db',
      entities: [College, CollegePlacement, CollegeWiseCourse, City, State],
      synchronize: true, // Warning: don't use in production
    }),
    TypeOrmModule.forFeature([College, CollegePlacement, CollegeWiseCourse, City, State]),
  ],
  controllers: [
    CollegeController,
    CollegePlacementController,
    CollegeWiseCourseController,
    CityController,  // Add CityController
    StateController,  // Add StateController
  ],
  providers: [
    CollegeService,
    CollegePlacementService,
    CollegeWiseCourseService,
    CityService,  // Add CityService
    StateService,  // Add StateService
  ],
})
export class AppModule {}
