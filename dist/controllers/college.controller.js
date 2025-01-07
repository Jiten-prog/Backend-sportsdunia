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
exports.CollegeController = void 0;
const common_1 = require("@nestjs/common");
const college_service_1 = require("../services/college.service");
const swagger_1 = require("@nestjs/swagger");
const college_entity_1 = require("../entities/college.entity");
let CollegeController = class CollegeController {
    constructor(collegeService) {
        this.collegeService = collegeService;
    }
    async getCollegesByCityAndState(cityId, stateId) {
        return this.collegeService.getCollegesByCityAndState(cityId, stateId);
    }
};
exports.CollegeController = CollegeController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Filter colleges by cityId and stateId',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Colleges retrieved successfully',
        type: [college_entity_1.College],
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'No colleges found for the given city or state',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Query)('cityId')),
    __param(1, (0, common_1.Query)('stateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CollegeController.prototype, "getCollegesByCityAndState", null);
exports.CollegeController = CollegeController = __decorate([
    (0, swagger_1.ApiTags)('Colleges'),
    (0, common_1.Controller)('colleges'),
    __metadata("design:paramtypes", [college_service_1.CollegeService])
], CollegeController);
//# sourceMappingURL=college.controller.js.map