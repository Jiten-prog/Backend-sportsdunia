import * as dotenv from 'dotenv';
dotenv.config();  // Ensure environment variables are loaded

console.log('Database URL:', process.env.DATABASE_URL);  // Log to check the value

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
