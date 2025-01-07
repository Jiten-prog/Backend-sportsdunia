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
Object.defineProperty(exports, "__esModule", { value: true });
exports.College = void 0;
const typeorm_1 = require("typeorm");
const college_placement_entity_1 = require("./college-placement.entity");
const state_entity_1 = require("./state.entity");
const college_wise_course_entity_1 = require("./college-wise-course.entity");
const city_entity_1 = require("./city.entity");
let College = class College {
};
exports.College = College;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], College.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], College.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => college_placement_entity_1.CollegePlacement, (collegePlacement) => collegePlacement.college),
    __metadata("design:type", Array)
], College.prototype, "collegePlacements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => state_entity_1.State, (state) => state.colleges, { nullable: true }),
    __metadata("design:type", state_entity_1.State)
], College.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.colleges, { nullable: true }),
    __metadata("design:type", city_entity_1.City)
], College.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => college_wise_course_entity_1.CollegeWiseCourse, (collegeWiseCourse) => collegeWiseCourse.college),
    __metadata("design:type", Array)
], College.prototype, "collegeWiseCourses", void 0);
exports.College = College = __decorate([
    (0, typeorm_1.Entity)()
], College);
//# sourceMappingURL=college.entity.js.map