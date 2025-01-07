// src/swagger-config.service.ts
import { Injectable } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Injectable()
export class SwaggerConfigService {
  setupSwagger(app: any) {
    const options = new DocumentBuilder()
      .setTitle('Sportsdunia API')
      .setDescription('API documentation for Sportsdunia platform')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);
  }
}
