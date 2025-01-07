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
exports.CollegeWiseCourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const college_wise_course_entity_1 = require("../entities/college-wise-course.entity");
const swagger_1 = require("@nestjs/swagger");
let CollegeWiseCourseService = class CollegeWiseCourseService {
    constructor(collegeWiseCourseRepository) {
        this.collegeWiseCourseRepository = collegeWiseCourseRepository;
    }
    async getCoursesByCollege(collegeId) {
        return this.collegeWiseCourseRepository.find({
            where: { college: { id: collegeId } },
            order: { course_fee: 'DESC' },
        });
    }
};
exports.CollegeWiseCourseService = CollegeWiseCourseService;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get courses offered by a specific college',
        description: 'Fetch all courses for a college, sorted by course fee in descending order.',
    }),
    (0, swagger_1.ApiParam)({ name: 'collegeId', description: 'The ID of the college for which courses are being fetched' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Courses retrieved successfully.',
        type: [college_wise_course_entity_1.CollegeWiseCourse],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CollegeWiseCourseService.prototype, "getCoursesByCollege", null);
exports.CollegeWiseCourseService = CollegeWiseCourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(college_wise_course_entity_1.CollegeWiseCourse)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CollegeWiseCourseService);
//# sourceMappingURL=college-wise-course.service.js.map