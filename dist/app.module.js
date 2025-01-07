"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const college_entity_1 = require("./entities/college.entity");
const college_placement_entity_1 = require("./entities/college-placement.entity");
const college_wise_course_entity_1 = require("./entities/college-wise-course.entity");
const city_entity_1 = require("./entities/city.entity");
const state_entity_1 = require("./entities/state.entity");
const college_controller_1 = require("./controllers/college.controller");
const college_placement_controller_1 = require("./controllers/college-placement.controller");
const college_wise_course_controller_1 = require("./controllers/college-wise-course.controller");
const college_service_1 = require("./services/college.service");
const college_placement_service_1 = require("./services/college-placement.service");
const college_wise_course_service_1 = require("./services/college-wise-course.service");
const swagger_module_1 = require("./swagger.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false,
                },
                entities: [college_entity_1.College, college_placement_entity_1.CollegePlacement, college_wise_course_entity_1.CollegeWiseCourse, city_entity_1.City, state_entity_1.State],
                synchronize: false,
            }),
            typeorm_1.TypeOrmModule.forFeature([college_entity_1.College, college_placement_entity_1.CollegePlacement, college_wise_course_entity_1.CollegeWiseCourse, city_entity_1.City, state_entity_1.State]),
            swagger_module_1.SwaggerModule,
        ],
        controllers: [
            college_controller_1.CollegeController,
            college_placement_controller_1.CollegePlacementController,
            college_wise_course_controller_1.CollegeWiseCourseController,
        ],
        providers: [
            college_service_1.CollegeService,
            college_placement_service_1.CollegePlacementService,
            college_wise_course_service_1.CollegeWiseCourseService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map