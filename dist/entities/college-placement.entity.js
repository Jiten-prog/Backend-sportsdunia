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
exports.CollegePlacement = void 0;
const typeorm_1 = require("typeorm");
const college_entity_1 = require("./college.entity");
let CollegePlacement = class CollegePlacement {
};
exports.CollegePlacement = CollegePlacement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CollegePlacement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => college_entity_1.College, (college) => college.collegePlacements),
    __metadata("design:type", college_entity_1.College)
], CollegePlacement.prototype, "college", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], CollegePlacement.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], CollegePlacement.prototype, "highest_placement", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], CollegePlacement.prototype, "average_placement", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], CollegePlacement.prototype, "median_placement", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], CollegePlacement.prototype, "placement_rate", void 0);
exports.CollegePlacement = CollegePlacement = __decorate([
    (0, typeorm_1.Entity)()
], CollegePlacement);
//# sourceMappingURL=college-placement.entity.js.map