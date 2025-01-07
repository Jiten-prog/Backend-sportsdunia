import * as dotenv from 'dotenv';
dotenv.config();  // Ensure environment variables are loaded

console.log('Database URL:', process.env.DATABASE_URL);  // Log the DATABASE_URL

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Sportsdunia API')
    .setDescription('API documentation for Sportsdunia platform')
    .setVersion('1.0')
    .addBearerAuth() // If using Bearer Auth
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);  // Swagger UI will be available at /api-docs

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
