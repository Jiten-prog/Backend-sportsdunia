"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfigService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let SwaggerConfigService = class SwaggerConfigService {
    setupSwagger(app) {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Sportsdunia API')
            .setDescription('API documentation for Sportsdunia platform')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api-docs', app, document);
    }
};
exports.SwaggerConfigService = SwaggerConfigService;
exports.SwaggerConfigService = SwaggerConfigService = __decorate([
    (0, common_1.Injectable)()
], SwaggerConfigService);
//# sourceMappingURL=swagger-config.service.js.map