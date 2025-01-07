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
exports.CollegeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const college_entity_1 = require("../entities/college.entity");
const city_entity_1 = require("../entities/city.entity");
const state_entity_1 = require("../entities/state.entity");
let CollegeService = class CollegeService {
    constructor(collegeRepository, cityRepository, stateRepository) {
        this.collegeRepository = collegeRepository;
        this.cityRepository = cityRepository;
        this.stateRepository = stateRepository;
    }
    async getCollegesByCityAndState(cityId, stateId) {
        const query = this.collegeRepository.createQueryBuilder('college')
            .leftJoinAndSelect('college.city', 'city')
            .leftJoinAndSelect('college.state', 'state');
        if (cityId) {
            query.andWhere('college.cityId = :cityId', { cityId });
        }
        if (stateId) {
            query.andWhere('college.stateId = :stateId', { stateId });
        }
        const colleges = await query.getMany();
        return colleges;
    }
};
exports.CollegeService = CollegeService;
exports.CollegeService = CollegeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(college_entity_1.College)),
    __param(1, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __param(2, (0, typeorm_1.InjectRepository)(state_entity_1.State)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CollegeService);
//# sourceMappingURL=college.service.js.map