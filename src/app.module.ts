// src/app.module.ts
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
import { SwaggerModule } from './swagger.module';  // Import SwaggerModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,  // Required for some hosted DB services
      },
      entities: [College, CollegePlacement, CollegeWiseCourse, City, State],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([College, CollegePlacement, CollegeWiseCourse, City, State]),
    SwaggerModule,  // Add SwaggerModule to imports
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
export class AppModule {}
