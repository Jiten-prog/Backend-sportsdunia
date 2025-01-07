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
exports.StateController = void 0;
const common_1 = require("@nestjs/common");
const state_service_1 = require("../services/state.service");
const swagger_1 = require("@nestjs/swagger");
const state_entity_1 = require("../entities/state.entity");
let StateController = class StateController {
    constructor(stateService) {
        this.stateService = stateService;
    }
    async getStates() {
        return this.stateService.getAllStates();
    }
};
exports.StateController = StateController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all states',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all states retrieved successfully',
        type: [state_entity_1.State],
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StateController.prototype, "getStates", null);
exports.StateController = StateController = __decorate([
    (0, swagger_1.ApiTags)('States'),
    (0, common_1.Controller)('states'),
    __metadata("design:paramtypes", [state_service_1.StateService])
], StateController);
//# sourceMappingURL=state.controller.js.map