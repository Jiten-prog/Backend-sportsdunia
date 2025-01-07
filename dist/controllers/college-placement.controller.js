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
exports.CollegePlacementController = void 0;
const common_1 = require("@nestjs/common");
const college_placement_service_1 = require("../services/college-placement.service");
let CollegePlacementController = class CollegePlacementController {
    constructor(collegePlacementService) {
        this.collegePlacementService = collegePlacementService;
    }
    async getCollegeData(collegeId) {
        const collegeData = await this.collegePlacementService.getCollegeData(collegeId);
        return collegeData;
    }
};
exports.CollegePlacementController = CollegePlacementController;
__decorate([
    (0, common_1.Get)(':collegeId'),
    __param(0, (0, common_1.Param)('collegeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CollegePlacementController.prototype, "getCollegeData", null);
exports.CollegePlacementController = CollegePlacementController = __decorate([
    (0, common_1.Controller)('college_data'),
    __metadata("design:paramtypes", [college_placement_service_1.CollegePlacementService])
], CollegePlacementController);
//# sourceMappingURL=college-placement.controller.js.map