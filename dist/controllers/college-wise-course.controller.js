"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollegeWiseCourseController = void 0;
const common_1 = require("@nestjs/common");
const college_wise_course_service_1 = require("../services/college-wise-course.service");
const swagger_1 = require("@nestjs/swagger");
const college_wise_course_entity_1 = require("../entities/college-wise-course.entity");
let CollegeWiseCourseController = class CollegeWiseCourseController {
    constructor(collegeWiseCourseService) {
        this.collegeWiseCourseService = collegeWiseCourseService;
    }
    async getCollegeCourses(collegeId) {
        return await this.collegeWiseCourseService.getCoursesByCollege(collegeId);
    }
};
exports.CollegeWiseCourseController = CollegeWiseCourseController;
__decorate([
    (0, common_1.Get)(':college_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all courses for a specific college, sorted by course fee' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Courses retrieved successfully',
        type: [college_wise_course_entity_1.CollegeWiseCourse],
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'College not found',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('college_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CollegeWiseCourseController.prototype, "getCollegeCourses", null);
exports.CollegeWiseCourseController = CollegeWiseCourseController = __decorate([
    (0, swagger_1.ApiTags)('College Courses'),
    (0, common_1.Controller)('college_courses'),
    __metadata("design:paramtypes", [college_wise_course_service_1.CollegeWiseCourseService])
], CollegeWiseCourseController);
//# sourceMappingURL=college-wise-course.controller.js.map