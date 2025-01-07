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
exports.CollegePlacementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const college_placement_entity_1 = require("../entities/college-placement.entity");
let CollegePlacementService = class CollegePlacementService {
    getAvgPlacementDataByCollege(collegeId) {
        throw new Error('Method not implemented.');
    }
    getCollegePlacementsWithTrend(collegeId) {
        throw new Error('Method not implemented.');
    }
    constructor(collegePlacementRepository) {
        this.collegePlacementRepository = collegePlacementRepository;
    }
    async getAverageData(collegeId) {
        const averageData = await this.collegePlacementRepository
            .createQueryBuilder('college_placement')
            .select('AVG(college_placement.highest_placement)', 'highest_placement')
            .addSelect('AVG(college_placement.average_placement)', 'average_placement')
            .addSelect('AVG(college_placement.median_placement)', 'median_placement')
            .addSelect('AVG(college_placement.placement_rate)', 'placement_rate')
            .where('college_placement.collegeId = :collegeId', { collegeId })
            .andWhere('college_placement.highest_placement IS NOT NULL AND college_placement.highest_placement > 0')
            .andWhere('college_placement.average_placement IS NOT NULL AND college_placement.average_placement > 0')
            .andWhere('college_placement.median_placement IS NOT NULL AND college_placement.median_placement > 0')
            .andWhere('college_placement.placement_rate IS NOT NULL AND college_placement.placement_rate > 0')
            .groupBy('college_placement.collegeId')
            .getRawOne();
        return averageData;
    }
    async getPlacements(collegeId) {
        const placements = await this.collegePlacementRepository
            .createQueryBuilder('college_placement')
            .where('college_placement.collegeId = :collegeId', { collegeId })
            .andWhere('college_placement.highest_placement IS NOT NULL AND college_placement.highest_placement > 0')
            .andWhere('college_placement.average_placement IS NOT NULL AND college_placement.average_placement > 0')
            .andWhere('college_placement.median_placement IS NOT NULL AND college_placement.median_placement > 0')
            .andWhere('college_placement.placement_rate IS NOT NULL AND college_placement.placement_rate > 0')
            .orderBy('college_placement.year', 'DESC')
            .getMany();
        return placements;
    }
    calculatePlacementTrend(placements) {
        const placementsSorted = placements.sort((a, b) => b.year - a.year);
        let trend = null;
        if (placementsSorted.length >= 2) {
            const lastYear = placementsSorted[0];
            const secondLastYear = placementsSorted[1];
            if (lastYear.placement_rate > secondLastYear.placement_rate) {
                trend = 'UP';
            }
            else if (lastYear.placement_rate < secondLastYear.placement_rate) {
                trend = 'DOWN';
            }
        }
        return trend;
    }
    async getCollegeData(collegeId) {
        const averageData = await this.getAverageData(collegeId);
        const placements = await this.getPlacements(collegeId);
        const trend = this.calculatePlacementTrend(placements);
        return {
            averageData,
            placements,
            trend,
        };
    }
};
exports.CollegePlacementService = CollegePlacementService;
exports.CollegePlacementService = CollegePlacementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(college_placement_entity_1.CollegePlacement)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CollegePlacementService);
//# sourceMappingURL=college-placement.service.js.map